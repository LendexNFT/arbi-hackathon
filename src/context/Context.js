/* eslint-disable */
import React, { createContext, useContext, useReducer } from "react";
import {
  cartReducer,
  yourBorrowsAssetsReducer,
  yuorSuppliesAssetsReducer,
} from "./Reducer";

const Cart = createContext();
const CartYourSupplies = createContext();

function getArbitraryData(arr) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}

const Context = ({ children }) => {
  const assetImgList = [
    "data-table-user-1.png",
    "data-table-user-2.png",
    "data-table-user-3.png",
    "data-table-user-4.png",
    "crescent-sword.png",
  ];
  const assetName = [
    "Crescent Sword",
    "Mighty sword",
    "Cornerstone",
    "steroid rings",
    "Thunder lethal",
  ];

  // Generate 10 random products for initial list supply and borrow assets module
  // const products = [...Array(10)].map(() => ({
  //   id: uuid(),
  //   name: getArbitraryData(assetName),
  //   price: 100.34,
  //   eth_price: 0.4,
  //   usd_price: 493.66,
  //   wallet: '0x34...a5f36',
  //   date: '2018-01-01',
  //   // imagenAsset: '../../assets/images/data-table-user-1.png',
  //   // image: 'data-table-user-1.png',
  //   image: getArbitraryData(assetImgList),
  //   creator_img: 'creator.png',
  //   owner_img: "owner.png",
  //   description: 'This is the sword of the new moon that can end everything. It was used by a remarkable Taoist who had devoted herself to vanquishing evil.',
  //   powerScore: 10568,
  //   phsyAtk: 1933,
  //   spellAtk: 1306,
  //   accuracy: 432,
  //   skillAtkDMGBoost: 63,
  //   skillDMGReduction: 69,
  //   network: 'Etereum',
  //   network: 'ETH',
  //   inStock: 4,
  //   status: '',
  //   isActive: true,
  //   ratings: 5,
  //   ownedBy: 'Jose RV',
  //   createBy: 'Jose Luis Rivas',
  //   createAt: '16 June 2022, 11:32 PM',
  //   datePublished: '16 June 2022, 11:32 PM',
  //   timePublished: '11:32 PM',
  //   dateFinishSupplie: '16 June 2022, 11:32 PM',
  //   dateFinishBorrow: '16 June 2022, 11:32 PM',
  // }));

  const products = [
    {
      id: 1,
      name: getArbitraryData(assetName),
      price: 100.34,
      eth_price: 0.4,
      usd_price: 493.66,
      wallet: "0x34...a5f36",
      date: "2018-01-01",
      // imagenAsset: '../../assets/images/data-table-user-1.png',
      // image: 'data-table-user-1.png',
      image: getArbitraryData(assetImgList),
      creator_img: "creator.png",
      owner_img: "owner.png",
      description:
        "This is the sword of the new moon that can end everything. It was used by a remarkable Taoist who had devoted herself to vanquishing evil.",
      powerScore: 10568,
      phsyAtk: 1933,
      spellAtk: 1306,
      accuracy: 432,
      skillAtkDMGBoost: 63,
      skillDMGReduction: 69,
      network: "Etereum",
      network: "ETH",
      inStock: 4,
      status: "",
      isActive: true,
      ratings: 5,
      ownedBy: "Jose RV",
      createBy: "Jose Luis Rivas",
      createAt: "16 June 2022, 11:32 PM",
      datePublished: "16 June 2022, 11:32 PM",
      timePublished: "11:32 PM",
      dateFinishSupplie: "16 June 2022, 11:32 PM",
      dateFinishBorrow: "16 June 2022, 11:32 PM",
    },
    {
      id: 2,
      name: getArbitraryData(assetName),
      price: 100.34,
      eth_price: 0.4,
      usd_price: 493.66,
      wallet: "0x34...a5f36",
      date: "2018-01-01",
      // imagenAsset: '../../assets/images/data-table-user-1.png',
      // image: 'data-table-user-1.png',
      image: getArbitraryData(assetImgList),
      creator_img: "creator.png",
      owner_img: "owner.png",
      description:
        "This is the sword of the new moon that can end everything. It was used by a remarkable Taoist who had devoted herself to vanquishing evil.",
      powerScore: 10568,
      phsyAtk: 1933,
      spellAtk: 1306,
      accuracy: 432,
      skillAtkDMGBoost: 63,
      skillDMGReduction: 69,
      network: "Etereum",
      network: "ETH",
      inStock: 4,
      status: "",
      isActive: true,
      ratings: 5,
      ownedBy: "Jose RV",
      createBy: "Jose Luis Rivas",
      createAt: "16 June 2022, 11:32 PM",
      datePublished: "16 June 2022, 11:32 PM",
      timePublished: "11:32 PM",
      dateFinishSupplie: "16 June 2022, 11:32 PM",
      dateFinishBorrow: "16 June 2022, 11:32 PM",
    },
    {
      id: 3,
      name: getArbitraryData(assetName),
      price: 100.34,
      eth_price: 0.4,
      usd_price: 493.66,
      wallet: "0x34...a5f36",
      date: "2018-01-01",
      // imagenAsset: '../../assets/images/data-table-user-1.png',
      // image: 'data-table-user-1.png',
      image: getArbitraryData(assetImgList),
      creator_img: "creator.png",
      owner_img: "owner.png",
      description:
        "This is the sword of the new moon that can end everything. It was used by a remarkable Taoist who had devoted herself to vanquishing evil.",
      powerScore: 10568,
      phsyAtk: 1933,
      spellAtk: 1306,
      accuracy: 432,
      skillAtkDMGBoost: 63,
      skillDMGReduction: 69,
      network: "Etereum",
      network: "ETH",
      inStock: 4,
      status: "",
      isActive: true,
      ratings: 5,
      ownedBy: "Jose RV",
      createBy: "Jose Luis Rivas",
      createAt: "16 June 2022, 11:32 PM",
      datePublished: "16 June 2022, 11:32 PM",
      timePublished: "11:32 PM",
      dateFinishSupplie: "16 June 2022, 11:32 PM",
      dateFinishBorrow: "16 June 2022, 11:32 PM",
    },
    {
      id: 4,
      name: getArbitraryData(assetName),
      price: 100.34,
      eth_price: 0.4,
      usd_price: 493.66,
      wallet: "0x34...a5f36",
      date: "2018-01-01",
      // imagenAsset: '../../assets/images/data-table-user-1.png',
      // image: 'data-table-user-1.png',
      image: getArbitraryData(assetImgList),
      creator_img: "creator.png",
      owner_img: "owner.png",
      description:
        "This is the sword of the new moon that can end everything. It was used by a remarkable Taoist who had devoted herself to vanquishing evil.",
      powerScore: 10568,
      phsyAtk: 1933,
      spellAtk: 1306,
      accuracy: 432,
      skillAtkDMGBoost: 63,
      skillDMGReduction: 69,
      network: "Etereum",
      network: "ETH",
      inStock: 4,
      status: "",
      isActive: true,
      ratings: 5,
      ownedBy: "Jose RV",
      createBy: "Jose Luis Rivas",
      createAt: "16 June 2022, 11:32 PM",
      datePublished: "16 June 2022, 11:32 PM",
      timePublished: "11:32 PM",
      dateFinishSupplie: "16 June 2022, 11:32 PM",
      dateFinishBorrow: "16 June 2022, 11:32 PM",
    },
    {
      id: 5,
      name: getArbitraryData(assetName),
      price: 100.34,
      eth_price: 0.4,
      usd_price: 493.66,
      wallet: "0x34...a5f36",
      date: "2018-01-01",
      // imagenAsset: '../../assets/images/data-table-user-1.png',
      // image: 'data-table-user-1.png',
      image: getArbitraryData(assetImgList),
      creator_img: "creator.png",
      owner_img: "owner.png",
      description:
        "This is the sword of the new moon that can end everything. It was used by a remarkable Taoist who had devoted herself to vanquishing evil.",
      powerScore: 10568,
      phsyAtk: 1933,
      spellAtk: 1306,
      accuracy: 432,
      skillAtkDMGBoost: 63,
      skillDMGReduction: 69,
      network: "Etereum",
      network: "ETH",
      inStock: 4,
      status: "",
      isActive: true,
      ratings: 5,
      ownedBy: "Jose RV",
      createBy: "Jose Luis Rivas",
      createAt: "16 June 2022, 11:32 PM",
      datePublished: "16 June 2022, 11:32 PM",
      timePublished: "11:32 PM",
      dateFinishSupplie: "16 June 2022, 11:32 PM",
      dateFinishBorrow: "16 June 2022, 11:32 PM",
    },
    {
      id: 6,
      name: getArbitraryData(assetName),
      price: 100.34,
      eth_price: 0.4,
      usd_price: 493.66,
      wallet: "0x34...a5f36",
      date: "2018-01-01",
      // imagenAsset: '../../assets/images/data-table-user-1.png',
      // image: 'data-table-user-1.png',
      image: getArbitraryData(assetImgList),
      creator_img: "creator.png",
      owner_img: "owner.png",
      description:
        "This is the sword of the new moon that can end everything. It was used by a remarkable Taoist who had devoted herself to vanquishing evil.",
      powerScore: 10568,
      phsyAtk: 1933,
      spellAtk: 1306,
      accuracy: 432,
      skillAtkDMGBoost: 63,
      skillDMGReduction: 69,
      network: "Etereum",
      network: "ETH",
      inStock: 4,
      status: "",
      isActive: true,
      ratings: 5,
      ownedBy: "Jose RV",
      createBy: "Jose Luis Rivas",
      createAt: "16 June 2022, 11:32 PM",
      datePublished: "16 June 2022, 11:32 PM",
      timePublished: "11:32 PM",
      dateFinishSupplie: "16 June 2022, 11:32 PM",
      dateFinishBorrow: "16 June 2022, 11:32 PM",
    },
  ];

  // console.log("products", products);

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [yourSuppliesAssetState, yourSuppliesAssetsDispatch] = useReducer(
    yuorSuppliesAssetsReducer,
    {
      // yourAssetsCartList: yourAssetsCartList,
      yourSuppliesCart: [],
    }
  );
  const [yourBorrowsAssetsState, yourBorrowsAssetsDispatch] = useReducer(
    yourBorrowsAssetsReducer,
    {
      // yourAssetsCartList: yourAssetsCartList,
      yourBorrowsCart: [],
    }
  );
  return (
    // <Cart.Provider value={{ state, dispatch, productState, productDispatch, yourSuppliesAssetState, yourSuppliesAssetsDispatch, yourBorrowsAssetsState, yourBorrowsAssetsDispatch}}>
    <Cart.Provider
      value={{
        state,
        dispatch,
        yourSuppliesAssetState,
        yourSuppliesAssetsDispatch,
        yourBorrowsAssetsState,
        yourBorrowsAssetsDispatch,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
