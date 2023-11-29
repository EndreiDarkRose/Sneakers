import { ReactComponent as Logo } from "./img/logo.svg";
import { ReactComponent as Favorite } from "./img/favorite.svg";
import { ReactComponent as Group } from "./img/Group.svg";
import { ReactComponent as User } from "./img/user.svg";
import { ReactComponent as ButtonAdd } from "./img/ButtonAdd.svg";
import sneakersImage1 from "./img/sneakers/image 1.jpg";
import sneakersImage2 from "./img/sneakers/image 2.jpg";
import sneakersImage3 from "./img/sneakers/image 3.jpg";
import sneakersImage4 from "./img/sneakers/image 4.jpg";
import { ReactComponent as Search1 } from "./img/search.svg";
import { ReactComponent as FavoriteUnlike } from "./img/favorite-unliked.svg";
import { ReactComponent as ButtonRemove } from "./img/btn-remove.svg";
import { ReactComponent as Arrow } from "./img/arrow.svg";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
function App() {
  return (
    <div className="wrapper">
      <Drawer />

      <Header />
      <div className="content">
        <div className="content-top">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <Search1 />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
