import React from 'react';
import { useTransactListContext } from '../context/TransactProvider';

const IncomeSpending = () => {
    const { transactions } = useTransactListContext();
    function calcIncome () {
        let income = 0;
        transactions.forEach(item => {if (parseInt(item.amt) > 0) { income+=parseInt(item.amt); }});
        return income;
    }
    function calcExpenditure () {
        let expense = 0;
        transactions.forEach(item => {if (parseInt(item.amt) < 0) { expense+=parseInt(item.amt); }});
        return expense;
    }
    return (
        <div>
            <h4>
                Income: {calcIncome()}
                <br/>
                Expenditure: {calcExpenditure()}
            </h4>
        </div>
    )
}

export default IncomeSpending;