import { ReactComponent as Search1 } from "./img/search.svg";

import Header from "./components/Header";
import Card from "./components/Card/index";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";

import { ReactComponent as ButtonRemove } from "./img/btn-remove.svg";

import sneakersImage1 from "./img/sneakers/image 1.jpg";
import sneakersImage2 from "./img/sneakers/image 2.jpg";
import sneakersImage3 from "./img/sneakers/image 3.jpg";
import sneakersImage4 from "./img/sneakers/image 4.jpg";
import sneakersImage5 from "./img/sneakers/image 5.jpg";
import sneakersImage6 from "./img/sneakers/image 6.jpg";
import sneakersImage7 from "./img/sneakers/image 7.jpg";
import sneakersImage8 from "./img/sneakers/image 8.jpg";
import sneakersImage9 from "./img/sneakers/image 9.jpg";
import sneakersImage10 from "./img/sneakers/image 10.png";
import sneakersImage11 from "./img/sneakers/image 11.png";
import sneakersImage12 from "./img/sneakers/image 12.jpg";

function App() {
  const [items, setItems] = React.useState([]); // берутся из axios.get, попадают в <Card />
  const [favorite, setOnFavorite] = React.useState([]);
  const [cardItems, setCardItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://656ae9e6dac3630cf727705b.mockapi.io/items")
      .then((response) => {
        setItems(response.data);
      });
    axios
      .get("https://656ae9e6dac3630cf727705b.mockapi.io/cart")
      .then((response) => {
        setCardItems(response.data);
      });
  }, []);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
    console.log(event);
  };

  // при нажатии на плюс добовляются в корзину и в функию передается объект {img, price, name}
  const onAddToCard = (obj) => {
    axios.post("https://656ae9e6dac3630cf727705b.mockapi.io/cart", obj);
    setCardItems([...cardItems, obj]);
    console.log(obj.id);
  };

  const onAddToFavorite = (obj) => {
    axios.post("https://657e6c873e3f5b189463b0e1.mockapi.io/favorite", obj);
    setOnFavorite([...favorite, obj]);
    console.log(obj.id);
  };

  const removeItem = (id) => {
    axios
      .delete(`https://656ae9e6dac3630cf727705b.mockapi.io/cart/${id}`)
      .then(() => {
        setCardItems((items) => items.filter((item) => item.id !== id));
        console.log(id);
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };
  return (
    <div className="wrapper">
      {cartOpened ? (
        <Drawer
          items={cardItems}
          onClose={() => setCartOpened(false)}
          removeItem={removeItem}
        />
      ) : null}
      <Header onClickBasket={() => setCartOpened(true)} />
      <div className="content">
        <div className="content-top">
          <h1>
            {searchValue ? `Поиск по запросу: ${searchValue}` : `Все кроссовки`}
          </h1>
          <div className="search-block">
            <Search1 />
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
            />
            {searchValue && (
              <ButtonRemove
                width={18}
                height={18}
                onClick={() => setSearchValue("")}
              />
            )}
          </div>
        </div>
        <div className="sneakers">
          {items
            .filter((item) =>
              item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
              <Card
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCard(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
