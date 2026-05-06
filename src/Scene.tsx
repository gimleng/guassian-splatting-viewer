// @ts-expect-error - PlayCanvas ESM scripts don't have type declarations
import { CameraControls } from "playcanvas/scripts/esm/camera-controls.mjs";
import { Entity } from "@playcanvas/react";
import { Camera, Script, GSplat } from "@playcanvas/react/components";
import { useSplat } from "@playcanvas/react/hooks";

function SkyVIVOffice() {
  const { asset } = useSplat("skyviv-office.sog");
  if (!asset) return null;

  return (
    <Entity position={[0, 0, 0]} rotation={[0, 0, 180]}>
      <GSplat
        asset={asset}
        // Aggressive LOD: drop quality at 2.5m, drop fast as distance grows
        lodBaseDistance={2.5}
        lodMultiplier={4}
      />
    </Entity>
  );
}

function Scene() {
  return (
    <>
      <Entity name="camera" position={[-8.5, 2, 8]}>
        <Camera
          clearColor="#171717"
          farClip={50}
          nearClip={0.1}
          fov={60}
        />
        <Script script={CameraControls} />
      </Entity>
      <SkyVIVOffice />
    </>
  );
}

export default Scene;