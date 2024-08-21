import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import img from "../../assets/me.webp";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import devAnimation from "../../assets/dev.json";
import { useRef } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const [text, _] = useTypewriter({
    words: ["Software Engineer", "Front-end Developer"],
    loop: true,
    typeSpeed: 120,
  });

  // Animation variants
  const imageVariant = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 1.2 } },
  };

  const iconVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.8, duration: 1, staggerChildren: 0.2 },
    },
  };

  const buttonVariant = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section id="home" className="py-10 px-0 sm:px-4">
      <div className="flex items-center justify-between mt-12">
        <motion.div
          className="left-section relative xl:mr-16 flex-1"
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex items-end gap-2" variants={imageVariant}>
            <motion.img
              src={img}
              alt="Profile"
              className="w-20 h-20 object-cover bg-zinc-100 dark:bg-zinc-800 rounded-full border-2 border-orange-200 dark:border-orange-200 p-[1px]"
              loading="lazy"
            />
            <MdVerified className="flex items-end text-accent text-[1.1rem] mb-1" />
          </motion.div>

          <motion.div
            className="max-w-xl xl:max-w-3xl mt-4 xl:mt-0"
            variants={textVariant}
          >
            <motion.h1
              className="text-lightText dark:text-darkText text-4xl font-bold sm:text-5xl mt-8 flex flex-col gap-2"
              variants={textVariant}
            >
              <span className="text-2xl text-secondaryLightText dark:text-secondaryDarkText">
                Hi I'm,
              </span>
              <span className="flex items-center">
                {text}
                <Cursor cursorStyle="|" />
              </span>
            </motion.h1>
            <motion.p
              className="text-base text-secondaryLightText dark:text-secondaryDarkText mt-6 max-w-64 sm:max-w-full"
              variants={textVariant}
            >
              I’m Hassan Abdelhamed, a software engineer and frontend developer
              with a passion for creating dynamic and intuitive web experiences.
              Specializing in React.js, I leverage my skills in JavaScript,
              TypeScript, and modern CSS frameworks to build high-performance
              applications. Let’s bring your ideas to life with clean and
              efficient code.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex mt-6 gap-3 sm:gap-6 items-center"
            variants={iconVariant}
          >
            <motion.a
              href="https://github.com/HassanAbdelhamed22"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FaGithub className="h-5 w-5 sm:h-6 sm:w-6 fill-secondaryLightText transition-all duration-300 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/hassanabdelhamedh22/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6 fill-secondaryLightText transition-all duration-300 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/hassan_abdelhamed1/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6 fill-secondaryLightText transition-all duration-300 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
            </motion.a>
            <motion.a
              href="https://api.whatsapp.com/send?phone=201012854740"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FaWhatsapp className="h-5 w-5 sm:h-6 sm:w-6 fill-secondaryLightText transition-all duration-300 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1pAQa5KwTOwJ60K7W0m2sD9ZZ1H2PwxpR/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              variants={buttonVariant}
            >
              <button className="bg-inherit border border-accent text-lightText dark:text-darkText px-4 py-2 rounded-lg text-[13px] sm:text-sm hover:bg-accent hover:text-white hover:border-transparent transform hover:shadow-lg transition duration-300">
                Download CV
              </button>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="right-section hidden xl:block flex-1"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.8,
          }}
        >
          <Lottie
            lottieRef={lottieRef}
            onLoadedImages={() => {
              if (lottieRef.current) {
                lottieRef.current.setSpeed(0.5);
              }
            }}
            animationData={devAnimation}
            className="w-full translate-x-24 translate-y-14"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
