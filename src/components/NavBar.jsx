import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
  MDBTypography,
  MDBNavbarItem,
  MDBBtn,
} from "mdb-react-ui-kit";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [openNavSecond, setOpenNavSecond] = useState(false);
  return (
    <MDBNavbar
      fixed="top"
      expand="lg"
      light
      bgColor="light"
      className="shadow-5"
    >
      <MDBContainer className="">
        <MDBNavbarBrand href="#">
          {" "}
          <div className="hover-zoom">
            <img
              src={logo}
              height="40"
              alt=""
              loading="lazy"
            />
            MORVAC TRANSPORTS
          </div>
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenNavSecond(!openNavSecond)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNavSecond}>
          <MDBNavbarNav className="">
            <MDBNavbarItem className="px-4 hover-zoom">
              <MDBNavbarLink active href="#">
                <MDBTypography className="mb-0  border-bottom">
                  Inicio
                </MDBTypography>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="px-4 ">
              <MDBNavbarLink active href="#">
                <MDBTypography className=" mb-0 border-bottom">
                  Nosotros
                </MDBTypography>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="px-4">
              <MDBNavbarLink active href="#">
                <MDBTypography className="mb-0 border-bottom">
                  Servicios
                </MDBTypography>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="px-4">
              <MDBNavbarLink active href="#">
                <MDBTypography className="mb-0 border-bottom ">
                  Rutas
                </MDBTypography>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
        <MDBBtn color="primary">CONTACTO</MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default NavBar;
