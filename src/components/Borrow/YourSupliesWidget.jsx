import dataImage1 from "../../assets/images/data-table-user-1.png";
import { CartState } from "../../context/Context";
import IncDecCounter from "./IncDecCounter";

export default function YourSupliesWidget () {
  const {
    yuorSuppliesAssetsState: { yourSuppliesCart },
    yuorSuppliesAssetsDispatch,
  } = CartState();

  // function removeToLend (asset) {
  //   console.log("removeToLend", asset);
  //   yuorSuppliesAssetsDispatch({
  //     type: "REMOVE_FROM_CART",
  //     payload: asset,
  //   });
  // }



  console.log('yourSuppliesCart', yourSuppliesCart);
  return (

    <>

      <div className="recent-transaction-widget overflow-auto overflow-x-auto w-full h-full p-7 rounded-2xl bg-white">
        <div className="relative w-full overflow-auto overflow-x-auto sm:rounded-lg">
          <div className="heading sm:flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold tracking-wide text-dark-gray">
                Your supplies
              </h1>
            </div>

          </div>
          <table className="w-full text-sm bg-white  text-left text-gray-500 dark:text-gray-400">
            <tbody>
              <tr className="text-base text-thin-light-gray border-b default-border-bottom ">
                <td className="py-4 text-left">offer</td>
                {/* <td className="py-4 text-center">Browsers</td>  */}
                <td className="py-4 text-center">Assets</td>
                <td className="py-4 text-center">Qty</td>
                <td className="py-4 text-center">Status</td>
                {/* <td className="py-4 text-center"></td> */}
              </tr>

              {yourSuppliesCart.map(asset => (

                <tr key={asset.id} className="bg-white border-b hover:bg-gray-50">
                  <td className="text-center py-4">
                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex justify-center items-center">
                      <img
                        src={dataImage1}
                        // src={process.env.PUBLIC_URL + data.imagenAsset}
                        alt="data"
                        className="w-full h-full"
                      />
                    </div>
                  </td>
                  <td className="text-center py-4">
                    <span className="text-base text-dark-gray whitespace-nowrap px-2">
                      {asset.name}
                    </span>
                  </td>
                  <td className="text-center py-4">
                    <span className="text-base text-thin-light-gray font-medium whitespace-nowrap px-2">
                      <IncDecCounter />
                    </span>
                  </td>
                  <td className="text-center py-4">
                    {/* <span className="text-sm px-[10px]  py-[6px] rounded-full bg-red-400 text-white capitalize">
                      Remove
                    </span> */}
                    <button
                      type="button"
                      // onClick={() => {
                      //   removeToLend({
                      //     type: "ADD_TO_CART",
                      //     payload: asset.id,
                      //   });
                      // }}
                      onClick={() =>
                        yuorSuppliesAssetsDispatch({
                          type: "REMOVE_FROM_CART",
                          payload: asset,
                        })
                      }
                      className="text-sm px-[10px]  py-[6px] rounded-full bg-red-400 text-white capitalize"
                    >
                      Remove
                    </button>
                  </td>
                </tr>

              ))}

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
