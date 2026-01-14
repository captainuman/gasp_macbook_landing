import { useRef, useEffect } from "react";
import { PresentationControls } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MacbookModel16 from "../models/Macbook-16.jsx";
import MacbookModel14 from "../models/Macbook-14.jsx";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const prepareGroup = (group) => {
  if (!group) return;

  group.traverse((child) => {
    if (child.isMesh && child.material && !child.material._cloned) {
      child.material = child.material.clone();
      child.material.transparent = true;
      child.material.opacity = 1;
      child.material._cloned = true;
    }
  });
};

const fadeGroup = (group, opacity) => {
  if (!group) return;

  group.traverse((child) => {
    if (child.isMesh) {
      gsap.to(child.material, { opacity, duration: ANIMATION_DURATION });
    }
  });
};

const moveGroup = (group, x) => {
  if (!group) return;
  gsap.to(group.position, { x, duration: ANIMATION_DURATION });
};

const ModelSwitcher = ({ scale, isMobile }) => {
  const smallRef = useRef();
  const largeRef = useRef();

  const LARGE_SCALE_DESKTOP = 0.08;
  const LARGE_SCALE_MOBILE = 0.05;

  const showLarge = scale === LARGE_SCALE_DESKTOP || scale === LARGE_SCALE_MOBILE;

  // prepare meshes for fading
  useEffect(() => {
    prepareGroup(smallRef.current);
    prepareGroup(largeRef.current);
  }, []);

  // animate switching
  useGSAP(
    () => {
      if (showLarge) {
        moveGroup(smallRef.current, -OFFSET_DISTANCE);
        moveGroup(largeRef.current, 0);

        fadeGroup(smallRef.current, 0);
        fadeGroup(largeRef.current, 1);
      } else {
        moveGroup(smallRef.current, 0);
        moveGroup(largeRef.current, OFFSET_DISTANCE);

        fadeGroup(smallRef.current, 1);
        fadeGroup(largeRef.current, 0);
      }
    },
    { dependencies: [scale] }
  );

  const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    azimuth: [-Infinity, Infinity],
    config: { mass: 1, tension: 0, friction: 26 },
  };

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeRef} position={[OFFSET_DISTANCE, 0, 0]}>
          <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>

      <PresentationControls {...controlsConfig}>
        <group ref={smallRef}>
          <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelSwitcher;
