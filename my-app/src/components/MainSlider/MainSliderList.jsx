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
                    {SliderPhone.map(({ img, alt }) => (
                        <SwiperSlide key={img}>
                            <MainSliderItem img={img} alt={alt} key={img} height="387" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

const SliderPhone = [
    {
        img: "../img/image1.webp",
        alt: "iPhone 13-экран",
    },
    {
        img: "../img/image2.webp",
        alt: "iPhone 13-вид спереди и сзади",
    },
    {
        img: "../img/image3.webp",
        alt: "iPhone 13-вид сбоку",
    },
    {
        img: "../img/image4.webp",
        alt: "iPhone 13-камера",
    },
    {
        img: "../img/image5.webp",
        alt: "iPhone 13-вид сзади и спереди",
    },

]

export default MainSlider;
