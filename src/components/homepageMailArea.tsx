'use client'

import { useRef } from "react";

export default function MailArea() {

  const fromInput = useRef<HTMLInputElement>(null);
  const toInput = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col px-[40px] py-[50px] mt-[110px]">

      <table className="border-separate border-spacing-y-[20px]">
        <tr>
          <td>
            <div className="text-xl text-white font-light">From:</div>
          </td>
          <td>
            <input
              ref={fromInput}
              className="text-lg text-white bg-light-grey focus:outline-none focus:outline-lilac focus:outline-1 rounded-[15px] h-[35px] px-[10px] ml-[20px]"
            />
          </td>
        </tr>
        <tr>
          <td>
            <div className="text-xl text-white font-light">To:</div>
          </td>
          <td>
            <input
              ref={toInput}
              className="text-lg text-white bg-light-grey focus:outline-none focus:outline-lilac focus:outline-1 rounded-[15px] h-[35px] px-[10px] ml-[20px]"
            />
          </td>
        </tr>
      </table>

      <section className="mt-[60px] border border-solid-[2px] flex flex-col h-screen">

      </section>
    </div>
  );
}
