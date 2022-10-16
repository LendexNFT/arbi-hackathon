import axios from "axios";
import { ethers } from "ethers";
import ORACLE_ABI from "../contracts/abis/OracleABI.json";

const subgraphURL = `https://api.thegraph.com/subgraphs/name/treasureproject/marketplace`;

const useNftData = () => {
  const getCollectionInfo = async (contractCollection: string) => {
    try {
      console.log(contractCollection);
      const result = await axios.post(subgraphURL, {
        // "0xfe8c1ac365ba6780aec5a985d989b327c27670a1"
        query: `
        {
          collections(first: 5, where: { contract: "${contractCollection}" }) {
            id
            contract
            name
            stats {
              sales
              volume
              floorPrice
            }
          }
        }
      `,
      });
      console.log("Result: ", result);
    } catch (error) {
      console.log("Error ", error);
    }
  };

  // 0x62CAe0FA2da220f43a51F86Db2EDb36DcA9A5A08
  const fetchOraclePrice = async (oracleAddress: string) => {
    try {
      const rpc =
        "https://alien-twilight-voice.arbitrum-goerli.discover.quiknode.pro/f08321d64f93dcd1f396e09c85713017755de651/";
      const ethersProvider = new ethers.providers.JsonRpcProvider(rpc);
      const contract = new ethers.Contract(
        oracleAddress,
        ORACLE_ABI,
        ethersProvider
      );
      const tx = await contract.latestRoundData();
      const response = await tx;
      const formatted = response.answer.toNumber();
      console.log("Formatted ", formatted);
      return response;
    } catch (error) {
      return error.message;
    }
  };

  return { getCollectionInfo, fetchOraclePrice };
};

export default useNftData;
