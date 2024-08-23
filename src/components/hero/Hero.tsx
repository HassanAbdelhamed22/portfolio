import React, { Suspense, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import img from "../../assets/me.webp";
import devAnimation from "../../assets/dev.json";

// Lazy load all icons
const FaGithub = React.lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaGithub }))
);
const FaLinkedin = React.lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaLinkedin }))
);
const FaInstagram = React.lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaInstagram }))
);
const FaWhatsapp = React.lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaWhatsapp }))
);
const MdVerified = React.lazy(() =>
  import("react-icons/md").then((module) => ({ default: module.MdVerified }))
);

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
        duration: 1,
      },
    },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 1.3 } },
  };

  const iconVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.8, duration: 1.2, staggerChildren: 0.2 },
    },
  };

  const buttonVariant = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.play(); // Play the animation after it's loaded
    }
  }, []);

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
              className="w-36 h-36 object-cover bg-zinc-100 dark:bg-zinc-800 rounded-full border-2 border-orange-200 dark:border-orange-200 p-[1px]"
              loading="lazy"
            />
            <Suspense>
              <MdVerified
                className="flex items-end text-lightAccent dark:text-darkAccent text-[1.5rem] mb-1"
                aria-label="Verified"
              />
            </Suspense>
          </motion.div>

          <motion.div
            className="max-w-xl xl:max-w-3xl mt-4 xl:mt-0"
            variants={textVariant}
          >
            <motion.h1
              className="text-lightText dark:text-darkText text-[28px] font-bold sm:text-5xl mt-8 flex flex-col gap-2"
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
              className="text-base text-secondaryLightText dark:text-secondaryDarkText mt-6  sm:max-w-full"
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
              aria-label="Hassan Abdelhamed's GitHub"
              className="group"
            >
              <Suspense>
                <FaGithub className="h-5 w-5 sm:h-7 sm:w-7 fill-secondaryLightText transition-all duration-300 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
              </Suspense>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/hassanabdelhamedh22/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hassan Abdelhamed's LinkedIn"
              className="group"
            >
              <Suspense>
                <FaLinkedin className="h-5 w-5 sm:h-7 sm:w-7 fill-secondaryLightText transition-all duration-300 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
              </Suspense>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/hassan_abdelhamed1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hassan Abdelhamed's Instagram"
              className="group"
            >
              <Suspense>
                <FaInstagram className="h-5 w-5 sm:h-7 sm:w-7 fill-secondaryLightText transition-all duration-300 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
              </Suspense>
            </motion.a>
            <motion.a
              href="https://api.whatsapp.com/send?phone=201012854740"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hassan Abdelhamed's WhatsApp"
              className="group"
            >
              <Suspense>
                <FaWhatsapp className="h-5 w-5 sm:h-7 sm:w-7 fill-secondaryLightText transition-all duration-300 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
              </Suspense>
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1pAQa5KwTOwJ60K7W0m2sD9ZZ1H2PwxpR/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CV"
              whileHover="hover"
              variants={buttonVariant}
            >
              <button className="bg-inherit border border-lightAccent dark:border-darkAccent text-lightText dark:text-darkText px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-[13px] sm:text-sm hover:bg-lightAccent dark:hover:bg-darkAccent hover:text-white dark:hover:text-black hover:border-transparent transform hover:shadow-lg transition duration-300">
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
            duration: 1,
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
