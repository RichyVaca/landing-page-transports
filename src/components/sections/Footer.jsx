import {
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import { contactLink, navLinks } from "../../data/navigation";
import { contactInfo, whatsappHref } from "../../data/contact";
import { routeGroups } from "../../data/routes";
import logoLight from "../../assets/logo-light.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <MDBFooter className="mv-footer">
      <div className="mv-footer__cta">
        <MDBContainer className="py-4 py-lg-5">
          <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3">
            <div>
              <p className="eyebrow eyebrow--light mb-1">
                ¿Listo para mover tu carga?
              </p>
              <h2 className="h3 mb-0">Cotiza tu traslado hoy mismo.</h2>
            </div>
            <a
              href={`#${contactLink.id}`}
              className="btn btn-accent btn-lg rounded-pill px-4"
            >
              Solicitar cotización
              <MDBIcon fas icon="arrow-right" className="ms-2" />
            </a>
          </div>
        </MDBContainer>
      </div>

      <MDBContainer className="py-5">
        <MDBRow className="g-4">
          <MDBCol lg="4">
            <a href="#inicio" className="mv-footer__brand">
              <img
                src={logoLight}
                width="256"
                height="256"
                alt=""
                loading="lazy"
                decoding="async"
              />
              <span>
                MORVAC
                <small>Transports</small>
              </span>
            </a>
            <p className="mb-3 mv-footer__lead">
              Transporte de carga con cobertura regional y atención directa en
              cada traslado.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light rounded-pill"
            >
              <MDBIcon fas icon="comment-dots" className="me-2" />
              WhatsApp
            </a>
          </MDBCol>

          <MDBCol sm="6" lg="2">
            <h3 className="mv-footer__title">Navegación</h3>
            <ul className="mv-footer__list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
              <li>
                <a href={`#${contactLink.id}`}>{contactLink.label}</a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol sm="6" lg="3">
            <h3 className="mv-footer__title">Contacto</h3>
            <ul className="mv-footer__list">
              <li className="mv-footer__contact">
                <MDBIcon fas icon="phone" aria-hidden="true" />
                <div>
                  <span className="mv-footer__contact-label">Teléfono</span>
                  <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
                </div>
              </li>
              <li className="mv-footer__contact">
                <MDBIcon fas icon="envelope" aria-hidden="true" />
                <div>
                  <span className="mv-footer__contact-label">Correo</span>
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </div>
              </li>
              <li className="mv-footer__contact">
                <MDBIcon fas icon="location-dot" aria-hidden="true" />
                <div>
                  <span className="mv-footer__contact-label">Ubicación</span>
                  <span>{contactInfo.location}</span>
                </div>
              </li>
              <li className="mv-footer__contact">
                <MDBIcon fas icon="clock" aria-hidden="true" />
                <div>
                  <span className="mv-footer__contact-label">
                    Horario de atención
                  </span>
                  <span>{contactInfo.schedule}</span>
                </div>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3">
            <h3 className="mv-footer__title">Cobertura</h3>
            <ul className="mv-footer__list">
              {routeGroups.map((group) => (
                <li key={group.id}>
                  <a href="#rutas">{group.state}</a>
                </li>
              ))}
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className="mv-footer__bottom">
        <MDBContainer className="d-flex flex-column flex-sm-row justify-content-between gap-2">
          <span>
            © {year} Transportes MORVAC. Todos los derechos reservados.
          </span>
          <a href={`#${contactLink.id}`}>
            Solicita nuestro aviso de privacidad
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
