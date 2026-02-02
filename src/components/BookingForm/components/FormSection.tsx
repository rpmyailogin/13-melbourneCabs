export type FormSectionProps = {
  variant: "header" | "middle" | "footer";
};

export const FormSection = (props: FormSectionProps) => {
  if (props.variant === "header") {
    return (
      <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
        <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full md:shrink-0 bg-yellow-500 text-center mb-[30px] px-2.5 py-5 md:basis-full md:max-w-full">
          <h2 className="text-[27px] font-bold box-border caret-transparent leading-[32.4px] uppercase mb-2 font-poppins">
            Book a Cab Online
          </h2>
        </div>
        <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
          <div className="box-border caret-transparent mb-[26px]">
            <label className="box-border caret-transparent inline-block mb-2">
              Passenger Name*
            </label>
            <input
              type="text"
              name="passenger_name"
              className="text-zinc-600 bg-clip-padding bg-gray-200 box-border caret-transparent block h-[38px] text-start w-full border border-gray-300 px-3 py-1.5 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
            />
          </div>
        </div>
        <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
          <div className="box-border caret-transparent mb-[26px]">
            <label className="box-border caret-transparent inline-block mb-2">
              Mobile*
            </label>
            <input
              type="text"
              name="mobile"
              placeholder="Mobile No."
              className="text-zinc-600 bg-clip-padding bg-gray-200 box-border caret-transparent block h-[38px] text-start w-full border border-gray-300 px-3 py-1.5 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
            />
          </div>
        </div>
        <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
          <div className="box-border caret-transparent mb-[26px]">
            <label className="box-border caret-transparent inline-block mb-2">
              Car Type
            </label>
            <select
              name="car_type"
              className="text-zinc-600 bg-clip-padding bg-gray-200 caret-transparent block h-[38px] leading-[normal] text-start w-full border-gray-300 px-3 py-1.5 rounded-bl rounded-br rounded-tl rounded-tr"
            >
              <option
                value="Normal Sedan"
                className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
              >
                Normal Sedan
              </option>
              <option
                value="Premium Cab"
                className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
              >
                Premium Cab
              </option>
              <option
                value="SUV/ Station wagon (For Extra Luggage)"
                className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
              >
                SUV/ Station wagon (For Extra Luggage)
              </option>
              <option
                value="Van Taxi (5 - 11 Passengers)"
                className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
              >
                Van Taxi (5 - 11 Passengers)
              </option>
            </select>
          </div>
        </div>
        <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
          <div className="box-border caret-transparent mb-[26px]">
            <label className="box-border caret-transparent inline-block mb-2">
              No. of Passengers
            </label>
            <select
              name="number_of_passengers"
              className="text-zinc-600 bg-clip-padding bg-gray-200 caret-transparent block h-[38px] leading-[normal] text-start w-full border-gray-300 px-3 py-1.5 rounded-bl rounded-br rounded-tl rounded-tr"
            >
              <option
                value="1"
                className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
              >
                1
              </option>
              <option
                value="2"
                className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
              >
                2
              </option>
              <option
                value="3"
                className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
              >
                3
              </option>
              <option
                value="4"
                className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
              >
                4
              </option>
              <option
                value="5+"
                className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
              >
                5+
              </option>
            </select>
          </div>
        </div>
      </div>
    );
  }

  if (props.variant === "middle") {
    return (
      <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
        <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
          <div className="box-border caret-transparent mb-[26px]">
            <label className="box-border caret-transparent inline-block mb-2">
              Journey Type
            </label>
            <select
              name="journeytype"
              className="text-zinc-600 bg-clip-padding bg-gray-200 caret-transparent block h-[38px] leading-[normal] text-start w-full border-gray-300 px-3 py-1.5 rounded-bl rounded-br rounded-tl rounded-tr"
            >
              <option
                value="One Way"
                className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
              >
                One Way
              </option>
              <option
                value="Return"
                className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
              >
                Return
              </option>
              <option
                value="Hourly"
                className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
              >
                Hourly
              </option>
            </select>
          </div>
        </div>
        <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
          <div className="box-border caret-transparent mb-[26px]">
            <label className="box-border caret-transparent inline-block mb-2">
              Pickup Date *
            </label>
            <input
              type="date"
              name="date"
              className="text-zinc-600 bg-clip-padding bg-gray-200 box-border caret-transparent block h-[38px] text-start w-full border border-gray-300 px-3 py-1.5 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
            />
          </div>
        </div>
        <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
          <div className="box-border caret-transparent mb-[26px]">
            <label className="box-border caret-transparent inline-block mb-2">
              Pickup Time *
            </label>
            <input
              type="time"
              name="pickup_time"
              className="text-zinc-600 bg-clip-padding bg-gray-200 box-border caret-transparent block h-[38px] text-start w-full border border-gray-300 px-3 py-1.5 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
            />
          </div>
        </div>
        <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
          <div className="box-border caret-transparent mb-[26px]">
            <label className="box-border caret-transparent inline-block mb-2">
              Pickup Address*
            </label>
            <input
              type="text"
              name="pickup_address"
              placeholder="Enter a location"
              className="text-zinc-600 bg-clip-padding bg-gray-200 box-border caret-transparent block h-[38px] text-start w-full border border-gray-300 px-3 py-1.5 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
      <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
        <div className="box-border caret-transparent mb-[26px]">
          <label className="box-border caret-transparent inline-block mb-2">
            Drop Address
          </label>
          <input
            type="text"
            name="drop_address"
            placeholder="Enter a location"
            className="text-zinc-600 bg-clip-padding bg-gray-200 box-border caret-transparent block h-[38px] text-start w-full border border-gray-300 px-3 py-1.5 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
          />
        </div>
      </div>
      <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:shrink-0 md:basis-6/12 md:max-w-[50%]">
        <div className="box-border caret-transparent mb-[26px]">
          <label className="box-border caret-transparent inline-block mb-2">
            Note For Driver
          </label>
          <textarea
            name="any_note_for_driver"
            className="text-zinc-600 bg-clip-padding bg-gray-200 box-border caret-transparent block resize-y text-start w-full border-gray-300 px-3 py-1.5 rounded-bl rounded-br rounded-tl rounded-tr"
          ></textarea>
        </div>
      </div>
      <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
        <div className="box-border caret-transparent text-center w-full">
          <button
            type="submit"
            className="text-white text-[15px] font-bold bg-yellow-400 caret-transparent leading-[22.5px] px-[30px] py-[9px] rounded-[10px]"
          >
            Book Now
          </button>
        </div>
      </div>
      <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:shrink-0 md:basis-full md:max-w-full">
        <p className="text-[19px] box-border caret-transparent leading-[28.5px] text-center mt-[30px] mb-4">
          We accept all major Credit Cards and Cab Charge
        </p>
        <img
          src="https://www.13dandenongtaxi24.com.au/cards.png"
          className="box-border caret-transparent max-w-[275px] mx-auto"
        />
      </div>
    </div>
  );
};
