import React from "react";
import useNftCollections from "../../hooks/useNftCollections";
import Layout from "../Partials/Layout";
import CollectionItem from "./CollectionItem";
// id, name, contract, stats: floorprice volume
export default function Information() {
  const { collections, loading } = useNftCollections();

  //  const {data, loading: oracleIsLoading} useOracle('')
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
            </div>
            {/* CONTAINER */}
            <div className="w-full h-full p-7 rounded-2xl bg-white">
              {loading ? "loading" : collections.length}
              {!loading &&
                collections.map((item, index) => {
                  // console.log(item);
                  return (
                    <CollectionItem
                      key={item.contract}
                      data={item}
                      index={index}
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
