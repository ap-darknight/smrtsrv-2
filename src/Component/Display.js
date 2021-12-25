import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import DisplayData from "./DispalyData";
const Display = ({ files, field }) => {
  return (
    <>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.no</th>
              {field.map((el) => (
                <th>{el}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {files.map((data, index) => {
              return (
                <DisplayData
                  key={index}
                  data={data}
                  index={index}
                  field={field}
                />
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Display;
