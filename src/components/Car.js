import React, { useState } from "react";

const Car = (props) => {
  const [brand] = useState(props.brand);

  return (
    <div>
      <h2>Brand: {brand}</h2>
    </div>
  );
};

export default Car;
