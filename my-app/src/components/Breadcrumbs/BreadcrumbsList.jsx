import "./Breadcrumbs.css";
import BreadcrumbsItem from "./BreadcrumbsItem";

const BreadcrumbsList = () => (
    <nav className="breadcrumbs">
        {breadcrumbs.map((text) => (
            <BreadcrumbsItem href={text.href} isLast={text.isLast} key={text.value}>{text.value} {text.isLast ? '' : ">"}</BreadcrumbsItem>
        ))}
    </nav>
)
const breadcrumbs = [
    {
        href: "#",
        value: "Электроника",
        isLast: false,
    },
    {
        href: "#",
        value: "Смартфоны и гаджеты",
        isLast: false,
    },
    {
        href: "#",
        value: "Мобильные телефоны",
        isLast: false,
    },
    {
        href: "#",
        value: "Apple",
        isLast: true,
    },
]
export default BreadcrumbsList;