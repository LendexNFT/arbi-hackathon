import { createContext } from "react";

export const ChainContext = createContext(null);

export const InitChainContext = {
  id: 0,
  name: "",
  icon: "",
  currency: "",
  provider: null,
};
