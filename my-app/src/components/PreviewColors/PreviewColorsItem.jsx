const PreviewColorsItem = ({ id, img, alt, previewColorHandler, accept, checked }) => {
    return (
        <>
            <input
                className="preview__radio radio"
                type="radio"
                name="preview"
                id={id}
                defaultChecked={checked}
                onClick={(e) => previewColorHandler(e)}
                alt={alt}
            />
            <label className="preview__img-radio "
                htmlFor={id}
                key={id}
            >
                <img src={img} alt={alt} height="60" />
            </label>
        </>
    );
}

export default PreviewColorsItem;
