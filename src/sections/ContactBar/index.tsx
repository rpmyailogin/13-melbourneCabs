export const ContactBar = () => {
  return (
    <section className="bg-fixed bg-[url('https://www.13dandenongtaxi24.com.au/banner.jpg')] bg-no-repeat bg-cover box-border caret-transparent float-left min-h-[500px] w-full">
      <div className="box-border caret-transparent w-full mx-auto px-[15px]">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
            <div className="relative box-border caret-transparent basis-auto shrink max-w-none text-center w-full md:basis-6/12 md:shrink-0 md:max-w-[50%]">
              <div className="bg-[linear-gradient(90deg,rgb(102,102,102)_0%,rgb(51,51,51)_100%)] box-border caret-transparent pt-[15px] pb-2.5 rounded-bl-[119px]">
                <a
                  href="tel://0481481078"
                  className="text-white text-3xl box-border caret-transparent inline-block leading-[45px]"
                >
                  <i className="box-border caret-transparent inline-block leading-[30px] font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-3xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[30px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
                  0481481078
                </a>
              </div>
            </div>
            <div className="relative box-border caret-transparent basis-auto shrink max-w-none text-center w-full md:basis-6/12 md:shrink-0 md:max-w-[50%]">
              <div className="bg-[linear-gradient(90deg,rgb(248,191,16)_0%,rgb(255,190,0)_100%)] box-border caret-transparent pt-[15px] pb-2.5 rounded-br-[119px]">
                <a
                  href="#booking"
                  className="text-white text-3xl box-border caret-transparent inline-block leading-[45px] hover:text-gray-200 transition-colors"
                >
                  <i className="box-border caret-transparent inline-block leading-[30px] font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-3xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[30px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
                  Book Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent w-full mx-auto px-[15px]">
        <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
          <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-[33.3333%] md:shrink-0 md:max-w-[33.3333%]">
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent p-5">
              <h2 className="text-white text-[21px] font-bold box-border caret-transparent leading-[27.3px] mb-[50px] pt-[50px] font-poppins md:text-3xl md:leading-[39px]">
                Premium Melbourne Taxi Service - 24/7
              </h2>
                <h3 className="text-white text-[19px] font-semibold box-border caret-transparent leading-[22.8px] mb-2 font-poppins md:text-[29px] md:leading-[34.8px]">
                  Professional Transportation Solutions Across Melbourne
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
          <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-[66.6667%] md:shrink-0 md:max-w-[66.6667%]">
            <div className="bg-white box-border caret-transparent mt-[50px] mb-[150px] p-[30px]">
              <form className="box-border caret-transparent">
                <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
                  <div className="relative bg-yellow-500 box-border caret-transparent basis-auto shrink max-w-none text-center w-full mb-[30px] px-2.5 py-5 md:basis-full md:shrink-0 md:max-w-full">
                    <h2 className="text-[27px] font-bold box-border caret-transparent leading-[32.4px] uppercase mb-2 font-poppins">
                      Book Your Ride with 13 Melbourne Cabs
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
                          value="Standard Sedan"
                          className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
                        >
                          Standard Sedan
                        </option>
                        <option
                          value="Silver Sedan"
                          className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
                        >
                          Silver Sedan
                        </option>
                        <option
                          value="SUV/ Station wagon (For Extra Luggage)"
                          className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
                        >
                          SUV/ Station wagon (For Extra Luggage)
                        </option>
                        <option
                          value="Maxi Van (5 - 11 Passengers)"
                          className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
                        >
                          Maxi Van (5 - 11 Passengers)
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
                  <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-6/12 md:shrink-0 md:max-w-[50%]">
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
                  <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-full md:shrink-0 md:max-w-full">
                    <p className="text-[19px] box-border caret-transparent leading-[28.5px] text-center mt-[30px] mb-4">
                      We accept all major Credit Cards and Cab Charge
                    </p>
                    <img
                      src="https://www.13dandenongtaxi24.com.au/cards.png"
                      className="box-border caret-transparent max-w-[275px] mx-auto"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
