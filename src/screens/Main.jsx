import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
  MDBRow,
  MDBContainer,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBSpinner,
} from "mdb-react-ui-kit";
import bg1 from "../assets/imgCour1.jpg";
import bg2 from "../assets/imgCour2.jpg";
import bg3 from "../assets/imgCour3.jpg";
import mision from "../assets/mision.png";
import vision from "../assets/vision.png";
import values from "../assets/values.png";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "600px" }}
        >
          <MDBSpinner grow>
            <span className="visually-hidden">Loading...</span>
          </MDBSpinner>
        </div>
      ) : (
        <>
          <NavBar />

          {/* Carousel de imagenes */}
          <MDBCarousel showIndicators showControls fade className="mb-5">
            <MDBCarouselItem itemId={1}>
              <img
                src={bg1}
                alt="..."
                className="d-flex w-100"
                style={{ height: "600px", objectFit: "cover", width: "100%" }}
              />
              <MDBCarouselCaption>
                <h4>Servicios de transporte</h4>
                <p>
                  <em>Tu carga, nuestra prioridad.</em>
                </p>
              </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem itemId={2}>
              <img
                src={bg2}
                alt="..."
                className="d-flex w-100"
                style={{ height: "600px", objectFit: "cover", width: "100%" }}
              />
              <MDBCarouselCaption>
                <h4>Servicios de transporte</h4>
                <p>
                  <em>Transporte seguro y eficiente.</em>
                </p>
              </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem itemId={3}>
              <img
                src={bg3}
                alt="..."
                className="d-flex w-100"
                style={{ height: "600px", objectFit: "cover", width: "100%" }}
              />
              <MDBCarouselCaption>
                <h4>Servicios de transporte</h4>
                <p>
                  <em>Movemos tu mundo con confianza.</em>
                </p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarousel>

          {/* Nosotros section */}

          <MDBContainer className="mb-5">
            <h1>Nosotros</h1>
            <MDBRow className="mt-5">
              <MDBCol className="col-2">
                <img src={mision} alt="" className="img-fluid" />
              </MDBCol>
              <MDBCol size="md">
                <h3>Misión</h3>
                <p>
                  <em>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem voluptatibus sequi aliquid similique nobis
                    distinctio aut iste consectetur architecto maiores? Rem
                    accusamus sequi facilis ipsum dolorum, odit dolor nisi ea?
                  </em>
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-5">
              <MDBCol className="col-2">
                <img src={vision} alt="" className="img-fluid" />
              </MDBCol>
              <MDBCol className="" size="md">
                <h3>Visión</h3>
                <p>
                  <em>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem voluptatibus sequi aliquid similique nobis
                    distinctio aut iste consectetur architecto maiores? Rem
                    accusamus sequi facilis ipsum dolorum, odit dolor nisi ea?
                  </em>
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-5">
              <MDBCol className="col-2">
                <img src={values} alt="" className="img-fluid" />
              </MDBCol>
              <MDBCol size="md">
                <h3>Valores</h3>
                <MDBRow>
                  <MDBCol size="md">
                    <em>
                      {" "}
                      <MDBListGroup style={{ minWidthL: "12rem" }} light>
                        <MDBListGroupItem active noBorders className="m-2 p-3">
                          Integridad
                        </MDBListGroupItem>
                        <MDBListGroupItem active noBorders className="m-2 p-3">
                          Transparencia
                        </MDBListGroupItem>
                        <MDBListGroupItem active noBorders className="m-2 p-3">
                          Compromiso
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </em>
                  </MDBCol>
                  <MDBCol size="md">
                    <em>
                      {" "}
                      <MDBListGroup style={{ minWidthL: "12rem" }} light>
                        <MDBListGroupItem active noBorders className="m-2 p-3">
                          Confianza
                        </MDBListGroupItem>
                        <MDBListGroupItem active noBorders className="m-2 p-3">
                          Adaptabilidad
                        </MDBListGroupItem>
                        <MDBListGroupItem active noBorders className="m-2 p-3">
                          Orientación al Cliente
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </em>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          {/* Servicio de transportes */}

          <hr className="hr" />
          <MDBContainer className="mb-5">
            <h1 className="text-end">Servicios de transporte</h1>
          </MDBContainer>
        </>
      )}
    </>
  );
};

export default Main;
