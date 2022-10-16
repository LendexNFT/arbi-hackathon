import React from "react";
import { useContractRead } from "wagmi";
import ORACLE_ABI from "../../contracts/abis/OracleABI.json";
import useNftCollections from "../../hooks/useNftCollections";
import Layout from "../Partials/Layout";
import CollectionItem from "./CollectionItem";

const magicUsdOracle = "0x47E55cCec6582838E173f252D08Afd8116c2202d";

// id, name, contract, stats: floorprice volume
export default function Information() {
  const { collections, loading } = useNftCollections();
  // const { price, loading: loadingOracle } = useOracle(magicUsdOracle);
  const { data, isError, isLoading } = useContractRead({
    address: magicUsdOracle,
    abi: ORACLE_ABI,
    functionName: "latestAnswer",
  });
  return (
    <>
      <Layout>
        {/* Nft Data */}
        <div className="my-wallet-wrapper w-full mb-10 drop-shadow-lg">
          <div className="main-wrapper w-full">
            {/* TITLE */}
            <div className="mb-5">
              <h1 className="text-26 font-bold text-dark-gray uppercase">
                Information
              </h1>
              <div>
                <h1>MAGIC/USD ${(data.toNumber() / 10 ** 8).toFixed(4)}</h1>
              </div>
            </div>
            {/* CONTAINER */}
            <h1 className="text-xl font-bold text-dark-gray uppercase">
              Nft Collections
            </h1>
            <div className="w-full h-full p-7 rounded-2xl bg-white">
              {loading ? (
                "loading"
              ) : (
                <div className="flex justify-between uppercase text-right">
                  <div className="">#</div>
                  <div>Name</div>
                  <div>Volume</div>
                  <div>Floor price</div>
                </div>
              )}
              {!loading &&
                collections.map((item, index) => {
                  // console.log(item);
                  return (
                    <CollectionItem
                      key={item.contract + index}
                      data={item}
                      index={index}
                      magicusd={data.toNumber() / 10 ** 8}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
