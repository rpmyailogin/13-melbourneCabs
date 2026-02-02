import { FleetCard } from "@/sections/FleetSection/components/FleetCard";

export const FleetSection = () => {
  return (
    <section className="bg-[url('https://www.13dandenongtaxi24.com.au/images/fleet.jpg')] bg-no-repeat bg-cover box-border caret-transparent float-left w-full mt-[35px]">
      <div className="box-border caret-transparent max-w-[1170px] w-full mx-auto px-[15px]">
        <div className="box-border caret-transparent float-left w-full py-[30px]">
          <h2 className="text-white text-[32px] font-bold box-border caret-transparent tracking-[3px] leading-[38.4px] text-center mb-2 font-poppins">
            OUR PREMIUM FLEET
          </h2>
          <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
            <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
              <FleetCard
                imageUrl="https://www.13dandenongtaxi24.com.au/images/sedan-taxi.jpg"
                title="SILVER SEDAN"
                passengerCapacity="(1-4 passengers)"
                bookingUrl="#booking"
                buttonText="Book Now"
              />
            </div>
            <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
              <FleetCard
                imageUrl="https://www.13dandenongtaxi24.com.au/images/sedan-taxi.jpg"
                title="STANDARD SEDAN"
                passengerCapacity="(1-4 passengers)"
                bookingUrl="#booking"
                buttonText="Book Now"
              />
            </div>
            <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
              <FleetCard
                imageUrl="https://www.13dandenongtaxi24.com.au/images/wagon-taxi.jpg"
                title="SUV/WAGON"
                passengerCapacity="(1-6 passengers)"
                bookingUrl="#booking"
                buttonText="Book Now"
              />
            </div>
            <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
              <FleetCard
                imageUrl="https://www.13dandenongtaxi24.com.au/images/maxi-taxi.jpg"
                title="MAXI VAN"
                passengerCapacity="(5-11 passengers)"
                bookingUrl="#booking"
                buttonText="Book Now"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
