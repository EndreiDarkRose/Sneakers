import { ReactComponent as ButtonRemove } from "../img/btn-remove.svg";

import { ReactComponent as Arrow } from "../img/arrow.svg";

function Drawer({ onClose, items = [] }) {
  console.log(ButtonRemove);
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawerTop">
          <h2>Корзина</h2>
          <ButtonRemove onClick={onClose} />
          {console.log(ButtonRemove)}
        </div>
        <div className="items">
          {items.map((items) => (
            <div className="cartItem">
              <img src={items.img} alt="sneakers" width={70} height={70}></img>
              <div className="cartItemSide">
                <p>{items.name}</p>
                <strong>{items.price} руб.</strong>
              </div>
              <div className="btnRemove">
                <ButtonRemove />
              </div>
            </div>
          ))}
        </div>
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
    </div>
  );
}

export default Drawer;
