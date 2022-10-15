import React from 'react';
import transaction1 from "../../assets/images/recent-transation-1.png";
import { CartState } from '../../context/Context';

export default function WhatIneedItem ({ product }) {

  const {
    // state: { cart },
    yourBorrowsAssetsDispatch,
  } = CartState();

  return (
    <li key={product.id} className="content-item py-3 border-b border-light-purple hover:border-purple">
      <div className="flex justify-between items-center">
        <div className="account-name flex space-x-4 items-center">
          <div className="icon w-14 h-14 flex justify-center items-center">
            <img src={transaction1} alt="" className="" />
          </div>
          <div>
            <div className="name">
              <p className="text-base text-dark-gray font-medium mb-1">
                {product.name}
              </p>
            </div>
            <div className="time">
              <p className="text-sm text-thin-light-gray font-medium">
                {product.title}
              </p>
            </div>
            <div className="time">
              <p className="text-sm text-thin-light-gray font-medium">
                {product.wallet}
              </p>
            </div>
          </div>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              yourBorrowsAssetsDispatch({
                type: "ADD_TO_CART",
                payload: product,
              });
            }}
            className="btn-shine w-[98px] h-[33px] text-white rounded-full text-sm bg-pink flex justify-center items-center"
          >
            Request
          </button>
          <p className="usd text-base text-light-green text-right">
            +324.75
          </p>
        </div>
      </div>
    </li>

  );
}

