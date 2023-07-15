"use client";

import { NavBarVariantTwo } from "@/components/navbar";
import "./homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faHome, faUsers } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="text-white h-screen flex flex-col">
      {NavBarVariantTwo("Welcome")}

      <section className="my-auto flex flex-col justify-start items-center w-[100px] h-[60vh] bg-light-grey rounded-r-[15px] text-xs text-light-green">
        <div className="flex flex-col items-center pt-[40px]">
          <FontAwesomeIcon className="text-3xl p-none" icon={faHome} />
          Home
        </div>
        <div className="flex flex-col items-center pt-[40px]">
          <FontAwesomeIcon className="text-3xl p-none" icon={faBriefcase} />
          Templates
        </div>
        <div className="flex flex-col items-center pt-[40px]">
          <FontAwesomeIcon className="text-3xl p-none" icon={faUsers} />
          Groups
        </div>
      </section>
    </main>
  );
}
