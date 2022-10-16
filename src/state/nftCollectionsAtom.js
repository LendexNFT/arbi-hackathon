import { atom } from "recoil";

export const nftCollectionsState = atom({
  key: "nftCollections", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
