import MyAssetsItem from "./MyAssetsItem";

export default function MyAssetsWidget({ assets }) {
  // const {
  //   state: { products },
  // } = CartState();

  return (
    <div className="recent-transaction-widget overflow-auto overflow-x-auto w-full h-full p-7 rounded-2xl bg-white">
      {/* heading */}
      <div className="heading sm:flex justify-between items-center"></div>

      <div className="content">
        <ul>
          {assets.map((nft) => (
            <MyAssetsItem key={nft} product={nft} />
          ))}
        </ul>
      </div>
    </div>
  );
}
