import { ReactComponent as FavoriteUnlike } from "../img/favorite-unliked.svg";
import sneakersImage1 from "../img/sneakers/image 1.jpg";
import { ReactComponent as ButtonAdd } from "../img/ButtonAdd.svg";

function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <FavoriteUnlike alt="unlike" />
      </div>
      <img src={sneakersImage1} alt="sneakers" width={133} height={112}></img>
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
  );
}

export default Card;
