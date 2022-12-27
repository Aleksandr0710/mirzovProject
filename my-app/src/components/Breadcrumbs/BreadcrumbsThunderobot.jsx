import React from 'react';
import BreadcrumbsItem from "./BreadcrumbsItem";

const BreadcrumbsThunderobot = () => {
    return (
        <nav className="breadcrumbs">
            {breadcrumbs.map((text) => (
                <BreadcrumbsItem href={text.href} isLast={text.isLast} key={text.value}>{text.value} {text.isLast ? '' : ">"}</BreadcrumbsItem>
            ))}
        </nav>
    );
}
const breadcrumbs = [
    {
        href: "#",
        value: "Ноутбуки",
        isLast: false,
    },
    {
        href: "#",
        value: "Thunderobot 911 Air D",
        isLast: true,
    },
]
export default BreadcrumbsThunderobot;
