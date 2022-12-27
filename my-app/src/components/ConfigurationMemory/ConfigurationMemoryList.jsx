import { addPrice } from "../../reducers/price-reducer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./ConfigurationMemory.css"
import ConfigurationMemoryItem from "./ConfigurationMemoryItem"


const ConfigurationMemoryList = () => {
    const dispatch = useDispatch();
    const memories = useSelector((state) => state.priceStore.initialPrices);
    const handleAddPrice = (e) => {
        const setCurrentMemory = () => {
            return memories.find(memoryItem => memoryItem.memory === memory)
        }
        const item = setCurrentMemory();
        dispatch(addPrice(item));
    };
    const [currentId] = useState(7);
    const [memory, setMemory] = useState("128 Гб")
    const MemoryHandler = (e) => {
        setMemory(e.target.innerText)
    }
    return (
        <div className="configuration">
            <li className="list__item configurationMemory">
                Конфигурация памяти: {memory}
            </li>
            {memories.map(({ memory, id }) => (
                <ConfigurationMemoryItem
                    key={memory}
                    memory={memory}
                    handleAddPrice={handleAddPrice}
                    MemoryHandler={MemoryHandler}
                    id={id}
                    checked={currentId === id} />
            ))}
        </div>
    );
}

export default ConfigurationMemoryList;
