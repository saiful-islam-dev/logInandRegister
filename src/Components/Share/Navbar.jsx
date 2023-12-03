import { Link, NavLink } from "react-router-dom";
// import MenuDropDown from "./MenuDropDown";

const Navbar = () => {
	const navOptions = (
		<>
			<li>
				<NavLink
					to='/'
					className={({ isActive }) => (isActive ? "active" : "default")}>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					to='/login'
					className={({ isActive }) => (isActive ? "active" : "default")}>
					Sign In
				</NavLink>
			</li>
			<li>
				<NavLink
					to='/register'
					className={({ isActive }) => (isActive ? "active" : "default")}>
					Sign Up
				</NavLink>
			</li>
		</>
	);

	return (
		<div>
			<div className='navbar bg-base-100 px-24'>
				<div className='navbar-start'>
					<div className='dropdown'>
						<label tabIndex={0} className='lg:hidden'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h8m-8 6h16'
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
							{navOptions}
						</ul>
					</div>
					<Link className='normal-case text-xl flex items-center '>
						JHunting
					</Link>
				</div>
				<div className='navbar-end hidden lg:flex'>
					<ul className='flex gap-4 font-semibold text-lg'>{navOptions}</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
