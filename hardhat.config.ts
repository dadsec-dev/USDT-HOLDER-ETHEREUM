import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import  dotenv from 'dotenv';
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",

  networks: {
    hardhat: {},
    forking: {
      url: process.env.ALchemy_mainnet,
      //@ts-ignore
      accounts: [process.env.PRIVATE_KEY1, process.env.PRIVATE_KEY2],
    },
    
    goerli: {
      url: process.env.GOERLI_RPC,
      //@ts-ignore
      accounts: [process.env.PRIVATE_KEY1, process.env.PRIVATE_KEY2],
    }
},

  etherscan: {
    apiKey: process.env.ETHERSCAN_APIKEY,
  }

}

export default config;

