import { faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function AboutPageBottomRedirectButtons() {
  return (
    <div className="flex flex-row justify-around">
      <Link
        href="/home"
        className="w-1/3 h-[300px] bg-light-grey rounded-[15px] mt-[50px]"
      >
        <div className="flex flex-col h-full text-white items-center justify-center text-xl font-light">
          <FontAwesomeIcon
            className="h-[50px] p-none"
            color="white"
            icon={faHome}
          />
          Home
        </div>
      </Link>

      <Link
        href="/contact"
        className="w-1/3 h-[300px] bg-light-grey rounded-[15px] mt-[50px]"
      >
        <div className="flex flex-col h-full text-white items-center justify-center text-xl font-light">
          <FontAwesomeIcon
            className="h-[50px] p-none"
            color="white"
            icon={faEnvelope}
          />
          Contact
        </div>
      </Link>
    </div>
  );
}

