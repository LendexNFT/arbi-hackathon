import Layout from "../Partials/Layout";
import MyAssetsWidget from "./MyAssetsWidget";
import SearchBorrowAssets from "./SearchBorrowAssets";
// import WhatIneedWidget from "./WhatIneedWidget";
import YourBorrowsWidget from "./YourBorrowsWidget";
import YourSupliesWidget from "./YourSupliesWidget";

export default function Lend () {
  return (
    <>
      <Layout>
        <div className="my-wallet-wrapper w-full mb-10">
          <div className="main-wrapper w-full">
            <div className="mb-5"><h1 className="text-26 font-bold text-dark-gray">LEND</h1></div>
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

                <SearchBorrowAssets />
              </div>
            </div>
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
          </div>
        </div>
      </Layout>
    </>
  );
}
