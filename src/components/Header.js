import { ReactComponent as Logo } from "../img/logo.svg";
import { ReactComponent as Favorite } from "../img/favorite.svg";
import { ReactComponent as Basket } from "../img/Group.svg";
import { ReactComponent as User } from "../img/user.svg";

import { Link } from "react-router-dom";

import useCard from "../hooks/useCard";
import React from "react";
function Header(props) {
  const { totalPrice } = useCard();
  return (
    <header>
      <div className="headerLeft">
        <Link to="">
          <Logo />
          <div className="headerInfo">
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </Link>
      </div>
      <ul className="headerRight">
        <li id="basket" onClick={props.onClickBasket}>
          <Basket />
          {totalPrice} руб.
        </li>
        <Link to="favorites">
          <li>
            <Favorite />
            Закладки
          </li>
        </Link>
        <Link to="orders">
          <li>
            <User />
            Профиль
          </li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
