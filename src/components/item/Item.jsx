import "./style.css";

import React from "react";

const item = ({ title, img, shortdescription }) => {
  return (
    <>
      <div className="card text-bg-light ">
        <h5 className="card-title">{title}</h5>
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body">
          <small className="card-text">{shortdescription}</small>
        </div>
      </div>
    </>
  );
};

export default item;
