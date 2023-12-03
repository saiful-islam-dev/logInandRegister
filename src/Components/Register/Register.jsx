import { useState } from "react";
import toast from "react-hot-toast";
import { Form, Link } from "react-router-dom";

function Register() {
	// const [password, setPassword] = useState("");
	// const [confirmPassword, setConfirmPassword] = useState("");
	// const [error, setError] = useState("");

	const handleRegister = (event) => {
		event.preventDefault();
		const from = event.target;
		const firstName = from.firstName.value;
		const lastName = from.lastName.value;
		const fullName = firstName + " " + lastName;
		const email = from.email.value;
		const password = from.password.value;
		const confirmPassword = from.confirmPassword.value;

		if (
			!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
				email
			)
		) {
			toast.error("Please provide a valid email");
			return;
		}

		const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

		if (passwordRegex.text(password)) {
			toast.success("Successfully registered!");
		} else {
			toast.error(
				"Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one digit."
			);
		}

		if (password !== confirmPassword) {
			setError("Passwords do not match");
		} else {
			setError("");
			// Do something with the passwords (e.g., send to server)
		}

		console.log(
			firstName,
			lastName,
			fullName,
			email,
			password,
			confirmPassword
		);
	};

	return (
		<div className='flex justify-center mt-20'>
			<div className='flex flex-col'>
				<div className='tittle pt-5'>
					<h1 className='text-5xl text-center font-bold text-slate-700 pb-4'>
						Welcome to JHunting Sign Up
					</h1>
					<h2 className='text-2xl text-center font-semibold text-slate-400 pb-3'>
						Find your dream job today.
					</h2>
				</div>
				<Form onSubmit={handleRegister} className='mx-auto'>
					<div className='flex justify-between gap-2'>
						<label className='form-control w-full max-w-sm'>
							<div className='label'>
								<span className='label-text font-medium'>First Name</span>
							</div>
							<input
								type='text'
								required
								name='firstName'
								placeholder='First Name'
								className='input input-bordered w-full max-w-lg'
							/>
						</label>
						<label className='form-control w-full max-w-sm'>
							<div className='label'>
								<span className='label-text font-medium'>Last Name</span>
							</div>
							<input
								type='text'
								name='lastName'
								required
								placeholder='Last Name'
								className='input input-bordered w-full max-w-lg'
							/>
						</label>
					</div>
					<label className='form-control w-full max-w-lg'>
						<div className='label'>
							<span className='label-text font-medium'>Email</span>
						</div>
						<input
							type='email'
							required
							name='email'
							placeholder='Enter Your Email'
							className='input input-bordered w-full max-w-lg'
						/>
					</label>
					<label className='form-control w-full max-w-lg'>
						<div className='label'>
							<span className='label-text font-medium'>Password</span>
						</div>
						<input
							type='password'
							name='password'
							placeholder='Must be at least 6 characters'
							className='input input-bordered w-full max-w-lg'
						/>
					</label>
					<label className='form-control w-full max-w-lg'>
						<div className='label'>
							<span className='label-text font-medium'>Password</span>
						</div>
						<input
							type='password'
							name='confirmPassword'
							placeholder='Confirm Password'
							className='input input-bordered w-full max-w-lg'
						/>
					</label>
					<p className='text-sm pt-2 font-normal'>
						By signing up, you agree to our{" "}
						<Link className='text-[#008BDC]' to='/termsConditions'>
							Terms and Conditions.
						</Link>
					</p>
					<div className='pt-10'>
						<button type='submit' className='btns-primary '>
							Sign Up
						</button>
					</div>
					<p className='pt-2'>
						Already registered?
						<Link className='text-[#008BDC] underline' to='/login'>
							Sign In
						</Link>
					</p>
				</Form>
			</div>
		</div>
	);
}

export default Register;
