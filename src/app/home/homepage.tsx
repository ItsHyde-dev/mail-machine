import MailArea from "@/components/homepageMailArea";
import LeftToolbar from "@/components/leftToolbar";
import { NavBarVariantTwo } from "@/components/navbar";
import TemplateListing from "@/components/templateListing";

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

export default async function HomePage() {
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
