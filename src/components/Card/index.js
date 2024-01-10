import React from "react";
import { AppContext } from "../../App";
import { ReactComponent as FavoriteUnlike } from "../../img/favorite-unliked.svg";
import { ReactComponent as Favorite } from "../../img/favorite-liked.svg";
import { ReactComponent as ButtonAdd } from "../../img/ButtonAdd.svg";
import { ReactComponent as ButtonChecked } from "../../img/btnChecked.svg";

import styles from "./Card.module.scss";

function Card({
  img,
  name,
  id,
  price,
  onAddToFavorite,
  onAddToCard,
  renderFavoritesAndCard = true,
}) {
  const { hasCardItem, hasFavoriteItem } = React.useContext(AppContext);
  const itemObj = { img, name, price, id, parentId: id };

  const onClickPlus = () => {
    onAddToCard(itemObj);
    console.log(itemObj.id);
  };

  const onClickFavorite = () => {
    onAddToFavorite(itemObj);
  };

  const favorite = hasFavoriteItem(id) ? (
    <Favorite alt="like" onClick={onClickFavorite} />
  ) : (
    <FavoriteUnlike alt="unlike" onClick={onClickFavorite} />
  );

  const addToCard = hasCardItem(id) ? (
    <ButtonChecked className={styles.buttonAdd} onClick={onClickPlus} />
  ) : (
    <ButtonAdd className={styles.buttonAdd} onClick={onClickPlus} />
  );

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        {renderFavoritesAndCard && favorite}
      </div>
      <img src={img} alt="sneakers" width={133} height={112}></img>
      <h5>{name}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.price}>
          <p>ЦЕНА:</p>
          <b>{price} руб.</b>
        </div>
        {renderFavoritesAndCard && addToCard}
      </div>
    </div>
  );
}

export default Card;
