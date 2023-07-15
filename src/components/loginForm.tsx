"use client";

import { redirect } from "next/navigation";
import { useRef } from "react";

export default function LoginForm() {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="text-xl text-lilac flex flex-row items-center gap-[20px] mt-[60px]">
        <div>Username</div>
        <input
          ref={username}
          className="text-xl text-lilac bg-light-grey focus:outline-none focus:outline-lilac focus:outline-1 rounded-[5px] h-[35px] px-[10px]"
        />
      </div>
      <div className="text-xl text-lilac flex flex-row items-center gap-[20px] mt-[30px]">
        <div>Password</div>
        <input
          type="password"
          ref={password}
          className="text-xl text-lilac focus:outline-none focus:outline-lilac focus:outline-1 bg-light-grey rounded-[5px] h-[35px] px-[10px]"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row gap-[40px]">
          <button
            className="text-sm font-semibold text-black bg-lilac rounded-[5px] h-[30px] w-[120px] mt-[60px]"
            onClick={login}
          >
            Login
          </button>

          <button
            className="text-sm font-semibold text-black bg-lilac rounded-[5px] h-[30px] w-[120px] mt-[60px]"
            onClick={signup}
          >
            Signup
          </button>
        </div>

        <a className="text-sm text-dark-green pt-[20px]">Forgot Password?</a>
      </div>
    </>
  );

  function login() {
    console.log("login was pressed");
    console.log(username.current?.value);
    // call the backend api for logging in

    localStorage.setItem("isLoggedIn", "true");
    redirect("/home");
  }

  function signup() {
    console.log("signup was pressed");
    console.log(username.current?.value);
    // call the backend api for signing in
  }
}
