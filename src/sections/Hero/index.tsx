import { HeroContent } from "@/sections/Hero/components/HeroContent";
import { BookingForm } from "@/components/BookingForm";

export const Hero = () => {
  return (
    <div className="box-border caret-transparent w-full mx-auto px-[15px]">
      <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
        <HeroContent />
        <BookingForm />
      </div>
    </div>
  );
};
