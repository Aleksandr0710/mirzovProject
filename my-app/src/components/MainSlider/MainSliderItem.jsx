const MainGalleryItem = ({ id, img, alt }) => {
    return (
        <img src={img} alt={alt} key={id} height="387" />
    );
}

export default MainGalleryItem;
