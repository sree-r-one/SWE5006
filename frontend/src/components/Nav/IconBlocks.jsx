import React from "react";

const IconBlock = ({ iconPath, title, description }) => {
  return (
    <div className="flex gap-x-5 sm:gap-x-8">
      {/* Icon */}
      <span className="mx-auto inline-flex size-[46px] shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm">
        <svg
          className="size-5 shrink-0 text-lime-400"
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
      </span>
      <div className="grow">
        <h3 className="text-base font-semibold text-gray-800 sm:text-lg">
          {title}
        </h3>
        <p className="mt-1 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const IconBlocks = () => {
  const blocks = [
    {
      iconPath: "M12 2l4 7H8l4-7z M6 9l6 11-6-4v-7zM18 9v7l-6 4 6-11z",
      title: "Tailored Office Design",
      description:
        "We create bespoke office designs that enhance your workspace, reflecting your brand’s identity and culture.",
    },
    {
      iconPath:
        "M19 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2zM16 2v4H8V2",
      title: "Sustainable Solutions",
      description:
        "Our designs prioritize sustainability, utilizing eco-friendly materials and energy-efficient solutions.",
    },
    {
      iconPath: "M2 7l10 6 10-6M2 17l10 6 10-6M2 12l10 6 10-6",
      title: "Innovative Technology Integration",
      description:
        "We seamlessly integrate the latest technology into your office space to enhance productivity and collaboration.",
    },
  ];

  return (
    <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      {/* Grid */}
      <div className="grid gap-12 md:grid-cols-2">
        <div className="lg:w-3/4">
          <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl">
            Elevating Office Interiors with Cutting-edge Design
          </h2>
          <p className="mt-3 text-gray-800">
            We specialize in transforming office spaces into functional and
            aesthetically pleasing environments, tailored to meet the needs of
            modern businesses.
          </p>
          <p className="mt-5">
            <a
              className="inline-flex items-center gap-x-1 text-sm font-medium text-lime-600 decoration-2 hover:underline focus:underline focus:outline-none"
              href="#"
            >
              Contact us to learn more
              <svg
                className="size-4 shrink-0 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </p>
        </div>
        {/* End Col */}

        <div className="space-y-6 lg:space-y-10">
          {blocks.map((block, index) => (
            <IconBlock
              key={index}
              iconPath={block.iconPath}
              title={block.title}
              description={block.description}
            />
          ))}
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  );
};

export default IconBlocks;
