require('@nomicfoundation/hardhat-ethers');
require('@nomicfoundation/hardhat-toolbox'); // If you are using Hardhat Toolbox

const { infuraKey, mnemonic } = require('./secrets.json'); // Ensure you have secrets.json with your Infura key and mnemonic

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/${infuraKey}`,
      accounts: { mnemonic: mnemonic }
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${infuraKey}`,
      accounts: { mnemonic: mnemonic }
    }
  }
};
