import CreateOrder from "../Partials/CreateOrder";
import Layout from "../Partials/Layout";
import TxHistory from "../Partials/TxHistory";
import BorrowStatusCard from "./BorrowStatusCard";

import testData from "../../data/borrow_data.json";

export default function Nubicuo() {
  return (
    <>
      <Layout>
        <CreateOrder />
        <div className="grid grid-cols-3 gap-8 mb-24">
          {testData.data.map((item) => (
            <BorrowStatusCard key={item.id} datas={item} />
          ))}
        </div>
        <TxHistory className="mb-10" />
      </Layout>
    </>
  );
}
