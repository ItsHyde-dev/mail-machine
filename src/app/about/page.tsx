import AboutPageBottomRedirectButtons from "@/components/aboutPageBottomRedirectButtons";
import { NavBarVariantTwo } from "@/components/navbar";

export default function About() {
  return (
    <main>
      {NavBarVariantTwo("About Us")}
      <div className="text-3xl font-semibold text-white pt-[50px] pl-[40px]">
        Boredom, Talent and a Simple Idea ...
      </div>
      <p className="text-xl font-light text-white pt-[50px] px-[40px]">
        On a random day I decided to create a website that will be able to make
        use of my tenacity as a programmer (also serve as a project I can
        practice some front-end & back-end on). I am a developer from India with
        not a lot of professional programming experience but with a ton of
        experience building and optimizing programs in my free time.
        <br />
        <br />
        This project is something I thought up of while working with some email
        templates in my office and thinking that I can build a simple mailing
        service and then scale it up with time and actually build a unique
        product and learn design principles along the way.
        <br />
        <br />
        This is a hobby project as of now and any recommendation as well as
        request to add features will be appreciated. Thanks for checking us out!
      </p>

      <AboutPageBottomRedirectButtons />
    </main>
  );
}
