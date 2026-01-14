import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Highlights = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    gsap.to([".left-column", ".right-column"], {
      scrollTrigger: {
        trigger: "#highlights",
        start: isMobile ? "bottom bottom" : "top center",
      },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []); // <- run once on mount

  return (
    <section id="highlights" className="py-16 px-4">
      <h2 className="text-3xl font-bold mb-2 text-center">
        There’s never been a better time to upgrade.
      </h2>
      <h3 className="text-xl text-center mb-8">
        Here’s what you get with the new MacBook Pro.
      </h3>

      <div className="masonry flex flex-col md:flex-row gap-8">
        <div className="left-column flex flex-col gap-6 opacity-0 translate-y-12">
          <div className="highlight-item">
            <img src="/laptop.png" alt="MacBook performing tasks" />
            <p>Fly through demanding tasks up to 9.8x faster.</p>
          </div>
          <div className="highlight-item">
            <img src="/sun.png" alt="Liquid Retina XDR display" />
            <p>
              A stunning <br />
              Liquid Retina XDR <br />
              display.
            </p>
          </div>
        </div>

        <div className="right-column flex flex-col gap-6 opacity-0 translate-y-12">
          <div className="highlight-item apple-gradient">
            <img src="/ai.png" alt="Apple Intelligence AI" />
            <p>
              Built for <br />
              <span>Apple Intelligence.</span>
            </p>
          </div>
          <div className="highlight-item">
            <img src="/battery.png" alt="Battery life" />
            <p>
              Up to <span className="green-gradient">14 more hours</span> battery
              life. <span className="text-dark-100">(Up to 24 hours total.)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
