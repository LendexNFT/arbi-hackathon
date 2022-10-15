/* eslint-disable import/prefer-default-export */
import WalletConnectProvider from "@walletconnect/web3-provider";

export const RPC_URL = {
  137: "https://polygon-mainnet.g.alchemy.com/v2/LR3v9e4QrAHr6kd_JDnVgrdXPZzTOdfK",
  80001:
    "https://polygon-mumbai.g.alchemy.com/v2/EPFh1qnXg70wRUSBjnE_YiBrkwNa_b31",
};

export function walletconnect(id, QR) {
  return new WalletConnectProvider({
    rpc: RPC_URL,
    chainId: id,
    bridge: "https://bridge.walletconnect.org",
    qrcode: QR,
  });
}
