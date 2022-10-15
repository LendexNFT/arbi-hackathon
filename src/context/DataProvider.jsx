// /* eslint-disable */
// import React, { createContext } from "react";
// import storeReducer, { initialStore } from "../store/storeReducer";

// export const DataContext = createContext();

// export const StoreProvider = ({ children }) => {

//   // const [data, setData] = useState(assetsSupplyInitialList);
//   const [store, dispatch] = useReducer(storeReducer, initialStore)

//   return (
//     <DataContext.Provider value={
//       {
//         store,
//         dispatch
//       }
//     }>
//       {children}
//     </DataContext.Provider>
//   )

// }