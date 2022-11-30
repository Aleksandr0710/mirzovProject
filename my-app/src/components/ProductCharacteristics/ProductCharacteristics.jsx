import './ProductCharacteristics.css'
import PreviewColors from "../PreviewColors/PreviewColorsList"
import ConfigurationMemory from "../ConfigurationMemory/ConfigurationMemoryList"
import Link from "../Link/Link"
const ProductCharacteristics = () => {
    return (
        <>
            <h3>Характеристики товара:</h3>
            <ul className="list">
                <PreviewColors />
                <ConfigurationMemory />
                {characteristics.map((characteristic) => (
                    <li className="list__item" key={characteristic.id}>{characteristic.element}<b>{characteristic.feature}</b></li>
                ))}
                <li className="list__item">Процессор:
                    <Link link={{ className: "link", href: "https://ru.wikipedia.org/wiki/Apple_A15", title: "вы будете перенаправлены на страницу Википедии", text: "Apple A15 Bionic", target: "Apple A15" }} />
                </li>
            </ul>
        </>
    );
}
const characteristics = [
    {
        element: "Экран:",
        feature: "6.1",
        id: 1,
    },
    {
        element: "Операционная система:",
        feature: "iOS 15",
        id: 2,
    },
    {
        element: "Беспроводные интерфейсы:",
        feature: "NFC, Bluetooth, Wi-Fi",
        id: 3,
    },
    {
        element: "Вес:",
        feature: "173 г",
        id: 4,
    },
]

export default ProductCharacteristics;
