const { ethers } = require("ethers");

// const contract = require("./build/contracts/TokenBalances.json");

const ADDR = "0x286ca71c48f4dF7748009F536D7b9C976be77C33";   // your contract address
const ABI = [
	"function getBalances(address holder, address[] calldata tokens) external view returns (Balance[] memory)"
];    // your contract ABI

const ADDRESS = "0x60b8ACF0BcCc08e7006D8A031F54209d00E3dFee"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"0x3e2723c2c2588f7D46A5Ce03f9270399471deac4",
	"0x0B0ddA183a0B3Debb4e6Be293A3Bb7Cd0eD3aB6f"
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);
    
    const balances = await contract.getBalances(ADDRESS, TOKENS);
	
	return balances;
};

test().then(console.log);