export const BookingCTA = () => {
  return (
    <section className="bg-yellow-400 box-border caret-transparent inline-block text-center w-full mt-[50px] px-2.5 py-10">
      <div className="box-border caret-transparent max-w-[1170px] w-full mx-auto px-[15px]">
        <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
          <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-full md:shrink-0 md:max-w-full">
            <h4 className="text-white text-lg font-medium box-border caret-transparent leading-[21.6px] mb-2">
              CALL US TO BOOK A TAXI
            </h4>
            <p className="text-white text-[15px] box-border caret-transparent leading-[22.5px] mb-[23px]">
              Book a cab for Corporate Travel, Airport Pickup and Drop or even
              city tour. The easiest way to book a cab is to give us a call.
            </p>
            <a
              href="tel://0481481078"
              className="text-white text-[23px] bg-black box-border caret-transparent inline-block leading-[34.5px] border px-[60px] py-[15px] rounded-[10px] border-solid border-white md:text-[33px] md:leading-[49.5px] hover:text-sky-700"
            >
              <i className="text-[23px] box-border caret-transparent inline-block leading-[23px] font-fontawesome md:text-[33px] md:leading-[33px] before:accent-auto before:box-border before:caret-transparent before:text-white before:text-[23px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[23px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome before:md:text-[33px] before:md:leading-[33px]"></i>
              0481481078
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
