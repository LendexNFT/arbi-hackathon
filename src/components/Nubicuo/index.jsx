// import React, { useEffect, useState } from "react";
// import { CartState } from "../../context/Context";
// import SearchCom from "../Helpers/SearchCom";
import Layout from "../Partials/Layout";
import MyAssetsWidget from "./MyAssetsWidget";
import SearchBorrowAssets from "./SearchBorrowAssets";
// import WhatIneedWidget from "./WhatIneedWidget";
import YourBorrowsWidget from "./YourBorrowsWidget";
import YourSupliesWidget from "./YourSupliesWidget";

export default function Nubicuo () {
  return (
    <>
      <Layout>
        <div className="my-wallet-wrapper w-full mb-10">
          <div className="main-wrapper w-full">
            {/* Continer Assets Supply and Assets Borrow widgets */}
            <div className="recent-and-investment grid lg:grid-cols-2 grid-cols-1 2xl:gap-[40px] xl:gap-7 gap-4 lg:h-[416px] w-full  justify-between">
              {/* <div className=" h-full">
                <MyAssetsWidget />
              </div> */}
              <div className=" h-full">
                <div className="investment-widget w-full min-h-max p-4 rounded-2xl bg-white flex flex-col justify-between">
                  {/* content */}
                  <div className="h-[286px]">
                    <YourSupliesWidget />
                  </div>
                </div>
              </div>
              <div className=" h-full">
                <div className="investment-widget w-full min-h-max p-4 rounded-2xl bg-white flex flex-col justify-between">
                  {/* content */}
                  <div className="h-[286px]">
                    <YourBorrowsWidget />
                  </div>
                </div>
              </div>
            </div>
            {/* Continer Assets Supply and Assets Borrow widgets */}
            <div className="recent-and-investment grid lg:grid-cols-2 grid-cols-1 2xl:gap-[40px] xl:gap-7 gap-4 lg:h-[416px] w-full  justify-between">
              {/* <div className=" h-full">
                <MyAssetsWidget />
              </div> */}
              <div className=" h-full">
                <div className="investment-widget w-full min-h-max p-4 rounded-2xl bg-white flex flex-col justify-between">
                  {/* heading */}
                  <div className="heading mb-5 flex justify-between items-center">
                    <h3 className="text-xl font-bold text-dark-gray">
                      My Assets (in my wallet)
                    </h3>
                  </div>
                  <div className="h-[286px]">
                    <MyAssetsWidget />
                  </div>
                </div>
              </div>
              <div className=" h-full">
                {/* <div className="investment-widget w-full min-h-max p-4 rounded-2xl bg-white flex flex-col justify-between">
                  <div className="heading mb-5 flex justify-between items-center">
                    <h3 className="text-xl font-bold text-dark-gray">
                      What I need!
                    </h3>
                    <SearchCom />
                  </div>

                  <div className="h-[286px]">
                    <WhatIneedWidget />
                  </div>
                </div> */}
                <SearchBorrowAssets />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
