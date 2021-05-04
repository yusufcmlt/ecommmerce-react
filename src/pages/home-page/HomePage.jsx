import React from "react";
import Hero from "./home-page-hero/Hero";
import HomePageItems from "./home-page-items/HomePageItems";

export default function HomePage() {
  return (
    <div className="homepage-container">
      <Hero />
      <HomePageItems />
    </div>
  );
}
