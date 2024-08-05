import { MDBCol, MDBContainer, MDBListGroup, MDBListGroupItem, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import mex from "../assets/mex2.jpg";

const RoutesMex = () => {
  return (
    <>
      <div
        className="my-4 text-center bg-image "
        style={{
          backgroundImage: `url(${mex})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <MDBContainer>
          <MDBRow className="m-3 p-3 ">
            <MDBCol size="md opacity-90">
              <MDBListGroup className="">
                <MDBListGroupItem className="" color="dark" action>GUADALAJARA</MDBListGroupItem>
                <MDBListGroupItem className="" color="dark" action>MANZANILLO</MDBListGroupItem>
                <MDBListGroupItem className="" color="dark" action>MICHOACAN</MDBListGroupItem>
                <MDBListGroupItem className="" color="dark" action>TLAXCALA</MDBListGroupItem>
                <MDBListGroupItem className="" color="dark" action>MONTERREY</MDBListGroupItem>
              </MDBListGroup>
            </MDBCol>
            <MDBCol size="md opacity-90">
              <MDBListGroup className="">
                <MDBListGroupItem className="" color="dark" action>PUEBLA</MDBListGroupItem>
                <MDBListGroupItem className="" color="dark" action>TECOMAN</MDBListGroupItem>
                <MDBListGroupItem className="" color="dark" action>...</MDBListGroupItem>
                <MDBListGroupItem className="" color="dark" action>...</MDBListGroupItem>
                <MDBListGroupItem className="" color="dark" action>...</MDBListGroupItem>
              </MDBListGroup>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

export default RoutesMex;
