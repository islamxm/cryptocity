import { useEffect } from 'react';
import './RefTable.scss';


const RefTable = ({list = []}) => {

    
    return (
        <div className="RefTable panel">
            <table className="RefTable__table">
                <tr>
                    <th>Имя</th>
                    <th>Уровень</th>
                    <th>Заработок</th>
                    <th>Всего</th>
                </tr>
                {
                    list?.map((item, index) => (
                        <tr className='RefTable__table_row' key={item?.ID}>
                            <td><span>Имя</span>{item?.Name ? item?.Name : 'Не указано'}</td>
                            <td><span>Уровень</span>{item?.level}</td>
                            <td><span>Заработок</span>{item?.curProfit}MPI</td>
                            <td><span>Всего</span>{item?.allProfit}MPI</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default RefTable