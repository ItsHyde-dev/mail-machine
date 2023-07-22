'use client'

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Root() {
  // replace with token once that is implemented

  useEffect(() => {
    const isLoggedIn = !!localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      redirect("/login");
    }

    redirect("/home");
  }, []);
}
