import { IoIosArrowUp } from "react-icons/io";

const ToTopButton = () => {
  return (
    <a href="#up">
      <button className="bg-[#1976d2d9] w-10 h-10 rounded-full fixed bottom-8 right-[3%] flex items-center justify-center font-bold text-xl text-darkText transition duration-300 hover:bg-[#1976d2] border border-[#ffffff33] dark:border-[#ffffff33] opacity-50 hover:opacity-100 sm:opacity-100">
        <IoIosArrowUp />
      </button>
    </a>
  );
};

export default ToTopButton;
