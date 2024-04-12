import toast from "react-hot-toast";
import LoginForm from "../../Components/Auth/LoginForm";
import { useUserAuth } from "../../Contexts/UserAuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useEffect, useState } from "react";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const { logIn, googleSignIn, customizeError, logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const userSchema = Joi.object({
    businessId: Joi.string(),
    email: Joi.string().required().messages({
      "string.empty": "email adress is required",
    }),
    password: Joi.string().required().messages({
      "string.empty": "password is required",
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(userSchema) });

  const loginUser = async (user) => {
    setLoading(true);
    const toastId = toast.loading("Loading...");
    try {
      let res = await logIn(user.email, user.password);
      if (res.data) toast.success("Login successful");
    } catch (err) {
      logOut();
      toast.error(
        customizeError(
          err.response?.data ? err.response.data.message : err.message
        )
      );
    }
    setLoading(false);
    toast.dismiss(toastId);
  };
  const signInWithGoogle = async () => {
    setLoading(true);
    const toastId = toast.loading("Loading...");
    try {
      const res = await googleSignIn();
      if (res.data) toast.success("Login successful");
    } catch (err) {
      logOut();
      toast.error(
        customizeError(
          err.response?.data ? err.response.data.message : err.message
        )
      );
    }
    setLoading(false);
    toast.dismiss(toastId);
  };

  //redirect if already logged in
  useEffect(() => {
    if (user) {
      if (location.state?.redirectBackTo) navigate(redirectBackTo);
      else if (user.role == "Customer") navigate("/");
      else navigate("/pa");
    }
  }, [user]);
  return (
    <section className="flex absolute top-0 left-0 w-full bg-slate-100 z-20 min-h-screen font-serif">
      <div className="md:w-1/2 p-8 md:px-16 md:mt-16 w-full">
        <form onSubmit={handleSubmit(loginUser)}>
          <LoginForm
            register={register}
            loading={loading}
            errors={errors}
            logIn={logIn}
            signInWithGoogle={signInWithGoogle}
          />
        </form>
      </div>
      <div className="md:block hidden w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://firebasestorage.googleapis.com/v0/b/qetero-8eb3a.appspot.com/o/images%2Fbenyamin-bohlouli-_C-S7LqxHPw-unsplash.jpg?alt=media&token=d04caf58-f3cc-4e2d-b32d-0665a3f64e16"
        />
      </div>
    </section>
  );
};

export default Login;
