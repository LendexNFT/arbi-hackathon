import { Contract } from "ethers";
import { JsonRpcProvider } from "ethers-providers";
import ORACLE_ABI from "../config/constants/contracts/abis/OracleABI.json";

export const callOracle = async (oracleAddress) => {
  try {
    const rpc =
      "https://prettiest-bold-rain.arbitrum-mainnet.discover.quiknode.pro/30bc570046893bf9a7b9dfe19438e2342e27d45b/";

    const ethersProvider = new JsonRpcProvider(rpc);
    const contract = new Contract(oracleAddress, ORACLE_ABI, ethersProvider);
    const tx = await contract.latestAnswer();
    const response = await tx;
    return response;
  } catch (error) {
    return error.message;
  }
};
