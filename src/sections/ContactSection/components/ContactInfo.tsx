export const ContactInfo = () => {
  return (
    <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-6/12 md:shrink-0 md:max-w-[50%] md:pr-0">
      <div className="box-border caret-transparent">
        <h3 className="text-black text-[25px] font-bold bg-yellow-400 box-border caret-transparent leading-[30px] p-[25px] font-poppins">
          Contact Us
        </h3>
        <div className="box-border caret-transparent">
          <ul className="box-border caret-transparent list-none mb-4">
            <li className="text-black box-border caret-transparent flex leading-[30px] my-[35px]">
              <i className="text-3xl box-border caret-transparent block leading-[39px] mr-2.5 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-black before:text-3xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[39px] before:list-outside before:list-none before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
              <a className="box-border caret-transparent block">
                <b className="text-lg font-bold box-border caret-transparent">
                  Address
                </b>
                <br className="box-border caret-transparent" />
                Dandenong VIC 3175 Australia
              </a>
            </li>
            <li className="text-black box-border caret-transparent flex leading-[30px] my-[35px]">
              <i className="text-3xl box-border caret-transparent block leading-[39px] mr-2.5 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-black before:text-3xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[39px] before:list-outside before:list-none before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
              <a
                href="tel://0481481078"
                className="text-gray-700 box-border caret-transparent block hover:text-sky-700 hover:border-sky-700"
              >
                <b className="text-lg font-bold box-border caret-transparent">
                  Phone
                </b>
                <br className="box-border caret-transparent" />
                0481481078
              </a>
            </li>
            <li className="text-black box-border caret-transparent flex leading-[30px] my-[35px]">
              <i className="text-3xl box-border caret-transparent block leading-[39px] mr-2.5 font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-black before:text-3xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[39px] before:list-outside before:list-none before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome"></i>
              <a
                href="mailto://info@13airportsilvercab.com.au"
                className="text-gray-700 box-border caret-transparent block hover:text-sky-700 hover:border-sky-700"
              >
                <b className="text-lg font-bold box-border caret-transparent">
                  Email
                </b>
                <br className="box-border caret-transparent" />
                booking@13dandenongtaxi24.com.au
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
