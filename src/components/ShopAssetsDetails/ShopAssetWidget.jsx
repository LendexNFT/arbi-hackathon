import React from "react";
import { useLocation } from "react-router-dom";
import shopCreator from "../../assets/images/shop-creator.png";
import shopOwner from "../../assets/images/shop-ower.png";
import { CartState } from "../../context/Context";

// export default function ShopAssetWidget ({ product, className }) {

export default function ShopAssetWidget ({ className }) {


  const location = useLocation();
  console.log(location.state.id);

  const {
    state: { products },
  } = CartState();

  const nftInfo = products.filter(item => item.id === location.state.id);

  console.log('nftInfo => ', nftInfo[0].name);
  // console.log(location);
  return (
    <div className={`shop-product-widget w-full ${className || ""}`}>
      <div className="w-full flex space-x-10 h-[536px]">
        <div className="w-1/2 h-full">
          <div className="shop-product-thumbnail w-full rounded-2xl overflow-hidden bg-white h-full">
            {/* <img src={productImg} alt="" className="w-full h-full" /> */}
            <img src={require(`../../assets/images/${nftInfo[0].image}`)} alt="" className="w-full h-full" />
          </div>
        </div>
        <div className="flex-1 h-full flex flex-col justify-between py-10">
          <div className="w-full">
            <div className="flex justify-between items-center mb-4">
              <div className="owned-by flex space-x-2 items-center">
                <div className="owned w-[75px] h-[75px] rounded-full overflow-hidden">
                  <img src={shopOwner} alt="" className="w-full h-full" />
                </div>
                <div>
                  <p className="text-thin-light-gray text-base leading-3">
                    Loaned to---


                  </p>
                  <p className="text-xl text-dark-gray font-bold">
                    {nftInfo[0].ownedBy}
                  </p>
                </div>
              </div>
              <div className="w-[1px] bg-dark-gray h-16 opacity-[0.1]"></div>
              <div className="created-by flex space-x-2 items-center flex-row-reverse">
                <div className="owned w-[75px] h-[75px] rounded-full overflow-hidden ml-2">
                  <img src={shopCreator} alt="" className="w-full h-full" />
                </div>
                <div>
                  <p className="text-thin-light-gray text-base leading-3 text-right">
                    Create by
                  </p>
                  <p className="text-xl text-dark-gray text-right font-bold">
                    {nftInfo[0].createdBy}
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-xl text-purple font-bold opacity-[0.7] tracking-wider">
                ID : {nftInfo[0].id}
              </p>
            </div>
            <div className="details">
              <h1 className="text-dark-gray text-26 font-bold tracking-wider mb-4">
                {nftInfo[0].name}
              </h1>
              <p className="text-base text-thin-light-gray tracking-wide mb-7">
                {nftInfo[0].description}
              </p>
              <p className="text-base text-thin-light-gray tracking-wide">
                Publish Date
              </p>
              <p className="text-xl font-bold text-dark-gray mb-7">
                {nftInfo[0].datePublished}
              </p>
              <div className="w-full h-[1px] bg-black opacity-[0.1]"></div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-[42px] h-[42px]">
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z"
                    fill="#627EEA"
                  />
                  <path
                    d="M21.6538 5.25V16.8919L31.4936 21.2887L21.6538 5.25Z"
                    fill="white"
                    fillOpacity="0.602"
                  />
                  <path
                    d="M21.6536 5.25L11.8125 21.2887L21.6536 16.8919V5.25Z"
                    fill="white"
                  />
                  <path
                    d="M21.6538 28.8331V36.7435L31.5002 23.1211L21.6538 28.8331Z"
                    fill="white"
                    fillOpacity="0.602"
                  />
                  <path
                    d="M21.6536 36.7435V28.8318L11.8125 23.1211L21.6536 36.7435Z"
                    fill="white"
                  />
                  <path
                    d="M21.6538 27.0021L31.4936 21.2888L21.6538 16.8945V27.0021Z"
                    fill="white"
                    fillOpacity="0.2"
                  />
                  <path
                    d="M11.8125 21.2888L21.6536 27.0021V16.8945L11.8125 21.2888Z"
                    fill="white"
                    fillOpacity="0.602"
                  />
                </svg>
              </div>
              <div>
                <p className="font-bold text-xl tracking-wide line-clamp-1 text-dark-gray">
                  {nftInfo[0].datePublished} {nftInfo[0].currency}
                </p>
                <p className="text-base text-lighter-gray">({nftInfo[0].price} USD)</p>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="btn-shine  px-4 py-3 text-white text-base bg-pink rounded-full tracking-wide"
              >
                Lend this NFT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
