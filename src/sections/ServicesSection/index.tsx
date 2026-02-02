import { ServiceItem } from "@/sections/ServicesSection/components/ServiceItem";

export const ServicesSection = () => {
  return (
    <section className="text-white bg-fixed bg-[url('https://www.13dandenongtaxi24.com.au/images/Services-Bg.jpg')] bg-no-repeat bg-cover box-border caret-transparent float-left text-center w-full bg-center pt-[41px] pb-[33px]">
      <div className="box-border caret-transparent max-w-[1170px] w-full mx-auto px-[15px]">
        <h1 className="text-3xl font-bold box-border caret-transparent leading-9 mb-[43px] font-poppins">
          Our Services
        </h1>
        <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
          <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-[41.6667%] md:shrink-0 md:max-w-[41.6667%]">
            <ServiceItem
              imageUrl="https://www.13dandenongtaxi24.com.au/images/airport-service-icon.png"
              imageAlt="Airport Service"
              iconVariant="float-left w-full mr-[15px] md:w-20"
              title="Airport Taxis"
              titleVariant="text-center my-2 md:text-left"
              description="Looking for a professional taxi service to reach you at the Airport? Book a taxi in Dandenong & let us do the rest of the job. Dandenong Cab Service which businessmen and tourists prefer."
              descriptionVariant="text-left"
            />
            <ServiceItem
              imageUrl="https://www.13dandenongtaxi24.com.au/images/parcel-service-icon.png"
              imageAlt="Airport Service"
              iconVariant="float-left w-full mr-[15px] md:w-20"
              title="Parcels Delivery "
              titleVariant="text-center my-2 md:text-left md:mt-0"
              description="Dandenong Taxi 13 dandenong Cab Booking provides Parcel Delivery Service all over Melbourne. Get delivered anytime within Day."
              descriptionVariant="text-left"
            />
          </div>
          <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-[16.6667%] md:shrink-0 md:max-w-[16.6667%]">
            <div className="relative box-border caret-transparent hidden md:block">
              <img
                src="https://www.13dandenongtaxi24.com.au/images/carimg.png"
                className="absolute box-border caret-transparent ml-[-7px] mr-[-7px] max-w-full w-[23%] my-1"
              />
              <img
                src="https://www.13dandenongtaxi24.com.au/images/Road-Line.png"
                className="box-border caret-transparent max-w-full w-[12%] mx-auto"
              />
            </div>
          </div>
          <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-[41.6667%] md:shrink-0 md:max-w-[41.6667%]">
            <ServiceItem
              imageUrl="https://www.13dandenongtaxi24.com.au/images/melbourne-cab-service.png"
              imageAlt="Airport Service"
              iconVariant="float-right w-full ml-[15px] mb-0 md:w-20 md:mb-[74px]"
              title="Melbourne Cab Services"
              titleVariant="text-center md:text-right"
              description="Dandenong Taxi is one of the leading providers of silver service taxi & cabs in Melbourne. We provide cab service with the best cars for your satisfaction."
              descriptionVariant="text-center md:text-right md:w-auto"
            />
            <ServiceItem
              imageUrl="https://www.13dandenongtaxi24.com.au/images/corporate-Accounts.png"
              imageAlt="Airport Service"
              iconVariant="float-right w-full ml-[15px] mb-0 md:w-20 md:mb-[74px]"
              title="Corporate Travel"
              titleVariant="md:text-right"
              description="We offer a quality transport service to corporate clients across Melbourne. We provide special services for private events with luxurious Dandenong cabs."
              descriptionVariant="text-center md:text-right md:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
