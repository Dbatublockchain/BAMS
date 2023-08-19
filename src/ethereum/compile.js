const path = require('path')
const solc = require('solc')
const fs = require('fs-extra')

const buildPath = path.resolve(__dirname, 'build')
fs.removeSync(buildPath)

// const batuPath = path.resolve(__dirname, 'contracts', 'Batu.sol')
const batuPath = path.resolve(__dirname, 'contracts', 'DeadStock.sol')
const source = fs.readFileSync(batuPath, 'utf8')

// console.log(source)
const input = {
    language: "Solidity",
    sources: {
      "DeadStock.sol": {
        content: source,
      },
    },
    settings: {
      outputSelection: {
        "*": {
          "*": ["evm", "bytecode", "abi"],
        },
      },
    },
  };

const output = JSON.parse(solc.compile(JSON.stringify(input)),1).contracts['DeadStock.sol'];

fs.ensureDirSync(buildPath)
for(let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract + '.json'),
        output[contract]
    )
}