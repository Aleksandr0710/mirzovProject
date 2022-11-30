import "./MainHome.css"
import { Link } from "react-router-dom";
const MainHome = () => {
    return (
        <main className="main">
            <div className='wrapper'>
                <div className="gallery">
                    <img src="./img/по приколу1.webp" alt="акция ко дню матери" height="330" />
                    <img src="./img/по приколу2.png" alt="товары для дачи" height="330" />
                </div>
                <h1 className="PopularCategories__title">Популярные категории</h1>
                <div className="PopularCategories__Apple">
                    <b className="Apple">Apple</b>
                    <Link to="/product">
                        <span >
                            <img src="./img/Apple.jpg" alt="Apple" height={100} />
                        </span>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default MainHome;
