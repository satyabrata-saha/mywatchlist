"use client";
import { FullNavbar } from "@/components/ui";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const toastMessage = (message) =>
    toast(message, {
      theme: "dark",
      autoClose: 2000,
      position: "bottom-right",
    });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setButtonDisabled(true);

    if (!username || !password) {
      setError("Username and password are required");
      toastMessage("Username and password are required");
      return;
    }

    try {
      const res = await fetch(`/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (res.ok) {
        const data = await res.json();
        setUsername("");
        setPassword("");
        console.log(data.status, data.success, data.message);
        setError(data.message);
        toastMessage(data.message);
        router.push("/");
      } else {
        const data = await res.json();
        // console.log(data);
        setError(data.error || "Login failed");
        toastMessage(data.error || "Login failed");
      }
      setButtonDisabled(false);
    } catch (error) {
      console.error(error);
      toastMessage("Something went wrong");
    }
  };

  useEffect(() => {
    if (username && password) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [username, password]);

  return (
    <div className="flex flex-col items-center justify-center min-w-full min-h-full px-2 sm:px-4 overflow-hidden">
      <div className="w-full sm:w-[99%] md:w-[98%] lg:w-[95%] xl:w-[95%] 2xl:w-[90%] 3xl:w-[85%]">
        <div className="w-full pt-4 px-0">
          <FullNavbar search={() => {}} hidden={true} />
        </div>
        <div className="flex flex-col justify-center items-center h-[60vh] tracking-wider">
          <div className="flex flex-col items-center justify-center gap-4 text-center bg-slate-900 rounded-md shadow-lg p-8 w-72 md:w-80">
            <form
              onSubmit={handleSubmit}
              method="post"
              className="flex flex-col gap-4 text-center w-full"
            >
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <h1 className="text-3xl">Login</h1>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                placeholder="Username"
                required
                className="border border-black rounded-md p-3 text-black w-full focus:outline-none"
              />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
                required
                className="border border-black rounded-md p-3 text-black w-full focus:outline-none"
              />
              <button
                type="submit"
                disabled={buttonDisabled}
                onClick={handleSubmit}
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none disabled:opacity-50 transition-all duration-200 ease-in-out"
              >
                Login
              </button>
            </form>
            <div className="text-center mt-4">
              <p className="text-sm text-slate-100/10">
                There is no registeration page, this is just for me
              </p>
              <Link href="/" className="underline text-sm text-blue-500">
                Go Home
              </Link>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
