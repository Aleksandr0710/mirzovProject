const ConfigurationMemoryItem = ({ memories, handleAddPrice, memory, id, MemoryHandler, checked }) => {
    
    return (
        <>
            <input className="configuration__radio radio "
                type="radio"
                name="configuration"
                id={id}
                key={id}
                defaultChecked={checked}
                onClick={(e) => handleAddPrice(e, memory)}
            />
            <label
                htmlFor={id}
                className="configuration__button-radio"
                onClick={(e) => MemoryHandler(e)}>
                {memory}
            </label>
        </>
    );
}

export default ConfigurationMemoryItem;
