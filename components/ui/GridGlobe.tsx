"use client";

import React from "react";
import dynamic from "next/dynamic";
import { arcs } from "@/data/globe";

const World = dynamic(() => import("./Globe").then((m) => m.World), {
  ssr: false,
});

const GridGlobe = () => {
  const globeConfig = {
    pointSize: 4,
    globeColor: "rgba(147, 197, 253, 0.7)",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(113, 63, 18, 1)",
    ambientLight: "#FEF08A",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  return (

    <div className="flex items-center justify-center absolute -left-5 top-36 md:top-40 w-full h-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-96 px-4">
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        <div className="absolute w-full h-72 md:h-full z-10">
          <World data={arcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
};
export default GridGlobe;
