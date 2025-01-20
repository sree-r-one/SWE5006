import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Import default Leaflet marker icons
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix for default Leaflet marker icons
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Define a custom icon
const customIcon = L.divIcon({
  html: `<div style="font-size: 24px; color: red;"><i class="fas fa-map-marker-alt"></i></div>`,
  className: "",
  iconSize: [24, 24], // Optional size
});

const LeafletMap = () => {
  const [data, setData] = useState([]); // Store dataset coordinates
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchDataset = async () => {
      const datasetId = "d_0f2f47515425404e6c9d2a040dd87354";
      const apiUrl = `https://api-open.data.gov.sg/v1/public/api/datasets/${datasetId}/poll-download`;

      try {
        // Fetch dataset metadata
        const metadataResponse = await fetch(apiUrl);
        const metadata = await metadataResponse.json();

        if (metadata.code !== 0) {
          console.error("Error fetching dataset:", metadata.errMsg);
          return;
        }

        // Fetch dataset contents
        const datasetUrl = metadata.data.url;
        const datasetResponse = await fetch(datasetUrl);
        const datasetText = await datasetResponse.text();

        // Parse dataset as GeoJSON
        const geoJson = JSON.parse(datasetText);
        const coordinates = extractCoordinates(geoJson); // Extract points
        setData(coordinates);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dataset:", error);
        setLoading(false);
      }
    };

    const extractCoordinates = (geoJson) => {
      if (!geoJson.features) {
        console.error("No features found in GeoJSON");
        return [];
      }

      return geoJson.features.map((feature) => {
        const [longitude, latitude] = feature.geometry.coordinates;
        const { Name, Description } = feature.properties;

        // Parse the HTML from the Description field
        const parser = new DOMParser();
        const doc = parser.parseFromString(Description, "text/html");

        // Helper function to get the value of a specific label from the table
        const getValueByLabel = (label) => {
          const rows = doc.querySelectorAll("tr"); // Get all table rows
          for (let row of rows) {
            const th = row.querySelector("th"); // Find the <th> element
            if (th && th.textContent.trim() === label) {
              const td = row.querySelector("td"); // Find the <td> next to the <th>
              return td ? td.textContent.trim() : null;
            }
          }
          return null;
        };

        // Extract specific values
        const pagetitle =
          getValueByLabel("PAGETITLE") || Name || "Unknown Location";
        const overview =
          getValueByLabel("OVERVIEW") || "No description available.";
        const externalLink = getValueByLabel("EXTERNAL_LINK") || null;
        const address = getValueByLabel("ADDRESS") || "No address available.";
        const imagePath = getValueByLabel("IMAGE_PATH") || null;

        return {
          latitude,
          longitude,
          name: pagetitle,
          description: overview,
          externalLink,
          address,
          imagePath,
        };
      });
    };

    fetchDataset();
  }, []);

  if (loading) {
    return <p>Loading map data...</p>;
  }

  return (
    <MapContainer
      center={[1.3521, 103.8198]} // Singapore's coordinates
      zoom={12}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {data.map((point, index) => (
        <Marker
          key={index}
          position={[point.latitude, point.longitude]}
          icon={customIcon} // Apply the custom icon
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold">{point.name}</h3>
              <p className="text-sm">{point.description}</p>
              <p className="text-xs text-gray-500">
                Latitude: {point.latitude.toFixed(4)}, Longitude:{" "}
                {point.longitude.toFixed(4)}
              </p>
              {point.address && (
                <p className="text-sm">Address: {point.address}</p>
              )}
              {point.externalLink && (
                <a
                  href={point.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Visit Website
                </a>
              )}
              {point.imagePath && (
                <img
                  src={point.imagePath}
                  alt={point.name}
                  className="mt-2 h-16 w-16 object-cover"
                />
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LeafletMap;
