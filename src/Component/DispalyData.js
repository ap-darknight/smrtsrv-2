import React from "react";
import {} from "react-bootstrap";
const DisplayData = ({ data, index, field }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      {field.map((el) => (
        <td>{data[el]}</td>
      ))}
    </tr>
  );
};

export default DisplayData;
