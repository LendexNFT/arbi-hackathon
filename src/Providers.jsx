import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { useMemo, useReducer } from "react";
import { RecoilRoot } from "recoil";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import {
  ChainContext,
  InitChainContext,
} from "./context/chainContext/ChainContext";
import { ChainReducer } from "./context/chainContext/ChainReducer";

const quicknodeRpc =
  "https://prettiest-bold-rain.arbitrum-mainnet.discover.quiknode.pro/30bc570046893bf9a7b9dfe19438e2342e27d45b/";

const { chains, provider } = configureChains(
  [chain.arbitrum],
  [
    // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    // publicProvider(),
    jsonRpcProvider({
      rpc: (chain) => ({
        http: quicknodeRpc,
      }),
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
const Providers = ({ children }) => {
  const [chainState, chainDispatch] = useReducer(
    ChainReducer,
    InitChainContext
  );
  const ChainState = useMemo(
    () => ({
      chainState,
      chainDispatch,
    }),
    [chainState, chainDispatch]
  );

  const ChainContextProvider = ChainContext.Provider;

  return (
    <>
      <RecoilRoot>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <ChainContextProvider value={ChainState}>
              {children}
            </ChainContextProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      </RecoilRoot>
    </>
  );
};

export default Providers;
