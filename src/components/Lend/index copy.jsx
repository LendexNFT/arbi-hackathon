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
            <div className="mb-5">
              <h1 className="text-26 font-bold text-dark-gray">LEND</h1>
            </div>
            {/* Continer Assets Supply and Assets Borrow widgets */}
            <div className="recent-and-investment grid lg:grid-cols-2 grid-cols-1 2xl:gap-[40px] xl:gap-7 gap-4 lg:h-[416px] w-full  justify-between">
              <div className=" h-full">
                <div className="investment-widget w-full min-h-max p-4 rounded-2xl bg-white flex flex-col justify-between">
                  {/* heading */}
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
            {/* Continer Assets Supply and Assets Borrow widgets */}
            {/* <div className="recent-and-investment grid lg:grid-cols-2 grid-cols-1 2xl:gap-[40px] xl:gap-7 gap-4 lg:h-[416px] w-full  justify-between">
              <div className=" h-full">
                <div className="investment-widget w-full min-h-max p-4 rounded-2xl bg-white flex flex-col justify-between">
                  <div className="h-[286px]">
                    <YourSupliesWidget />
                  </div>
                </div>
              </div>
              <div className=" h-full">
                <div className="investment-widget w-full min-h-max p-4 rounded-2xl bg-white flex flex-col justify-between">
                  <div className="h-[286px]">
                    <YourBorrowsWidget />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </Layout>
    </>
  );
}
