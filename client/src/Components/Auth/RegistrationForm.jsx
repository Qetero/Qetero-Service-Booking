import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { useState } from "react";
const RegistrationForm = ({
  role,
  register,
  goBack,
  loading,
  errors,
  signUpWithGoogle,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="w-full md:max-w-sm mx-auto self-center">
      <MdArrowBack
        className="text-2xl mb-2 -ml-4 text-[#002D74] cursor-pointer"
        onClick={goBack}
      />
      <h2 className="font-bold text-2xl text-[#002D74]">
        Register {role.name}
      </h2>
      <p className="text-sm mt-4 text-[#002D74] ">{role.purpose}</p>

      <hr className="border-gray-400 mt-4 mb-8" />
      <div className="flex flex-col gap-4">
        {role.name == "Business Owner" && (
          <div>
            <label htmlFor="TIN" className="block p-2">
              TIN
            </label>
            <input
              className="p-2 outline-none rounded-xl border w-full"
              id="TIN"
              type="text"
              placeholder="TIN"
              {...register("TIN")}
            />
            <p className="text-sm text-red-600">{errors.TIN?.message}</p>
          </div>
        )}
        <div>
          <label htmlFor="fullName" className="block p-2">
            Full Name
          </label>
          <input
            className="p-2 outline-none rounded-xl border w-full"
            id="fullName"
            type="fullName"
            {...register("fullName")}
            placeholder="Full Name"
          />
          <p className="text-sm text-red-600">{errors.fullName?.message}</p>
        </div>
        <div>
          <label htmlFor="email" className="block p-2">
            Email
          </label>
          <input
            className="p-2 outline-none rounded-xl border w-full"
            id="email"
            type="email"
            {...register("email")}
            placeholder="Email"
          />
          <p className="text-sm text-red-600">{errors.email?.message}</p>
        </div>
        <div>
          <label htmlFor="password" className="block p-2">
            Password
          </label>
          <div className="relative">
            <input
              className="p-2 outline-none rounded-xl border w-full"
              id="password"
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
        <div className="relative">
          <label htmlFor="confirm-password" className="block p-2">
            Comfirm Password
          </label>
          <div className="relative">
            <input
              className="p-2 outline-none rounded-xl border w-full"
              id="confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              {...register("passwordConfirmation")}
              placeholder="Repeat Password"
            />
            {showConfirmPassword ? (
              <FaEye
                onClick={() => setShowConfirmPassword(false)}
                className="absolute bottom-3 right-2 cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setShowConfirmPassword(true)}
                className="absolute bottom-3 right-2 cursor-pointer"
              />
            )}
          </div>
          <p className="text-sm text-red-600">
            {errors.passwordConfirmation?.message}
          </p>
        </div>
        {loading ? (
          <button
            type="button"
            disabled
            className="bg-[#002D74] mt-5 rounded-xl text-white py-2 hover:scale-105 duration-300"
          >
            <span className="inline-block animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></span>
          </button>
        ) : (
          <input
            type="submit"
            value="Register"
            className="bg-[#002D74] mt-5 rounded-xl text-white py-2 hover:scale-105 duration-300"
          />
        )}
      </div>

      <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
        <hr className="border-gray-400" />
        <p className="text-center text-sm">OR</p>
        <hr className="border-gray-400" />
      </div>

      <button
        type="button"
        onClick={signUpWithGoogle}
        className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]"
      >
        <FcGoogle size={28} /> &emsp;Register with Google
      </button>

      <div className="mt-3 text-sm flex justify-between items-center text-[#002D74]">
        <p>Already have an account?</p>
        <Link
          to="/login"
          className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default RegistrationForm;
