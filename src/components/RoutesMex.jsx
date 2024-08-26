import {
  MDBCol,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
} from "mdb-react-ui-kit";
import React from "react";
import mex from "../assets/mex.png";

const RoutesMex = () => {
  return (
    <>
      <div
      // className="my-4 text-center bg-image "
      // style={{
      //   backgroundImage: `url(${mex})`,
      //   backgroundSize: "30rem",
      //   backgroundPosition: "center",
      // }}
      >
        <MDBContainer>
          <MDBRow className="m-3 p-5 ">
            <MDBCol size="md opacity-70">
              <h6 className="bg-light p-2 border-top border-bottom">
                JALISCO
              </h6>
              <MDBListGroup className="">
                <MDBListGroupItem className="" color="primary" action>
                  GUADALAJARA
                </MDBListGroupItem>
                <MDBListGroupItem className="" color="primary" action>
                  CD. GUZMAN
                </MDBListGroupItem>
                <MDBListGroupItem className="" color="primary" action>
                  ZAPOPAN
                </MDBListGroupItem>
              </MDBListGroup>
              <h6 className="bg-light p-2 mt-2 border-top border-bottom">
                MICHOACAN
              </h6>
              <MDBListGroup>
                <MDBListGroupItem className="" color="primary" action>
                  MI RANCHITO
                </MDBListGroupItem>
                <MDBListGroupItem className="" color="primary" action>
                  MORELIA
                </MDBListGroupItem>
                <MDBListGroupItem className="" color="primary" action>
                  LAZARO CARDENAS
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCol>
            <MDBCol size="md opacity-70">
            <h6 className="bg-light p-2 border-top border-bottom">
                OTROS
              </h6>
              <MDBListGroup className="">
                <MDBListGroupItem className="" color="primary" action>
                  PUEBLA
                </MDBListGroupItem>
                <MDBListGroupItem className="" color="primary" action>
                  TLAXCALA
                </MDBListGroupItem>
                <MDBListGroupItem className="" color="primary" action>
                  ...
                </MDBListGroupItem>
                <MDBListGroupItem className="" color="primary" action>
                  ...
                </MDBListGroupItem>
                <MDBListGroupItem className="" color="primary" action>
                  ...
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

export default RoutesMex;
