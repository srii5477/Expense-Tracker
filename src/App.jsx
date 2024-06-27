import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeSpending from './components/IncomeSpending';
import History from './components/History';
import AddTransaction from './components/AddTransaction';
import TransactProvider from './context/TransactProvider';

function App() {

  return (
    <>
    
    <div className="container">
          <Header />
          <TransactProvider>
          <Balance />
          <IncomeSpending income="0" expenditure="0" />
          <History />
          <AddTransaction />
          </TransactProvider>
    </div>
    </>
    
  )
}

export default App
