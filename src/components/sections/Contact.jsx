import { MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdb-react-ui-kit";
import { contactInfo, whatsappHref } from "../../data/contact";

const contactMethods = [
  {
    id: "telefono",
    icon: "phone",
    label: "Teléfono",
    value: contactInfo.phone,
    href: contactInfo.phoneHref,
    hint: "Llámanos directamente",
  },
  {
    id: "correo",
    icon: "envelope",
    label: "Correo electrónico",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    hint: "Envíanos los detalles de tu carga",
  },
  {
    id: "whatsapp",
    icon: "comment-dots",
    label: "WhatsApp",
    value: "Escríbenos por WhatsApp",
    href: whatsappHref,
    hint: "Atención rápida en horario laboral",
    external: true,
  },
];

const Contact = () => (
  <section id="contacto" className="section mv-contact">
    <MDBContainer>
      <div className="section-head mv-contact__head">
        <p className="eyebrow">Contacto</p>
        <h2 className="section-title">Cotiza tu próximo traslado</h2>
        <p className="section-lead">
          Cuéntanos qué necesitas mover, desde dónde y hacia dónde. Elige el
          medio que prefieras y te respondemos con una propuesta clara.
        </p>
      </div>

      <MDBRow className="g-4">
        {contactMethods.map((method) => (
          <MDBCol md="6" lg="4" key={method.id}>
            <a
              href={method.href}
              className="mv-contact-method"
              {...(method.external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              <span className="mv-contact-method__icon">
                <MDBIcon fas icon={method.icon} aria-hidden="true" />
              </span>
              <span className="mv-contact-method__label">{method.label}</span>
              <span className="mv-contact-method__value">{method.value}</span>
              <span className="mv-contact-method__hint">
                {method.hint}
                <MDBIcon
                  fas
                  icon="arrow-right"
                  className="ms-2"
                  aria-hidden="true"
                />
              </span>
            </a>
          </MDBCol>
        ))}
      </MDBRow>

      <div className="mv-contact__details">
        <div className="mv-contact-detail">
          <span className="mv-contact-detail__icon">
            <MDBIcon fas icon="location-dot" aria-hidden="true" />
          </span>
          <div>
            <span className="mv-contact-detail__label">Ubicación</span>
            <p className="mv-contact-detail__value">{contactInfo.location}</p>
          </div>
        </div>

        <div className="mv-contact-detail">
          <span className="mv-contact-detail__icon">
            <MDBIcon fas icon="clock" aria-hidden="true" />
          </span>
          <div>
            <span className="mv-contact-detail__label">Horario de atención</span>
            <p className="mv-contact-detail__value">{contactInfo.schedule}</p>
          </div>
        </div>

        <p className="mv-contact__note">
          <MDBIcon fas icon="circle-info" className="me-2" aria-hidden="true" />
          {contactInfo.responseTime}
        </p>
      </div>
    </MDBContainer>
  </section>
);

export default Contact;
