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
        value: "Смартфоны",
        isLast: false,
    },
    {
        href: "#",
        value: "Apple",
        isLast: true,
    },
]
export default BreadcrumbsList;