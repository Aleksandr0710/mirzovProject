import { useCurrentDate } from "@kundinos/react-hooks"
import { useSelector } from "react-redux";
import FavoritBtn from "./FavoritBtn"
import CartBtn from "./CartBtn"
import "./Sidebar.css"

const Sidebar = () => {
    const currentDate = useCurrentDate();
    const month = currentDate.getMonth();
    const date = currentDate.getDate();
    const fullYear = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const NewPrice = () => {
        const newPrice = useSelector((state) => state.priceStore.currentMemory.newPrice)
        return (
            <span className="sidebar__price-new">{newPrice}</span>
        )
    }
    const Price = () => {
        const price = useSelector((state) => state.priceStore.currentMemory.price)
        return (
            <span className="sidebar__price">{price}</span>
        )
    }

    return (
        <div className="sidebar__container sidebar">
            <p className="sidebar__inner">
                <span>
                    <Price />
                    <span className="sidebar__discount">8%</span>
                </span>
                <FavoritBtn />
            </p>
            <NewPrice />
            <div className="sidebar__info">
                <p>Самовывоз в четверг, 1 сентября — <b>бесплатно</b></p>
                <p>Курьером в четверг, 1 сентября — <b>бесплатно</b></p>
                <p><b>{`Текущая дата: ${month}.${date}.${fullYear}`}</b></p>
                <p><b>{`Текущее время: ${hours}:${minutes}:${seconds}`}</b></p>
                <CartBtn />
            </div>
        </div>
    );
}

export default Sidebar;
