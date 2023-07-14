import { redirect } from "next/navigation";

export default function Home() {
  let isLoggedIn = false;

  if (!isLoggedIn) {
    redirect('/login')
  }

  redirect('/home')
}

