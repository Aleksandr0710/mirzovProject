import BreadcrumbsList from "../Breadcrumbs/BreadcrumbsThunderobot"
import Reviews from "../Reviews/Reviews"
import ReviewsForm from "../ReviewsForm/ReviewsForm"
import SidebarThunderobot from "../SidebarThunderobot/SidebarThunderobot"
import Iframe from "../Iframe/Iframe"
import MainSliderList from "../MainSlider/MainSliderThunderobot"

const MainThunderobot = () => {
    return (
        <main className="main">
            <div className="wrapper">
                <BreadcrumbsList />
                <MainSliderList />
                <div className="main__container">
                    <section>

                        <h2>Описание</h2>
                        <p>
                            Thunderobot 911 Air D — игровой ноутбук с экраном, созданным по технологии AHVA.
                            Его диагональ — 15,6 дюйма, разрешение — 1920 х 1080 пикселей, частота обновления — 60 Гц.
                            Матовое покрытие обеспечивает защиту от бликования при ярком свете.
                        </p>
                        <br />
                        <p>
                            В основе аппаратной платформы — шестиядерный процессор Intel Core i5 11260H.
                            Его дополняют дискретная видеокарта GeForce GTX 1650 Max-Q, оперативная память 8 Гб и SSD-накопитель 256 Гб.
                            У клавиатуры есть подсветка.
                        </p>
                        <br />
                        <p>
                            Вес мобильного компьютера — 2,15 кг. Время работы на одном заряде аккумулятора — до 5 часов.
                            Толщина корпуса, сделанного из металла и пластика — 23,9 мм.
                            В него встроены веб-камера 1 Мп, два микрофона и звуковая система Nahimic Audio с двумя динамиками.
                        </p>
                    </section>
                    <section>
                        <SidebarThunderobot />
                        <Iframe />
                    </section>
                </div>
                <section className="reviews">
                    <Reviews />
                    <ReviewsForm />
                </section>
            </div>
        </main >
    );
}

export default MainThunderobot;
