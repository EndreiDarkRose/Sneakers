import Card from "../components/Card/index";
import { ReactComponent as Search1 } from "../img/search.svg";

import { ReactComponent as ButtonRemove } from "../img/btn-remove.svg";
import ContentLoader from "react-content-loader";
import { AppContext } from "../App";
import React from "react";
function Home({
  items = [],
  searchValue,
  onChangeSearchInput,
  setSearchValue,
  onAddToFavorite,
  onAddToCard,
  favorite,
  loading,
}) {
  const { hasCartItem, hasFavoriteItem } = React.useContext(AppContext);

  return (
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
        {loading
          ? [...Array(8)].map((_, index) => (
              <ContentLoader
                speed={2}
                width={210}
                height={260}
                viewBox="0 0 210 260"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="30" y="35" rx="10" ry="10" width="150" height="90" />
                <rect x="30" y="139" rx="5" ry="5" width="150" height="15" />
                <rect x="30" y="163" rx="5" ry="5" width="70" height="15" />
                <rect x="30" y="221" rx="5" ry="5" width="105" height="22" />
                <rect x="146" y="212" rx="5" ry="5" width="32" height="32" />
              </ContentLoader>
            ))
          : items
              .filter((item) =>
                item.name.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((item) => (
                <Card
                  key={item.id}
                  {...item}
                  onAddToFavorite={onAddToFavorite}
                  onAddToCard={onAddToCard}
                  addedState={() => hasCartItem(item.id)}
                  favoriteState={hasFavoriteItem(item.id)}
                  loading={loading}
                />
              ))}
      </div>
    </div>
  );
}

export default Home;
