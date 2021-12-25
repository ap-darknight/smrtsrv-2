import React from "react";

import Fields from "./Fields/Fields";
import Format from "./Format/Format";
import Input from "./Input/input";
import { Row, Col, Container } from "react-bootstrap";
import { useState } from "react";

const Home = ({
  files,
  setField,
  setFiles,
  field,
  SetSelectedField,
  SelectedField,
}) => {
  return (
    <>
      <h5>Import Products</h5>
      <Row>
        <Col xs={12} md={6}>
          <Input files={files} setFiles={setFiles} setField={setField} />
        </Col>
        <Col xs={12} md={6}>
          <Format />
        </Col>

        <Col xs={12}>
          <Fields
            fields={field}
            setField={setField}
            SetSelectedField={SetSelectedField}
            SelectedField={SelectedField}
          />
        </Col>
      </Row>
    </>
  );
};

export default Home;
