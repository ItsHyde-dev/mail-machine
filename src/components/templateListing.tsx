import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TemplateListing(templates: { name: string; description: string }[]) {
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
