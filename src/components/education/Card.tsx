interface IProps {
  title: string;
  location: string;
  date: string;
  description: string[];
  GPA?: string;
  className?: string;
}

const Card = ({
  title,
  location,
  date,
  description,
  GPA,
  className,
}: IProps) => {
  return (
    <div className={`w-full group flex ${className}`}>
      <div className="w-5 h-[6px] bg-black bg-opacity-40 mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex items-center justify-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-lightBg dark:bg-darkBg inline-flex group-hover:bg-accent duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-[#e1e1e128] dark:bg-[#1a1a1d99] transition-transform duration-500 transform hover:scale-105 rounded-lg px-5 sm:px-10 flex flex-col justify-center gap-10 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mt-8">
            <h3 className="text-xl md:text-3xl font-semibold text-lightText dark:text-darkText">
              {title}
            </h3>
            <div className="text-[13px] sm:text-sm font-semibold text-secondaryLightText dark:text-secondaryDarkText flex flex-col gap-1 mt-3">
              <p>{location}</p>
              <p>{date}</p>
            </div>
          </div>
          <div>
            {GPA && (
              <p className="w-20 h-10 text-secondaryLightText dark:text-secondaryDarkText rounded-lg flex justify-center items-center shadow-lg text-sm font-semibold">
                {GPA}
              </p>
            )}
          </div>
        </div>

        {Array.isArray(description) ? (
          <ul className="list-disc list-item space-y-2 text-base font-medium text-secondaryLightText dark:text-secondaryDarkText mb-8">
            {description.map((item, index) => (
              <li key={index} className="pl-1">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-base font-medium text-secondaryLightText dark:text-secondaryDarkText">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
