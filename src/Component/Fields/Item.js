import React, { useState } from "react";

const Item = ({ item, Add, Remove, tmp }) => {
  let [color1, setColor] = useState("white");
  let clicked = (item) => {
    if (!tmp.includes(item)) Add([...tmp, item]);
    // Remove(item);
    setColor("grey");
  };
  console.log(item);
  return (
    <div
      key={item}
      style={{ backgroundColor: `${color1}` }}
      onClick={() => clicked(item)}
    >
      {item}
    </div>
  );
};

export default Item;
