import { useCurrentDate } from "@kundinos/react-hooks"
import CartBtnThunderobot from "./CartBtnThunderobot"
import FavoritBtnThunderobot from "./FavoritBtnThunderobot"
import "./Sidebar.css"

const SidebarThunderobot = () => {
    const currentDate = useCurrentDate();
    const month = currentDate.getMonth();
    const date = currentDate.getDate();
    const fullYear = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    return (
        <div className="sidebar__container sidebar">
            <p className="sidebar__inner">
                <span>
                    <span className="sidebar__price">62 593₽</span>
                    <span className="sidebar__discount">8%</span>
                </span>
                <FavoritBtnThunderobot />
            </p>
            <span className="sidebar__price-new">54 789₽</span>
            <div className="sidebar__info">
                <p>Самовывоз в четверг, 1 сентября — <b>бесплатно</b></p>
                <p>Курьером в четверг, 1 сентября — <b>бесплатно</b></p>
                <p><b>{`Текущая дата: ${month}.${date}.${fullYear}`}</b></p>
                <p><b>{`Текущее время: ${hours}:${minutes}:${seconds}`}</b></p>
                <CartBtnThunderobot />
            </div>
        </div>
    );
}

export default SidebarThunderobot;
