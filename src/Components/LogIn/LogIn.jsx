import { Form } from "react-router-dom";
import img from '/img.jpg'

function LogIn() {
    return (
        <div className="px-40 pt-20 flex justify-between">
       <div className="w-full ">
       <p className="text-xl font-semibold text-slate-600 pb-4">Hello!</p>
       <h1 className="text-5xl font-bold text-slate-700 pb-4">Welcome Back to JHunting <br/> Login</h1>
       <h2 className="text-xl font-semibold text-slate-400 pb-3">You are just a step away from your dream job</h2>
       <Form >
       <label className="form-control w-full max-w-lg">
  <div className="label">
    <span className="label-text">User Name</span>
  </div>
  <input type="text" placeholder="Enter your Name" className="input input-bordered w-full max-w-lg" />
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
<a className="label-text" href="">Forget password?</a>
<div className="pt-10">
<button type="submit" className="btns-primary ">
Register
</button>
</div>
       </Form>
       </div>
        <div>
            <img className="w-full" src={img} alt="" />
        </div>
        </div>
    );
}

export default LogIn;
