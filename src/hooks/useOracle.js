import { ethers } from "ethers";
import { useState } from "react";
import ORACLE_ABI from "../contracts/abis/OracleABI.json";

const useOracle = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchOraclePrice = async (oracleAddress) => {
      setLoading(true);
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
        console.log("Oracle data ", formatted);
        setData(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log("Error ", error);
      }
    };
    !loading && fetchOraclePrice();
  }, [collectionAddress]);

  return { data, loading };
};

export default useOracle;
