import React from "react";
import DataIterationItem from "./DataIterationItem";
import LoanStatusCard from "./LoanStatusCard";

export default function MyLendStatus ({ className, allLends = [] }) {
  const allLendsLength = allLends.length;
  console.log("allLends", allLends);
  return (
    <>
      <div className={`all-bid-section w-full ${className || ""}`}>
        <div className="mb-5">
          <h1 className="text-26 font-bold text-dark-gray">My Loan Status</h1>
        </div>
        <div className="w-full">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 2xl:gap-8 xl:gap-5 gap-5 mb-10">
            <DataIterationItem datas={allLends} startLength={0} endLength={allLendsLength}>
              {({ datas }) => (
                <div key={datas.id} className="item">
                  <LoanStatusCard datas={datas} />
                </div>
              )}
            </DataIterationItem>
          </div>

        </div>
      </div>
    </>
  );
}
