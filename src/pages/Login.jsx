import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/AddProvider";
import { toast } from "react-toastify";

function Login() {
  const { user, setUser } = useContext(Context);
  const [password, setPassword] = useState("");
  const validPassword = password.length < Number("6");
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("user", JSON.stringify(user));
    navigate(-1);
    toast.success("Welcome!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
      toastId: "do-not-duplicate",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-1 h-[50vh]">
      <h1 className="text-center text-3xl my-6">Login</h1>
      <input
        type="email"
        name="email"
        className="border-2 border-black text-center py-2"
        onChange={(e) => setUser({ email: e.target.value })}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        className="border-2 border-black text-center py-2 mb-4"
        placeholder="Password"
      />
      <span className="text-sm">email: adm@guitar-shop.com</span>
      <span className="text-sm">password: 00102056</span>
      <button
        onClick={handleClick}
        disabled={validPassword}
        className="px-4 py-2 text-white text-sm bg-zinc-800 mt-5 mb-2 rounded-md disabled:bg-slate-400"
      >
        Login
      </button>
      <div>
        <span className="text-sm">
          Not a member yet?{" "}
          <Link to="/register" className="underline">
            Sign Up
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
