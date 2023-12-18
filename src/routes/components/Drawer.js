import { ReactComponent as ButtonRemove } from "../img/btn-remove.svg";

import { Route } from "react-router-dom";

import { ReactComponent as Arrow } from "../img/arrow.svg";
import emptyCart from "../img/emptyCart.png";

function Drawer({ onClose, items = [], removeItem }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawerTop">
          <h2>Корзина</h2>
          <Route path="/test">qwe</Route>
          <ButtonRemove onClick={onClose} />
        </div>
        {items.length > 0 ? (
          <div className="items">
            {items.map((items) => (
              <div className="cartItem">
                <img
                  src={items.img}
                  alt="sneakers"
                  width={70}
                  height={70}
                ></img>
                <div className="cartItemSide">
                  <p>{items.name}</p>
                  <strong>{items.price} руб.</strong>
                </div>
                <div className="btnRemove">
                  <ButtonRemove onClick={() => removeItem(items.id)} />
                </div>
              </div>
            ))}
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <p>Итого:</p>
                  <div></div>
                  <strong>21 498 руб.</strong>
                </li>
                <li>
                  <p>Налог 5%:</p>
                  <div></div> <strong>1074 руб.</strong>
                </li>
              </ul>
              <button className="greenButton">
                Оформить заказ <Arrow />
              </button>
            </div>
          </div>
        ) : (
          <div className="emptyCart">
            <img src={emptyCart}></img>
            <h1>Корзина пустая</h1>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button onClick={onClose}>Вернуться назад</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
