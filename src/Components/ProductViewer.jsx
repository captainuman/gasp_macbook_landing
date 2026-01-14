import useMacbookStore from "../store/index.js";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import StudioLight from "./threejs/Studiolight.jsx";
import ModelSwitcher from "./threejs/ModelSwitcher.jsx";

const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacbookStore();
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <section id="product-viewer" className="relative">
      <h2 className="text-white text-4xl mb-8">Take a closer look.</h2>

      <div className="controls flex gap-6 mb-6">
        {/* Color selectors */}
        <div className="flex gap-2">
          <div
            onClick={() => setColor("#adb5bd")}
            className={clsx(
              "w-6 h-6 rounded-full cursor-pointer border",
              color === "#adb5bd" && "ring-2 ring-white"
            )}
            style={{ backgroundColor: "#adb5bd" }}
          />
          <div
            onClick={() => setColor("#2e2c2e")}
            className={clsx(
              "w-6 h-6 rounded-full cursor-pointer border",
              color === "#2e2c2e" && "ring-2 ring-white"
            )}
            style={{ backgroundColor: "#2e2c2e" }}
          />
        </div>

        {/* Size selectors */}
        <div className="flex gap-2">
          <button
            onClick={() => setScale(0.06)}
            className={clsx(
              "px-3 py-1 rounded border",
              scale === 0.06 ? "bg-white text-black" : "bg-transparent text-white"
            )}
          >
            14"
          </button>
          <button
            onClick={() => setScale(0.08)}
            className={clsx(
              "px-3 py-1 rounded border",
              scale === 0.08 ? "bg-white text-black" : "bg-transparent text-white"
            )}
          >
            16"
          </button>
        </div>
      </div>

      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <StudioLight />
        <ModelSwitcher scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile} />
      </Canvas>
    </section>
  );
};

export default ProductViewer;
