import React from "react";
import { ReactComponent as FavoriteUnlike } from "../../img/favorite-unliked.svg";
import { ReactComponent as Favorite } from "../../img/favorite-liked.svg";

import { ReactComponent as ButtonAdd } from "../../img/ButtonAdd.svg";

import { ReactComponent as ButtonChecked } from "../../img/btnChecked.svg";

import styles from "./Card.module.scss";

function Card({ img, name, id, price, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [addFavorite, setOnFavorite] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ img, name, price, id });

    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    setOnFavorite(!addFavorite);
    onFavorite({ img, name, price, id });
  };

  const favorite = addFavorite ? (
    <Favorite alt="like" onClick={onClickFavorite} />
  ) : (
    <FavoriteUnlike alt="unlike" onClick={onClickFavorite} />
  );

  const buttonComponent = isAdded ? (
    <ButtonChecked className={styles.buttonAdd} onClick={onClickPlus} />
  ) : (
    <ButtonAdd className={styles.buttonAdd} onClick={onClickPlus} />
  );

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>{favorite}</div>
      <img src={img} alt="sneakers" width={133} height={112}></img>
      <h5>{name}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.price}>
          <p>ЦЕНА:</p>
          <b>{price} руб.</b>
        </div>
        {buttonComponent}
      </div>
    </div>
  );
}

export default Card;
