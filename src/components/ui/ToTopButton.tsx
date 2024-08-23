import { IoIosArrowUp } from "react-icons/io";

interface ToTopButtonProps {
  showScrollBtn: boolean;
}

const ToTopButton: React.FC<ToTopButtonProps> = ({ showScrollBtn }) => {
  return (
    <a
      href="#up"
      style={{
        opacity: showScrollBtn ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      <button
        className="bg-[#1976d2d9] w-10 h-10 rounded-full fixed bottom-8 right-[3%] flex items-center justify-center font-bold text-xl text-darkText transition duration-300 hover:bg-[#1976d2] border border-[#ffffff33] dark:border-[#ffffff33] opacity-50 hover:opacity-100 sm:opacity-100"
        aria-label="Scroll to top"
      >
        <IoIosArrowUp />
      </button>
    </a>
  );
};

export default ToTopButton;
