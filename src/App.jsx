import "./App.css";
import { FaBangladeshiTakaSign } from "react-icons/fa6";


const App = () => {

	return (
		<div className='p-5'>
			<table className='table-auto'>
				<thead>
					<tr>
						<th>Sl</th>
						<th>Sales Code</th>
						<th>Sale Number</th>
						<th>Payment</th>
					</tr>
				</thead>
				<tr>
					<td>1</td>
					<td>Cv-01</td>
					<td>001</td>
					<td rowSpan='3' className='text-center'>
						<span className='flex justify-center'>
							<FaBangladeshiTakaSign className='my-auto' />
							<p>3000</p>
						</span>
					</td>
				</tr>
				<tr>
					<td>2</td>
					<td>Cv-01</td>
					<td>002</td>
				</tr>
				<tr>
					<td>3</td>
					<td>Cv-03</td>
					<td>001</td>
				</tr>
				<tr>
					<td colSpan='3' className='text-center'>
						Grand Total
					</td>
					<td className='text-center'>
						<span className='flex  justify-center'>
							<FaBangladeshiTakaSign className='my-auto' />
							<p>3000</p>
						</span>
					</td>
				</tr>
			</table>
		</div>
	);
}

export default App;
