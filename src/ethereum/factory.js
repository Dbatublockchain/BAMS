import web3 from './web3';
import DeadStock from './build/DeadStock.json';

const instance = new web3.eth.Contract(
    DeadStock.abi,
    '0xA6c87B6937F0A640b21464c60EFB46Ec05D567C8'
);

export default instance;