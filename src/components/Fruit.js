import React, { useState } from "react";
import { render } from "react-dom";
//Trả về một giá trị trạng thái và một hàm để cập nhật nó.

const Fruit = (name) => {
  const [fruit] = useState(name.fruit);

  return (
    <div>
      <h2>{fruit}</h2>
      <p>I have a {fruit}</p>
    </div>
  );
};
export default Fruit;
