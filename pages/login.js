import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { firebaseApp } from "../firebase-config";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { userAccessToken } from "../lib/utils/fetchUserDetail";

export default function Login() {
  const firebaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  const loginHandler = async () => {
    const { user } = await signInWithPopup(firebaseAuth, provider);
    console.log(user);
    const { refreshToken, providerData } = user;

    localStorage.setItem("accessToken", JSON.stringify(refreshToken));
    localStorage.setItem("user", JSON.stringify(providerData));

    router.push("/");
  };

  useEffect(() => {
    const accessToken = userAccessToken();
    if (accessToken) {
      router.push("/");
    }
  }, []);
  return (
    <div>
      <button onClick={loginHandler}>Sign in with Google</button>
    </div>
  );
}
