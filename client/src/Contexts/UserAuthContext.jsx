import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { auth } from "../data/firebaseConfig";
const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  const signUp = async (userDetails) => {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      userDetails.email,
      userDetails.password
    );
    if (!user.photoURL)
      await updateProfile(user, {
        displayName: userDetails.fullName,
        photoURL:
          "https://firebasestorage.googleapis.com/v0/b/qetero-8eb3a.appspot.com/o/ProfilePictures%2Fdefault-profile-picture.png?alt=media&token=69884f18-fa1a-43ef-b805-897dad309816",
      });
    else
      await updateProfile(user, {
        displayName: userDetails.fullName,
      });

    let token = await user.getIdToken();
    let newUser = {
      firebaseToken: token,
      collectionName: userDetails.role,
    };
    if (userDetails.role == "Business Owner") newUser.TIN = userDetails.TIN;

    let res = await axios.post("/api/auth/register", newUser);
    await sendEmailVerification(user);
    auth.signOut();
    return res;
  };
  const googleSignUp = async (userDetails) => {
    const googleAuthProvider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, googleAuthProvider);
    let token = await userCredential.user.getIdToken();
    let newUser = {
      firebaseToken: token,
      collectionName: userDetails.role,
    };
    if (userDetails.role == "Business Owner") newUser.TIN = userDetails.TIN;
    auth.signOut();
    let res = await axios.post("/api/auth/register", newUser);
    let res1 = await axios.post("/api/auth/login", {
      firebaseToken: token,
    });
    setUser(res1.data);
    return res;
  };

  const logIn = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (!userCredential.user) return userCredential;
    if (userCredential.user.emailVerified) {
      let token = await userCredential.user.getIdToken();
      const res = await axios.post("/api/auth/login", {
        firebaseToken: token,
      });
      setUser(res.data);
      return res;
    }
    return Promise.reject(new Error("Please Verify your email adress first"));
  };
  const googleSignIn = async () => {
    const googleAuthProvider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, googleAuthProvider);
    let token = await userCredential.user.getIdToken();

    const res = await axios.post("/api/auth/login", {
      firebaseToken: token,
    });
    setUser(res.data);
    return res;
  };
  const logOut = () => {
    setUser(null);
    localStorage.removeItem("user");
    return signOut(auth);
  };

  const customizeError = (error) => {
    if (error == "Request failed with status code 500")
      return "Something is wrong on our server.\n Please, try again later.";
    let newError = error
      .replace("Firebase: Error (auth/", "")
      .replace(")", "")
      .replaceAll("-", " ");
    return newError;
  };

  useEffect(() => {
    if (user && user != undefined)
      localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <userAuthContext.Provider
      value={{
        user,
        logIn,
        signUp,
        logOut,
        googleSignIn,
        googleSignUp,
        customizeError,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export const useUserAuth = () => {
  return useContext(userAuthContext);
};
