require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
const {API_URL, PRIVATE_KEY}= process.env;
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "ropsten",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {},
    ropsten: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      // gas: ,
      // gasPrice: ,
    },
  },
};
