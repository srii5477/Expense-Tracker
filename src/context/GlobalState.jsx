import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// dummy transactions to initialize
const initialState = {
    transactions: [
        { id: 1, text: 'Flowers', amt: -20 },
        { id: 2, text: 'Apples', amt: -50 },
        { id: 3, text: 'Notebooks', amt: -80 },
        { id: 4, text: 'Salary', amt: 120 }
    ]
};

// creating our global context
export const GlobalContext = createContext(initialState);
// wrap up components in provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    function delTransactions(id) {
        dispatch({
          type: 'DEL',
          payload: id
        });
      }
    
      function addTransaction(transaction) {
        dispatch({
          type: 'ADD',
          payload: transaction
        });
      }

    return (<GlobalContext.Provider value={{
        transactions:  state.transactions, delTransactions, addTransaction
    }}> {children} </GlobalContext.Provider>);
}