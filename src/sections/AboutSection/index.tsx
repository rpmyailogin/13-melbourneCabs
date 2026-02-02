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
              <h1 className="text-white text-base font-bold bg-neutral-700 border-b-neutral-400 box-border caret-transparent inline-block leading-[19.2px] mb-[18px] px-[15px] py-3 border-t-white border-b-4 border-x-white font-poppins md:text-xl md:leading-6">
                Book your cab with confidence
              </h1>
              <h2 className="text-[45px] font-light box-border caret-transparent leading-[54px] mb-5 font-poppins md:text-6xl md:leading-[72px]">
                ABOUT US
              </h2>
              <div className="box-border caret-transparent w-full mb-[33px]">
                <p className="text-neutral-700 box-border caret-transparent text-justify mb-4">
                  Experience Business Class Travel with 13 Melbourne Cab We are committed to providing Victorians with 
									a premium transport experience. Based in Dandenong, we offer a "business class" level of service, ensuring every 
									journey is comfortable, punctual, and seamless. While we are a fresh face in the industry, our reputation is growing 
									rapidly thanks to the incredible feedback from our local clients.
                </p>
                <a
                  href="https://www.13dandenongtaxi24.com.au/about.html"
                  className="text-neutral-700 box-border caret-transparent inline-block text-right w-full hover:text-yellow-400 hover:border-yellow-400"
                >
                  Read more....
                </a>
              </div>
              <a
                href="https://www.13dandenongtaxi24.com.au/book-online.php"
                className="text-white text-[22px] font-bold bg-yellow-400 box-border caret-transparent inline-block leading-[33px] text-center w-full my-5 px-5 py-2 rounded-[10px] md:w-auto md:my-0"
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
