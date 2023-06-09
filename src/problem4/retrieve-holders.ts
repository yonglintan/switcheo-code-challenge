// Implement a script to retrieve the specified holders of $SWTH token on the Binance Smart Chain network.

import { ethers } from "ethers";
import { readFileSync } from "fs";

const SWTH_TOKEN_CONTRACT = "0xC0ECB8499D8dA2771aBCbF4091DB7f65158f1468";
const BSC_ENDPOINT = "https://bsc-dataseed.binance.org/";

const abiFilePath = "./abi/swth_abi.json";
const abi = JSON.parse(readFileSync(abiFilePath, "utf8"));

const addresses = [
    "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
    "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
    "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392"
]

const main = async () => {
    const provider = new ethers.providers.JsonRpcProvider(BSC_ENDPOINT);
    // const netwrk = await provider.getNetwork();
    // console.log(netwrk);

    const contract = new ethers.Contract(SWTH_TOKEN_CONTRACT, abi, provider);

    // const contractName = await contract.name();
    // console.log("The token's contract name is " + contractName);

    // const tokenSymbol = await contract.symbol();
    // console.log("The token's symbol is " + tokenSymbol);

    const tokenDecimals = await contract.decimals();
    // console.log("The token's decimals are " + tokenDecimals);

    addresses.forEach(async addr => {
        let balance = await contract.balanceOf(addr);
        const balFormatted = ethers.utils.formatUnits(balance, tokenDecimals).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        console.log(addr + " " + balFormatted);
    });

};

main();
