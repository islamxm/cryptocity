import './WalletTable.scss';

const statusTypes = {
    check: 'check',
    done: 'done',
    cancel: 'cancel',
}


const WalletTable = () => {
    return ( 
        <div className="WalletTable panel">
            <table className="WalletTable__table">
                <tr>
                    <th>Тип перевода</th>
                    <th>Сумма</th>
                    <th>Статус</th>
                </tr>
                <tr className="WalletTable__table_row">
                    <td className='WalletTable__table_item WalletTable__table_type'>
                        Вывод
                    </td>
                    <td className='WalletTable__table_item WalletTable__table_sum'>
                        <div className="WalletTable__table_sum_main">1.022222 MPI <span>-15</span></div>
                        <div className="WalletTable__table_sum_tm">9.09.2022 12:59</div>
                    </td>
                    <td className='WalletTable__table_item WalletTable__table_status WalletTable__table_status-check'>
                        Проверка
                    </td>
                </tr>
                <tr className="WalletTable__table_row">
                    <td className='WalletTable__table_item WalletTable__table_type'>
                        Вывод
                    </td>
                    <td className='WalletTable__table_item WalletTable__table_sum'>
                        <div className="WalletTable__table_sum_main">1.022222 MPI <span>-15</span></div>
                        <div className="WalletTable__table_sum_tm">9.09.2022 12:59</div>
                    </td>
                    <td className='WalletTable__table_item WalletTable__table_status WalletTable__table_status-done'>
                        Выполнен
                    </td>
                </tr>
                <tr className="WalletTable__table_row">
                    <td className='WalletTable__table_item WalletTable__table_type'>
                        Вывод
                    </td>
                    <td className='WalletTable__table_item WalletTable__table_sum'>
                        <div className="WalletTable__table_sum_main">1.022222 MPI <span>-15</span></div>
                        <div className="WalletTable__table_sum_tm">9.09.2022 12:59</div>
                    </td>
                    <td className='WalletTable__table_item WalletTable__table_status WalletTable__table_status-cancel'>
                        Отклонен
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default WalletTable;