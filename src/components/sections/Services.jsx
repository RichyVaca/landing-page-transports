import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { services } from "../../data/services";
import ServiceBox from "../ServiceBox";

const Services = () => {
  return (
    <section id="servicios" className="section section--surface">
      <MDBContainer>
        <header className="section-head">
          <p className="eyebrow">Servicios</p>
          <h2 className="section-title">Servicios de transporte</h2>
          <p className="section-lead">
            Unidades y soluciones para cada tipo de carga. Cuéntanos qué necesitas
            mover y armamos la ruta.
          </p>
        </header>

        <MDBRow className="g-4">
          {services.map((service) => (
            <ServiceBox key={service.id} {...service} />
          ))}
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default Services;
