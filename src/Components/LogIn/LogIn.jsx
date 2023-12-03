import { Form, Link } from "react-router-dom";
import img from "/img.jpg";

function LogIn() {
	const handleLogIn = (event) => {
		event.preventDefault();
		const from = event.target;
		const user_name = from.user_name.value;
		const email = from.email.value;
		const password = from.password.value;

		console.log(user_name, email, password);
	};

	return (
		<div className='px-40 pt-20 flex justify-between'>
			<div className='w-full '>
				<p className='text-4xl font-bold text-slate-600 pb-4'>Hello!</p>
				<h1 className='text-5xl font-bold text-slate-700 pb-4'>
					Welcome to JHunting Sign In
				</h1>
				<h2 className='text-2xl font-semibold text-slate-400 pb-3'>
					You are just a step away from your dream job
				</h2>
				<Form onSubmit={handleLogIn}>
					<label className='form-control w-full max-w-lg'>
						<div className='label'>
							<span className='label-text'>User Name</span>
						</div>
						<input
							type='text'
							name='user_name'
							placeholder='Enter your Name'
							className='input input-bordered w-full max-w-lg'
						/>
					</label>
					<label className='form-control w-full max-w-lg'>
						<div className='label'>
							<span className='label-text'>Email</span>
						</div>
						<input
							type='email'
							name='email'
							placeholder='Enter Your Email'
							className='input input-bordered w-full max-w-lg'
						/>
					</label>
					<label className='form-control w-full max-w-lg'>
						<div className='label'>
							<span className='label-text'>Password</span>
						</div>
						<input
							type='password'
							name='password'
							placeholder='Enter Your Password'
							className='input input-bordered w-full max-w-lg'
						/>
					</label>
					<Link className='label-text text-blue-700 underline' to=''>
						forget password?
					</Link>
					<div className='pt-10'>
						<button type='submit' className='btns-primary '>
							Sign In
						</button>
					</div>
					<p className='pt-2'>
						New to JHunting
						<Link className='text-[#008BDC] underline' to='/register'>
							Sign Up
						</Link>
					</p>
				</Form>
			</div>
			<div>
				<div className='h-full'>
					<img className='w-full' src={img} alt='' />
				</div>
			</div>
		</div>
	);
}

export default LogIn;
