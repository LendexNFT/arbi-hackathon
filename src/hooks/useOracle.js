import { useEffect, useState } from "react";
import { callOracle } from "../utils/callOracle";

const useOracle = (oracleAddress) => {
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      try {
        let price = await callOracle(oracleAddress);
        console.log(price);
        setPrice(price);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log("Error ", error);
      }
    };
    !loading && get();
  }, [oracleAddress]);

  return { price, loading };
};

export default useOracle;
