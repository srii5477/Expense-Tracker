import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalState';


const History = () => {
   const {transactions} = useContext(GlobalContext);
   return (
    <div>
        <h3> History </h3>
        <ul className="historyList">
            {transactions.map((transact) => ())}
        </ul>
    </div>
   ) 
}

export default History;