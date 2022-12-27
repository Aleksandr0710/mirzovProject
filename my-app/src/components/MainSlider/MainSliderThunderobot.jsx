import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import MainSliderItem from "./MainSliderItem"

const MainSliderThunderobot = () => {
    return (
        <>
            <h2 className="slider__title">Ноутбук игровой Thunderobot 911 Air D</h2>
            <div className="sliderBox">
                <Swiper
                    modules={[Navigation, Pagination]}
                    pagination={{ clickable: true }}
                    navigation
                    slidesPerView={1}
                    grabCursor={true}
                >
                    {SliderTablet.map(({ img, alt }) => (
                        <SwiperSlide key={img}>
                            <MainSliderItem img={img} alt={alt} key={img} height="387" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

const SliderTablet = [
    {
        img: "../img/ноут1.webp",
        alt: "iPhone 13-экран",
    },
    {
        img: "../img/ноут2.webp",
        alt: "iPhone 13-вид спереди и сзади",
    },
    {
        img: "../img/ноут3.webp",
        alt: "iPhone 13-вид сбоку",
    },
    {
        img: "../img/ноут4.webp",
        alt: "iPhone 13-камера",
    },
]

export default MainSliderThunderobot;
