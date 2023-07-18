"use client";

import { faBold, faItalic, faUnderline } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

export default function MailArea() {
  const fromInput = useRef<HTMLInputElement>(null);
  const toInput = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col px-[40px] py-[50px] pt-[110px] w-full h-full">

      <div className="grid grid-cols-8 gap-[20px]">
        <div className="text-xl text-white font-light">From:</div>
        <input
          ref={fromInput}
          className="col-span-7 text-lg text-white bg-light-grey focus:outline-none focus:outline-lilac focus:outline-1 rounded-[15px] h-[35px] px-[10px] ml-[20px]"
        />
      </div>

      <div className="grid grid-cols-8 gap-[20px] mt-[60px]">
        <div className="text-xl text-white font-light">To:</div>
        <input
          ref={toInput}
          className="col-span-7 text-lg text-white bg-light-grey focus:outline-none focus:outline-lilac focus:outline-1 rounded-[15px] h-[35px] px-[10px] ml-[20px]"
        />
      </div>

      <textarea className="mt-[60px] border border-solid-[2px] border-light-grey focus:outline-none flex flex-col h-full rounded-[5px] p-[10px] bg-transparent align-text-top align-top">
        {
          // get the information to display for the mail
        }
      </textarea>

      <section className="flex flex-row items-center justify-between mt-[15px] pl-[20px]">
        <div className="flex flex-row gap-[20px]">
          <FontAwesomeIcon icon={faBold} />
          <FontAwesomeIcon icon={faItalic} />
          <FontAwesomeIcon icon={faUnderline} />
        </div>
        <button className="bg-light-green text-black py-[10px] px-[50px] rounded-[50px]">
          Send
        </button>
      </section>

    </div>
  );
}
