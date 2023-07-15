"use client"

import { redirect } from "next/navigation";

export default function Root() {

  // replace with token once that is implemented
  const isLoggedIn = !!localStorage.getItem('isLoggedIn')

  if (!isLoggedIn) {
    redirect('/login')
  }

  redirect('/home')
}

