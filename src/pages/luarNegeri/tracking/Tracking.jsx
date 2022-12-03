import React from "react";
import TrackingCard from "../../../components/tracking/TrackingCard";
import ContainerMain from "../../../components/containerMain/ContainerMain";

function Tracking() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#D9D9D9",
          minHeight: "100vh",
        }}
      >
        <ContainerMain>
          {/* Batas Animasi*/}
          <TrackingCard />
          {/* Batas Animasi */}
        </ContainerMain>
      </div>
    </div>
  );
}

export default Tracking;
