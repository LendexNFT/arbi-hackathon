/* eslint-disable import/prefer-default-export */
import { useChainContext } from "../context/chainContext/useChainContext";
import { abi as Factory } from "../contracts/abis/FactoryLoans.json";
import { abi as Loan } from "../contracts/abis/Loanft.json";
import addresses from "../contracts/addresses";
import { getContract } from "../contracts/web3";
import { useWallet } from "./useWallet";

export const useLoan = () => {
  const { chainState } = useChainContext();
  const { account } = useWallet();

  const createLoan = async (
    _collateralAsset,
    _interestAsset,
    _requestAsset,
    _requestAssetId,
    _amountAssetRequested,
    _timeToPay
  ) => {
    const contract = getContract(
      chainState.provider,
      Factory,
      addresses.factoryLoan[chainState.id]
    );
    console.log("Contract -> ", contract);
    const data = [
      _collateralAsset,
      _interestAsset,
      _requestAsset,
      _amountAssetRequested,
      _timeToPay,
    ];
    const receipt = await contract.methods
      .createLoan(data)
      .send({ from: account });
    console.log("Receipt ", receipt);
    return receipt;
  };

  const createBorrowOrder = async (
    _collateralId,
    _interestId,
    _amount,
    address
  ) => {
    const contract = getContract(chainState.provider, Loan, address);
    console.log("Contract -> ", contract);
    const receipt = await contract.methods
      .borrowOrder(_collateralId, _interestId, _amount)
      .send({ from: account });
    console.log("Receipt ", receipt);
    return receipt;
  };

  return { createLoan, createBorrowOrder };
};
