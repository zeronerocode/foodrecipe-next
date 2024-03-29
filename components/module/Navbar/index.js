import Link from "next/link";
import React, { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter()
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        setIsLogin(true);
      }
    }
  }, []);
  const handleLogout = async () => {
    localStorage.clear()
    setIsLogin(false);
    new Swal({
      title: "Good job!",
      text: `Anda berhasil logout`,
      icon: "success"
    })
    router.push(`/auth/login`);
  };
  return (
    <div className={style.navbar}>
      <div className="kiri">
        <ul className={style.links}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/recipe/create">Add Recipe</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </div>
      <div className="kanan">
        {isLogin ? (
          <p onClick={handleLogout}>Logout</p>
        ) : (
          <Link href="/auth/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
