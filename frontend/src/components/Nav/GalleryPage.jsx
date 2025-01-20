import React from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    alt: "Gallery Masonry Image 1",
  },
  {
    src: "https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    alt: "Gallery Masonry Image 2",
  },
  {
    src: "https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    alt: "Gallery Masonry Image 3",
  },
  {
    src: "https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    alt: "Gallery Masonry Image 4",
  },
  {
    src: "https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    alt: "Gallery Masonry Image 5",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    alt: "Gallery Masonry Image 6",
  },
  {
    src: "https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    alt: "Gallery Masonry Image 7",
  },
  {
    src: "https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    alt: "Gallery Masonry Image 8",
  },
  {
    src: "https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    alt: "Gallery Masonry Image 9",
  },
  {
    src: "https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
    alt: "Gallery Masonry Image 10",
  },
];

const MasonryGrid = ({ images }) => {
  // Split the images into columns for the masonry layout
  const columns = [[], [], [], []];

  images.forEach((image, index) => {
    columns[index % 4].push(image);
  });

  return (
    <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="space-y-2">
            {column.map((image, imageIndex) => (
              <img
                key={imageIndex}
                className="h-auto w-full object-cover"
                src={image.src}
                alt={image.alt}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const GalleryPage = () => {
  return <MasonryGrid images={images} />;
};

export default GalleryPage;
