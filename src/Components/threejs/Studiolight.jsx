import { Environment, Lightformer } from "@react-three/drei";
import React from "react";

const StudioLight = () => {
  return (
    <group name="lights">
      <Environment resolution={256}>
        <group>
          <Lightformer
            form="rect"
            intensity={10}
            position={[-10, 5, -5]}
            scale={10}
            rotation={[0, Math.PI / 2, 0]}
          />
          <Lightformer
            form="rect"
            intensity={10}
            position={[10, 0, 1]}
            scale={10}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
      </Environment>

      <spotLight
        position={[-2, 10, 5]}
        intensity={0.6}
        angle={0.15}
        decay={0}
      />
      <spotLight
        position={[0, -25, 10]}
        intensity={0.6}
        angle={0.15}
        decay={0}
      />
      <spotLight
        position={[0, 15, 5]}
        intensity={3}
        angle={0.15}
        decay={0.1}
      />
    </group>
  );
};

export default StudioLight;
