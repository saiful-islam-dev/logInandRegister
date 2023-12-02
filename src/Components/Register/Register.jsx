import { Form } from "react-router-dom";


function Register() {
    return (
        <div className="flex justify-center ">
        <div className="">
        <p className="text-xl font-semibold text-slate-600 pb-4">Hello!</p>
        <h1 className="text-5xl text-center font-bold text-slate-700 pb-4">Welcome Back to JHunting <br/> Login</h1>
        <h2 className="text-xl text-center font-semibold text-slate-400 pb-3">You are just a step away from your dream job</h2>
        <Form >
        <label className="form-control w-full max-w-lg">
   <div className="label">
     <span className="label-text">First Name</span>
   </div>
   <input type="text" placeholder="First Name" className="input input-bordered w-full max-w-lg" />
 </label>
 <label className="form-control w-full max-w-lg">
 <div className="label">
   <span className="label-text">Last Name</span>
 </div>
 <input type="text" placeholder="Last Name" className="input input-bordered w-full max-w-lg" />
</label>
 <label className="form-control w-full max-w-lg">
   <div className="label">
     <span className="label-text">Email</span>
   </div>
   <input type="email" placeholder="Enter Your Email" className="input input-bordered w-full max-w-lg" />
 </label>
 <label className="form-control w-full max-w-lg">
 <div className="label">
   <span className="label-text">Password</span>
 </div>
 <input type="password" placeholder="Enter Your Password" className="input input-bordered w-full max-w-lg" />
 </label>
 <div className="pt-10">
 <button type="submit" className="btns-primary ">
 Register
 </button>
 </div>
        </Form>
        </div>
        </div>  
    );
}

export default Register;