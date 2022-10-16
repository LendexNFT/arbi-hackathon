import { utils } from "ethers";
import React from "react";

function CollectionItem({ index, data, magicusd }) {
  //   console.log("coleltion item", data);
  return (
    <div className=" rounded-lg  text-xl flex gap-x-2 justify-between py-4 px-8">
      <h1>{index}</h1>
      <h1 className="">{data.name}</h1>
      <div className="font-mono">{utils.formatEther(data.stats.volume)}</div>
      <div className="font-mono">
        USD $
        {(parseFloat(utils.formatEther(data.floorPrice)) * magicusd).toFixed(2)}
      </div>
    </div>
  );
}

export default CollectionItem;
