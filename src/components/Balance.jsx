import React from 'react';
import { useTransactListContext } from '../context/TransactProvider';

const Balance = () => {
    const { transactions } = useTransactListContext();
    function Final () {
        let total = 0;
        transactions.forEach(item => total+=parseInt(item.amt));
        console.log(total);
        return total;
    }
    return (
        <>
        <h3>Your current balance is: </h3>
        <h3> {Final()} </h3>
        </>
    )
}

export default Balance;