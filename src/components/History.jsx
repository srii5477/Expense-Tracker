import React, { useContext } from 'react';
import { useTransactListContext } from '../context/TransactProvider';


const History = () => {
   const { transactions, addExpense, delExpense } = useTransactListContext();
   console.log(transactions);
   return (
    <div>
        <h3> History </h3>
        <ul className="historyList">
            {transactions.map((transact, index) => (<li> <h5 key={index}> {transact.text}: {transact.amt}  <button onClick={() => delExpense(transact.id)}className="btn btn-outline-light flex-btn"> Delete </button></h5> </li>))}
        </ul>
    </div>
   ) 
}

export default History;