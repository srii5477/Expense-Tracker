import React, { useState, useContext, createContext } from 'react';


const TransactContext = createContext();
// dummy transactions to initialize
const initialState = {
    transactions: [
        { id: 1, text: 'Flowers', amt: -20 },
        { id: 2, text: 'Apples', amt: -50 },
        { id: 3, text: 'Notebooks', amt: -80 },
        { id: 4, text: 'Salary', amt: 120 }
    ]
};

const TransactProvider = ({ children }) => {
  const [ list, setList ] = useState(initialState);
  return (
    <TransactContext.Provider value={list}>
        {children}
    </TransactContext.Provider>
  )
}

export const useTransactListContext = () => useContext(TransactContext);
export default TransactProvider;



