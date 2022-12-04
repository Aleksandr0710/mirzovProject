import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./img/logo.png";
import heart from "./img/heart.svg";
import cart from "./img/cart.png";

const CountCart = () => {
  const count = useSelector((state) => state.cart.products.length)
  return (
    <span className="header__count-cart">{count}</span>
  )
}

const CountFavorite = () => {
  const count = useSelector((state) => state.heart.favorites.length)
  return (
    <span className="header__count-heart">{count}</span>
  )
}
const Header = () => {
  return (
    <header className="header">
      <section className="header__inner wrapper">
        <Link to="/">
          <span className="header__logo">
            <img src={logo} alt="корзина с товаром" height="50" />
            <h1 className="header__title">
              <span className="header__subtitle">Mirzov</span>Market
            </h1>
          </span>
        </Link>
        <span className="header__widgets">
          <span className="header__heart">
            <img src={heart} alt="избранное" />
            <CountFavorite />
          </span>
          <span className="header__cart">
            <img src={cart} alt="корзина с товаром" height="50" />
            <CountCart />
          </span>
        </span>
      </section>
    </header>
  );
};

export default Header;
