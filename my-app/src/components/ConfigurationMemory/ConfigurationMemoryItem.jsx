const ConfigurationMemoryItem = ({ memory, id, onClickHandler, checked }) => {
    return (
        <>
            <input className="configuration__radio radio "
                type="radio"
                name="configuration"
                id={id}
                key={id}
                defaultChecked={checked} />
            <label htmlFor={id} className="configuration__button-radio" onClick={() => onClickHandler(id)}>{memory}</label>
        </>
    );
}

export default ConfigurationMemoryItem;
