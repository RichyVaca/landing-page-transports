import {
  MDBAccordion,
  MDBAccordionItem,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import { aboutContent } from "../../data/about";
import nosotros640Avif from "../../assets/generated/nosotros-640.avif";
import nosotros960Avif from "../../assets/generated/nosotros-960.avif";
import nosotros640Webp from "../../assets/generated/nosotros-640.webp";
import nosotros960Webp from "../../assets/generated/nosotros-960.webp";
import nosotrosJpg from "../../assets/generated/nosotros-960.jpg";
import alt480Avif from "../../assets/generated/nosotros-alt-480.avif";
import alt720Avif from "../../assets/generated/nosotros-alt-720.avif";
import alt480Webp from "../../assets/generated/nosotros-alt-480.webp";
import alt720Webp from "../../assets/generated/nosotros-alt-720.webp";
import altJpg from "../../assets/generated/nosotros-alt-720.jpg";

const About = () => {
  return (
    <section id="nosotros" className="section">
      <MDBContainer>
        <header className="section-head">
          <p className="eyebrow">{aboutContent.eyebrow}</p>
          <h2 className="section-title">{aboutContent.title}</h2>
          <p className="section-lead">{aboutContent.lead}</p>
        </header>

        <MDBRow className="g-4 g-lg-5 align-items-center">
          <MDBCol lg="6">
            <div className="mv-about__media">
              <picture className="mv-about__main">
                <source
                  type="image/avif"
                  srcSet={`${nosotros640Avif} 640w, ${nosotros960Avif} 960w`}
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
                <source
                  type="image/webp"
                  srcSet={`${nosotros640Webp} 640w, ${nosotros960Webp} 960w`}
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
                <img
                  src={nosotrosJpg}
                  alt="Unidad de carga de Transportes MORVAC en operación"
                  width="960"
                  height="499"
                  loading="lazy"
                  decoding="async"
                />
              </picture>

              <picture className="mv-about__accent">
                <source
                  type="image/avif"
                  srcSet={`${alt480Avif} 480w, ${alt720Avif} 720w`}
                  sizes="(max-width: 992px) 46vw, 22vw"
                />
                <source
                  type="image/webp"
                  srcSet={`${alt480Webp} 480w, ${alt720Webp} 720w`}
                  sizes="(max-width: 992px) 46vw, 22vw"
                />
                <img
                  src={altJpg}
                  alt="Detalle de una unidad de transporte en ruta"
                  width="720"
                  height="1080"
                  loading="lazy"
                  decoding="async"
                />
              </picture>

            </div>
          </MDBCol>

          <MDBCol lg="6">
            <MDBAccordion
              flush
              initialActive={1}
              className="mv-accordion"
            >
              {aboutContent.items.map((item, index) => (
                <MDBAccordionItem
                  key={item.id}
                  collapseId={index + 1}
                  headerTitle={
                    <span className="mv-accordion__heading">
                      <MDBIcon fas icon={item.icon} aria-hidden="true" />
                      {item.title}
                    </span>
                  }
                >
                  <p className="mb-0">{item.text}</p>
                </MDBAccordionItem>
              ))}
            </MDBAccordion>

            <div className="d-flex flex-wrap gap-2 mt-4">
              {aboutContent.values.map((value) => (
                <span key={value} className="mv-chip">
                  {value}
                </span>
              ))}
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default About;
