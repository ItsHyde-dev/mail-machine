import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";


export function NavBarVariantOne() {
  return (
    <section className="flex flex-column items-baseline p-[40px] pb-[10px] w-full">
      <div className="text-3xl text-white font-mysans font-medium">Mail Machine v.1.0</div>
      <section className="flex flex-row gap-[30px] ml-auto">
        <Link
          href="/home"
          className="text-xl text-white font-mysans font-extralight">Home</Link>
        <Link href="/about" className="text-xl text-white font-mysans font-light">About</Link>
        <Link href="/contact" className="text-xl text-white font-mysans font-light">Contact</Link>
      </section>
    </section>
  )
}

export function NavBarVariantTwo(title: string) {
  return (
    <section className="flex flex-column items-baseline p-[40px] w-full h-[40px]">
      <FontAwesomeIcon className="h-[25px] p-none pr-[20px]" color="white" icon={faRobot} />
      <div className="text-3xl text-white font-mysans font-medium ">{title}</div>
      <section className="flex flex-row gap-[30px] ml-auto">
        <Link
          href="/home"
          className="text-xl text-white font-mysans font-extralight">Home</Link>
        <Link href="/about" className="text-xl text-white font-mysans font-extralight">About</Link>
        <Link href="/contact" className="text-xl text-white font-mysans font-extralight">Contact</Link>
      </section>
    </section>
  )
}
