import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef();

  useEffect(() => {
    const vid = videoRef.current;
    if (vid) {
      try {
        vid.playbackRate = 2;
      } catch (err) {
        console.warn("Failed to set playback rate:", err);
      }
    }
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-black text-white">
      <div className="mb-6">
        <h1 className="text-5xl font-bold">MacBook Pro</h1>
        <img src="/title.png" alt="MacBook Title" className="mx-auto mt-4" />
      </div>

      <video
        ref={videoRef}
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/poster.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      <button type="button" className="px-6 py-3 mt-6 bg-white text-black font-semibold rounded hover:bg-gray-200">
        Buy
      </button>

      <p className="mt-2 text-sm">
        From $1599 or $133/mo for 12 months
      </p>
    </section>
  );
};

export default Hero;
