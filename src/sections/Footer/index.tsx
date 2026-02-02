import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const Footer = () => {
  return (
    <div className="bg-neutral-800 box-border caret-transparent w-full mx-auto p-[30px]">
      <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
        <FooterColumn
          title="Quick Links"
          items={[
            { text: "Home", href: "#home" },
            {
              text: "About Us",
              href: "#about",
            },
            {
              text: "Our Fleet",
              href: "#fleet",
            },
            {
              text: "Service Areas",
              href: "#areas",
            },
            {
              text: "Services",
              href: "#services",
            },
            {
              text: "Book Now",
              href: "#booking",
            },
            {
              text: "Contact Us",
              href: "#contact",
            },
          ]}
        />
        <FooterColumn
          title="Our Services"
          items={[
            {
              text: "Express Parcel Delivery",
              href: "#services",
            },
            {
              text: "Airport Transfers",
              href: "#services",
            },
            {
              text: "Premium Cab Service",
              href: "#services",
            },
            {
              text: "Corporate & Event Travel",
              href: "#services",
            },
          ]}
        />
        <FooterColumn
          title="Contact 13 Melbourne Cabs"
          items={[
            { text: "0481 481 078", href: "tel://0481481078" },
            {
              text: "info@13melbournecabs.com.au",
              href: "mailto://info@13melbournecabs.com.au",
            },
          ]}
        />
        <FooterColumn
          title="BOOK YOUR RIDE NOW"
          items={[
            {
              text: "0481 481 078",
              href: "tel://0481481078",
              icon: "font-normal box-border caret-transparent inline-block leading-[30px] font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-3xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[30px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome",
            },
          ]}
          variant="estimate"
          description="Secure online booking and payment system available 24/7."
        />
      </div>
      <div className="relative box-border caret-transparent basis-auto shrink max-w-none text-center w-full px-[15px] md:basis-full md:shrink-0 md:max-w-full">
        <strong className="text-white font-bold box-border caret-transparent">
          We accept all major Credit Cards and Cab Charge
        </strong>
        <br className="box-border caret-transparent" />
        <img
          src="https://www.13dandenongtaxi24.com.au/img/cards.png"
          alt=""
          className="box-border caret-transparent h-[50px] max-w-full"
        />
      </div>
    </div>
  );
};
