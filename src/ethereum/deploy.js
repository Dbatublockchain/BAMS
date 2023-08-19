const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
// const ganache = require("ganache-cli")

const compiledBatu = require("./build/DeadStock.json");

// const provider = ganache.provider()
const provider = new HDWalletProvider(
  "poverty domain physical leg vivid fox close hobby surface orbit lottery hedgehog",
  "https://sepolia.infura.io/v3/107f948a817c4311bae134d437a1f5c9"
);
const web3 = new Web3(provider);

const deploy = async () => {
  // Get a list of all accounts
  try {
    const accounts = await web3.eth.getAccounts();

    console.log("Contract deployed by", accounts[0]);

    // Use one of those accounts to deploy the contract
    const result = await new web3.eth.Contract(compiledBatu.abi)
      .deploy({
        data: compiledBatu.evm.bytecode.object,
        arguments: [accounts[0]],
      })
      .send({ from: accounts[0], gas: "8000000" });

    console.log("result", result.options);
    console.log("contract deployed to", result.options.address);
  } catch (err) {
    console.log(err);
  }
};

deploy();
