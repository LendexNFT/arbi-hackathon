import axios from "axios";

export const useNftData = () => {
  const subgraphURL = `https://api.thegraph.com/subgraphs/name/treasureproject/marketplace`;

  const getCollectionInfo = async (contractCollection: any) => {
    try {
      const result = await axios.post(subgraphURL, {
        query: `
        {
          collections(first: 5, where: { contract: ${contractCollection}) { // "0xfe8c1ac365ba6780aec5a985d989b327c27670a1"
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

  return { getCollectionInfo };
};
