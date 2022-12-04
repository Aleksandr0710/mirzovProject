import { addFavorite, deletFavorite } from "../../reducers/favorite-reducers";
import { useDispatch, useSelector } from "react-redux"
const Iphone = { id: 6710, name: "Iphone 13, голубой" };

const FavoritBtn = () => {
    const products = useSelector((state) => state.heart.favorites);
    const dispatch = useDispatch();
    const hasInHeart =
        products.some((prevFavorit) => {
            return prevFavorit.id === Iphone.id;
        });
    const handleAddFavorites = (e, favorit) => {
        dispatch(addFavorite(favorit));
    };
    const handleDeletProduct = (e, favorit) => {
        dispatch(deletFavorite(favorit));
    };

    return (
        <>
            {hasInHeart ? (
                <label onClick={(e) => handleDeletProduct(e, Iphone)} className="sidebar__heart">
                    <svg className="sidebar__heart-svg--disabled " width="35" height="35" viewBox="0 0 50 50" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M6.30838 10.9545C10.2979 7.12455 16.7444 7.12455 20.7339 10.9545L25.0002 15.0503L29.2667 10.9545C33.2563 7.12455 39.7027 7.12455 43.6923 10.9545C47.6817 14.7844 47.6817 20.973 43.6923 24.803L25.0002 42.7472L6.30838 24.803C2.31888 20.973 2.31888 14.7844 6.30838 10.9545ZM17.7876 13.7829C15.4253 11.5151 11.617 11.5151 9.25465 13.7829C6.89234 16.0507 6.89234 19.7067 9.25465 21.9746L25.0002 37.0904L40.746 21.9746C43.1083 19.7067 43.1083 16.0507 40.746 13.7829C38.3838 11.5151 34.5754 11.5151 32.2131 13.7829L25.0002 20.7072L17.7876 13.7829Z"
                            fill="grey" />
                    </svg>
                </label>
            ) : (
                <label onClick={(e) => handleAddFavorites(e, Iphone)} className="sidebar__heart">
                    <svg className="sidebar__heart-svg" width="35" height="35" viewBox="0 0 50 50" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M6.30838 10.9545C10.2979 7.12455 16.7444 7.12455 20.7339 10.9545L25.0002 15.0503L29.2667 10.9545C33.2563 7.12455 39.7027 7.12455 43.6923 10.9545C47.6817 14.7844 47.6817 20.973 43.6923 24.803L25.0002 42.7472L6.30838 24.803C2.31888 20.973 2.31888 14.7844 6.30838 10.9545ZM17.7876 13.7829C15.4253 11.5151 11.617 11.5151 9.25465 13.7829C6.89234 16.0507 6.89234 19.7067 9.25465 21.9746L25.0002 37.0904L40.746 21.9746C43.1083 19.7067 43.1083 16.0507 40.746 13.7829C38.3838 11.5151 34.5754 11.5151 32.2131 13.7829L25.0002 20.7072L17.7876 13.7829Z"
                            fill="grey" />
                    </svg>
                </label>
            )}
        </>
    );
};

export default FavoritBtn;