import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import img from "../../assets/me.png";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import devAnimation from "../../assets/dev.json";
import { useRef } from "react";

interface IProps {}

const Hero = ({}: IProps) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  return (
    <div className="flex items-center justify-between mt-12">
      <div className="left-section relative xl:mr-16 flex-1">
        <div className="flex items-end gap-2">
          <img
            src={img}
            alt="Profile"
            className="w-20 h-20 object-cover bg-zinc-100 dark:bg-zinc-800 rounded-full border-2 border-orange-200 dark:border-orange-200 p-[1px]"
          />
          <MdVerified className="flex items-end text-accent text-[1.1rem] mb-1" />
        </div>

        <div className="max-w-xl xl:max-w-3xl mt-4 xl:mt-0">
          <h1 className="text-lightText dark:text-darkText text-3xl font-bold sm:text-5xl mt-8">
            Software engineer and front-end developer.
          </h1>
          <p className="text-base text-secondaryLightText dark:text-secondaryDarkText mt-6">
            I’m Hassan Abdelhamed, a software engineer and frontend developer
            with a passion for creating dynamic and intuitive web experiences.
            Specializing in React.js, I leverage my skills in JavaScript,
            TypeScript, and modern CSS frameworks to build high-performance
            applications. Let’s bring your ideas to life with clean and
            efficient code.
          </p>
        </div>
        <div className="flex mt-6 gap-6 items-center">
          <a
            href="https://github.com/HassanAbdelhamed22"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <FaGithub className="h-6 w-6 fill-secondaryLightText transition-all duration-300 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          </a>
          <a
            href="https://linkedin.com/in/hassanabdelhamedh22/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <FaLinkedin className="h-6 w-6 fill-secondaryLightText transition-all duration-300 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          </a>
          <a
            href="https://www.instagram.com/hassan_abdelhamed1/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <FaInstagram className="h-6 w-6 fill-secondaryLightText transition-all duration-300 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
          </a>
          <a
            href="https://drive.google.com/file/d/1pAQa5KwTOwJ60K7W0m2sD9ZZ1H2PwxpR/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="bg-inherit border border-accent text-lightText dark:text-darkText px-4 py-2 rounded-lg  text-sm
             hover:bg-accent
             hover:text-white hover:border-transparent transform hover:shadow-lg transition duration-300"
            >
              Download CV
            </button>
          </a>
        </div>
      </div>
      <div className="right-section hidden xl:block flex-1">
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            if (lottieRef.current) {
              lottieRef.current.setSpeed(0.5);
            }
          }}
          animationData={devAnimation}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
