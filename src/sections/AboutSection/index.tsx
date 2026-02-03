export const AboutSection = () => {
  return (
    <section className="box-border caret-transparent float-left w-full my-0 md:mt-[70px] md:mb-[50px]">
      <div className="box-border caret-transparent max-w-[1170px] w-full mx-auto px-[15px]">
        <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
          <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-6/12 md:shrink-0 md:max-w-[50%]">
            <div className="box-border caret-transparent w-full mt-[70px]">
              <img
                src="https://www.13dandenongtaxi24.com.au/images/abt-taxi.jpg"
                alt=""
                className="box-border caret-transparent max-w-full w-full md:w-[85%]"
              />
            </div>
          </div>
          <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-6/12 md:shrink-0 md:max-w-[50%]">
            <div className="box-border caret-transparent">
              <h1 className="text-blue-600 text-base font-bold bg-white border-b-orange-500 box-border caret-transparent inline-block leading-[19.2px] mb-[18px] px-[15px] py-3 border-t-white border-b-4 border-x-white font-poppins md:text-xl md:leading-6">
                Your trusted travel partner
              </h1>
              <h2 className="text-[45px] font-light box-border caret-transparent leading-[54px] mb-5 font-poppins md:text-6xl md:leading-[72px]">
                ABOUT 13 MELBOURNE CABS
              </h2>
              <div className="box-border caret-transparent w-full mb-[33px]">
                <p className="text-neutral-700 box-border caret-transparent text-justify mb-4">
                  Welcome to 13 Melbourne Cabs, your premier choice for reliable and professional taxi services across Melbourne's southeast suburbs. We specialize in providing business-class transportation that combines comfort, punctuality, and exceptional customer service. Operating 24/7 from our Dandenong base, we serve the entire Melbourne metropolitan area with a modern fleet and experienced drivers. Whether you need an airport transfer, corporate travel, or local transportation, our commitment to excellence ensures every journey meets the highest standards of safety and comfort.
                </p>
                <a
                  href="#services"
                  className="text-neutral-700 box-border caret-transparent inline-block text-right w-full hover:text-orange-500 transition-colors"
                >
                  Discover our services
                </a>
              </div>
              <a
                href="#booking"
                className="text-white text-[22px] font-bold bg-orange-500 box-border caret-transparent inline-block leading-[33px] text-center w-full my-5 px-5 py-2 rounded-[10px] md:w-auto md:my-0 hover:bg-orange-600 transition-colors"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
