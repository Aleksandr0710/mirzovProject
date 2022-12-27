import "./MainHome.css"
import { Link } from "react-router-dom";
const MainHome = () => {
    return (
        <main className="main">
            <div className='wrapper'>
                <div className="gallery">
                    <img src="./img/по приколу1.webp" alt="акция ко дню матери" height="320" />
                    <img src="./img/advertising.jpg" alt="товары для дачи" height="320" />
                </div>
                <h1 className="PopularCategories__title">Популярные категории</h1>
                <span className="PopularCategories__inner" >
                    <Link to="/phone">
                        <div className="PopularCategories">
                            <b className="phones">Смартфоны</b>
                            <span>
                                <img src="./img/Apple.jpg" alt="phones" height={80} />
                            </span>
                        </div>
                    </Link>
                    <Link to="/tablet">
                        <div className="PopularCategories">
                            <b className="phones">Ноутбуки</b>
                            <span>
                                <img src="./img/ноут.webp" alt="phones" height={70} />
                            </span>
                        </div>
                    </Link>
                </span>
            </div>
        </main>
    );
}

export default MainHome;
