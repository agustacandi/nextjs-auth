import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  userAccessToken,
  userProviderData,
} from "../lib/utils/fetchUserDetail";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState({});
  useEffect(() => {
    const accessToken = userAccessToken();
    if (!accessToken) router.push("/login");

    const [userInfo] = userProviderData();
    setUser(userInfo);
  }, []);

  const signOut = () => {
    localStorage.clear();
    router.push("/login");
  };
  return (
    <div className={styles.container}>
      <img src={user?.photoURL} alt="" />
      <h1>{user?.displayName}</h1>
      <p>{user?.email}</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
