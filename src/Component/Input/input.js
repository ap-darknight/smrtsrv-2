import React from "react";

const Input = ({ files, setFiles, setField }) => {
  const handleChangeJson = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      const data = JSON.parse(e.target.result);
      let Result = [];
      Object.values(data.products).forEach((val) => {
        // console.log(typeof +val.popularity);
        Result.push({
          title: val.title,
          price: +val.price,
          popularity: +val.popularity,
          subcategory: val.subcategory,
        });
      });
      Result.sort((a, b) => {
        return b.popularity - a.popularity;
      });
      //console.log(Result);
      setFiles(Result);
      let para = Object.keys(Result[0]);
      let res = [];

      for (let el of para) {
        res.push(el);
      }
      if (Result.length > 0) setField(res);
      // console.log(Result);
    };
  };

  return (
    <div
      style={{
        alignItems: "center",
        margin: "2em",
        border: "1px solid black",
        padding: "4em",
        boxShadow: "2px 1px 10px grey",
      }}
    >
      <input
        id="fileSelect"
        type="file"
        onChange={handleChangeJson}
        accept=".json, .csv"
      />
      <br />
      <br />
      <p style={{ fontSize: "1em" }}>Suppoted File Type(s) .CSV, .JSON</p>
      <br />
    </div>
  );
};

export default Input;
