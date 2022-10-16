import { useRecoilState } from "recoil";
import { orderListState } from "../../state/orderListAtom";
import MyAssetsItem from "./MyAssetsItem";

export default function MyLendOrdersWidget() {
  // const {
  //   state: { products },
  // } = CartState();

  const [orderList, setOrderList] = useRecoilState(orderListState);
  console.log("order list", orderList);
  return (
    <div className="recent-transaction-widget overflow-auto overflow-x-auto w-full h-full p-7 rounded-2xl bg-white">
      {/* heading */}
      <div className="heading sm:flex justify-between items-center"></div>
{/* TITLES */}
<div className="flex justify-between">
        <div className="w-1/4">Asset</div>
        <div className="w-1/4">Collateral</div>
        <div className="w-1/4">Time</div>
        <div className="w-1/4">Amount</div>
      </div>
      <div className="content">
        {orderList.map((order) => {
          return (
            <div className="flex justify-between items-center">
              <MyAssetsItem key={order.asset.tokenId} product={order.asset} />
              <div>{order.collateral.name}</div>

              <div>{order.time}</div>
              <div>{order.interest}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
