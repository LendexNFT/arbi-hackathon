import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import localImgLoad from "../../lib/localImgLoad";
import CountDown from "../Helpers/CountDown";
import Icons from "../Helpers/Icons";

export default function BorrowStatusCard({ datas, hidden = false }) {
  console.log("datas", datas);

  const [addFavorite, setValue] = useState(false);
  const favoriteHandler = () => {
    if (!addFavorite) {
      setValue(true);
      toast.success("Added to Favorite List");
    } else {
      setValue(false);
      toast.warn("Remove to Favorite List");
    }
  };
  return (
    <div className="card-style-one flex flex-col justify-between w-full h-[387px] bg-white p-3 pb rounded-2xl">
      <div className="content">
        {/* thumbnail */}
        <div className="w-full h-40">
          {/* thumbnail image */}
          <div
            className="thumbnail w-full h-full rounded-xl overflow-hidden px-4 pt-4"
            style={{
              background: `url(${localImgLoad(
                `images/${datas.thumbnail}`
              )}) 0% 0% / cover no-repeat`,
            }}
          >
            <div className="flex justify-between ">
              <span
                onClick={favoriteHandler}
                className={`w-7 h-7 bg-white rounded-full flex justify-center items-center  cursor-pointer ${
                  addFavorite ? "text-pink" : "text-dark-gray"
                }`}
              >
                <Icons name="love" />
              </span>
              <span className="w-7 h-7 flex justify-center items-center bg-white rounded-full cursor-pointer">
                <Icons name="dots" />
              </span>
            </div>
            {hidden && (
              <div className="flex justify-center">
                <svg
                  width="108"
                  height="91"
                  viewBox="0 0 108 91"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M88.7686 70.8596C87.0739 69.1408 85.4043 67.4283 83.7222 65.7285C81.13 63.1157 78.5316 60.5092 75.9143 57.9216C75.5879 57.5943 75.5439 57.3676 75.7636 56.9458C83.5841 41.861 74.3577 23.6597 57.5994 21.1351C52.3334 20.3418 47.3184 21.2169 42.586 23.6723C42.2784 23.8297 42.0587 23.9871 41.7135 23.6408C38.3681 20.2474 34.9977 16.8854 31.6334 13.5108C31.5393 13.4164 31.464 13.3093 31.3008 13.1142C32.6879 12.5916 33.9934 12.0628 35.3303 11.6095C43.5274 8.82042 51.9442 7.95159 60.5368 8.88967C81.5568 11.1939 100.116 25.3659 107.899 45.0341C108 45.2922 108.031 45.6636 107.924 45.9155C103.889 55.8629 97.6122 64.0979 89.1138 70.6266C89.051 70.6833 88.9757 70.7274 88.7686 70.8596Z"
                    fill="white"
                  />
                  <path
                    d="M19.1878 20.1909C21.234 22.256 23.2299 24.2769 25.2384 26.2916C27.5168 28.577 29.7952 30.8687 32.0861 33.1415C32.3936 33.4437 32.4438 33.6577 32.2367 34.0606C25.1192 47.7667 31.9731 64.4506 46.6601 69.0466C53.0622 71.0487 59.3011 70.4506 65.3014 67.416C65.5022 67.3153 65.6968 67.2082 65.8663 67.1201C69.4376 70.715 72.9776 74.2847 76.5677 77.9048C76.4046 77.9804 76.1974 78.0874 75.9778 78.1756C66.9898 81.8334 57.6692 83.1619 48.0222 82.186C26.7197 80.0265 8.07841 65.9868 0.119793 46.092C0.00053969 45.7898 -0.0496724 45.368 0.0633048 45.0847C4.06772 35.2002 10.3003 27.0156 18.7297 20.512C18.8489 20.4113 18.987 20.3294 19.1878 20.1909Z"
                    fill="white"
                  />
                  <path
                    d="M8.82617 4.58337C10.2133 3.1731 11.7636 1.60544 13.3515 0C41.9787 28.8034 70.6247 57.6195 99.2519 86.4229C97.8272 87.8458 96.2643 89.4009 94.6638 91C66.0554 62.1966 37.422 33.3742 8.82617 4.58337Z"
                    fill="white"
                  />
                  <path
                    d="M58.5234 59.5084C54.6696 60.9753 48.0227 60.7361 43.24 55.6553C39.5997 51.7897 38.0243 44.7573 40.0516 41.0112C46.2151 47.1812 52.341 53.3133 58.5234 59.5084Z"
                    fill="white"
                  />
                  <path
                    d="M49.7617 31.4036C53.1887 29.5022 60.2309 31.0825 64.1035 34.7278C69.1938 39.5189 69.426 46.2114 68.0515 49.8063C61.957 43.6805 55.8437 37.5294 49.7617 31.4036Z"
                    fill="white"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
        {/* user */}
        <div className="user w-ful -mt-6 mb-2">
          <div className="user-img w-10 h-10 flex  justify-center items-center overflow-hidden rounded-full mb-2 ml-4">
            <img
              src={localImgLoad(`images/${datas.profile_img}`)}
              alt="user"
              className=" w-full h-full"
            />
          </div>
          <p className="text-sm text-thin-light-gray">
            Loaned from
            <Link to="/user-profile" className="text-purple ml-1">
              {datas.username}
            </Link>
          </p>
        </div>
        {/* details */}
        <div className="details">
          {/* product title */}
          <Link
            to="#"
            className="text-xl font-bold text-dark-gray mb-2 capitalize line-clamp-1"
          >
            {datas.title}
          </Link>
          {/* countdown */}
          <div className="w-full h-[54px] flex justify-evenly items-center p-2 rounded-lg border border-[#E3E4FE]">
            <div className="flex flex-col justify-between">
              <p className="text-sm text-thin-light-gray tracking-wide">
                Interests:
              </p>

              <p
                className={`text-xs ${
                  datas.interest === "Paid" ? "text-green-600" : "text-red-400"
                }`}
              >
                {datas.interest}
              </p>
              <p className="text-sm font-bold tracking-wide text-dark-gray">
                {datas.price}
              </p>
            </div>
            <div className="w-[1px] h-full bg-[#E3E4FE]"></div>
            <div className="flex flex-col justify-between">
              <p className="text-sm text-thin-light-gray tracking-wide">
                Remaing Time
              </p>
              <p className="text-base font-bold tracking-wide text-dark-gray">
                <CountDown lastDate={datas.remaing} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-buttons flex items-center space-x-2">
        <Link
          to="/active-bids"
          className="btn-shine w-[98px] h-[33px] text-white rounded-full text-sm bg-pink flex justify-center items-center"
        >
          Terminate loan
        </Link>
        <Link to="#" className="text-dark-gray text-sm">
          <span className=" border-b border-dark-gray ">View transation</span>
        </Link>
      </div>
    </div>
  );
}
