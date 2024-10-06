import { educationData } from "../../data/index";
import Card from "./Card";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Education = () => {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

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
      transition: { duration: 1.5, ease: "easeOut" },
    });
  }

  return (
    <section id="education" className="py-10 px-0 sm:px-4">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center md:space-x-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        >
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-lightText dark:text-darkText">
              Education & Experience
            </h2>
            <p className="text-base lg:text-lg xl:text-xl text-lightAccent dark:text-darkAccent tracking-wide mt-2 text-center">
              My journey with CS
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div className="mt-10 flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <div className="py-6">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-lightText dark:text-darkText">
              Education
            </h2>
          </div>
          <div className="w-full border-l-4 border-black border-opacity-30 flex flex-col gap-10">
            <Card
              title={educationData[2].title}
              location={educationData[2].location}
              date={educationData[2].date}
              description={educationData[2].description}
              className="h-1/2"
            />
            <Card
              title={educationData[3].title}
              location={educationData[3].location}
              date={educationData[3].date}
              description={educationData[3].description}
              GPA={educationData[3].GPA}
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
            <Card
              title={educationData[1].title}
              location={educationData[1].location}
              date={educationData[1].date}
              description={educationData[1].description}
              className="h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
