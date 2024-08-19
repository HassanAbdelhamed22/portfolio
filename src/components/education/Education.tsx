import { educationData } from "../../data/index";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import educationAnimation from "../../assets/education.json";
import { useRef } from "react";
import Card from "./Card";

const Education = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  return (
    <section className="py-10 px-0 sm:px-4">
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-6">
        <div className="flex items-center justify-center mb-6 md:mb-0">
          <Lottie
            lottieRef={lottieRef}
            onLoadedImages={() => {
              if (lottieRef.current) {
                lottieRef.current.setSpeed(0.8);
              }
            }}
            animationData={educationAnimation}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-lightText dark:text-darkText">
            Education & Experience
          </h2>
          <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-accent tracking-wide mt-2">
            My journey with CS
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <div className="py-6">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-lightText dark:text-darkText">
              Education
            </h2>
          </div>
          <div className="w-full border-l-4 border-black border-opacity-30 flex flex-col gap-10">
            <Card
              title={educationData[1].title}
              location={educationData[1].location}
              date={educationData[1].date}
              description={educationData[1].description}
              className="h-1/2"
            />
            <Card
              title={educationData[2].title}
              location={educationData[2].location}
              date={educationData[2].date}
              description={educationData[2].description}
              GPA={educationData[2].GPA}
              className="h-1/2"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="py-6">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-lightText dark:text-darkText">
              Experience
            </h2>
          </div>
          <div className="w-full border-l-4 border-black border-opacity-30 flex flex-col gap-10">
            <Card
              title={educationData[0].title}
              location={educationData[0].location}
              date={educationData[0].date}
              description={educationData[0].description}
              className="h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
