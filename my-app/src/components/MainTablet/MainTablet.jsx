import { Link } from "react-router-dom";

const MainTablet = () => {
    return (
        <main className="main">
            <div className='wrapper'>
                <div className="title">Ноутбуки <span className="countTitle">1 товар</span> </div>
                <div className="navigation">
                    <b><span className="nav">по популярности</span></b>
                    <b><span className="nav">по цене</span></b>
                    <b><span className="nav">по рейтенгу</span></b>
                    <b><span className="nav">по отзывам</span></b>
                </div>
                <Link to="/tablet/Thunderobot911AirD">
                    <span className="apple">
                        <div>
                            <img src="./img/tabletMain.webp" alt="Apple" height={110} />
                        </div>
                        <div className="inner">
                            <div className="appleTitle">Ноутбук игровой Thunderobot 911 Air D</div>
                            <div className="text">
                                <b> Диагональ: </b>15.6
                                <br />
                                <b>Процессор:</b>  Intel Core i5 11260H 2.6 ГГц;
                                <br />
                                <b>Оперативная память:</b>  8 ГБ;
                                <br />
                                <b>Размеры:</b>  75.7 х 164.2 х 8.3 мм;
                                <br />
                                <b>Графический контроллер:</b> GeForce GTX 1650 4GB
                            </div>
                        </div>
                    </span>
                </Link>
            </div>
        </main>
    );
}

export default MainTablet;
