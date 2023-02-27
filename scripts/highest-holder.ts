const axios = require('axios');

async function main() {
  const tokenAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7'; // USDT ERC20 contract address
  const apiKey = process.env.ethPlorer; //API key from Ethplorer
  const url = `https://api.ethplorer.io/getTopTokenHolders/${tokenAddress}?apiKey=${apiKey}&limit=1`;

  try {
    const response = await axios.get(url);
    console.log('Response:', response.data);
    const holders = response.data.holders;
    if (holders.length === 0) {
      console.log('No token holders found for USDT ERC20');
      return;
    }
    const topHolder = holders[0];
    const balance = topHolder.balance / 10**6;
    const address = topHolder.address;
    console.log(`Top holder of USDT ERC20 is: ${address}`);
    console.log(`Balance: ${balance} USDT`);
  } catch (error) {
    console.error(error);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});