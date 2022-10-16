import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useAccount, useSignMessage } from "wagmi";
import useNftCollections from "../../hooks/useNftCollections";
import { nftCollectionsState } from "../../state/nftCollectionsAtom";
import { orderListState } from "../../state/orderListAtom";
import Layout from "../Partials/Layout";
import MyAssetsWidget from "./MyAssetsToLend";
import MyLendOrdersWidget from "./MyLendOrdersWidget";

const settings = {
  apiKey: process.env.ALCHEMY_KEY,
  network: Network.ARB_MAINNET,
};

export default function Lend() {
  const [orderList, setOrderList] = useRecoilState(orderListState);
  const [loading, setLoading] = useState();
  const [nfts, setNfts] = useState([]);
  const { collections, loading: collectionsLoading } = useNftCollections();
  const { address } = useAccount();
  const alchemy = new Alchemy(settings);
  const [nftCollections, setNftCollections] =
    useRecoilState(nftCollectionsState);
  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: "Lend NFT",
  });

  useEffect(() => {
    if (!collectionsLoading) {
      setNftCollections(collections);
      // console.log("check collections", collections, nftCollections);
    }
  }, [collections]);

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
        <div>
          <MyLendOrdersWidget />
        </div>
        {/* BUTTONS */}
        <div className="flex mt-24 justify-center space-x-24">
          <button className="bg-blue-300 px-8 py-4 text-4xl rounded-lg">
            CANCEL
          </button>
          <button
            className="bg-blue-300 px-8 py-4 text-4xl rounded-lg uppercase"
            onClick={() => signMessage()}
          >
            set order
          </button>
        </div>
      </Layout>
    </>
  );
}
