import React from "react";
import { AppContext } from "../App";

import Card from "../components/Card";
import Info from "../components/Card/Info";

import sadEmoji from "../img/sadEmoji.png";

function Favorites({ onAddToFavorite, items }) {
  const { favorite, hasFavoriteItem } = React.useContext(AppContext);
  return (
    <div className="content">
      <div className="content-top">
        <h1>Мои закладки</h1>
      </div>
      <div className="sneakers">
        {favorite.length > 0 ? (
          favorite.map((favorite) => (
            <Card
              key={favorite.id}
              favoriteState={hasFavoriteItem(items.id)}
              onAddToFavorite={onAddToFavorite}
              {...favorite}
            />
          ))
        ) : (
          <Info
            title="Закладок нет :("
            description="Вы ничего не добавляли в закладки"
            image={sadEmoji}
          ></Info>
        )}
      </div>
    </div>
  );
}

export default Favorites;
