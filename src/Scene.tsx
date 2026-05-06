// @ts-expect-error - PlayCanvas ESM scripts don't have type declarations
import { CameraControls } from "playcanvas/scripts/esm/camera-controls.mjs";
// @ts-expect-error - PlayCanvas ESM scripts don't have type declarations
import { Grid } from "playcanvas/scripts/esm/grid.mjs";
import { Entity } from "@playcanvas/react";
import { Camera, Script, GSplat } from "@playcanvas/react/components";
import { useSplat } from "@playcanvas/react/hooks";

function Scene() {
  
  function SkyVIVOffice() {
    const { asset } = useSplat("skyviv-office.sog");
    if (!asset) return null;

    return (
      <Entity position={[0, 0, 0]} rotation={[0, 0, 180]}>
        <GSplat highQualitySH={true}  asset={asset} />
      </Entity>
    );
  }

  return (
    <>
      <Entity name="camera" position={[-8.5, 2, 8]}>
        <Camera clearColor="#171717" />
        <Script script={CameraControls} />
      </Entity>

      <SkyVIVOffice />
    </>
  );
}

export default Scene;
