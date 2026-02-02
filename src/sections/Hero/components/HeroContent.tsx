export const HeroContent = () => {
  return (
    <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-[33.3333%] md:shrink-0 md:max-w-[33.3333%]">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent p-5">
          <h2 className="text-white text-[21px] font-bold box-border caret-transparent leading-[27.3px] mb-[50px] pt-[50px] font-poppins md:text-3xl md:leading-[39px]">
            Premium Taxi Services Across Melbourne 24/7
          </h2>
          <h3 className="text-white text-[19px] font-semibold box-border caret-transparent leading-[22.8px] mb-2 font-poppins md:text-[29px] md:leading-[34.8px]">
            Melbourne's Most Reliable Cab Service - Available Anytime, Anywhere
          </h3>
          <a
            href="#booking"
            className="text-white text-3xl bg-yellow-400 box-border caret-transparent inline-block leading-[45px] text-center my-5 px-9 py-[7px] rounded-[15px] hover:bg-yellow-500 transition-colors"
          >
            Book Your Ride
          </a>
        </div>
      </div>
    </div>
  );
};
