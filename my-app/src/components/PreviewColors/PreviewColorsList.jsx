import { useState } from "react";
import "./PreviewColors.css";
import PreviewColorsItem from "./PreviewColorsItem"
const PreviewColors = () => {
  const [currentId] = useState(4);
  const [previewColor, setPreviewColor] = useState("голубой хрусталь")
  const previewColorHandler = (e) => {
    setPreviewColor(e.target.alt)
  }
  return (
    <>
      <li className=" list__item preview__selected-item">
        <b>Цвет товара: {previewColor} </b>
      </li>
      <div className="preview">
        {previewColors.map(({ id, alt, img, }) => (
          <PreviewColorsItem
            key={img}
            id={id}
            alt={alt}
            img={img}
            previewColorHandler={previewColorHandler}
            checked={currentId === id} />
        ))}
      </div>
    </>
  )
};

const previewColors = [
  {
    img: "../img/color1.png",
    alt: "красный",
    id: 1,
  },
  {
    img: "../img/color2.png",
    alt: "темно-зеленый",
    id: 2,
  },
  {
    img: "../img/color3.png",
    alt: "розовый",
    id: 3,
  },
  {
    img: "../img/color4.png",
    alt: "голубой хрусталь",
    id: 4,
  },
  {
    img: "../img/color5.png",
    alt: "белый",
    id: 5,
  },
  {
    img: "../img/color6.png",
    alt: "черный",
    id: 6,
  },
];

export default PreviewColors;
