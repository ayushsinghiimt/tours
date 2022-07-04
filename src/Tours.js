import React from "react";
import Tour from "./Tour";
const Tours = (props) => {
  const { data } = props;
  const { removeTour } = props;
  return (
    <>
      <div className="section">
        <div className="title">
          <h1>our Tours</h1>
          <div className="underline"></div>
        </div>
        <div className="main">
          {data.map((single, i) => {
            return <Tour data={single} removeTour={removeTour} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Tours;
