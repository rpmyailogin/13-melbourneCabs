export type FleetCardProps = {
  imageUrl: string;
  title: string;
  passengerCapacity: string;
  bookingUrl: string;
  buttonText: string;
};

export const FleetCard = (props: FleetCardProps) => {
  return (
    <div className="bg-white box-border caret-transparent border-blue-500 my-[45px] pt-10 pb-[55px] px-[30px] rounded-md border-2 border-solid">
      <div className="box-border caret-transparent">
        <img
          src={props.imageUrl}
          alt="Tariff"
          className="box-border caret-transparent max-w-full"
        />
      </div>
      <h3 className="text-lg font-semibold box-border caret-transparent leading-[21.6px] text-center mb-2 font-poppins">
        {props.title}
      </h3>
      <h4 className="text-[15px] box-border caret-transparent leading-[18px] text-center mb-2">
        {props.passengerCapacity}
      </h4>
      <div className="box-border caret-transparent text-center w-full pt-5">
        <a
          href={props.bookingUrl}
          className="text-white text-[22px] font-bold bg-orange-500 box-border caret-transparent inline-block leading-[33px] px-5 py-2 rounded-[10px] hover:bg-orange-600 transition-colors"
        >
          {props.buttonText}
        </a>
      </div>
    </div>
  );
};
