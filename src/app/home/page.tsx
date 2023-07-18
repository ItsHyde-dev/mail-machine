import { NavBarVariantTwo } from "@/components/navbar";
import "./homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faChevronRight,
  faHome,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import MailArea from "@/components/homepageMailArea";

interface TemplateListing {
  name: string;
  description: string;
}

async function getTemplates(): Promise<TemplateListing[]> {
  const data: TemplateListing[] = [
    {
      name: "Personal",
      description: "This is a personal email template",
    },
    {
      name: "Work",
      description: "This is a work email template",
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

export default async function Home() {
  const templates = await getTemplates();

  return (
    <main className="text-white h-screen flex flex-col">
      {NavBarVariantTwo("Welcome")}

      <div className="flex flex-row items-start h-screen gap-[40px]">
        <LeftToolbar />
        {TemplateListing(templates)}
        <MailArea />
      </div>
    </main>
  );
}

function LeftToolbar() {
  return (
    <section className="my-auto flex flex-col justify-start items-center w-[100px] h-[60vh] bg-light-grey rounded-r-[15px] text-xs text-light-green">
      <div className="flex flex-col items-center pt-[40px]">
        <FontAwesomeIcon className="h-[35px] p-none" icon={faHome} />
        Home
      </div>
      <div className="flex flex-col items-center pt-[40px]">
        <FontAwesomeIcon className="h-[35px] p-none" icon={faBriefcase} />
        Templates
      </div>
      <div className="flex flex-col items-center pt-[40px]">
        <FontAwesomeIcon className="h-[35px] p-none" icon={faUsers} />
        Groups
      </div>
    </section>
  );
}

function TemplateListing(templates: { name: string; description: string }[]) {
  return (
    <section className="mt-[60px] mb-[20px] w-[500px] h-5/6">
      <div className="text-2xl font-semibold">Select a template</div>
      <div className="bg-light-grey h-full px-[40px] py-[30px] mt-[20px] rounded-[10px]">
        {templates.map((template) => {
          return (
            <div className="flex flex-row items-center justify-between text-normal pb-[40px]">
              <div>
                <div className="text-xl">{template.name}</div>
                <div className="text-sm text-[#959595] pt-[5px]">
                  {template.description}
                </div>
              </div>
              <FontAwesomeIcon className="h-[20px]" icon={faChevronRight} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

