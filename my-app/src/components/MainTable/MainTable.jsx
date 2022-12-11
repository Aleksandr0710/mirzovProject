import styled from "styled-components"

const CompareTitle = styled.h2`
margin-top: 20px;
@media (min-width: 1024px) and (max-width: 1499px) {
 display: none;
}
@media (max-width:360px) {
   display: none;
}
`

const Table = styled.table`
 border-collapse: collapse;
 @media (min-width: 1024px) and (max-width: 1499px) {
        display: none;
}
@media (max-width:360px) {
   display: none;
}
`

const TableTitle = styled.th`
 border: 1px solid #888888;
 padding: 9px;
`

const TableInfo = styled.td`
 border: 1px solid #888888;
 padding: 9px;
`

const TableRow = styled.tr`
&:hover {
    cursor: pointer;
    background: rgb(222, 202, 238);
}
`

const MainTable = () => {
    return (
        <>
            <CompareTitle>Cравнение моделей</CompareTitle>
            <Table>
                <thead>
                    <tr>
                        <TableTitle>Модель</TableTitle>
                        <TableTitle>Вес</TableTitle>
                        <TableTitle>Высота</TableTitle>
                        <TableTitle>Ширина</TableTitle>
                        <TableTitle>Толщина</TableTitle>
                        <TableTitle>Чип</TableTitle>
                        <TableTitle>Объём памяти</TableTitle>
                        <TableTitle>Аккумулятор</TableTitle>
                    </tr>
                </thead>
                <tbody>
                    <TableRow>
                        <TableInfo>Iphone 11</TableInfo>
                        <TableInfo>194 грамма</TableInfo>
                        <TableInfo>150.9 мм</TableInfo>
                        <TableInfo>75.7 мм</TableInfo>
                        <TableInfo>8.3 мм</TableInfo>
                        <TableInfo>A13 Bionicchip</TableInfo>
                        <TableInfo>до 128 Гб</TableInfo>
                        <TableInfo>До 17 часов</TableInfo>
                    </TableRow>
                    <TableRow>
                        <TableInfo>Iphone 12</TableInfo>
                        <TableInfo>164 грамма</TableInfo>
                        <TableInfo>146.7 мм</TableInfo>
                        <TableInfo>71.5 мм</TableInfo>
                        <TableInfo>7.4 мм</TableInfo>
                        <TableInfo>A14 Bionicchip</TableInfo>
                        <TableInfo>до 256 Гб</TableInfo>
                        <TableInfo>До 19 часов</TableInfo>
                    </TableRow>
                    <TableRow>
                        <TableInfo>Iphone 13</TableInfo>
                        <TableInfo>174 грамма</TableInfo>
                        <TableInfo>146.7 мм</TableInfo>
                        <TableInfo>71.5 мм</TableInfo>
                        <TableInfo>7.65 мм</TableInfo>
                        <TableInfo>A15 Bionicchip</TableInfo>
                        <TableInfo>до 512 Гб</TableInfo>
                        <TableInfo>До 19 часов</TableInfo>
                    </TableRow>
                </tbody>
            </Table>
        </>
    );
}

export default MainTable;
