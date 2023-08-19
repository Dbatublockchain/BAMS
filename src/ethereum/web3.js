import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // In the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // In the server or user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://sepolia.infura.io/v3/107f948a817c4311bae134d437a1f5c9"
  );
  web3 = new Web3(provider);
}

export default web3;
