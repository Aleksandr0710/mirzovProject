import "./MainTable.css"
const MainTable = () => {
    return (
        <>
            <h2 className="compare-title">Cравнение моделей</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th className="table__title">Модель</th>
                        <th className="table__title">Вес</th>
                        <th className="table__title">Высота</th>
                        <th className="table__title">Ширина</th>
                        <th className="table__title">Толщина</th>
                        <th className="table__title">Чип</th>
                        <th className="table__title">Объём памяти</th>
                        <th className="table__title">Аккумулятор</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table__row">
                        <td className="table__info">Iphone 11</td>
                        <td className="table__info">194 грамма</td>
                        <td className="table__info">150.9 мм</td>
                        <td className="table__info">75.7 мм</td>
                        <td className="table__info">8.3 мм</td>
                        <td className="table__info">A13 Bionicchip</td>
                        <td className="table__info">до 128 Гб</td>
                        <td className="table__info">До 17 часов</td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__info">Iphone 12</td>
                        <td className="table__info">164 грамма</td>
                        <td className="table__info">146.7 мм</td>
                        <td className="table__info">71.5 мм</td>
                        <td className="table__info">7.4 мм</td>
                        <td className="table__info">A14 Bionicchip</td>
                        <td className="table__info">до 256 Гб</td>
                        <td className="table__info">До 19 часов</td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__info">Iphone 13</td>
                        <td className="table__info">174 грамма</td>
                        <td className="table__info">146.7 мм</td>
                        <td className="table__info">71.5 мм</td>
                        <td className="table__info">7.65 мм</td>
                        <td className="table__info">A15 Bionicchip</td>
                        <td className="table__info">до 512 Гб</td>
                        <td className="table__info">До 19 часов</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default MainTable;
