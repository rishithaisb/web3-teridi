import React from 'react';
import Header from './components/Header'; // Correct path
import PiggyBank from './components/PiggyBank'; // Correct path
import AccountButtons from './components/AcountButtons'
import TransactionButtons from './components/TransactionButtons'; // Correct path
import './index.css';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#ffe6e6', height: '100vh', padding: '20px' }}>
      <Header />
      <PiggyBank />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <TransactionButtons />
        <AccountButtons />
      </div>
    </div>
  );
}

export default App;
