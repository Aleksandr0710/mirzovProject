import React from 'react';

const Link = ({ link }) => {
    return (
        <a className={link.className} href={link.href} target={link.target} title={link.title}>{link.text}</a>
    );
}
export default Link;
