import React from "react";
import { Form, Row, Col } from "react-bootstrap";
const Format = () => {
  return (
    <div
      style={{
        alignItems: "center",
        margin: "2em",
        border: "1px solid black",
        padding: "2em",
        boxShadow: "2px 1px 10px grey",
      }}
    >
      <p>Specify Format</p>
      <Row>
        <Col xs={12} md={6}>
          File Type
        </Col>
        <Col xs={12} md={6}>
          <select>
            <option value="json">JSON</option>
            <option value="csv">CSV</option>
          </select>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          Character Encoding
        </Col>
        <Col xs={12} md={6}>
          <select>
            <option value="UTF-8">UTF-8</option>
            <option value="UTF-32">UTF-32</option>
          </select>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          Delimiter
        </Col>
        <Col xs={12} md={6}>
          <select>
            <option value="comma">comma</option>
          </select>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={12} md={1}>
          <input type="checkbox" id="12" name="header" value="yes" />
        </Col>
        <Col xs={12} md={6}>
          <label for="12"> Has Header</label>
        </Col>
      </Row>
      <br></br>
    </div>
  );
};

export default Format;
