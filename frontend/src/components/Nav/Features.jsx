import React from "react";

const FeatureBlock = ({ iconPath, title }) => {
  return (
    <div className="col-span-6 text-center sm:col-span-4">
      <svg
        className="mx-auto h-auto w-7 text-lime-400 md:w-9"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={iconPath} />
      </svg>
      <div className="mt-2 sm:mt-6">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
};

const ImageGrid = ({ images }) => {
  return (
    <div className="mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8">
      {images.map((image, index) => (
        <div key={index} className="col-span-4 md:col-span-3">
          <img className="rounded-xl" src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

const Features = () => {
  const featureBlocks = [
    {
      iconPath:
        "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4 M8 18h.01 M3 8h10v14H3z",
      title: "Flexible Workspaces",
    },
    {
      iconPath: "M20 7h-9 M14 17H5 M17 14a3 3 0 1 0 0 6M7 4a3 3 0 1 0 0 6",
      title: "Customizable Designs",
    },
    {
      iconPath:
        "M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",
      title: "End-to-End Support",
    },
  ];

  const images = [
    {
      src: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80",
      alt: "Features Image 1",
    },
    {
      src: "https://images.unsplash.com/photo-1587613991119-fbbe8e90531d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80",
      alt: "Features Image 2",
    },
    {
      src: "https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80",
      alt: "Features Image 3",
    },
    {
      src: "https://images.unsplash.com/photo-1640622300473-977435c38c04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80",
      alt: "Features Image 4",
    },
  ];

  return (
    <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      {/* Title */}
      <div className="mx-auto mb-8 max-w-2xl text-center lg:mb-14">
        <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl">
          Our Office Design Services
        </h2>
        <p className="mt-3 text-gray-800">
          Transform your workspace with innovative, functional, and aesthetic
          designs that inspire productivity.
        </p>
      </div>
      {/* End Title */}

      {/* Grid */}
      <div className="mx-auto grid max-w-3xl grid-cols-12 gap-6 lg:gap-8">
        {featureBlocks.map((block, index) => (
          <FeatureBlock
            key={index}
            iconPath={block.iconPath}
            title={block.title}
          />
        ))}
      </div>
      {/* End Grid */}

      {/* Image Grid */}
      <ImageGrid images={images} />
    </div>
  );
};

export default Features;
