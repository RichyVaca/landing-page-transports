import NavBar from "../components/NavBar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Routes from "../components/sections/Routes";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

const Main = () => {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <NavBar />
      <main id="contenido">
        <Hero />
        <About />
        <Services />
        <Routes />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Main;
