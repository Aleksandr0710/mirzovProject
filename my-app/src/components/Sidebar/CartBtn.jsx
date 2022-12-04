import { addProduct, deletProduct } from "../../reducers/cart-reducers";
import { useDispatch, useSelector } from "react-redux";
const Iphone = { id: 6710, name: "Iphone 13, голубой" };

const CartBtn = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const hasInCart =
    products.some((prevProduct) => {
      return prevProduct.id === Iphone.id;
    });
  const handleAddProduct = (e, product) => {
    dispatch(addProduct(product));
  };
  const handleDeletProduct = (e, product) => {
    dispatch(deletProduct(product));
  };

  return (
    <>
      {hasInCart ? (
        <button
          onClick={(e) => handleDeletProduct(e, Iphone)}
          className="sidebar__button--disabled"
        >
          Удалить товар из корзины
        </button>
      ) : (
        <button
          onClick={(e) => handleAddProduct(e, Iphone)}
          className="sidebar__button"
        >
          Добавить в корзину
        </button>
      )}
    </>
  );
};

export default CartBtn;
