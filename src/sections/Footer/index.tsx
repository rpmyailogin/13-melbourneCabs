import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const Footer = () => {
  return (
    <div className="bg-neutral-800 box-border caret-transparent w-full mx-auto p-[30px]">
      <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
        <FooterColumn
          title="Links"
          items={[
            { text: "Home", href: "https://www.13dandenongtaxi24.com.au/" },
            {
              text: "About Us",
              href: "https://www.13dandenongtaxi24.com.au/about.html",
            },
            {
              text: "Fleet",
              href: "https://www.13dandenongtaxi24.com.au/our-fleet.html",
            },
            {
              text: "Areas",
              href: "https://www.13dandenongtaxi24.com.au/areas-we-serve.php",
            },
            {
              text: "Services",
              href: "https://www.13dandenongtaxi24.com.au/our-service.html",
            },
            {
              text: "Book Now",
              href: "https://www.13dandenongtaxi24.com.au/book-online.php",
            },
            {
              text: "Contact us",
              href: "https://www.13dandenongtaxi24.com.au/contact-us.html",
            },
          ]}
        />
        <FooterColumn
          title="Services"
          items={[
            {
              text: "Parcels Delivery",
              href: "https://www.13dandenongtaxi24.com.au/our-service.html",
            },
            {
              text: "Airport Delivery",
              href: "https://www.13dandenongtaxi24.com.au/our-service.html",
            },
            {
              text: "Melbourne Cab Services",
              href: "https://www.13dandenongtaxi24.com.au/our-service.html",
            },
            {
              text: "Corporate Travel",
              href: "https://www.13dandenongtaxi24.com.au/our-service.html",
            },
          ]}
        />
        <FooterColumn
          title="Contact Details"
          items={[
            { text: "0481481078", href: "tel://0481481078" },
            {
              text: "mail@dandenongtaxicabs.com",
              href: "mailto://mail@dandenongtaxicabs.com",
            },
          ]}
        />
        <FooterColumn
          title="GET FREE ESTIMATE"
          items={[
            {
              text: "0481481078",
              href: "tel://0481481078",
              icon: "font-normal box-border caret-transparent inline-block leading-[30px] font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-3xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[30px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome",
            },
          ]}
          variant="estimate"
          description=" Our online scheduling and payment system is safe."
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
