import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="card w-full max-w-lg shrink-0 rounded-none p-10 mx-auto bg-white mt-20">
      <h2 className="text-center text-4xl font-semibold">
        Login Your Account
      </h2>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-none">Login</button>
        </div>
      </form>
      <p className="text-center font-semibold">Dont’t Have An Account ? <Link className="underline text-red-500" to='/auth/register'>Register</Link></p>
    </div>
  );
};

export default Login;
