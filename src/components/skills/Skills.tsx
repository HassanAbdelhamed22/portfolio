import skillsList from "../../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import skillAnimation from "../../assets/Animation - 1723965204560.json";
import { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const scrollRef = useRef(null);

  // Framer Motion hooks for animations
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Start the animation when the element is in view
  if (inView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    });
  }

  return (
    <section
      id="skills"
      className="py-10 px-0 sm:px-4 lg:bg-[#e1e1e13c] lg: dark:lg:bg-[#1a1a1d] rounded-md bg-lightBg dark:bg-darkBg"
    >
      <motion.div
        ref={ref} 
        initial={{ opacity: 0, y: 50 }} 
        animate={controls} 
        className="flex flex-row items-center justify-center space-x-1 lg:space-x-4"
      >
        <div className="flex items-center justify-center">
          <Lottie
            lottieRef={lottieRef}
            onLoadedImages={() => {
              if (lottieRef.current) {
                lottieRef.current.setSpeed(0.8);
              }
            }}
            animationData={skillAnimation}
            className="w-20 h-20 sm:w-28 sm:h-28"
          />
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-lightText dark:text-darkText">
            My Skills
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-accent tracking-[4px] mt-2">
            What skills I have
          </p>
        </div>
      </motion.div>

      <motion.div
        ref={scrollRef} 
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-10"
      >
        {skillsList.map((item, index) => (
          <motion.div
            key={index}
            className="relative p-6 pt-12 rounded-lg border-x border-b border-borderLight dark:border-borderDark mb-7 last:mb-0 transition-transform duration-500 transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          >
            <div className="absolute inset-x-0 top-[-15px] flex justify-start items-center">
              <div className="px-4">
                <item.categoryIcon className="text-2xl text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-secondaryLightText dark:text-secondaryDarkText">
                {item.category}
              </h3>
            </div>
            <ul className="space-y-4">
              {item.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center space-x-3">
                  <skill.icon className="h-6 w-6 fill-secondaryLightText transition-all duration-300 hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300" />
                  <span className="text-secondaryLightText dark:text-secondaryDarkText">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
