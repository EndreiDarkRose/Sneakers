import Header from "./components/Header";

import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";

import sneakersImage1 from "./img/sneakers/image1.jpg";
import sneakersImage2 from "./img/sneakers/image2.jpg";
import sneakersImage3 from "./img/sneakers/image3.jpg";
import sneakersImage4 from "./img/sneakers/image4.jpg";
import sneakersImage5 from "./img/sneakers/image5.jpg";
import sneakersImage6 from "./img/sneakers/image6.jpg";
import sneakersImage7 from "./img/sneakers/image7.jpg";
import sneakersImage8 from "./img/sneakers/image8.jpg";
import sneakersImage9 from "./img/sneakers/image9.jpg";
import sneakersImage10 from "./img/sneakers/image10.png";
import sneakersImage11 from "./img/sneakers/image11.png";
import sneakersImage12 from "./img/sneakers/image12.jpg";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

export const AppContext = React.createContext({});

function App() {
  const [items, setItems] = React.useState([]); // берутся из axios.get, попадают в <Card />
  const [favorite, setOnFavorite] = React.useState([]);
  const [cardItems, setCardItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const itemsData = await axios.get(
          "https://656ae9e6dac3630cf727705b.mockapi.io/items"
        );
        const cartData = await axios.get(
          "https://656ae9e6dac3630cf727705b.mockapi.io/cart"
        );
        const favoriteData = await axios.get(
          "https://659baedcd565feee2dab79c9.mockapi.io/favorites"
        );

        setItems(itemsData.data);
        setCardItems(cartData.data);
        setOnFavorite(favoriteData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
    console.log(event);
  };
  const onAddToCard = async (obj) => {
    try {
      const findItem = cardItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCardItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://656ae9e6dac3630cf727705b.mockapi.io/cart/${findItem.id}`
        );
      } else {
        setCardItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://656ae9e6dac3630cf727705b.mockapi.io/cart",
          obj
        );
        setCardItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Ошибка при добавлении в корзину");
      console.error(error);
    }
  };

  const hasCardItem = (id) => {
    return cardItems.some((item) => item.parentId === id);
  };

  const hasFavoriteItem = (id) => {
    return favorite.some((favorite) => favorite.parentId === id);
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorite.find((item) => item.id === obj.id)) {
        axios.delete(
          `https://659baedcd565feee2dab79c9.mockapi.io/favorites/${obj.id}`
        );
        console.log(obj.id);
        setOnFavorite((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          "https://659baedcd565feee2dab79c9.mockapi.io/favorites",
          obj
        );

        setOnFavorite([...favorite, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в избранное", error);
    }
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
    <AppContext.Provider
      value={{
        items,
        favorite,
        cardItems,
        hasCardItem,
        hasFavoriteItem,
        setCartOpened,
        setCardItems,
        onAddToFavorite,
        onAddToCard,
      }}
    >
      <div className="wrapper">
        {cartOpened ? (
          <Drawer
            items={cardItems}
            onClose={() => setCartOpened(false)}
            removeItem={removeItem}
          />
        ) : null}
        <Header onClickBasket={() => setCartOpened(true)} />
        <Routes>
          <Route
            path="react-pet-sneakers"
            element={
              <Home
                searchValue={searchValue}
                onChangeSearchInput={onChangeSearchInput}
                setSearchValue={setSearchValue}
                onAddToFavorite={onAddToFavorite}
                onAddToCard={onAddToCard}
                items={items}
                cardItems={cardItems}
                favorite={favorite}
                loading={loading}
              />
            }
          />
          <Route
            path="favorites"
            exact
            element={
              <Favorites
                favorite={favorite}
                onAddToFavorite={onAddToFavorite}
                items
              />
            }
          ></Route>
          <Route path="orders" element={<Orders />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
