"use client";

import LoginForm from "@/components/loginForm";
import { NavBarVariantOne } from "@/components/navbar";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      redirect("/home");
    }
  }, []);

  return (
    <main className="flex flex-col h-screen w-full">
      <NavBarVariantOne />
      <div className="flex flex-col justify-center items-center h-full">
        <div className="text-5xl font-semibold text-lilac">Welcome</div>
        <LoginForm />
      </div>
    </main>
  );
}
