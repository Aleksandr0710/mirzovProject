import MainGalleryItem from "./MainGalleryItem"
import "./MainGallery.css"
const MainGalleryList = () => {
    return (
        <>
            <h2 className="gallery__title">Смартфон Apple iPhone 13, голубой</h2>
            <div className="gallery">
                {GalleryPhone.map(({ img, alt, id }) => (
                    <MainGalleryItem img={img} alt={alt} key={id} height="387" />
                ))}
            </div>
        </>
    );
}

const GalleryPhone = [
    {
        img: "./img/image1.webp",
        alt: "iPhone 13-экран",
        id: 10,
    },
    {
        img: "./img/image2.webp",
        alt: "iPhone 13-вид спереди и сзади",
        id: 11,
    },
    {
        img: "./img/image3.webp",
        alt: "iPhone 13-вид сбоку",
        id: 12,
    },
    {
        img: "./img/image4.webp",
        alt: "iPhone 13-камера",
        id: 13,
    },
    {
        img: "./img/image5.webp",
        alt: "iPhone 13-вид сзади и спереди",
        id: 14,
    },

]







export default MainGalleryList;
