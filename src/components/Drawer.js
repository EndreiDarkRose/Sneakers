import React from "react";
import Info from "./Card/Info";
import axios from "axios";
import { AppContext } from "../App";

import { ReactComponent as ButtonRemove } from "../img/btn-remove.svg";
import { ReactComponent as Arrow } from "../img/arrow.svg";
import emptyCart from "../img/emptyCart.png";
import orderComplete from "../img/orderIsMade.png";

import useCard from "../hooks/useCard";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function Drawer({ onClose, items = [], removeItem }) {
  const [isComplete, setIsOrderComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(false);
  const { cardItems, setCardItems, totalPrice } = useCard();

  const onClickOrder = async () => {
    setIsOrderComplete(true);
    setCardItems([]);
    try {
      const { data } = await axios.post(
        "https://659baedcd565feee2dab79c9.mockapi.io/orders",
        {
          items: cardItems,
        }
      );
      for (let i = 0; i < cardItems.length; i++) {
        const item = cardItems[i];
        await axios.delete(
          "https://656ae9e6dac3630cf727705b.mockapi.io/cart/" + item.id
        );
        await delay(1000);
      }
      console.log(data);
      setOrderId(data.id);
    } finally {
    }
  };
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawerTop">
          <h2>Корзина</h2>
          <ButtonRemove onClick={onClose} />
        </div>
        {items.length > 0 ? (
          <div className="items">
            {items.map((items) => (
              <div className="cartItem" key={items.id}>
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
                  <strong>{totalPrice} руб.</strong>
                </li>
                <li>
                  <p>Налог 5%:</p>
                  <div></div>
                  <strong>{(totalPrice / 100) * 5} руб.</strong>
                </li>
              </ul>
              <button className="greenButton" onClick={onClickOrder}>
                Оформить заказ <Arrow />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isComplete ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы пару кроссовок, что бы сделать заказ."
            }
            image={isComplete ? orderComplete : emptyCart}
          ></Info>
        )}
      </div>
    </div>
  );
}

export default Drawer;
