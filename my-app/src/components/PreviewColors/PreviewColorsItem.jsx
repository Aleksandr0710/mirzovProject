const PreviewColorsItem = ({ id, img, alt, onClickHandler, checked }) => {
    return (
        <>
            <input
                className="preview__radio radio"
                type="radio"
                name="preview"
                id={id}
                checked={checked}
            />
            <label className="preview__img-radio " htmlFor={id} key={id} onClick={() => onClickHandler(id)}>
                <img src={img} alt={alt} height="60" />
            </label>
        </>
    );
}

export default PreviewColorsItem;
