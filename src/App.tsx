import { Header } from "@/sections/Header";
import { ContactBar } from "@/sections/ContactBar";
import { AboutSection } from "@/sections/AboutSection";
import { FleetSection } from "@/sections/FleetSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { CallToAction } from "@/sections/CallToAction";
import { AreasSection } from "@/sections/AreasSection";
import { ContactSection } from "@/sections/ContactSection";
import { BookingCTA } from "@/sections/BookingCTA";
import { Footer } from "@/sections/Footer";

export const App = () => {
  return (
    <body className="text-neutral-800 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc overflow-x-hidden overflow-y-auto pointer-events-auto text-left indent-[0px] normal-case visible border-separate font-open_sans">
      <Header />
      <ContactBar />
      <AboutSection />
      <FleetSection />
      <ServicesSection />
      <CallToAction />
      <AreasSection />
      <ContactSection />
      <BookingCTA />
      <Footer />
      <div className="bg-black box-border caret-transparent w-full mx-auto p-[5px]">
        <div className="box-border caret-transparent max-w-[1170px] w-full mx-auto px-[15px]">
          <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
            <div className="relative box-border caret-transparent basis-auto shrink max-w-none text-center w-full px-[15px] md:basis-full md:shrink-0 md:max-w-full">
              <strong className="text-white font-bold box-border caret-transparent">
                <a
                  href="https://www.13dandenongtaxi24.com.au/index.html"
                  className="text-gray-700 box-border caret-transparent inline-block hover:text-sky-700 hover:border-sky-700"
                >
                  13 Dandenong Taxi 24 - DANDENONG TAXI 24/7 CAB SERVICES
                </a>
              </strong>
              <br className="box-border caret-transparent" />
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="text-white bg-blue-600 caret-transparent hidden opacity-65 text-center align-middle border border-blue-600 px-3 py-1.5 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
      >
        Booking
      </button>
      <div className="absolute bg-white border-b-neutral-800 border-l-neutral-800 border-r-neutral-800 border-t-zinc-300 shadow-[rgba(0,0,0,0.3)_0px_2px_6px_0px] box-border caret-transparent hidden w-[207px] z-[1000] overflow-hidden rounded-sm border-t left-[1272px] top-[553px] font-arial after:accent-auto after:bg-[url('https://maps.gstatic.com/mapfiles/api-3/images/powered-by-google-on-white3.png')] after:bg-right after:bg-no-repeat after:bg-size-[120px_14px] after:box-border after:caret-transparent after:text-neutral-800 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-[18px] after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:text-right after:indent-[0px] after:normal-case after:visible after:pr-px after:py-px after:border-separate after:font-arial"></div>
      <div className="absolute bg-white border-b-neutral-800 border-l-neutral-800 border-r-neutral-800 border-t-zinc-300 shadow-[rgba(0,0,0,0.3)_0px_2px_6px_0px] box-border caret-transparent hidden w-[207px] z-[1000] overflow-hidden rounded-sm border-t left-[554px] top-[649px] font-arial after:accent-auto after:bg-[url('https://maps.gstatic.com/mapfiles/api-3/images/powered-by-google-on-white3.png')] after:bg-right after:bg-no-repeat after:bg-size-[120px_14px] after:box-border after:caret-transparent after:text-neutral-800 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-[18px] after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:text-right after:indent-[0px] after:normal-case after:visible after:pr-px after:py-px after:border-separate after:font-arial"></div>
      <div className="fixed box-border caret-transparent contents z-[2147483647] left-0 top-0">
        <div className="caret-transparent"></div>
      </div>
    </body>
  );
};
