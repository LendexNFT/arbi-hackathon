/* eslint-disable */
import React, { useState } from 'react';
import { CartState } from "../../context/Context";
import Icons from '../Helpers/Icons';
// import SearchCom from "../Helpers/SearchCom";
// import WhatIneedWidget from "./WhatIneedWidget";
import WhatIneedItem from "./WhatIneedItem";


export default function SearchBorrowAssets () {


  const {
    state: { products },
  } = CartState();

  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(products);

  // exclude column list from filter
  const excludeColumns = ["id", "tag", "image"];

  // handle change event of search input
  const handleChange = value => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData2 = (value) => {
    //need to filter when tag selected
  }

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(products);
    else {
      const filteredData = products.filter(item => {
        return Object.keys(item).some(key =>
          excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  }

  return (
    <>
      <div className="investment-widget w-full min-h-max p-4 rounded-2xl bg-white flex flex-col justify-between">
        {/* heading */}
        <div className="heading flex justify-between items-center">
          <h3 className="w-1/5 text-xl font-bold text-dark-gray">
            What I need!
          </h3>
          {/* <SearchCom /> */}
          <div className="w-4/5 h-[48px]  pl-8 bg-white flex rounded-full overflow-hidden  border-2">
            <div className="w-6 h-full flex justify-center items-center mr-2.5 text-dark-gray">
              <Icons name="deep-search" />
            </div>
            <div className="flex-1 h-full">
              <input
                className="w-full h-full focus:outline-0 focus:ring-0"
                type="text"
                placeholder="Search items, collections..."
                value={searchText}
                onChange={e => handleChange(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="h-[286px]">
          {/* <WhatIneedWidget /> */}
          <div className="recent-transaction-widget overflow-auto overflow-x-auto w-full h-full p-7 rounded-2xl bg-white">
            <div className="heading sm:flex justify-between items-center">
            </div>
            <div className="content">
              <ul>
                {data.map(product => <WhatIneedItem key={product.id} product={product} />)}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
