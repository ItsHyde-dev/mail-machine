import { faBriefcase, faHome, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function LeftToolbar() {
  return (
    <section className="my-auto flex flex-col justify-start items-center w-[100px] h-[60vh] bg-light-grey rounded-r-[15px] text-xs text-light-green">
      <div className="flex flex-col items-center pt-[40px]">
        <FontAwesomeIcon className="h-[35px] p-none" icon={faHome} />
        Home
      </div>
      <Link href="/templates" className="flex flex-col items-center pt-[40px]">
        <FontAwesomeIcon className="h-[35px] p-none" icon={faBriefcase} />
        Templates
      </Link>
      <div className="flex flex-col items-center pt-[40px]">
        <FontAwesomeIcon className="h-[35px] p-none" icon={faUsers} />
        Groups
      </div>
    </section>
  );
}
