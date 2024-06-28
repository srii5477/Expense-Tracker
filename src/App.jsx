import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeSpending from './components/IncomeSpending';
import History from './components/History';
import AddTransaction from './components/AddTransaction';
import TransactProvider from './context/TransactProvider';
import ChatBot from 'react-chatbotify';
import ChatWithAI from './components/ChatWithAI';


function App() {
  return (
    <>
    
    <div className="container">
          <Header />
          <TransactProvider>
          <Balance />
          <IncomeSpending />
          <History />
          <AddTransaction />
          <ChatWithAI/>
          </TransactProvider>
          
    </div>
    
    </>
    
  )
}

export default App
