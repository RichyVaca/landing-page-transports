import { MDBCol, MDBIcon } from "mdb-react-ui-kit";
import React from "react";

const ServiceBox = ({ name, icon }) => {
  return (
    <MDBCol
      size="lg"
      className="d-flex align-items-center justify-content-center p-3 m-3 square rounded-5 bg-secondary shadow-4-strong bg-opacity-25"
    >
      <h5>
        <MDBIcon
          fas
          icon={icon}
          className="d-flex justify-content-center"
          size="1x"
        />
        <br />
        {name}
      </h5>
    </MDBCol>
  );
};

export default ServiceBox;
