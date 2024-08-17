import Lottie, { LottieRefCurrentProps } from "lottie-react";
import aboutAnimation from "../../assets/about.json";
import { useRef } from "react";

interface IProps {}

const AboutMe = ({}: IProps) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  return (
    <section
      aria-label="About Me"
      className="flex flex-col lg:flex-row items-center justify-between"
    >
      <div className="flex-1">
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            if (lottieRef.current) {
              lottieRef.current.setSpeed(0.3);
            }
          }}
          animationData={aboutAnimation}
          className="w-80 lg:w-[90%]"
        />
      </div>
      <div className="flex-1 mt-6 lg:mt-0 lg:ml-8">
        <header>
          <h2 className="text-2xl font-bold text-lightText dark:text-darkText">
            About Me
          </h2>
        </header>
        <p className="mt-6 text-base text-secondaryLightText dark:text-secondaryDarkText">
          My name is Hassan Abdelhamed, and I am a dedicated software engineer
          specializing in front-end development with React.js. I have a strong
          foundation in JavaScript, TypeScript, and CSS frameworks, with proven
          success in building dynamic web applications. I am currently pursuing
          a degree in Computer and Artificial Intelligence at Helwan University,
          with an expected graduation in 2025. I am driven by a passion for
          learning and continuously improving my skills to create innovative
          solutions that meet modern web standards.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
