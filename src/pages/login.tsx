import logo from "../assets/img/logo.png";
import signInImg from "../assets/img/sign-in.png";
import emailSvg from "../assets/svgIcons/email.svg";
import passwordSvg from "../assets/svgIcons/lock.svg";
import googleImg from "../assets/img/google.png";
import appleImg from "../assets/img/apple.png";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className="flex justify-between gap-12 h-screen bg-noble-black-700">
      <div className="flex w-full flex-col justify-between p-12 basis-6/12">
        <Link to={'/'}>
          <img src={logo} alt="logo" />
        </Link>
        <div className="mx-auto h-[610px] w-[496px]">
          <h1 className=" text-heading-xl text-noble-black-100">
            Let's get <h1 className="font-bold text-gradient inline">creative!</h1>
          </h1>
          <p className=" text-body-xl font-medium text-noble-black-300 py-5">Log in to Artificium to start creating magic.</p>
          <form>
            <div className="relative my-6 border-gradient border-shadow">
              <img src={emailSvg} className="absolute top-[22px] left-4" alt="email" />
              <input type="email" className=" bg-noble-black-600 text-noble-black-200 caret-stem-green-500 outline-none py-4 pl-12 pr-4 w-full rounded-lg border border-noble-black-500" value="mikolaj.niznik@gmail.com" placeholder="Write your Email here.." autoFocus />
            </div>
            <div className="relative my-6">
              <img src={passwordSvg} className="absolute top-[22px] left-4" alt="password" />
              <input type="password" className="bg-noble-black-600 text-noble-black-200 caret-stem-green-500 outline-none py-4 pl-12 pr-4 w-full rounded-lg border border-noble-black-500" placeholder="Write your password here.." />
            </div>
            <div className="flex items-center justify-between my-9">
              <div className="flex gap-4 items-center">
                <div className="h-7 w-7 bg-noble-black-600 border border-noble-black-500 rounded-md cursor-pointer "></div>
                <p className=" text-noble-black-200 text-body-lg font-medium">Remember me</p>
              </div>
              <p className=" text-body-lg font-semibold text-gradient cursor-pointer">Forget password?</p>
            </div>
            <button className=" bg-stem-green-500 rounded-lg w-full py-3 text-body-lg  font-semibold text-day-blue-900">Login</button>
            <div className="flex items-center my-8">
              <hr className="w-full text-noble-black-500" />
              <p className="w-full text-center text-noble-black-400 text-body-sm font-medium">or continue with</p>
              <hr className="w-full text-noble-black-500" />
            </div>
            <div className="flex gap-5 my-10">
              <button className="bg-noble-black-600 text-noble-black-400 text-body-lg font-semibold flex items-center gap-4 py-3 w-full justify-center rounded-xl">
                <img src={googleImg} alt="google" />
                Google Account
              </button>
              <button className=" bg-noble-black-600 text-noble-black-400 text-body-lg font-semibold flex items-center gap-4 py-3 w-full justify-center rounded-xl">
                <img src={appleImg} alt="apple" />
                Apple Account
              </button>
            </div>
          </form>
        </div>
        <Link to='/register'>
          <p className="text-body-lg text-noble-black-400 cursor-pointer">
            Don’t have an account?<strong className="ml-3 font-semibold text-gradient">Sign Up</strong>
          </p>
        </Link>
      </div>
      <div className="basis-6/12">
        <img
          className="h-screen w-full rounded-2xl object-cover"
          src={signInImg}
          alt="sign-in"
        />
      </div>
    </section>
  )
}

export default Login;