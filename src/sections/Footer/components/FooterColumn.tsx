export type FooterColumnProps = {
  title: string;
  items: Array<{
    text: string;
    href: string;
    icon?: string;
  }>;
  variant?: string;
  description?: string;
};

export const FooterColumn = (props: FooterColumnProps) => {
  if (props.variant === "estimate") {
    return (
      <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
        <h4 className="text-yellow-400 text-3xl font-medium box-border caret-transparent leading-9 border-yellow-400 mb-2.5 pb-[5px] border-b">
          {props.title}
        </h4>
        {props.items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-gray-700 box-border caret-transparent inline-block hover:text-sky-700 hover:border-sky-700"
          >
            <h3 className="text-white text-3xl font-semibold box-border caret-transparent leading-9 mb-2 font-poppins">
              {item.icon && (
                <i
                  className={`font-normal box-border caret-transparent inline-block leading-[30px] font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-3xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[30px] before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome ${item.icon}`}
                ></i>
              )}
              {item.icon && " "}
              {item.text}
            </h3>
          </a>
        ))}
        {props.description && (
          <p className="text-white text-[15px] box-border caret-transparent leading-[22.5px] mb-4">
            {props.description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="relative box-border caret-transparent basis-auto shrink max-w-none w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
      <h4 className="text-yellow-400 text-3xl font-medium box-border caret-transparent leading-9 border-yellow-400 mb-2.5 pb-[5px] border-b">
        {props.title}
      </h4>
      <ul className="box-border caret-transparent list-none mb-4 pl-[5px]">
        {props.items.map((item, index) => (
          <li
            key={index}
            className="text-white text-sm box-border caret-transparent leading-[21px] mb-1.5"
          >
            <a
              href={item.href}
              className="box-border caret-transparent inline-block"
            >
              {item.icon && (
                <i
                  className={`box-border caret-transparent inline-block leading-[14px] font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[14px] before:list-outside before:list-none before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-fontawesome ${item.icon}`}
                ></i>
              )}
              {item.icon && " "}
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
