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
                <Link to="/product">
                    <div className="PopularCategories__Apple">
                        <b className="Apple">Apple</b>
                        <span>
                            <img src="./img/Apple.jpg" alt="Apple" height={80} />
                        </span>
                    </div>
                </Link>
            </div>
        </main>
    );
}

export default MainHome;
