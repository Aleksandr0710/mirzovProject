import { Link } from "react-router-dom";
import "./MainPhone.css"
const MainPhone = () => {
    return (
        <main className="main">
            <div className='wrapper'>
                <div className="title">Смартфоны <span className="countTitle">1 товар</span> </div>
                <div className="navigation">
                    <b><span className="nav">по популярности</span></b>
                    <b><span className="nav">по цене</span></b>
                    <b><span className="nav">по рейтенгу</span></b>
                    <b><span className="nav">по отзывам</span></b>
                </div>
                <Link to="/phone/apple">
                    <span className="apple">
                        <div>
                            <img src="./img/color4.png" alt="Apple" height={170} />
                        </div>
                        <div className="inner">
                            <div className="appleTitle">Смартфон Apple iPhone 13, голубой</div>
                            <div className="text">
                                <b> Память: </b>оперативная 4 ГБ, встроенная 128 ГБ, 256 ГБ, 512 ГБ
                                <br />
                                <b>Аккумулятор:</b>  5000 мAч;
                                <br />
                                <b>Поддержка сетей:</b>  3G; 4G;
                                <br />
                                <b>Размеры:</b>  75.7 х 164.2 х 8.3 мм;
                                <br />
                                <b>Цвет товара:</b>  голубой хрусталь
                            </div>
                        </div>
                    </span>
                </Link>
            </div>
        </main>
    );
}

export default MainPhone;
