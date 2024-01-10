import React from "react";
import { AppContext } from "../App";

export const useCart = () => {
  const { cardItems, setCardItems } = React.useContext(AppContext);

  const totalPrice = cardItems.reduce(
    (sum, item) => parseInt(item.price) + sum,
    0
  );

  return { cardItems, setCardItems, totalPrice };
};

export default useCart;
