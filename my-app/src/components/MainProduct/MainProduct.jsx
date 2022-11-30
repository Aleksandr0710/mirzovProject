import "./MainProduct.css";
import BreadcrumbsList from "../Breadcrumbs/BreadcrumbsList"
import Reviews from "../Reviews/Reviews"
import ProductCharacteristics from "../ProductCharacteristics/ProductCharacteristics"
import ReviewsForn from "../ReviewsForn/ReviewsForn"
import MainTable from "../MainTable/MainTable"
import Sidebsr from "../Sidebar/Sidebsr"
import Iframe from "../Iframe/Iframe"
import MainGalleryList from "../MainGallery/MainGalleryList"
const Main = () => {
  return (
    <main className="main">
      <div className="wrapper">
        <BreadcrumbsList />
        <MainGalleryList />
        <div className="main__container">
          <section>
            < ProductCharacteristics />
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
            <MainTable />
          </section>
          <section>
            <Sidebsr />
            <Iframe />
          </section>
        </div>
        <section className="reviews">
          <Reviews />
          <ReviewsForn />
        </section>
      </div>
    </main >
  );
};

export default Main;
