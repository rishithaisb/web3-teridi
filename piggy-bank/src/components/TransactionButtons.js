// src/components/TransactionButtons.js
import React, { useState } from 'react';
import { contract } from '../contract'; // Import the contract instance
import { ethers } from 'ethers';

const TransactionButtons = () => {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDeposit = async () => {
    setLoading(true);
    try {
      const tx = await contract.deposit({ value: ethers.utils.parseEther(amount) });
      await tx.wait();
      alert('Deposit successful!');
    } catch (error) {
      console.error('Error depositing:', error);
      alert('Deposit failed!');
    } finally {
      setLoading(false);
    }
  };

  const handleWithdraw = async () => {
    setLoading(true);
    try {
      const tx = await contract.withdraw(ethers.utils.parseEther(amount));
      await tx.wait();
      alert('Withdrawal successful!');
    } catch (error) {
      console.error('Error withdrawing:', error);
      alert('Withdrawal failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount in ETH"
      />
      <button style={buttonStyle} onClick={handleDeposit} disabled={loading}>
        Deposit
      </button>
      <button style={buttonStyle} onClick={handleWithdraw} disabled={loading}>
        Withdraw
      </button>
      {loading && <p>Loading...</p>}
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

export default TransactionButtons;
