import React from "react";
import Layout from "../Partials/Layout";
import ShopAssetWidget from "./ShopAssetWidget";


export default function ShopAssetsDetails ({ product }) {
  return (
    <>
      <Layout>
        <div className="shop-details-wrapper w-full">
          <div className="main-wrapper w-full">
            <ShopAssetWidget product={product} className="mb-8" />
          </div>
        </div>
      </Layout>
    </>
  );
}
