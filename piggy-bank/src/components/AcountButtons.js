// src/components/AccountButtons.js
import React, { useState, useEffect } from 'react';
import { provider } from '../contract'; // Import the provider

const AccountButtons = () => {
  const [account, setAccount] = useState('');

  useEffect(() => {
    const getAccount = async () => {
      try {
        if (window.ethereum) {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          setAccount(accounts[0]);
        } else {
          alert('Please install MetaMask!');
        }
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    };

    getAccount();
  }, []);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <p>Account: {account}</p>
      <button style={buttonStyle} onClick={() => window.ethereum.request({ method: 'eth_requestAccounts' })}>
        Connect MetaMask
      </button>
    </div>
  );
};

const buttonStyle = {
  backgroundColor: '#fcb6b8',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  padding: '10px 20px',
  margin: '5px',
  cursor: 'pointer'
};

export default AccountButtons;
