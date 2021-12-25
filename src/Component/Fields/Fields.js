import React, { useState } from "react";
import Item from "./Item";
import { Form, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Fields = ({ fields, setField, SetSelectedField, SelectedField }) => {
  let history = useHistory();

  let [storetmp, setStore] = useState([]);
  let [Final, setFinal] = useState(SelectedField);

  let AddtoFinal = () => {
    setFinal([...Final, ...storetmp]);
    setStore([]);
    let tmp = fields.filter((el) => !storetmp.includes(el));
    setField(tmp);
    //  console.log(storetmp, Final);
  };

  let AddtoFields = () => {
    let h = [...fields, ...storetmp];
    //console.log(h);
    setField(h);

    setStore([]);

    let tmp = Final.filter((el) => !h.includes(el));
    // console.log(fields);
    // console.log(tmp);
    setFinal(tmp);
  };
  let show = () => {
    SetSelectedField(Final);
    history.push("/display");
  };

  return (
    <div
      style={{
        alignItems: "center",
        margin: "2em",
        border: "1px solid black",
        padding: "1em",
        boxShadow: "2px 1px 10px grey",
      }}
    >
      <span>Display Handling</span>
      <br /> <br />
      Select the fields to be displayed
      <Row>
        <Col xs={12} md={3} className="p-3">
          Available Fields
        </Col>
        <Col xs={2}></Col>
        <Col md={3}>Fields to be Displayed</Col>
      </Row>
      <Row>
        <Col md={3} style={{ border: "1px solid grey" }}>
          {fields.map((el, index) => (
            <Item key={el} item={el} Add={setStore} tmp={storetmp} />
          ))}
        </Col>
        <Col className="m-2 p-5" xs={2}>
          <button disabled={!fields.length > 0} onClick={AddtoFinal}>
            {">>"}
          </button>
          <br />
          <br />
          <button disabled={!Final.length > 0} onClick={AddtoFields}>
            {"<<"}
          </button>
        </Col>
        <Col md={3} style={{ border: "1px solid grey" }}>
          {Final.map((el, index) => (
            <Item key={el} item={el} Add={setStore} tmp={storetmp} />
          ))}
        </Col>
      </Row>
      {Final.length > 0 ? (
        <>
          <Row className="m-2">
            <Col md={8}></Col>
            <Col md={4}>
              <button
                onClick={show}
                style={{
                  backgroundColor: "green",
                  color: "white",
                  fontSize: "500",
                }}
              >
                {" "}
                Next
              </button>
              <span style={{ color: "red", margin: "1em" }}>cancel</span>
            </Col>
          </Row>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Fields;
