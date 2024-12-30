"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Login = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setButtonDisabled(true);

    if (!username || !password) {
      setError("Username and password are required");
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
        router.push("/");
        setError(data.message);
      } else {
        const data = await res.json();
        console.log(data);
        setError(data.error || "Login failed");
      }
      setButtonDisabled(false);
    } catch (error) {
      console.error(error);
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
    <div className="flex justify-center items-center h-screen tracking-wider">
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
    </div>
  );
};

export default Login;
