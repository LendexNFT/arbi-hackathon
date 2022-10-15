/* eslint-disable import/prefer-default-export */
import { useContext } from "react";
import { ChainContext } from "./ChainContext";

export const useChainContext = () => useContext(ChainContext);
