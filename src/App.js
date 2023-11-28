import { ReactComponent as Logo } from "./img/logo.svg";
import { ReactComponent as Favorite } from "./img/favorite.svg";
import { ReactComponent as Group } from "./img/Group.svg";
import { ReactComponent as User } from "./img/user.svg";
import { ReactComponent as ButtonAdd } from "./img/ButtonAdd.svg";
import sneakersImage1 from "./img/sneakers/image 1.jpg";
import sneakersImage2 from "./img/sneakers/image 2.jpg";
import sneakersImage3 from "./img/sneakers/image 3.jpg";
import sneakersImage4 from "./img/sneakers/image 4.jpg";
import { ReactComponent as Search1 } from "./img/search.svg";
import { ReactComponent as FavoriteUnlike } from "./img/favorite-unliked.svg";
import { ReactComponent as ButtonRemove } from "./img/btn-remove.svg";
function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer">
          <h2>Корзина</h2>
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
        </div>
      </div>

      <header>
        <div className="headerLeft">
          <Logo />

          <div className="headerInfo">
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <Group />
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
      <div className="content">
        <div className="content-top">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <Search1 />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers">
          <div className="card">
            <div className="favorite">
              <FavoriteUnlike alt="unlike" />
            </div>
            <img
              src={sneakersImage1}
              alt="sneakers"
              width={133}
              height={112}
            ></img>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="price">
                <p>ЦЕНА:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <ButtonAdd />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              src={sneakersImage2}
              alt="sneakers"
              width={133}
              height={112}
            ></img>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="price">
                <p>ЦЕНА:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <ButtonAdd />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              src={sneakersImage3}
              alt="sneakers"
              width={133}
              height={112}
            ></img>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="price">
                <p>ЦЕНА:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <ButtonAdd />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              src={sneakersImage4}
              alt="sneakers"
              width={133}
              height={112}
            ></img>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="price">
                <p>ЦЕНА:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <ButtonAdd />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
