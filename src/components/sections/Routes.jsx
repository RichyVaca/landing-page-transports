import { useState } from "react";
import {
  MDBContainer,
  MDBIcon,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { routeGroups, routeNote } from "../../data/routes";

const Routes = () => {
  const [active, setActive] = useState(routeGroups[0].id);

  return (
    <section id="rutas" className="section mv-routes">
      <MDBContainer>
        <div className="row g-4 g-lg-5 align-items-center">
          <div className="col-lg-5">
            <p className="eyebrow eyebrow--light">Cobertura</p>
            <h2 className="section-title">Rutas de traslado</h2>
            <p className="mv-routes__lead">
              Operamos corredores entre Jalisco, Michoacán, Puebla y Tlaxcala.
              Consulta la cobertura de tu destino y coordinamos la ruta.
            </p>
            <a
              href="#contacto"
              className="btn btn-accent btn-lg rounded-pill px-4 mt-3"
            >
              Cotizar mi ruta
              <MDBIcon fas icon="arrow-right" className="ms-2" />
            </a>
          </div>

          <div className="col-lg-7">
            <MDBTabs className="mv-tabs">
              {routeGroups.map((group) => (
                <MDBTabsItem key={group.id}>
                  <MDBTabsLink
                    active={active === group.id}
                    onClick={() => setActive(group.id)}
                  >
                    {group.state}
                    <span className="mv-tabs__count">{group.cities.length}</span>
                  </MDBTabsLink>
                </MDBTabsItem>
              ))}
            </MDBTabs>

            <MDBTabsContent className="mv-tabs__panes">
              {routeGroups.map((group) => (
                <MDBTabsPane key={group.id} open={active === group.id}>
                  <ul className="d-flex flex-wrap gap-2 mb-0 ps-0">
                    {group.cities.map((city) => (
                      <li key={city} className="list-unstyled">
                        <span className="mv-city">{city}</span>
                      </li>
                    ))}
                  </ul>
                </MDBTabsPane>
              ))}
            </MDBTabsContent>

            <p className="mv-routes__note mb-0">{routeNote}</p>
          </div>
        </div>
      </MDBContainer>
    </section>
  );
};

export default Routes;
