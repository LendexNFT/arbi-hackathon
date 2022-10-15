import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { useMemo, useReducer } from "react";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import {
  ChainContext,
  InitChainContext,
} from "./context/chainContext/ChainContext";
import { ChainReducer } from "./context/chainContext/ChainReducer";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
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
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <ChainContextProvider value={ChainState}>
            {children}
          </ChainContextProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
};

export default Providers;
