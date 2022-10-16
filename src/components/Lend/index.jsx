import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

import MyAssetsWidget from "./MyAssetsToLend";

import Layout from "../Partials/Layout";

const settings = {
  apiKey: process.env.ALCHEMY_KEY,
  network: Network.ARB_MAINNET,
};

export default function Lend() {
  const [loading, setLoading] = useState();
  const [nfts, setNfts] = useState([]);
  const { address } = useAccount();
  const alchemy = new Alchemy(settings);

  useEffect(() => {
    const fetch = async () => {
      if (loading) return;
      setLoading(true);
      const assetsWallet = await alchemy.nft.getNftsForOwner(address);
      if (assetsWallet !== undefined) setNfts(assetsWallet.ownedNfts);
      setLoading(false);
    };
    fetch();
  });

  return (
    <>
      <Layout>
        <div className="my-wallet-wrapper w-full mb-10 drop-shadow-lg">
          <div className="main-wrapper w-full">
            {/* TITLE */}
            <div className="mb-5">
              <h1 className="text-26 font-bold text-dark-gray">LEND</h1>
            </div>
            {/* ASSETS CARD */}
            <div className=" h-full">
              <div className="w-full min-h-max p-4 rounded-2xl bg-white flex flex-col justify-between">
                <div className="heading mb-5 flex justify-between items-center">
                  <h3 className="text-xl font-bold text-dark-gray">
                    My Assets
                  </h3>
                </div>
                <div className="">
                  <MyAssetsWidget assets={nfts} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
