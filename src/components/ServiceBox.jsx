import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBIcon,
  MDBRipple,
} from "mdb-react-ui-kit";

const ServiceBox = ({ name, icon, description }) => {
  return (
    <MDBCol size="12" sm="6" lg="3">
      <MDBCard className="mv-card">
        <MDBRipple rippleTag="div" className="h-100" rippleColor="light">
          <MDBCardBody className="mv-card__body">
            <span className="mv-icon-tile">
              <MDBIcon fas icon={icon} aria-hidden="true" />
            </span>
            <h3 className="mv-card__title">{name}</h3>
            <p className="mv-card__text">{description}</p>
            <a href="#contacto" className="mv-link">
              Cotizar
              <MDBIcon fas icon="arrow-right" aria-hidden="true" />
            </a>
          </MDBCardBody>
        </MDBRipple>
      </MDBCard>
    </MDBCol>
  );
};

export default ServiceBox;
