import { Link, useRouteError } from "react-router-dom";

function Error() {
	const error = useRouteError();
	console.error(error);

	return (
		<section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
			<div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
				<img
					className='w-2/6'
					src='https://github.com/saiful-islam-dev/Toy_Marketplace_Client_Side/blob/main/src/assets/error/001-error.png?raw=true'
					alt=''
				/>
				<div className='max-w-md text-center'>
					<h2 className='mb-8 font-extrabold text-8xl text-gray-600'>
						<span className='sr-only'>Error</span>
						{status || 404}
					</h2>
					<p className='text-2xl font-semibold md:text-3xl mb-8'>
						{error?.message}
					</p>
					<Link
						to='/'
						className='px-8 py-3 font-semibold rounded-full bg-red-400 text-gray-900'>
						Back to homepage
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Error;
