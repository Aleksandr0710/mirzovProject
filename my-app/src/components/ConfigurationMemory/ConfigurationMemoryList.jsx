import { useState } from "react";
import "./ConfigurationMemory.css"
import ConfigurationMemoryItem from "./ConfigurationMemoryItem"
const ConfigurationMemoryList = () => {
    const [currentId, setCurrentId] = useState(7);
    const onClickHandler = (id) => {
        setCurrentId(id);
    }
    return (
        <>
            <li className="list__item configurationMemory">Конфигурация памяти: 128 ГБ</li>
            <div className="configuration">
                {configurationMemory.map(({ memory, id }) => (
                    <ConfigurationMemoryItem memory={memory} id={id} onClickHandler={onClickHandler} checked={currentId === id} />
                ))}
            </div>
        </>
    );
}

const configurationMemory = [{ memory: "128 Гб", id: 7 }, { memory: "256 Гб", id: 8 }, { memory: "512 Гб", id: 9 },]

export default ConfigurationMemoryList;
