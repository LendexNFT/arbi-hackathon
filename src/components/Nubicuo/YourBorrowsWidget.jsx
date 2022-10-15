import bank1 from "../../assets/images/bank-1.png";
import { CartState } from "../../context/Context";

export default function YourBorrowsWidget () {
  const {
    // state: { cart },
    yourBorrowsAssetsState: { yourBorrowsCart },
  } = CartState();

  return (

    <>
      <div className="my-wallets w-full h-full overflow-auto overflow-x-auto bg-white rounded-lg p-6">
        <div className="mb-4">
          <h1 className="text-xl font-bold tracking-wide text-dark-gray">
            My loan orders
          </h1>
        </div>
        <div className="content-area">


          {yourBorrowsCart.map(product => (

            <div key={product.id} className="flex justify-between items-center mb-6">
              <div className="flex space-x-5 items-center">
                <div className="account-name flex space-x-4 items-center">
                  <div className="icon w-14 h-14 transition duration-300 ease-in-out rounded-full flex justify-center items-center bg-light-purple">
                    <img src={bank1} alt="" />
                    {/* <img src={require(`../../assets/images/${product.imagenAsset}`)} alt="" /> */}
                  </div>
                  <div className="name">
                    <p className="text-xl font-bold text-dark-gray tracking-wide">
                      {product.id}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-5 items-center">
                <div>
                  <p className="text-xl font-bold text-dark-gray text-right mb-3">
                    $734.79
                  </p>
                  <p className="text-sm text-thin-light-gray">
                    New Add
                    <span className="text-light-green ml-1">
                      +324.75
                    </span>
                  </p>
                </div>
                <div>
                  <span>
                    <svg
                      width="6"
                      height="26"
                      viewBox="0 0 6 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="3"
                        cy="3"
                        r="3"
                        fill="#374557"
                        fillOpacity="0.6"
                      />
                      <circle
                        cx="3"
                        cy="12.75"
                        r="3"
                        fill="#374557"
                        fillOpacity="0.6"
                      />
                      <circle
                        cx="3"
                        cy="22.5"
                        r="3"
                        fill="#374557"
                        fillOpacity="0.6"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

          )
          )}




        </div>
      </div>



    </>
  );
}
