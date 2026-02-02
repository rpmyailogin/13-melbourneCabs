import { FormSection } from "@/components/BookingForm/components/FormSection";

export const BookingForm = () => {
  return (
    <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-[66.6667%] md:shrink-0 md:max-w-[66.6667%]">
      <div className="bg-white box-border caret-transparent mt-[50px] mb-[150px] p-[30px]">
        <form className="box-border caret-transparent">
          <FormSection variant="header" />
          <FormSection variant="middle" />
          <FormSection variant="footer" />
        </form>
      </div>
    </div>
  );
};
