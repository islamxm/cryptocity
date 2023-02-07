import './RefTable.scss';


const RefTable = () => {
    return (
        <div className="RefTable panel">
            <table className="RefTable__table">
                <tr>
                    <th>Имя</th>
                    <th>Уровень</th>
                    <th>Заработок</th>
                    <th>Всего</th>
                </tr>
                <tr className='RefTable__table_row'>
                    <td><span>Имя</span>protaps</td>
                    <td><span>Уровень</span>23</td>
                    <td><span>Заработок</span>0,0155MPI</td>
                    <td><span>Всего</span>0,0155MPI</td>
                </tr>
                <tr className='RefTable__table_row'>
                    <td><span>Имя</span>protaps</td>
                    <td><span>Уровень</span>23</td>
                    <td><span>Заработок</span>0,0155MPI</td>
                    <td><span>Всего</span>0,0155MPI</td>
                </tr>
                <tr className='RefTable__table_row'> 
                    <td><span>Имя</span>protaps</td>
                    <td><span>Уровень</span>23</td>
                    <td><span>Заработок</span>0,0155MPI</td>
                    <td><span>Всего</span>0,0155MPI</td>
                </tr>
            </table>
        </div>
    )
}

export default RefTable