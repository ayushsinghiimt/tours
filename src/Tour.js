import React, { useState } from "react";

const Tour = (props) => {
  const { id, info, image, price, name } = props.data;
  const { removeTour } = props;
  return (
    <>
      <div className="single-tour">
        <img src={image} />
        <div className="tour-info">
          <h4>{name}</h4>
          <p className="tour-price">{price}</p>
          <p>{info}</p>
          <button
            className="delete-btn"
            type="button"
            onClick={() => {
              removeTour(id);
            }}
          >
            Not interested
          </button>
        </div>
      </div>
    </>
  );
};

export default Tour;
