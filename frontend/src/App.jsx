import React from "react";
import LeafletMap from "./components/Leafletmap";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="py-4 text-center text-3xl font-bold">
        Leaflet Map Example
      </h1>
      <LeafletMap />
    </div>
  );
};

export default App;
