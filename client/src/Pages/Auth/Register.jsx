import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import RegistrationForm from "../../Components/Auth/RegistrationForm";
import RolesOption from "../../Components/Auth/RolesOption";
import { useUserAuth } from "../../Contexts/UserAuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import EmailSentModal from "../../Components/Auth/EmailSentModal";

const Register = () => {
  const { signUp, googleSignUp, customizeError } = useUserAuth();
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("");
  const rolesMenu = [
    {
      name: "Customer",
      purpose: "Book services and make appointments",
    },
    {
      name: "Business Owner",
      purpose: "Manage your services and grow your business",
    },
  ];

  const userSchema = Joi.object({
    TIN: Joi.string(),
    fullName: Joi.string().min(3).required().messages({
      "string.empty": "please, provide your Full Name",
      "string.min": "Full Name should be at least 3 characters long",
    }),
    email: Joi.string().required().messages({
      "string.empty": "please, provide an email adress",
    }),
    password: Joi.string().min(8).max(20).required().messages({
      "string.min": "password must be at least 8 characters",
      "string.max": "password must not exceed 20 characters",
      "string.empty": "please, provide a password",
    }),
    passwordConfirmation: Joi.any()
      .equal(Joi.ref("password"))
      .required()
      .messages({ "any.only": "passwords don't match" }),
  });
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ resolver: joiResolver(userSchema) });

  const registerUser = async (userDetails) => {
    setLoading(true);
    const toastId = toast.loading("Loading...");
    try {
      const res = await signUp({ ...userDetails, role: role });
      toast.success(res.data);
      toast.custom(
        (t) => (
          <EmailSentModal
            email={userDetails.email}
            t={t}
            dismissToast={() => toast.dismiss(t.id)}
          />
        ),
        { duration: 20000 }
      );
    } catch (err) {
      toast.error(
        customizeError(err.response ? err.response.data.message : err.message)
      );
    }
    setLoading(false);
    toast.dismiss(toastId);
  };

  const signUpWithGoogle = async () => {
    let userDetails = { role: role };
    if (role == "Business Owner") {
      if (!getValues("TIN")) return toast.error("please, enter your TIN first");
      else userDetails.TIN = getValues("TIN");
    }
    try {
      const res = await googleSignUp(userDetails);
      toast.success(res.data);
      navigate("/login");
    } catch (err) {
      toast.error(
        customizeError(err.response ? err.response.data.message : err.message)
      );
    }
  };
  return (
    <section className="flex absolute top-0 left-0 w-full bg-slate-100 z-20 min-h-screen font-serif">
      <div className="md:w-1/2 p-8 md:px-16 md:mt-16 w-full">
        {role != "" ? (
          <form onSubmit={handleSubmit(registerUser)}>
            <RegistrationForm
              role={rolesMenu.filter((menu) => menu.name == role)[0]}
              register={register}
              goBack={() => setRole("")}
              loading={loading}
              errors={errors}
              signUpWithGoogle={signUpWithGoogle}
            />
          </form>
        ) : (
          <RolesOption menu={rolesMenu} setRole={setRole} />
        )}
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

export default Register;
