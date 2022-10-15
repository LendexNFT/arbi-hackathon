import CreateOrder from '../Partials/CreateOrder';
import Layout from '../Partials/Layout';
import TxHistory from '../Partials/TxHistory';
import BorrowStatusCard from './BorrowStatusCard';

export default function Nubicuo() {
	// const allBids = datas.datas;

	return (
		<>
			<Layout>
				<CreateOrder />
				<BorrowStatusCard />
				<TxHistory className='mb-10' />
			</Layout>
		</>
	);
}
