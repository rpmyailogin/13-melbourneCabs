export type ServiceItemProps = {
  imageUrl: string;
  imageAlt: string;
  iconVariant: string;
  title: string;
  titleVariant: string;
  description: string;
  descriptionVariant: string;
};

export const ServiceItem = (props: ServiceItemProps) => {
  return (
    <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-full md:shrink-0 md:max-w-full">
      <div
        className={`box-border caret-transparent w-full md:w-20 ${props.iconVariant}`}
      >
        <img
          src={props.imageUrl}
          alt={props.imageAlt}
          className="aspect-[auto_80_/_80] box-border caret-transparent h-20 max-w-full w-20"
        />
      </div>
      <div className="box-border caret-transparent float-left w-full mb-5 md:w-9/12">
        <h4
          className={`text-[22px] font-medium box-border caret-transparent leading-[26.4px] text-center my-2 md:mt-0 ${props.titleVariant}`}
        >
          {props.title}
        </h4>
        <p
          className={`text-[15px] box-border caret-transparent flex leading-[22.5px] w-full mb-4 md:w-auto ${props.descriptionVariant}`}
        >
          {props.description}
        </p>
      </div>
    </div>
  );
};
