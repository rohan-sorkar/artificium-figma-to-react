import logo from "../assets/img/logo.png";
import signUpImg from "../assets/img/sign-up.png";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section className="flex h-screen justify-between gap-12 bg-noble-black-700">
      <div className="flex w-full basis-8/12 flex-col justify-between p-12">
        <div className="flex justify-between">
        <Link to={'/'}>
          <img src={logo} alt="logo" />
          </Link>
          <Link to={'/login'} className="text-gradient cursor-pointer text-body-lg font-semibold">
            Login
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <div className="">
            <h1 className="mb-16 text-heading-xl text-noble-black-100">
              Connect with your team and bring your <br /> creative ideas to
              life.
            </h1>
            <form className="grid grid-cols-2 gap-6">
              <div>
                <label className=" ml-1 text-body-md font-medium text-noble-black-300">
                  First name
                </label>
                <input
                  type="text"
                  className=" mt-3 w-full rounded-lg border border-noble-black-500 bg-noble-black-600 px-6 py-[11px] text-noble-black-200 caret-stem-green-500 outline-none"
                  placeholder="First name"
                />
              </div>
              <div>
                <label className=" ml-1 text-body-md font-medium text-noble-black-300">
                  Last name
                </label>
                <input
                  type="text"
                  className=" mt-3 w-full rounded-lg border border-noble-black-500 bg-noble-black-600 px-6 py-[11px] text-noble-black-200 caret-stem-green-500 outline-none"
                  placeholder="Last name"
                />
              </div>
              <div>
              <label className=" ml-1 text-body-md font-medium text-noble-black-300">
                  Password
                </label>
                <input
                  type="password"
                  className=" mt-3 w-full rounded-lg border border-noble-black-500 bg-noble-black-600 px-6 py-[11px] text-noble-black-200 caret-stem-green-500 outline-none"
                  placeholder="Password"
                />
              </div>
              <div>
              <label className=" ml-1 text-body-md font-medium text-noble-black-300">
                  Repeat password
                </label>
                <input
                  type="password"
                  className=" mt-3 w-full rounded-lg border border-noble-black-500 bg-noble-black-600 px-6 py-[11px] text-noble-black-200 caret-stem-green-500 outline-none"
                  placeholder="Repeat password"
                />
              </div>
            </form>
              <div className="my-9 flex items-center gap-4">
                <div className="h-7 w-7 cursor-pointer rounded-md border border-noble-black-500 bg-noble-black-600 "></div>
                <p className=" text-body-lg font-medium text-noble-black-200">
                  I agree with{" "}
                  <p className="text-gradient inline font-semibold">
                    Terms and conditions
                  </p>
                </p>
              </div>
              <button className=" w-full rounded-lg bg-stem-green-500 py-3 text-body-lg  font-semibold text-day-blue-900">
                Create Free Account
              </button>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-body-md font-medium text-noble-black-300">
            Artificium.app © 2023
          </p>
          <p className="text-body-md font-medium text-noble-black-300 cursor-pointer">
            Privacy Policy
          </p>
        </div>
      </div>
      <div className="basis-4/12">
        <img
          className="h-screen w-full rounded-2xl object-cover"
          src={signUpImg}
          alt="sign-in"
        />
      </div>
    </section>
  )
}

export default Register;