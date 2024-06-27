import React, { useState, useContext, createContext, useReducer } from 'react';
import Reducer from './Reducer';

const TransactContext = createContext();
// dummy transactions to initialize
const initialState = {
    transactions: [
        
    ]
};

const TransactProvider = ({ children }) => {
  //const [ list, setList ] = useState(initialState);
  const [ state, dispatch ] = useReducer(Reducer, initialState);
  function addExpense (expense) {
    dispatch({
      type: 'ADD',
      payload: expense
    })
  }
  function delExpense (id) {
    dispatch({
      type: 'DEL',
      payload: id
    })
  }
  return (
    <TransactContext.Provider value={{
      transactions: state.transactions,
      addExpense,
      delExpense
    }}>
        {children}
    </TransactContext.Provider>
  )
}

export const useTransactListContext = () => useContext(TransactContext);
export default TransactProvider;



