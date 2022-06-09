import React from "react";
import MapStations from "./MapStations";

function Stations() {
  return (
    <div
      className="flex w-screen px-2 py-2 overflow-x-scroll overflow-y-hidden bg-gray-100 lg:overflow-auto lg:sticky lg:w-1/4 lg:h-1/4 lg:flex-col"
      style={{ minHeight: `300px` }}
    >
      <MapStations />
    </div>
  );
}

export default Stations