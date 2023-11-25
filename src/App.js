import { ReactComponent as Logo } from "./img/logo.svg";
import { ReactComponent as Favorite } from "./img/favorite.svg";
import { ReactComponent as Group } from "./img/Group.svg";
import { ReactComponent as User } from "./img/user.svg";
import { ReactComponent as ButtonAdd } from "./img/ButtonAdd.svg";
import sneakersImage1 from "./img/sneakers/image 1.jpg";
import sneakersImage2 from "./img/sneakers/image 2.jpg";
import sneakersImage3 from "./img/sneakers/image 3.jpg";
import sneakersImage4 from "./img/sneakers/image 4.jpg";

function App() {
  return (
    <div className="wrapper">
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
        <h1>Все кроссовки</h1>
        <div className="sneakers">
          <div className="card">
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
