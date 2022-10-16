import { atom } from "recoil";

export const orderListState = atom({
  key: "orderList", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
