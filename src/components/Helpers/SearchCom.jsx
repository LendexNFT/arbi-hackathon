import React from "react";
import Icons from "./Icons";

export default function SearchCom() {
  return (
    <div className="w-full h-[48px]  pl-8 bg-white flex rounded-full overflow-hidden  border-2">
      <div className="w-6 h-full flex justify-center items-center mr-2.5 text-dark-gray">
        <Icons name="deep-search" />
      </div>
      <div className="flex-1 h-full">
        <input
          className="w-full h-full focus:outline-0 focus:ring-0"
          type="text"
          placeholder="Search items, collections..."
        />
      </div>
    </div>
  );
}
