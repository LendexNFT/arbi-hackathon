/* eslint-disable import/prefer-default-export */
import WalletConnectProvider from "@walletconnect/web3-provider";

export const RPC_URL = {
  137: "https://polygon-mainnet.g.alchemy.com/v2/LR3v9e4QrAHr6kd_JDnVgrdXPZzTOdfK",
  80001:
    "https://polygon-mumbai.g.alchemy.com/v2/EPFh1qnXg70wRUSBjnE_YiBrkwNa_b31",
  421613:
    "https://alien-twilight-voice.arbitrum-goerli.discover.quiknode.pro/f08321d64f93dcd1f396e09c85713017755de651/",
};

export function walletconnect(id, QR) {
  return new WalletConnectProvider({
    rpc: RPC_URL,
    chainId: id,
    bridge: "https://bridge.walletconnect.org",
    qrcode: QR,
  });
}
