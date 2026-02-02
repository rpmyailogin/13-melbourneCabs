import { ServiceItem } from "@/sections/ServicesSection/components/ServiceItem";

export const ServicesSection = () => {
  return (
    <section className="text-white bg-fixed bg-[url('https://www.13dandenongtaxi24.com.au/images/Services-Bg.jpg')] bg-no-repeat bg-cover box-border caret-transparent float-left text-center w-full bg-center pt-[41px] pb-[33px]">
      <div className="box-border caret-transparent max-w-[1170px] w-full mx-auto px-[15px]">
        <h1 className="text-3xl font-bold box-border caret-transparent leading-9 mb-[43px] font-poppins">
          Our Premium Services
        </h1>
        <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
          <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-[41.6667%] md:shrink-0 md:max-w-[41.6667%]">
            <ServiceItem
              imageUrl="https://www.13dandenongtaxi24.com.au/images/airport-service-icon.png"
              imageAlt="Airport Transfer Service"
              iconVariant="float-left w-full mr-[15px] md:w-20"
              title="Airport Transfers"
              titleVariant="text-center my-2 md:text-left"
              description="Experience stress-free airport transportation with 13 Melbourne Cabs. Our professional drivers ensure punctual pickups and comfortable journeys to all Melbourne airports. Perfect for business travelers and tourists who value reliability and comfort."
              descriptionVariant="text-left"
            />
            <ServiceItem
              imageUrl="https://www.13dandenongtaxi24.com.au/images/parcel-service-icon.png"
              imageAlt="Parcel Delivery Service"
              iconVariant="float-left w-full mr-[15px] md:w-20"
              title="Express Parcel Delivery"
              titleVariant="text-center my-2 md:text-left md:mt-0"
              description="Need fast and secure parcel delivery across Melbourne? 13 Melbourne Cabs offers same-day courier services throughout the metro area. Track your deliveries and enjoy peace of mind with our reliable logistics solution."
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
              imageAlt="Premium Cab Service"
              iconVariant="float-right w-full ml-[15px] mb-0 md:w-20 md:mb-[74px]"
              title="Premium Cab Service"
              titleVariant="text-center md:text-right"
              description="13 Melbourne Cabs delivers exceptional silver service taxi transportation across Melbourne. Our modern, well-maintained fleet and professional drivers ensure every journey is comfortable, safe, and enjoyable. Available 24/7 for all your travel needs."
              descriptionVariant="text-center md:text-right md:w-auto"
            />
            <ServiceItem
              imageUrl="https://www.13dandenongtaxi24.com.au/images/corporate-Accounts.png"
              imageAlt="Corporate Travel Service"
              iconVariant="float-right w-full ml-[15px] mb-0 md:w-20 md:mb-[74px]"
              title="Corporate & Event Travel"
              titleVariant="md:text-right"
              description="Elevate your business travel with our dedicated corporate taxi services. 13 Melbourne Cabs provides professional transportation for meetings, conferences, and special events. Set up a corporate account for convenient billing and priority service."
              descriptionVariant="text-center md:text-right md:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
