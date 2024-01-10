import React from "react";

import Card from "../components/Card";
import Info from "../components/Card/Info";
import axios from "axios";
import sorrowEmoji from "../img/sorrowEmoji.png";
import { AppContext } from "../App";
import ContentLoader from "../components/ContentLoader";

function Orders({}) {
  const { onAddToFavorite, onAddToCard, hasCardItem, hasFavoriteItem } =
    React.useContext(AppContext);

  const [loading, setLoading] = React.useState(true);
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          "https://659baedcd565feee2dab79c9.mockapi.io/orders"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setLoading(false);
        console.log(data.items);
      } catch {
        console.log();
      }
    }

    fetchData();
  }, []);

  return (
    <div className="content">
      <div className="content-top">
        <h1>Мои покупки</h1>
      </div>
      <div className="sneakers">
        {loading ? (
          <ContentLoader />
        ) : orders.length > 1 ? (
          orders.map((item) => (
            <Card
              key={item.id}
              {...item}
              onAddToFavorite={onAddToFavorite}
              onAddToCard={onAddToCard}
              addedState={() => hasCardItem(item.id)}
              favoriteState={hasFavoriteItem(item.id)}
              loading={loading}
              renderFavoritesAndCard={false}
            />
          ))
        ) : (
          <Info
            title="У вас нет заказов"
            description="Вы нищеброд? Оформите хотя бы один заказ."
            image={sorrowEmoji}
          ></Info>
        )}
      </div>
    </div>
  );
}

export default Orders;
