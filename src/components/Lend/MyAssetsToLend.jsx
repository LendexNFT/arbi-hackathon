import { PlusIcon } from "@heroicons/react/20/solid";
import CollateralList from "../CollateralList/CollateralList";
import MyAssetsItem from "./MyAssetsItem";

export default function MyAssetsWidget({ assets }) {
  // const {
  //   state: { products },
  // } = CartState();

  return (
    <div className="w-full h-full p-7 rounded-2xl bg-white">
      {/* TITLES */}
      <div className="flex justify-evenly">
        <div className="w-1/4">Asset</div>
        <div className="w-1/4">Collateral</div>
        <div className="w-1/4">Time</div>
        <div className="w-1/4">Interest</div>
      </div>
      {/* ASSETS */}
      {assets.map((nft) => (
        <div className="flex justify-evenly group hover:border-b p-2 ">
          <div className="w-1/4">
            <MyAssetsItem key={nft.tokenId} product={nft} />
          </div>
          <div className="w-1/4 flex">
            <CollateralList />
          </div>
          <div className="w-1/4">
            <input
              type="number"
              placeholder="Days"
              className="w-24"
            />
          </div>
          <div className="w-1/4">hey</div>
          <button className="btn-shine w-10 h-10 text-white rounded-full text-sm bg-pink flex justify-center items-center">
            <PlusIcon height={32} />
          </button>
        </div>
      ))}
    </div>
  );
}
