import React from "react";

const Hero = () => {
  return (
    <div className="h-1/2 bg-neutral-900">
      <div className="mx-auto max-w-5xl px-4 pb-24 pt-24 lg:pt-32 xl:px-0">
        <h1 className="text-5xl font-semibold text-white md:text-6xl">
          <span className="text-lime-400">Design Office Spaces:</span> Crafting
          Workspaces That Inspire
        </h1>
        <div className="max-w-4xl">
          <p className="mt-5 text-lg text-neutral-400">
            At our interior design firm, we specialize in creating bespoke
            office environments that not only reflect your brand's identity but
            also foster productivity and creativity. Let us transform your
            workspace into a place where ideas thrive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
