import "./Header.css";
import logo from "./img/logo.png";
import heart from "./img/heart.svg";
import cart from "./img/cart.png";
const Header = () => {
  return (
    <header className="header">
      <section className="header__inner wrapper">
        <span className="header__logo">
          <img src={logo} alt="корзина с товаром" height="50" />
          <h1 className="header__title">
            <span className="header__subtitle">Mirzov</span>Market
          </h1>
        </span>
        <span className="header__widgets">
          <span className="header__heart">
            <img src={heart} alt="избранное" />
            <span className="header__count-heart">0</span>
          </span>
          <span className="header__cart">
            <img src={cart} alt="корзина с товаром" height="50" />
            <span className="header__count-cart">0</span>
          </span>
        </span>
      </section>
    </header>
  );
};

export default Header;
