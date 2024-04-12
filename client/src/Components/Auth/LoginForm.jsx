import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdArrowBack } from "react-icons/md";
const LoginForm = ({ register, loading, errors, logIn, signInWithGoogle }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full md:max-w-sm mx-auto">
      <Link to="/" className="inline-block">
        <MdArrowBack className="text-2xl mb-2 text-[#002D74] -ml-4 cursor-pointer" />
      </Link>
      <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
      <p className="text-sm mt-4 text-[#002D74]">
        If you are already a member, easily log in
      </p>
      <hr className="border-gray-400 mt-4 mb-8" />
      <div>
        <label htmlFor="email" className="block p-2">
          Email
        </label>
        <input
          className="p-2 outline-none rounded-xl border w-full"
          type="email"
          {...register("email")}
          placeholder="Email"
        />
        <p className="text-sm text-red-600">{errors.email?.message}</p>
      </div>
      <div className="relative">
        <label htmlFor="password" className="block p-2">
          Password
        </label>
        <div className="relative">
          <input
            className="p-2 outline-none rounded-xl border w-full"
            type={showPassword ? "text" : "password"}
            {...register("password")}
            placeholder="Password"
          />
          {showPassword ? (
            <FaEye
              onClick={() => setShowPassword(false)}
              className="absolute bottom-3 right-2 cursor-pointer"
            />
          ) : (
            <FaEyeSlash
              onClick={() => setShowPassword(true)}
              className="absolute bottom-3 right-2 cursor-pointer"
            />
          )}
        </div>
        <p className="text-sm text-red-600">{errors.password?.message}</p>
      </div>
      {loading ? (
        <button
          type="button"
          disabled
          className="bg-[#002D74] mt-5 w-full rounded-xl text-white py-2 hover:scale-105 duration-300"
        >
          <span className="inline-block animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></span>
        </button>
      ) : (
        <input
          type="submit"
          value="Login"
          className="bg-[#002D74] mt-5 rounded-xl w-full text-white py-2 hover:scale-105 duration-300"
        />
      )}

      <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
        <hr className="border-gray-400" />
        <p className="text-center text-sm">OR</p>
        <hr className="border-gray-400" />
      </div>

      <button
        type="button"
        onClick={signInWithGoogle}
        className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]"
      >
        <FcGoogle size={28} /> &emsp;Login with Google
      </button>

      <div className="mt-5 text-sm border-b border-[#002D74] py-4 text-[#002D74]">
        <a href="#">Forgot your password?</a>
      </div>

      <div className="mt-3 text-sm flex justify-between items-center text-[#002D74]">
        <p>Don't have an account?</p>
        <Link
          to="/register"
          className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
