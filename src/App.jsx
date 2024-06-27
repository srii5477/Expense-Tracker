import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeSpending from './components/IncomeSpending';
import History from './components/History';
import AddTransaction from './components/AddTransaction';
import GlobalProvider from './context/GlobalState';

function App() {

  return (
    <GlobalProvider>
    <Header />
    <div className="container">
          <Balance amt="0" />
          <IncomeSpending income="0" expenditure="0" />
          <History />
          <AddTransaction />
    </div>
    </GlobalProvider>
  )
}

export default App
