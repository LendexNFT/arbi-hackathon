/* eslint-disable camelcase */
import React from "react";
import BorrowStatusCard from "./BorrowStatusCard";
// import BorrowStatusCard from "./BorrowStatusCard";
import DataIterationItem from "./DataIterationItem";
import LoanStatusCard from "./LendStatusCard";

// export default function MyLoanStatus ({ className, allBids = [], allBorrows = [] }) {
export default function MyLoanStatus ({ className, allLoans = [] }) {

  const allLends = allLoans.datas;
  const allLendsLength = allLoans.datas.length;
  const allBorrows = allLoans.dataBorrow;
  // const allBorrowsLength = allLoans.dataBorrow.length;

  // console.log("allLoans", allLoans);
  // console.log("datas", allLends);
  // console.log("sssss", allBorrows[0].typeLoan);

  return (
    <>
      <div className={`all-bid-section w-full ${className || ""}`}>
        <div className="mb-5">
          <h1 className="text-26 font-bold text-dark-gray">My Lend status</h1>
        </div>
        <div className="w-full">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 2xl:gap-8 xl:gap-5 gap-5 mb-10">
            <DataIterationItem datas={allLends} as data startLength={0} endLength={allLendsLength}>
              {({ datas }) => (
                // eslint-disable-next-line no-sequences
                console.log("datas", datas),

                <div key={datas.id} className="item">

                  <LoanStatusCard datas={datas} />
                    {(() => {
                      if (datas.typeLoan) {
                        return (
                          <BorrowStatusCard datas={datas} as data />
                        )
                      }
                      return (
                        <LoanStatusCard datas={datas} as data />
                      )

                    })()}

                </div>
              )}
            </DataIterationItem>
          </div>
        </div>
      </div>

      <div className={`all-bid-section w-full ${className || ""}`}>
        <div className="mb-5">
          <h1 className="text-26 font-bold text-dark-gray">My Lend status</h1>
        </div>
        <div className="w-full">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 2xl:gap-8 xl:gap-5 gap-5 mb-10">
            <DataIterationItem datas={allBorrows} as data startLength={0} endLength={allLendsLength}>
              {({ dataBorrow }) => (
                // eslint-disable-next-line no-sequences
                console.log("dataBorrow ", dataBorrow),

                <div key={dataBorrow.id} className="item">

                  <LoanStatusCard datas={dataBorrow} />
                  {(() => {
                    if (dataBorrow.typeLoan) {
                      return (
                        <BorrowStatusCard datas={dataBorrow} as data />
                      )
                    }
                    return (
                      <LoanStatusCard datas={dataBorrow} as data />
                    )

                  })()}

                </div>
              )}
            </DataIterationItem>
          </div>
        </div>
      </div>
    </>
  );
}
