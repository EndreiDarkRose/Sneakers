import { ReactComponent as Logo } from "../img/logo.svg";
import { ReactComponent as Favorite } from "../img/favorite.svg";
import { ReactComponent as Basket } from "../img/Group.svg";
import { ReactComponent as User } from "../img/user.svg";

function Header(props) {
  return (
    <header>
      <div className="headerLeft">
        <Logo />
        <div className="headerInfo">
          <h3>REACT SNEAKERS</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="headerRight">
        <li id="basket" onClick={props.onClickBasket}>
          <Basket />
          1205 руб.
        </li>
        <li>
          <Favorite />
          Закладки
        </li>
        <li>
          <User />
          Профиль
        </li>
      </ul>
    </header>
  );
}

export default Header;
