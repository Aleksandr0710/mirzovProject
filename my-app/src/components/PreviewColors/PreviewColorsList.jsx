import { useState } from "react";
import "./PreviewColors.css";
import PreviewColorsItem from "./PreviewColorsItem"
const PreviewColors = () => {
  const [currentId, setCurrentId] = useState(4);
  const onClickHandler = (id) => {
    setCurrentId(id);
  }
  return (
    <>
      <li className=" list__item preview__selected-item"><b>Цвет товара: голубой</b></li>
      <div className="preview">
        {previewColors.map(({ id, alt, img }) => (
          <PreviewColorsItem id={id} alt={alt} img={img} onClickHandler={onClickHandler} checked={currentId === id} />
        ))}
      </div>
    </>
  )
};

const previewColors = [
  {
    img: "./img/color1.png",
    alt: "красный iphone",
    id: 1,
  },
  {
    img: "./img/color2.png",
    alt: "темно-зеленый iphone",
    id: 2,
  },
  {
    img: "./img/color3.png",
    alt: "розовый iphone",
    id: 3,
  },
  {
    img: "./img/color4.png",
    alt: "голубой iphone",
    id: 4,
  },
  {
    img: "./img/color5.png",
    alt: "черный iphone",
    id: 5,
  },
  {
    img: "./img/color6.png",
    alt: "белый iphone",
    id: 6,
  },
];

export default PreviewColors;
