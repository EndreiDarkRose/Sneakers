import { ReactComponent as Search1 } from "./img/search.svg";

import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";

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
  const [items, setItems] = React.useState([]);
  const [cardItems, setCardItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://656ae9e6dac3630cf727705b.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((res) => setItems(res));
  }, []);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToCard = (obj) => {
    setCardItems([...cardItems, obj]);
  };
  console.log(cardItems);
  return (
    <div className="wrapper">
      {cartOpened ? (
        <Drawer items={cardItems} onClose={() => setCartOpened(false)} />
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
          {items.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              price={item.price}
              img={item.img}
              onFavorite={() => console.log(item.name)}
              onPlus={(obj) => onAddToCard(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
