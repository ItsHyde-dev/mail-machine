"use client";

import { NavBarVariantOne } from "@/components/navbar";
import "./homepage.css";
import { ReactNode, useRef } from "react";

export default function OnboardingPage() {
  return (
    <section>
      <NavBarVariantOne />
      <div className="animated-divider" />

      <section className="pt-[60px] flex flex-row">
        <ProgressSection />
        <AccountInformation />
      </section>
    </section>
  );
}

function ProgressSection() {
  return (
    <section className="text-lilac pl-[60px] pb-[50px] mr-[60px] flex-none">
      <div className="text-2xl text-lilac font-normal">Onboarding Progress</div>
      <ul className="text-xl text-white font-extralight pt-[50px] w-max">
        <li>Account Information</li>
        <li>Acknowledgement</li>
        <li>Finish</li>
      </ul>
    </section>
  );
}

function AccountInformation() {

  const contactLabel = (
    <span>
      Contact Number
      <span className="text-xs font-extralight pl-[10px]">
        {" "}
        Add area code if applicable
      </span>{" "}
    </span>
  );

  return (
    <section>
      <div className="text-2xl text-lilac font-semibold">
        Account Information
      </div>

      <form
        onSubmit={(e) => {

          let formData = (e.target as HTMLFormElement);

          console.log("hello")

          console.log(formData.fullname.value)
          console.log(formData.contact.value)
          console.log(formData.orgname.value)
          console.log(formData.city.value)
          console.log(formData.country.value)
          console.log(formData.pincode.value)
        }}
      >
        <div className="flex flex-row gap-[60px]">
          <InputWithLabel label="Full Name" name="fullname" />
          <InputWithLabel label={contactLabel} name="contact" />
        </div>

        <InputWithLabel label="Organization Name" name="orgname" />

        <div className="flex flex-row gap-[60px]">
          <InputWithLabel label="Country" name="country" />
          <InputWithLabel label="City" name="city" />
        </div>

        <InputWithLabel label="Pincode" name="pincode" />

        <button
          type="submit"
          className="bg-light-green rounded-[35px] w-[130px] h-[35px] mt-[50px]"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export const InputWithLabel = (props: {
  label: string | ReactNode;
  name: string;
}) => {
  return (
    <div className="flex flex-col items-start">
      <label className="text-xl text-lilac font-extralight pb-[20px] pt-[30px] pl-[10px]">
        {props.label}
      </label>
      <input
        name={props.name}
        className="w-[350px] font-extralight text-xl text-lilac-800 bg-light-grey focus:outline-none focus:outline-lilac focus:outline-1 rounded-[15px] h-[35px] px-[15px] mb-[20px]"
      />
    </div>
  );
};
