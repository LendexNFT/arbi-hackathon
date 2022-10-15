/* eslint-disable */
import { Route, Routes } from "react-router-dom";
import FourZeroFour from "./components/FourZeroFour";
import ScrollToTop from "./components/Helpers/ScrollToTop";
import BorrowPage from "./views/BorrowPage";
import DashboardPage from "./views/DashboardPage";
import LendPage from "./views/LendPage";
import OverviewPage from "./views/OverviewPage";
import ShopAssetsDetailsPage from "./views/ShopAssetsDetailsPage";

export default function Routers () {
  return (
    <ScrollToTop>
      <Routes>
        {/* guest routes */}

        <Route exact path="/shop-details" element={<ShopAssetsDetailsPage />} />
        <Route exact path="/" element={<OverviewPage />} />
        <Route exact path="/lend" element={<LendPage />} />
        <Route exact path="/borrow" element={<BorrowPage />} />
        <Route exact path="/dashboard" element={<DashboardPage />} />
        
        {/* private route */}


        <Route path="*" element={<FourZeroFour />} />
      </Routes>
    </ScrollToTop>
  );
}
