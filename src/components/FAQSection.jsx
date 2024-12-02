import { FAQS } from "./FAQS";

export const FAQSection = () => {
  return (
    <div className="">
      <div className="flex items-center text-[16px] gap-[15px] border-b py-[5px] lg:mt-20">
        <span>
          <img src="/670df50b1b9142294387b0b9_ic-title.svg" />
        </span>
        <h3>FAQ'S</h3>
      </div>
      <div className="flex flex-col gap-[20px] lg:flex-row">
      <div>
        <h2 className="text-[24px] font-[600] pt-[10px] lg:text-3xl">
          Frequently Asked Questions
        </h2>
        <div>
          <img
            src="/670df70a92970a0fe61e84f2_faq.jpg"
            className="object-cover lg:mt-6"
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
