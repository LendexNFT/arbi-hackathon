/* eslint-disable */
import React from "react";
import BorrowStatusCard from "./BorrowStatusCard";
import DataIterationItem from "./DataIterationItem";

export default function MyBorrowStatus ({ className, allBorrows = [] }) {

  const allBorrowsLength = allBorrows.length;
  console.log("allBorrows", allBorrows);
  return (
    <>
      <div className={`all-bid-section w-full ${className || ""}`}>
        <div className="mb-5">
          <h1 className="text-26 font-bold text-dark-gray">My borrow status</h1>
        </div>
        <div className="w-full">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 2xl:gap-8 xl:gap-5 gap-5 mb-10">
            <DataIterationItem datas={allBorrows} startLength={0} endLength={allBorrowsLength}>
              {({ datas }) => (
                <div key={datas.id} className="item">
                  <BorrowStatusCard datas={datas} />
                </div>
              )}
            </DataIterationItem>
          </div>

        </div>

      </div>
    </>
  );
}
