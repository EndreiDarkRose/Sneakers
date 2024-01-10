import React from "react";

import { Link } from "react-router-dom";
export const Info = ({ title, description, image }) => {
  return (
    <div className="emptyCart">
      <img src={image}></img>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link to="react-pet-sneakers">
        <button>Вернуться назад</button>
      </Link>
    </div>
  );
};

export default Info;
