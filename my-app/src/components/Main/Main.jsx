import "./Main.css";
import color1 from "./img/color1.png";
import color2 from "./img/color2.png";
import color3 from "./img/color3.png";
import color5 from "./img/color5.png";
import color6 from "./img/color6.png";
import image1 from "./img/image-1.webp";
import image2 from "./img/image-2.webp";
import image3 from "./img/image-3.webp";
import image4 from "./img/image-4.webp";
import image5 from "./img/image-5.webp";
import avatar1 from "./img/avatar-1.jpeg";
import avatar2 from "./img/avatar-2.jpeg";
import star from "./img/star.png";
import starNone from "./img/star_none.png";


const Main = () => {
  return (
    <main className="main">
      <section className="wrapper">
        <nav className="breadcrumbs">
          <a className="breadcrumbs a" href="#">Электроника</a> <span>{'>'}</span>
          <a className="breadcrumbs a" href="#">Смартфоны и гаджеты</a><span>{'>'}</span>
          <a className="breadcrumbs a" href="#">Мобильные телефоны</a><span>{'>'}</span>
          <a className="breadcrumbs a" href="#">Apple</a>
        </nav>
        <h2 className="main__title">Смартфон Apple iPhone 13, голубой</h2>
        <div className="gallery">
          <img src={image1} alt="iPhone 13-экран" height="387" />
          <img src={image2} alt="iPhone 13-вид спереди и сзади" height="387" />
          <img src={image3} alt="iPhone 13-вид сбоку" height="387" />
          <img src={image4} alt="iPhone 13-камера" height="387" />
          <img src={image5} alt="iPhone 13-вид сзади и спереди" height="387" />
        </div>
        <div className="main__container">
          <section>
            <h3>Характеристики товара:</h3>
            <p className="gallery__selected-item"><b>Цвет товара: голубой</b></p>
            <div className="preview">
              <input className="preview__radio radio" type="radio" name="preview" id="красный" />
              <label className="preview__img-radio " for="красный">
                <img src={color1} alt="красный" height="60" />
              </label>
              <input className="preview__radio radio" type="radio" name="preview" id="темно-зеленый" />
              <label className="preview__img-radio" for="темно-зеленый">
                <img src={color2} alt="темно-зеленый" height="60" />
              </label>
              <input className="preview__radio radio" type="radio" name="preview" id="розовый" />
              <label className="preview__img-radio" for="розовый">
                <img src={color3} alt="розовый" height="60" />
              </label>
              <input className="preview__radio radio" type="radio" name="preview" id="голубой" />
              <label className="preview__img-radio" for="голубой">
                <img src={image3} alt="голубой" height="60" />
              </label>
              <input className="preview__radio radio" type="radio" name="preview" id="черный" />
              <label className="preview__img-radio" for="черный">
                <img src={color6} alt="черный" height="60" />
              </label>
              <input className="preview__radio radio" type="radio" name="preview" id="белый" />
              <label className="preview__img-radio" for="белый">
                <img src={color5} alt="белый" height="60" />
              </label>
            </div>
            <p className="configurationMemory">Конфигурация памяти: 128 ГБ</p>
            <div className="configuration">
              <input className="configuration__radio radio 128" type="radio" name="configuration" id="128" />
              <label className="configuration__button-radio" for="128">
                128 ГБ
              </label>


              <input className="configuration__radio radio 256" type="radio" name="configuration" id="256" />
              <label className="configuration__button-radio" for="256">
                256 ГБ
              </label>
              <input className="configuration__radio radio 512" type="radio" name="configuration" id="512" />
              <label className="configuration__button-radio" for="512">
                512 ГБ
              </label>
            </div>
            <ul className="list">
              <li className="list__item">Экран:<b>6.1</b></li>
              <li className="list__item">Операционная система:<b>iOS 15</b></li>
              <li className="list__item">Беспроводные интерфейсы:<b>NFC, Bluetooth, Wi-Fi</b></li>
              <li className="list__item">Процессор: <a className="list__more a" href="https://ru.wikipedia.org/wiki/Apple_A15"
                title="вы будете перенаправлены на страницу Википедии" target="Apple A15">Apple A15 Bionic</a>
              </li>
              <li className="list__item">Вес:<b>173 г</b></li>
            </ul>
            <h2>Описание</h2>
            <p>
              Наша самая совершенная система двух камер.<br />
              Особый взгляд на прочность дисплея.<br />
              Чип, с которым всё супербыстро.<br />
              Аккумулятор держится заметно дольше.<br />
              <i>iPhone 13 - сильный мира всего.</i>
            </p>
            <p>
              Мы разработали совершенно новую схему расположения и
              развернулиобъективы на 45 градусов. Благодаря этому внутри корпуса
              поместилась нашалучшая система двух камер с увеличенной матрицей
              широкоугольной камеры.Кроме того, мы освободили место для системы
              оптической стабилизацииизображения сдвигом матрицы. И повысили
              скорость работы матрицы насверхширокоугольной камере.
            </p>
            <p>
              Новая сверхширокоугольная камера видит больше деталей в тёмных
              областях снимков. Новая широкоугольная камера улавливает на 47% больше
              света для более качественных фотографий и видео. Новая оптическая
              стабилизация сосдвигом матрицы обеспечит чёткие кадры даже в
              неустойчивом положении.
            </p>
            <p>
              Режим «Киноэффект» автоматически добавляет великолепные эффекты
              перемещенияфокуса и изменения резкости. Просто начните запись видео.
              Режим «Киноэффект»будет удерживать фокус на объекте съёмки, создавая
              красивый эффект размытия вокруг него. Режим «Киноэффект» распознаёт,
              когда нужно перевести фокус на другого человека или объект, который
              появился в кадре. Теперь ваши видео будут смотреться как настоящее
              кино.
            </p>

            <h2 className="compare-title">Cравнение моделей</h2>
            <table className="table">
              <thead>
                <tr>
                  <th className="table__title">Модель</th>
                  <th className="table__title">Вес</th>
                  <th className="table__title">Высота</th>
                  <th className="table__title">Ширина</th>
                  <th className="table__title">Толщина</th>
                  <th className="table__title">Чип</th>
                  <th className="table__title">Объём памяти</th>
                  <th className="table__title">Аккумулятор</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table__row">
                  <td className="table__info">Iphone 11</td>
                  <td className="table__info">194 грамма</td>
                  <td className="table__info">150.9 мм</td>
                  <td className="table__info">75.7 мм</td>
                  <td className="table__info">8.3 мм</td>
                  <td className="table__info">A13 Bionicchip</td>
                  <td className="table__info">до 128 Гб</td>
                  <td className="table__info">До 17 часов</td>
                </tr>
                <tr className="table__row">
                  <td className="table__info">Iphone 12</td>
                  <td className="table__info">164 грамма</td>
                  <td className="table__info">146.7 мм</td>
                  <td className="table__info">71.5 мм</td>
                  <td className="table__info">7.4 мм</td>
                  <td className="table__info">A14 Bionicchip</td>
                  <td className="table__info">до 256 Гб</td>
                  <td className="table__info">До 19 часов</td>
                </tr>
                <tr className="table__row">
                  <td className="table__info">Iphone 13</td>
                  <td className="table__info">174 грамма</td>
                  <td className="table__info">146.7 мм</td>
                  <td className="table__info">71.5 мм</td>
                  <td className="table__info">7.65 мм</td>
                  <td className="table__info">A15 Bionicchip</td>
                  <td className="table__info">до 512 Гб</td>
                  <td className="table__info">До 19 часов</td>
                </tr>
              </tbody>
            </table>

          </section>
          <section className="sidebar">
            <div className="sidebar__container">
              <p className="sidebar__inner">
                <span>
                  <span className="sidebar__price">75 990₽</span>
                  <span className="sidebar__discount">8%</span>
                </span>
                <label className="sidebar__heart">
                  <svg className="sidebar__heart-svg" width="35" height="35" viewBox="0 0 50 50" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M6.30838 10.9545C10.2979 7.12455 16.7444 7.12455 20.7339 10.9545L25.0002 15.0503L29.2667 10.9545C33.2563 7.12455 39.7027 7.12455 43.6923 10.9545C47.6817 14.7844 47.6817 20.973 43.6923 24.803L25.0002 42.7472L6.30838 24.803C2.31888 20.973 2.31888 14.7844 6.30838 10.9545ZM17.7876 13.7829C15.4253 11.5151 11.617 11.5151 9.25465 13.7829C6.89234 16.0507 6.89234 19.7067 9.25465 21.9746L25.0002 37.0904L40.746 21.9746C43.1083 19.7067 43.1083 16.0507 40.746 13.7829C38.3838 11.5151 34.5754 11.5151 32.2131 13.7829L25.0002 20.7072L17.7876 13.7829Z"
                      fill="grey" />
                  </svg>
                </label>
              </p>
              <span className="sidebar__price-new">67 990₽</span>
              <p className="sidebar__info">
                Самовывоз в четверг, 1 сентября — <b>бесплатно</b>
                <br />
                Курьером в четверг, 1 сентября — <b>бесплатно</b>
              </p>
              <button className="sidebar__button">Добавить в корзину</button>
            </div>

            <p className="advertisement">Реклама</p>
            <iframe className="iframe"src="https://www.youtube.com/embed/VjqttGTtam0" allow="allowfullscreen></" width="420" height="315"></iframe>
            <iframe width="420" height="315" src="https://www.youtube.com/embed/GLlEfWNXJaM" allow="fullscreen"></iframe>
          </section>
        </div>
        <section className="reviews">
          <div className="reviews__title">
            <h2>Отзывы</h2> <span className="reviews__count">3245</span>
          </div>
          <div className="review__item">
            <img className="review__avatar" src={avatar1} alt="Марк Г." height="200" />
            <div className="review__text">
              <b>Марк Г.</b>
              <div className="review__stars">
                <img src={star} alt="звездa" height="30" />
                <img src={star} alt="звездa" height="30" />
                <img src={star} alt="звездa" height="30" />
                <img src={star} alt="звездa" height="30" />
                <img src={star} alt="звездa" height="30" />
              </div>
              <p><b>Опыт использования:</b> менее месяца</p>
              <p>
                <b>Достоинства:</b> <br />это мой первый айфон после огромного
                количества телефонов на андроиде. всё плавно, чётко и красиво.
                довольно шустрое устройство. камера весьма неплохая.
              </p>
              <p>
                <b>Недостатки:</b> <br />к самому устройству мало имеет отношение, но
                перенос данных с андроида - адская вещь а если нужно переносить фото
                с компа, то это только через itunes, который урезает качество
                фотографий
              </p>
            </div>
          </div>
          <div className="review__item review__item--last">
            <img className="review__avatar" src={avatar2} alt="Валерий Коваленко" height="200" />
            <div className="review__text">
              <b>Валерий Коваленко</b>
              <div className="review__stars">
                <img src={star} alt="звездa" height="30" />
                <img src={star} alt="звездa" height="30" />
                <img src={star} alt="звездa" height="30" />
                <img src={star} alt="звездa" height="30" />
                <img src={starNone} alt="звездa" height="30" />
              </div>
              <p><b>Опыт использования:</b>менее месяца</p>
              <p>
                <b>Достоинства:</b><br />OLED экран, Дизайн, Система камер, Шустрый
                А15, Заряд держит долго
              </p>
              <p><b>Недостатки:</b> <br />Плохая ремонтопригодность</p>
            </div>
          </div>
          <form className="form">
            <h2>Добавить свой отзыв</h2>
            <div className="form__inner">
              <input className="form__name" placeholder="Имя и фамилия" />
              <input className="form__appraisement" placeholder="Оценка" />
            </div>
            <textarea className="form__text" placeholder="Текст отзыва"></textarea>
            <button className="form__button">Оставить отзыв</button>
          </form>
        </section>
      </section >
    </main >
  );
};

export default Main;
