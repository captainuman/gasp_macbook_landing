import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { features, featureSequence } from "../constants/index.js";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";
import useMacbookStore from "../store/index.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import MacbookModel16 from "./models/Macbook-16.jsx";
import StudioLight from "./threejs/Studiolight.jsx";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const ModelScroll = () => {
  const { setTexture } = useMacbookStore();
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  // preload videos
  useEffect(() => {
    featureSequence.forEach((feature) => {
      const v = document.createElement("video");
      Object.assign(v, {
        src: feature.videoPath,
        muted: true,
        playsInline: true,
        preload: "auto",
        crossOrigin: "anonymous",
      });
      v.load();
    });
  }, []);

  // scroll-triggered video updates
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    featureSequence.forEach((feature, index) => {
      timeline.call(() => setTexture(feature.videoPath));
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [setTexture]);

  return (
    <Suspense
      fallback={
        <Html>
          <h1 className="text-white text-3xl uppercase">Loading...</h1>
        </Html>
      }
    >
      <MacbookModel16 scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
    </Suspense>
  );
};

const Features = () => {
  return (
    <section id="features" className="relative">
      <h2 className="text-white text-4xl mb-10">See it all in a new light.</h2>

      <Canvas
        id="f-canvas"
        camera={{ position: [0, 1, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <StudioLight />
        <ambientLight intensity={0.5} />
        <ModelScroll />
        <OrbitControls enableZoom={false} />
      </Canvas>

      <div className="absolute inset-0 pointer-events-none">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={clsx("box absolute opacity-0 transition-all", `box${index + 1}`, feature.styles)}
          >
            <img src={feature.icon} alt={feature.highlight} />
            <p>
              <span className="text-white">{feature.highlight}</span> {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
