import { MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdb-react-ui-kit";
import { heroContent, trustStrip } from "../../data/hero";
import hero768Avif from "../../assets/generated/hero-768.avif";
import hero1100Avif from "../../assets/generated/hero-1100.avif";
import hero1376Avif from "../../assets/generated/hero-1376.avif";
import hero768Webp from "../../assets/generated/hero-768.webp";
import hero1100Webp from "../../assets/generated/hero-1100.webp";
import hero1376Webp from "../../assets/generated/hero-1376.webp";
import heroJpg from "../../assets/generated/hero-1376.jpg";

const Hero = () => {
  return (
    <>
      <section id="inicio" className="mv-hero">
        <picture className="mv-hero__media">
          <source
            type="image/avif"
            srcSet={`${hero768Avif} 768w, ${hero1100Avif} 1100w, ${hero1376Avif} 1376w`}
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcSet={`${hero768Webp} 768w, ${hero1100Webp} 1100w, ${hero1376Webp} 1376w`}
            sizes="100vw"
          />
          <img
            src={heroJpg}
            alt="Camión de carga rojo conduciendo por una carretera de montaña"
            width="1376"
            height="768"
            fetchpriority="high"
            decoding="async"
          />
        </picture>
        <div className="mv-hero__overlay" aria-hidden="true" />

        <MDBContainer className="mv-hero__content">
          <div className="mv-hero__inner">
            <p className="mv-hero__brand mb-2">{heroContent.eyebrow}</p>
            <h1>
              <span className="visually-hidden">{heroContent.brand}. </span>
              {heroContent.title}
            </h1>
            <p className="mv-hero__lead">{heroContent.lead}</p>

            <div className="mv-hero__actions">
              <a
                href="#contacto"
                className="btn btn-accent btn-lg rounded-pill px-4"
              >
                Cotizar traslado
                <MDBIcon fas icon="arrow-right" className="ms-2" />
              </a>
              <a
                href="#servicios"
                className="btn btn-outline-light btn-lg rounded-pill px-4"
              >
                Ver servicios
              </a>
            </div>

            <ul className="mv-hero__trust">
              {heroContent.trust.map((item) => (
                <li key={item.id}>
                  <MDBIcon fas icon={item.icon} aria-hidden="true" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </MDBContainer>
      </section>

      <section className="mv-trust" aria-label="Ventajas de Transportes MORVAC">
        <MDBContainer>
          <MDBRow className="g-0">
            {trustStrip.map((item) => (
              <MDBCol
                key={item.id}
                size="6"
                lg="3"
                className="mv-trust__item"
              >
                <span className="mv-icon-tile mv-icon-tile--sm">
                  <MDBIcon fas icon={item.icon} aria-hidden="true" />
                </span>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </div>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};

export default Hero;
