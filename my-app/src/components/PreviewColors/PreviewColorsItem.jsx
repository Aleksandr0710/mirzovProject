const PreviewColorsItem = ({ id, img, alt, onChangeHandler, checked }) => {
    return (
        <>
            <input
                className="preview__radio radio"
                type="radio"
                name="preview"
                id={id}
                defaultChecked={checked}
            />
            <label className="preview__img-radio " htmlFor={id} key={id} onClick={() => onChangeHandler(id)}>
                <img src={img} alt={alt} height="60" />
            </label>
        </>
    );
}

export default PreviewColorsItem;
