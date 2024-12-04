import { FAQS } from "./FAQS";

export const FAQSection = () => {
  return (
    <div>
      <div className="flex items-center gap-5 border-b py-[5px]">
        <img src="/670df50b1b9142294387b0b9_ic-title.svg" />
        <h3>FAQ'S</h3>
      </div>
      <div className="flex flex-col gap-[20px] lg:flex-row">
        <div className="space-y-10">
          <h2 className="text-[24px] pt-3 lg:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="h-full w-full">
            <img
              src="/670df70a92970a0fe61e84f2_faq.jpg"
              className="object-cover h-3/4 w-full"
            />
          </div>{" "}
        </div>
        <div className="lg:mt-28">
          <FAQS />
        </div>
      </div>
    </div>
  );
};
