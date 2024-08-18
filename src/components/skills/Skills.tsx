import skillsList from "../../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import skillAnimation from "../../assets/Animation - 1723965204560.json"; // Import the custom CSS
import { useRef } from "react";

const Skills = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  return (
    <section className="py-10 px-4 lg: dark:lg:bg-[#1a1a1d] rounded-md bg-lightBg dark:bg-darkBg">
      <div className="flex flex-row items-center justify-center">
        <div className="flex items-center justify-center">
          <Lottie
            lottieRef={lottieRef}
            onLoadedImages={() => {
              if (lottieRef.current) {
                lottieRef.current.setSpeed(0.5);
              }
            }}
            animationData={skillAnimation}
            className="w-28 h-28"
          />
        </div>
        <h2 className="text-4xl font-bold text-accent">My Skills</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
        {skillsList.map((item, index) => (
          <div
            key={index}
            className="relative p-6 pt-12 rounded-lg border-x border-b border-borderLight dark:border-borderDark mb-7 last:mb-0 transition-transform duration-500 transform hover:scale-105"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
