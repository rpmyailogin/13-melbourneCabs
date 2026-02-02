export const CallToAction = () => {
  return (
    <div className="text-white bg-fixed bg-[url('https://www.13dandenongtaxi24.com.au/images/Testimonials-bg.jpg')] bg-no-repeat bg-cover box-border caret-transparent float-left w-full bg-center my-[30px] py-[65px]">
      <div className="box-border caret-transparent max-w-[1170px] w-full mx-auto px-[15px] md:w-[950px]">
        <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
          <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-[33.3333%] md:shrink-0 md:max-w-[33.3333%]">
            <div className="box-border caret-transparent text-center w-full md:text-left md:w-auto">
              <img
                src="https://www.13dandenongtaxi24.com.au/images/phn.png"
                alt="Call Now"
                className="box-border caret-transparent max-w-full text-center md:text-left"
              />
            </div>
          </div>
          <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-[66.6667%] md:shrink-0 md:max-w-[66.6667%]">
            <div className="box-border caret-transparent">
              <h3 className="text-black text-xl font-semibold box-border caret-transparent tracking-[0.5px] leading-6 text-center uppercase mt-2.5 mb-[5px] md:text-[40px] md:leading-[48px]">
                Call US /
                <span className="text-white text-xl box-border caret-transparent leading-6 md:text-[40px] md:leading-[48px]">
                  {" "}
                  24 Hours Service
                </span>
              </h3>
              <h1 className="text-black text-[45px] font-bold box-border caret-transparent leading-[54px] text-center md:text-[95px] md:leading-[114px]">
                <a
                  href="tel://0481481078"
                  className="text-gray-700 text-[45px] box-border caret-transparent inline-block leading-[54px] md:text-[95px] md:leading-[114px] hover:text-white hover:border-white"
                >
                  0481 481 078
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
