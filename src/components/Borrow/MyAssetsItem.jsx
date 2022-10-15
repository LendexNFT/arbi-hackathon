import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { CartState } from '../../context/Context';
import useToggle from "../../hooks/useToggle";
import ModalCom from "../Helpers/ModalCom";

export default function MyAssetsItem ({ product }) {

  const {
    yuorSuppliesAssetsDispatch,
  } = CartState();

  const [balanceDropdown, setbalanceValue] = useToggle(false);
  const [moneyPopup, setPopup] = useToggle(false);
  const addMoneyHandler = () => {
    setPopup.toggle();
    setbalanceValue.set(false);
  };

  const [confirmationBorrow, setConfirmationBorrowModal] = useState(false);
  const confirmationBorrowHandler = () => {
    setConfirmationBorrowModal(!confirmationBorrow);
  };

  const [borrowOrderReady, setBorrowOrderReadyModal] = useState(false);
  const borrowOrderReadyHandler = () => {
    setBorrowOrderReadyModal(!borrowOrderReady);
  };

  function addToBorrow () {
    yuorSuppliesAssetsDispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  }




  const onSubmit = (data) => {
    console.log(data);
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    ...rest
  } = useForm({
    defaultValues: {
      assetsToBorrow: '',
    }
  });

  console.log(errors, rest);


  const includeAddressReserved = watch('includeAddressReserved');

  console.log(balanceDropdown);
  return (
    <>
      <li key={product.id} className="content-item py-3 border-b border-light-purple hover:border-purple">
        <div className="flex justify-between items-center">
          <div className="account-name flex space-x-4 items-center">
            <div className="icon w-14 h-14 flex justify-center items-center">
              {/* <img src={transaction1} alt="" className="" /> */}
              <img src={require(`../../assets/images/${product.image}`)} alt="" className="w-full h-full" />
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
            {/* <button
            type="button"
              onClick={() => {
                yuorSuppliesAssetsDispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                });
              }}
            className="btn-shine w-[98px] h-[33px] text-white rounded-full text-sm bg-pink flex justify-center items-center"
          >
            Add
          </button> */}
            <button
              onClick={() => addMoneyHandler()}
              type="button"
              className="w-[92px] flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-base rounded-full text-white"
            >
              Borrow
            </button>
            <p className="usd text-base text-light-green text-right mr-2">
              <Link
                to="/shop-details"
                state={{
                  id: product.id
                }}
              >
                view detail
              </Link>
            </p>
          </div>
        </div>
      </li>
      {moneyPopup && (
        <ModalCom action={addMoneyHandler} situation={moneyPopup}>
          <div className="lg:w-[580px] sm:w-[450px] w-full rounded-2xl h-auto bg-white">
            <div className="heading border-b border-light-purple lg:px-7 sm:px-5 px-3 py-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-dark-gray">
                I want to BORROW
              </h3>
              <span onClick={addMoneyHandler}>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36 16.16C36 17.4399 36 18.7199 36 20.0001C35.7911 20.0709 35.8636 20.2554 35.8385 20.4001C34.5321 27.9453 30.246 32.9248 22.9603 35.2822C21.9006 35.6251 20.7753 35.7657 19.6802 35.9997C18.4003 35.9997 17.1204 35.9997 15.8401 35.9997C15.5896 35.7086 15.2189 35.7732 14.9034 35.7093C7.77231 34.2621 3.08728 30.0725 0.769671 23.187C0.435002 22.1926 0.445997 21.1199 0 20.1599C0 18.7198 0 17.2798 0 15.8398C0.291376 15.6195 0.214408 15.2656 0.270759 14.9808C1.71321 7.69774 6.02611 2.99691 13.0428 0.700951C14.0118 0.383805 15.0509 0.386897 15.9999 0C17.2265 0 18.4532 0 19.6799 0C19.7156 0.124041 19.8125 0.136067 19.9225 0.146719C27.3 0.868973 33.5322 6.21922 35.3801 13.427C35.6121 14.3313 35.7945 15.2484 36 16.16ZM33.011 18.0787C33.0433 9.77105 26.3423 3.00309 18.077 2.9945C9.78479 2.98626 3.00344 9.658 2.98523 17.8426C2.96667 26.1633 9.58859 32.9601 17.7602 33.0079C26.197 33.0577 32.9787 26.4186 33.011 18.0787Z"
                    fill="#374557"
                    fillOpacity="0.6"
                  />
                  <path
                    d="M15.9309 18.023C13.9329 16.037 12.007 14.1207 10.0787 12.2072C9.60071 11.733 9.26398 11.2162 9.51996 10.506C9.945 9.32677 11.1954 9.0811 12.1437 10.0174C13.9067 11.7585 15.6766 13.494 17.385 15.2879C17.9108 15.8401 18.1633 15.7487 18.6375 15.258C20.3586 13.4761 22.1199 11.7327 23.8822 9.99096C24.8175 9.06632 26.1095 9.33639 26.4967 10.517C26.7286 11.2241 26.3919 11.7413 25.9133 12.2178C24.1757 13.9472 22.4477 15.6855 20.7104 17.4148C20.5228 17.6018 20.2964 17.7495 20.0466 17.9485C22.0831 19.974 24.0372 21.8992 25.9689 23.8468C26.9262 24.8119 26.6489 26.1101 25.4336 26.4987C24.712 26.7292 24.2131 26.3441 23.7455 25.8757C21.9945 24.1227 20.2232 22.3892 18.5045 20.6049C18.0698 20.1534 17.8716 20.2269 17.4802 20.6282C15.732 22.4215 13.9493 24.1807 12.1777 25.951C11.7022 26.4262 11.193 26.7471 10.4738 26.4537C9.31345 25.9798 9.06881 24.8398 9.98589 23.8952C11.285 22.5576 12.6138 21.2484 13.9387 19.9355C14.5792 19.3005 15.2399 18.6852 15.9309 18.023Z"
                    fill="#374557"
                    fillOpacity="0.6"
                  />
                </svg>
              </span>
            </div>
            <div className="content lg:px-7 px-3 sm:px-5 py-8">

              <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                  <label className="font-semibold text-gray-900 dark:text-white">Asset</label>
                  <input type="text" value={product.name} disabled className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "                  />
                </div>

                <div>
                  <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">Contract</h3>
                  <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input id="horizontal-list-radio-ERC20" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">ERC20 </label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input id="horizontal-list-radio-ERC721" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">ERC721</label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input id="horizontal-list-radio-ERC1155" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">ERC1155</label>
                      </div>
                    </li>
                    <li className="w-full dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input id="horizontal-list-radio-ERC4907" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">ERC4907</label>
                      </div>
                    </li>
                  </ul>
                </div>




                <div className="flex mt-5 mb-1">
                  <div className="w-1/3 ...">
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <span className='font-semibold text-gray-900 dark:text-white'>Interest to be paid</span>
                      </div>

                    </div>
                  </div>



                </div>

                <div className="flex mb-5">
                  <div className="w-1/4 ...">
                    <div className="relative flex items-start">
                      {/* <div className="flex items-center h-5">
                        <span>interestToBePaid</span>
                      </div> */}
                      <div className="text-sm">
                        <div>
                          <input type="text"
                            name="interestToBePaid"
                            id="interestToBePaid"
                            // checked={disableUI} 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                    focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Qty" required
                          />
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="w-3/4 ml-1">
                    <div>
                      {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contract to request interest</label> */}
                      <input type="text"
                        name="contractToRequestInterest"
                        id="contractToRequestInterest"
                        // checked={disableUI} 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                    focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Contract to request interest "
                        required
                      />
                    </div>
                  </div>

                </div>





                <div className="flex mt-5">
                  <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">For how many time? </label>
                  <button id="dropdown-button" data-dropdown-toggle="dropdown"
                    className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 
                    bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white rounded-l-lg hover:bg-gray-200 focus:ring-4 
                    focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button">
                    For how long:
                  </button>

                  <div className="relative w-full">

                    <input
                      label="assetsToBorrow"
                      id="assetsToBorrow"
                      className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                      {...register("assetsToBorrow", { required: "please enter assetsToBorrow" })}
                    />

                    <button
                      type="submit"

                      className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      days
                    </button>

                  </div>

                </div>
                <div className="relative w-full">

                  {errors.assetsToBorrow && (
                    <span className="bg-yellow-400">{errors.assetsToBorrow?.message}</span>
                  )}
                </div>
                <div className="flex mt-5 mb-10">
                  <div className="w-1/3 ...">
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="candidates"
                          aria-describedby="candidates-description"
                          name="candidates"
                          type="checkbox"
                          {...register('includeAddressReserved')}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="candidates" className="font-semibold text-gray-900 dark:text-white">
                          Reserved for address?
                        </label>

                      </div>
                    </div>
                  </div>
                  {includeAddressReserved && (
                    <div className="w-2/3">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Add wallet address</label>
                        <input type="text"
                          name="addressRserved"
                          id="addressRserved"
                          // checked={disableUI} 
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                    focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your wallet address " required
                        />
                      </div>
                    </div>
                  )}
                </div>


                <button
                  // className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border py-3 px-6 font-semibold text-md rounded"
                  className="w-[122px] h-11  my-3 flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-base rounded-full text-white text-xl"
                  type="submit"
                  onClick={() => {
                    addMoneyHandler();
                    confirmationBorrowHandler();
                  }}
                >
                  All set
                </button>
              </form>


            </div>
          </div>
        </ModalCom>
      )
      }
      {
        confirmationBorrow && (
          <ModalCom action={confirmationBorrowHandler} situation={confirmationBorrow}>
            <div className="lg:w-[450px] sm:w-[350px] w-full rounded-2xl h-auto bg-white">
              <div className="heading border-b border-light-purple lg:px-7 sm:px-5 px-3 py-6 flex items-center justify-between">
                <h3 className="text-xl font-bold text-dark-gray">
                  I borrowing
                </h3>
                <span onClick={confirmationBorrowHandler}>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M36 16.16C36 17.4399 36 18.7199 36 20.0001C35.7911 20.0709 35.8636 20.2554 35.8385 20.4001C34.5321 27.9453 30.246 32.9248 22.9603 35.2822C21.9006 35.6251 20.7753 35.7657 19.6802 35.9997C18.4003 35.9997 17.1204 35.9997 15.8401 35.9997C15.5896 35.7086 15.2189 35.7732 14.9034 35.7093C7.77231 34.2621 3.08728 30.0725 0.769671 23.187C0.435002 22.1926 0.445997 21.1199 0 20.1599C0 18.7198 0 17.2798 0 15.8398C0.291376 15.6195 0.214408 15.2656 0.270759 14.9808C1.71321 7.69774 6.02611 2.99691 13.0428 0.700951C14.0118 0.383805 15.0509 0.386897 15.9999 0C17.2265 0 18.4532 0 19.6799 0C19.7156 0.124041 19.8125 0.136067 19.9225 0.146719C27.3 0.868973 33.5322 6.21922 35.3801 13.427C35.6121 14.3313 35.7945 15.2484 36 16.16ZM33.011 18.0787C33.0433 9.77105 26.3423 3.00309 18.077 2.9945C9.78479 2.98626 3.00344 9.658 2.98523 17.8426C2.96667 26.1633 9.58859 32.9601 17.7602 33.0079C26.197 33.0577 32.9787 26.4186 33.011 18.0787Z"
                      fill="#374557"
                      fillOpacity="0.6"
                    />
                    <path
                      d="M15.9309 18.023C13.9329 16.037 12.007 14.1207 10.0787 12.2072C9.60071 11.733 9.26398 11.2162 9.51996 10.506C9.945 9.32677 11.1954 9.0811 12.1437 10.0174C13.9067 11.7585 15.6766 13.494 17.385 15.2879C17.9108 15.8401 18.1633 15.7487 18.6375 15.258C20.3586 13.4761 22.1199 11.7327 23.8822 9.99096C24.8175 9.06632 26.1095 9.33639 26.4967 10.517C26.7286 11.2241 26.3919 11.7413 25.9133 12.2178C24.1757 13.9472 22.4477 15.6855 20.7104 17.4148C20.5228 17.6018 20.2964 17.7495 20.0466 17.9485C22.0831 19.974 24.0372 21.8992 25.9689 23.8468C26.9262 24.8119 26.6489 26.1101 25.4336 26.4987C24.712 26.7292 24.2131 26.3441 23.7455 25.8757C21.9945 24.1227 20.2232 22.3892 18.5045 20.6049C18.0698 20.1534 17.8716 20.2269 17.4802 20.6282C15.732 22.4215 13.9493 24.1807 12.1777 25.951C11.7022 26.4262 11.193 26.7471 10.4738 26.4537C9.31345 25.9798 9.06881 24.8398 9.98589 23.8952C11.285 22.5576 12.6138 21.2484 13.9387 19.9355C14.5792 19.3005 15.2399 18.6852 15.9309 18.023Z"
                      fill="#374557"
                      fillOpacity="0.6"
                    />
                  </svg>
                </span>
              </div>
              <div className="content lg:px-7 px-3 sm:px-5 py-8">

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="chart-analysis mt-5">
                    {/* <div className="heading text-center">
                      <h1 className="text-base font-medium text-dark-gray mb-4">
                        Your All Artwork Statistics
                      </h1>
                    </div> */}
                    <div className="deatil-order-list">
                      <ul>
                        <li className="flex items-center mb-3.5">
                          <span className="w-4 h-4 bg-light-purple rounded-full block mr-2"></span>
                          <div>
                            <span className="text-sm text-thin-light-gray mr-2 text-xl">
                              Block orders :
                            </span>
                            <span className="text-sm text-dark-gray font-bold text-xl">
                              2
                            </span>
                          </div>
                        </li>
                        <li className="flex items-center mb-3.5">
                          <span className="w-4 h-4 bg-purple rounded-full block mr-2"></span>
                          <div>
                            <span className="text-sm text-thin-light-gray mr-2 text-xl">
                              Shield waranty :
                            </span>
                            <span className="text-sm text-dark-gray font-bold text-xl">
                              1
                            </span>
                          </div>
                        </li>
                        <li className="flex items-center mb-3.5">
                          <span className="w-4 h-4 bg-pink rounded-full block mr-2"></span>
                          <div>
                            <span className="text-sm text-thin-light-gray mr-2 text-xl">
                              Interest :
                            </span>
                            <span className="text-sm text-dark-gray font-bold text-xl">
                              43
                            </span>
                            <span className="text-sm text-thin-light-gray mr-2 text-xl">
                              <>&nbsp;&nbsp;</>MATIC
                            </span>
                          </div>
                        </li>
                        <li className="flex items-center mb-3.5">
                          <span className="w-4 h-4 bg-[#FFCD00] rounded-full block mr-2"></span>
                          <div>
                            <span className="text-sm text-thin-light-gray mr-2 text-xl">
                              Open for :
                            </span>
                            <span className="text-sm text-dark-gray font-bold text-xl">
                              45
                            </span>
                            <span className="text-sm text-thin-light-gray mr-2 text-xl">
                              <>&nbsp;&nbsp;</> days
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="sm:flex justify-between items-center pt-5 border-t border-light-purple">
                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          confirmationBorrowHandler();
                          addToBorrow({
                            type: "ADD_TO_CART",
                            payload: product,
                          });
                          borrowOrderReadyHandler();

                        }}
                        className="w-[122px] h-11 flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-base rounded-full text-white"
                      >
                        Place order
                      </button>
                    </div>
                    <div>
                      <button
                        type="submit"
                        onClick={() => {
                          confirmationBorrowHandler();
                          addMoneyHandler();

                        }}
                        className="w-[122px] h-11 flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-base rounded-full text-white"
                      >
                        Edit
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </div>
          </ModalCom >
        )
      }
      {
        borrowOrderReady && (
          <ModalCom action={borrowOrderReadyHandler} situation={borrowOrderReady}>
            <div className="lg:w-[450px] sm:w-[350px] w-full rounded-2xl h-auto bg-white">
              <div className="heading border-b border-light-purple lg:px-7 sm:px-5 px-3 py-6 flex items-center justify-between">
                <h3 className="text-xl font-bold text-dark-gray">
                  {/* I borrowing */}
                </h3>
                <span onClick={borrowOrderReadyHandler}>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M36 16.16C36 17.4399 36 18.7199 36 20.0001C35.7911 20.0709 35.8636 20.2554 35.8385 20.4001C34.5321 27.9453 30.246 32.9248 22.9603 35.2822C21.9006 35.6251 20.7753 35.7657 19.6802 35.9997C18.4003 35.9997 17.1204 35.9997 15.8401 35.9997C15.5896 35.7086 15.2189 35.7732 14.9034 35.7093C7.77231 34.2621 3.08728 30.0725 0.769671 23.187C0.435002 22.1926 0.445997 21.1199 0 20.1599C0 18.7198 0 17.2798 0 15.8398C0.291376 15.6195 0.214408 15.2656 0.270759 14.9808C1.71321 7.69774 6.02611 2.99691 13.0428 0.700951C14.0118 0.383805 15.0509 0.386897 15.9999 0C17.2265 0 18.4532 0 19.6799 0C19.7156 0.124041 19.8125 0.136067 19.9225 0.146719C27.3 0.868973 33.5322 6.21922 35.3801 13.427C35.6121 14.3313 35.7945 15.2484 36 16.16ZM33.011 18.0787C33.0433 9.77105 26.3423 3.00309 18.077 2.9945C9.78479 2.98626 3.00344 9.658 2.98523 17.8426C2.96667 26.1633 9.58859 32.9601 17.7602 33.0079C26.197 33.0577 32.9787 26.4186 33.011 18.0787Z"
                      fill="#374557"
                      fillOpacity="0.6"
                    />
                    <path
                      d="M15.9309 18.023C13.9329 16.037 12.007 14.1207 10.0787 12.2072C9.60071 11.733 9.26398 11.2162 9.51996 10.506C9.945 9.32677 11.1954 9.0811 12.1437 10.0174C13.9067 11.7585 15.6766 13.494 17.385 15.2879C17.9108 15.8401 18.1633 15.7487 18.6375 15.258C20.3586 13.4761 22.1199 11.7327 23.8822 9.99096C24.8175 9.06632 26.1095 9.33639 26.4967 10.517C26.7286 11.2241 26.3919 11.7413 25.9133 12.2178C24.1757 13.9472 22.4477 15.6855 20.7104 17.4148C20.5228 17.6018 20.2964 17.7495 20.0466 17.9485C22.0831 19.974 24.0372 21.8992 25.9689 23.8468C26.9262 24.8119 26.6489 26.1101 25.4336 26.4987C24.712 26.7292 24.2131 26.3441 23.7455 25.8757C21.9945 24.1227 20.2232 22.3892 18.5045 20.6049C18.0698 20.1534 17.8716 20.2269 17.4802 20.6282C15.732 22.4215 13.9493 24.1807 12.1777 25.951C11.7022 26.4262 11.193 26.7471 10.4738 26.4537C9.31345 25.9798 9.06881 24.8398 9.98589 23.8952C11.285 22.5576 12.6138 21.2484 13.9387 19.9355C14.5792 19.3005 15.2399 18.6852 15.9309 18.023Z"
                      fill="#374557"
                      fillOpacity="0.6"
                    />
                  </svg>
                </span>
              </div>
              <div className="content lg:px-7 px-3 sm:px-5 py-8">

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="ready-order-text mt-5">
                    {/* <div className="heading text-center">
                      <h1 className="text-base font-medium text-dark-gray mb-4">
                        Your All Artwork Statistics
                      </h1>
                    </div> */}
                    <div className="ready-order">
                      <div className="mb-8 border-2 border-lime-400 p-[23px] rounded-lg">
                        <p className='text-[18px] font-bold'>¡Your order is ready!</p>
                        <p className='text-[18px]'>
                          You can see it in your dashboard along with your other open orders and your history</p>
                      </div>
                    </div>
                  </div>
                  <div className="sm:flex justify-self-center items-center pt-5 border-t border-light-purple">
                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          borrowOrderReadyHandler();
                          // addToBorrow({
                          //   type: "ADD_TO_CART",
                          //   payload: product,
                          // });
                        }}
                        className="w-[182px] h-11 flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-base rounded-full text-white"
                      >
                        Back to dashboard
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </ModalCom >
        )
      }
    </>
  );
}

