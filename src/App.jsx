import NavBar from "./Components/Navbar.jsx";
import ProductViewer from "./Components/ProductViewer.jsx";
import Showcase from "./Components/Showcase.jsx";
import Performance from "./Components/Performance.jsx";
import Features from "./Components/Features.jsx";
import Highlights from "./Components/Highlights.jsx";
import Footer from "./Components/Footer.jsx";
import Hero from "./Components/Hero.jsx";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
};

export default App;
