import { useCurrentDate } from "@kundinos/react-hooks"
import FavoritBtn from "./FavoritBtn"
import CartBtn from "./CartBtn"
import React from 'react';
import "./Sidebar.css"

const Sidebar = () => {
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
                    <span className="sidebar__price">75 990₽</span>
                    <span className="sidebar__discount">8%</span>
                </span>
                <FavoritBtn />
            </p>
            <span className="sidebar__price-new">67 990₽</span>
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
