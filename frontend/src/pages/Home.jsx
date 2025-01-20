import React from "react";
import {
  Hero,
  IconBlocks,
  Features,
  GalleryPage,
  StatsSection,
  Testimonials,
} from "../components/Nav";

const Home = () => {
  return (
    <div className="space-y-24">
      <Hero />
      <GalleryPage />
      <StatsSection />
      <IconBlocks />
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;
