
import { CartState } from "../../context/Context";
import MyAssetsItem from "./MyAssetsItem";

export default function MyAssetsWidget () {

  const {
    state: { products },
  } = CartState();

  return (
    <div className="recent-transaction-widget overflow-auto overflow-x-auto w-full h-full p-7 rounded-2xl bg-white">
      {/* heading */}
      <div className="heading sm:flex justify-between items-center">
      </div>

      <div className="content">
        <ul>
          {products.map(product => <MyAssetsItem key={product.id} product={product} />)}
        </ul>
      </div>

    </div>

  );
}
