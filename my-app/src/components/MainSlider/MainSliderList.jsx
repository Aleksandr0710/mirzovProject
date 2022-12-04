import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import MainSliderItem from "./MainSliderItem"
import "./MainSlider.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MainSlider = () => {
    return (
        <>
            <h2 className="slider__title">Смартфон Apple iPhone 13, голубой</h2>
            <div className="sliderBox">
                <Swiper
                    modules={[Navigation, Pagination]}
                    pagination={{ clickable: true }}
                    navigation
                    slidesPerView={1}
                    grabCursor={true}
                >
                    {SliderPhone.map(({ img, alt, id }) => (
                        <SwiperSlide key={img}><MainSliderItem img={img} alt={alt} key={img} height="387" /></SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

const SliderPhone = [
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

export default MainSlider;
