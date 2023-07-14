"use client"

import Link from "next/link";
import { createContext } from 'react'


const LoginContext = createContext(false)

export default function Login() {

  return <main className="flex flex-col h-screen w-full">
    <section className="flex flex-column items-end p-[40px] w-full">
      <div className="text-4xl text-white font-mysans font-semibold">Mail Machine v.1.0</div>
      <section className="flex flex-row gap-[30px] ml-auto">
        <Link
          href="/home"
          className="text-2xl text-white font-mysans font-light">Home</Link>
        <Link href="/about" className="text-2xl text-white font-mysans font-light">About</Link>
        <Link href="/contact" className="text-2xl text-white font-mysans font-light">Contact</Link>
      </section>
    </section>
    <div className="flex flex-col justify-center items-center h-full">
      <div className="text-5xl text-lilac">
        Welcome
      </div>
      <div className="text-2xl text-lilac flex flex-row items-center gap-[20px] mt-[60px]">
        <div>Username</div>
        <input className="text-2xl text-lilac bg-light-grey focus:outline-none focus:outline-lilac focus:outline-1 rounded-[5px] h-[40px]" />
      </div>
      <div className="text-2xl text-lilac flex flex-row items-center gap-[20px] mt-[30px]">
        <div>Password</div>
        <input type="password" className="text-2xl text-lilac focus:outline-none focus:outline-lilac focus:outline-1 bg-light-grey rounded-[5px] h-[40px] " />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row gap-[40px]">
          <button className="text-sm font-semibold text-black bg-lilac rounded-[5px] h-[30px] w-[120px] mt-[60px]">
            Login
          </button>

          <button className="text-sm font-semibold text-black bg-lilac rounded-[5px] h-[30px] w-[120px] mt-[60px]">
            Signup
          </button>
        </div>

        <a className="text-sm text-dark-green pt-[20px]" >Forgot Password?</a>
      </div>
    </div>
  </main>;
}
