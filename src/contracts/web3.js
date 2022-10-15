import Web3 from "web3";

const getWeb3 = (provider) => new Web3(provider);

const getContract = (provider, abi, address) => {
  const web3 = getWeb3(provider);
  return new web3.eth.Contract(abi, address);
};

export { getWeb3, getContract };
