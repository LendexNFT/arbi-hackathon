import axios from "axios";
import { useEffect, useState } from "react";

const subgraphURL = `https://api.thegraph.com/subgraphs/name/treasureproject/marketplace`;

// "0xfe8c1ac365ba6780aec5a985d989b327c27670a1"

const useNftCollections = (collectionAddress) => {
  const [loading, setLoading] = useState(false);
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const getCollectionInfo = async () => {
      setLoading(true);
      try {
        const result = await axios.post(subgraphURL, {
          query: `
          query MyQuery {
            collections {
              id
              name
              contract
              floorPrice
              stats {
                floorPrice
                volume
                sales
              }
            }
          }
        `,
        });
        setCollections(result.data.data.collections);
        console.log("Collections Data: ", result.data.data.collections);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log("Error ", error);
      }
    };

    !loading && getCollectionInfo();
  }, [collectionAddress]);

  return { collections, loading };
};

export default useNftCollections;
