import { ReactComponent as ButtonRemove } from "../img/btn-remove.svg";
import sneakersImage1 from "../img/sneakers/image 1.jpg";
import { ReactComponent as Arrow } from "../img/arrow.svg";
function Drawer() {
  return (
    <div className="overlay" style={{ display: "none" }}>
      <div className="drawer">
        <div className="drawerTop">
          <h2>Корзина</h2>
          <ButtonRemove />
        </div>
        <div className="items">
          <div className="cartItem">
            <img
              src={sneakersImage1}
              alt="sneakers"
              width={70}
              height={70}
            ></img>
            <div className="cartItemSide">
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <strong>12 999 руб.</strong>
            </div>
            <div className="btnRemove">
              <ButtonRemove />
            </div>
          </div>
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
