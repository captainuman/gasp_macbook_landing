import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Showcase = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    if (!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      timeline
        .to(".mask img", {
          scale: 1.1, // use GSAP's scale property
          ease: "power1.inOut",
        })
        .to(
          ".content",
          {
            opacity: 1,
            y: 0,
            ease: "power1.inOut",
          },
          "<" // start at the same time as previous
        );
    }
  }, [isTablet]);

  return (
    <section id="showcase">
      <div className="media relative overflow-hidden">
        <video
          src="/videos/game.mp4"
          loop
          muted
          autoPlay
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="mask absolute inset-0 flex justify-center items-center pointer-events-none">
          <img src="/mask-logo.svg" alt="Mask Logo" />
        </div>
      </div>

      <div className="content opacity-0 translate-y-10 transition-all duration-700">
        <div className="wrapper flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="lg:max-w-md">
            <h2 className="text-3xl font-bold">Rocket Chip</h2>
            <div className="space-y-5 mt-7 pe-10 text-white">
              <p>
                Introducing <span className="text-primary">M4</span>, the next generation of Apple silicon. M4 powers
              </p>
              <p>
                Apple Intelligence on iPad Pro, so you can write, create, and accomplish more with ease. All in a thin, light, and powerful design.
              </p>
              <p>
                A new display engine delivers precision, color accuracy, and brightness. Next-gen GPU with hardware-accelerated ray tracing brings console-level graphics.
              </p>
              <p className="text-primary cursor-pointer">Learn more about Apple Intelligence</p>
            </div>
          </div>

          <div className="max-w-xs space-y-14">
            <div className="space-y-2">
              <p>Up to</p>
              <h3 className="text-2xl font-bold">4x faster</h3>
              <p>pro rendering performance than M2</p>
            </div>
            <div className="space-y-2">
              <p>Up to</p>
              <h3 className="text-2xl font-bold">1.5x faster</h3>
              <p>CPU performance than M2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
