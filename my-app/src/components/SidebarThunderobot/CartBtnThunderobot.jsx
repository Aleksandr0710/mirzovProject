import { addProduct, deletProduct } from "../../reducers/cart-reducers";
import { useDispatch, useSelector } from "react-redux";
const tablet = { id: 3467, name: "Thunderobot 911 Air D" };

const CartBtnThunderobot = () => {
    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();
    const hasInCart =
        products.some((prevProduct) => {
            return prevProduct.id === tablet.id;
        });
    const handleAddProduct = (e, tablet) => {
        dispatch(addProduct(tablet));
    };
    const handleDeletProduct = (e, tablet) => {
        dispatch(deletProduct(tablet));
    };

    return (
        <>
            {hasInCart ? (
                <button
                    onClick={(e) => handleDeletProduct(e, tablet)}
                    className="sidebar__button--disabled"
                >
                    Удалить товар из корзины
                </button>
            ) : (
                <button
                    onClick={(e) => handleAddProduct(e, tablet)}
                    className="sidebar__button"
                >
                    Добавить в корзину
                </button>
            )}
        </>
    );
}

export default CartBtnThunderobot;
