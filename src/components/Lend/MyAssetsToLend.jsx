import { PlusIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { orderListState } from "../../state/orderListAtom";
import { selectedState } from "../../state/selectedAtom";
import CollateralList from "../CollateralList/CollateralList";
import MyAssetsItem from "./MyAssetsItem";

export default function MyAssetsWidget({ assets }) {
  // const {
  //   state: { products },
  // } = CartState();
  const [selected, setSelected] = useRecoilState(selectedState);

  const [orderList, setOrderList] = useRecoilState(orderListState);
  const [timeToLend, setTimeToLend] = useState(0);
  const [interestAmount, setInterestAmount] = useState(0);

  const handleTimeToLendChange = (event) => {
    setTimeToLend(event.target.value);
  };
  const handleInterestChange = (event) => {
    setInterestAmount(event.target.value);
  };

  console.log("timeToLend", timeToLend);
  return (
    <div className="w-full h-full p-7 rounded-2xl bg-white">
      {/* TITLES */}
      <div className="flex justify-evenly">
        <div className="w-1/4">Asset</div>
        <div className="w-1/4">Collateral</div>
        <div className="w-1/4">Time</div>
        <div className="w-1/4">Amount</div>
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
              onChange={handleTimeToLendChange}
            />
          </div>
          <div className="w-1/4">
            <input
              type="number"
              placeholder="Amount"
              className="w-24"
              onChange={handleInterestChange}
            />
          </div>
          <button
            className="btn-shine w-10 h-10 text-white rounded-full text-sm bg-pink flex justify-center items-center"
            onClick={() =>
              setOrderList((prevOrders) => [
                ...prevOrders,
                {
                  asset: nft,
                  collateral: selected,
                  time: timeToLend,
                  interest: interestAmount,
                },
              ])
            }
          >
            <PlusIcon height={32} />
          </button>
        </div>
      ))}
    </div>
  );
}
