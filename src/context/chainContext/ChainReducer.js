import { InitChainContext } from "./ChainContext";

export const ChainReducer = (state = InitChainContext, action) => {
  switch (action.type) {
    case "chainSwitch":
      return action.payload;

    default:
      return state;
  }
};
