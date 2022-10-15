/* eslint-disable import/prefer-default-export */
import { useCallback } from "react";
import Web3 from "web3";
import { walletconnect } from "../config/providers";
import walletMapping from "../config/wallets/wallets";
import { InitChainContext } from "../context/chainContext/ChainContext";
import { useChainContext } from "../context/chainContext/useChainContext";
import { getWeb3 } from "../contracts/web3";

function iOS() {
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
}

export const useWallet = () => {
  const { chainDispatch, chainState } = useChainContext();
  const { ethereum } = window;
  const userData = localStorage.getItem("user_address");

  const account = () => {
    if (userData) {
      const { address } = JSON.parse(userData);
      return address;
    }
    return null;
  };

  const connect = async (walletName, network) => {
    try {
      let provider;
      if (walletMapping[walletName] === "injected") {
        if (!ethereum) {
          console.warn("Web3 provider not found!");
        } else {
          await ethereum.request({
            method: "eth_requestAccounts",
          });

          switch (network.id) {
            case 137:
              await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: "0x89" }],
              });
              break;
            case 80001:
              await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: "0x13881" }],
              });
              break;
            default:
              console.log(`Not available chain ${network.id}`);
              break;
          }
          provider = Web3.givenProvider;
        }
      } else if (walletMapping[walletName] === "walletconnect") {
        document.addEventListener("visibilitychange", () => {
          if (document.visibilityState === "hidden" && iOS()) {
            localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
          }
        });
        provider = walletconnect(network.id, true);
        await provider.enable();
      }

      const chain = network;
      chain.provider = provider;
      localStorage.setItem(
        "user_address",
        JSON.stringify({
          name: walletName,
          chainId: network.id,
          address: provider.selectedAddress,
        })
      );
      chainDispatch({ type: "chainSwitch", payload: chain });
    } catch (error) {
      console.error("Error: ", error);
      throw new Error(error);
    }
  };

  const disconnect = async () => {
    try {
      chainDispatch({ type: "chainSwitch", payload: InitChainContext });
      localStorage.removeItem("user_address");
      console.log("Disconnect...");
    } catch (error) {
      console.info(error);
    }
  };

  const userWallet = () => {
    if (userData) {
      const { address } = JSON.parse(userData);
      const formatted = `${address?.slice(0, 4)}...${address?.slice(
        address.length - 4,
        address.length
      )}`.toUpperCase();
      return formatted;
    }
    return null;
  };

  const userBalance = useCallback(
    async (address) => {
      if (chainState?.provider) {
        console.log("-->> ", chainState.provider);
        const balanceInWei = await getWeb3(chainState.provider).eth.getBalance(
          address
        );
        const balance = Number(Web3.utils.fromWei(balanceInWei));
        return Math.floor(balance * 10 ** 4) / 10 ** 4;
      }
      return 0;
    },
    [chainState.provider]
  );

  return { connect, disconnect, userWallet, userBalance, account };
};
