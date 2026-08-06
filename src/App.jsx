import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Pillars from "./components/Pillars.jsx";
import Gallery from "./components/Gallery.jsx";
import Mission from "./components/Mission.jsx";
import Programs from "./components/Programs.jsx";
import Video from "./components/Video.jsx";
import News from "./components/News.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import useReveal from "./useReveal.js";

export default function App() {
  useReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Pillars />
        <Mission />
        <Video />
        <Programs />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
