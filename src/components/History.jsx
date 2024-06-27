import React, { useContext } from 'react';
import { useTransactListContext } from '../context/TransactProvider';


const History = () => {
   const { transactions } = useTransactListContext();
   console.log(transactions);
   return (
    <div>
        <h3> History </h3>
        <ul className="historyList">
        <table>
            <tr>
            {transactions.map((transact, index) => (<h5 key={index}> <td> {transact.text}: {transact.amt} </td> <td> <button className="btn btn-outline-light flex-btn"> Delete </button> </td> </h5>))}
            </tr>
        </table>
        </ul>
    </div>
   ) 
}

export default History;