import React from 'react';
import piggyBankImage from '../assets/piggy.png'; // Adjust the path as needed

const PiggyBank = () => (
  <div style={{ textAlign: 'center', margin: '20px' }}>
    <img src={piggyBankImage} alt="Piggy Bank" style={{ width: '300px', height: 'auto' }} />
  </div>
);

export default PiggyBank;
