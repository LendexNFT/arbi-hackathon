// import React, { useEffect, useState } from "react";
// import { CartState } from "../../context/Context";
// import datas from "../../data/product_data.json";
import CreateOrder from "../Partials/CreateOrder";
import Layout from "../Partials/Layout";
import OpenBorrowOrders from "../Partials/OpenBorrowOrders";
import OpenSwapOrders from "../Partials/OpenSwapOrders";
import TxHistory from "../Partials/TxHistory";
// import MyLoanStatus from "./MyLoanStatus";

export default function Overview () {
  // const allBids = datas.datas;
  // const allLends = dataLends.data;
  // const allBorrows = dataBorrows.data;

  return (
    <>
      <Layout>
        <div className="home-page-wrapper">
          <CreateOrder />
        </div>
        {/* <MyLendStatus allLends={allLends} className="mb-10" />
        <MyBorrowStatus allBorrows={allBorrows} className="mb-10" /> */}
        
        {/*
        *************    TODO    ****************
        Componente para mostrar Ordenes de Swap Abiertas
        Componente para mostrar Ordenes de lending/borrowing abiertas
        

      */}
        <OpenSwapOrders className="mb-10" />
        <OpenBorrowOrders className="mb-10" />
        <TxHistory className="mb-10" />
      </Layout>
    </>
  );
}
