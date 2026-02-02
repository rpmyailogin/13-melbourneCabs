import { ContactInfo } from "@/sections/ContactSection/components/ContactInfo";
import { MapSection } from "@/sections/ContactSection/components/MapSection";

export const ContactSection = () => {
  return (
    <section className="text-white text-[15px] bg-white box-border caret-transparent hidden leading-[22.5px] w-full z-[9997]">
      <div className="box-border caret-transparent max-w-[1170px] w-full mx-auto px-[15px]">
        <div className="shadow-[rgba(51,51,51,0.67)_0px_4px_8px_0px] box-border caret-transparent max-w-full w-[1120px] mx-auto">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
              <ContactInfo />
              <MapSection />
            </div>
            <div className="box-border caret-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
