import React from "react";
import { AppContext } from "../../App";

import { Link } from "react-router-dom";
export const Info = ({ title, description, image }) => {
  const { setCartOpened } = React.useContext(AppContext);
  return (
    <div className="emptyCart">
      <img src={image}></img>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link to="/react-pet-sneakers">
        <button onClick={() => setCartOpened(false)}>Вернуться назад</button>
      </Link>
    </div>
  );
};

export default Info;
