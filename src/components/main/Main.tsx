import { useState } from "react";
import { projectData } from "../../data";
import { FaLink, FaGithub, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const filteredProjects = projectData.filter((item) =>
    selectedCategory === "All Projects"
      ? true
      : item.category === selectedCategory
  );

  const categories = [
    "All Projects",
    "HTML & CSS",
    "JS",
    "React",
    "React & TS",
    "ASP.net",
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.4 } },
  };

  return (
    <section
      id="project"
      className="flex flex-col sm:flex-row gap-10 items-center sm:items-start py-10 px-0 sm:px-4"
    >
      <div className="flex flex-row gap-3 flex-wrap items-center justify-center">
        {categories.map((category) => (
          <button
            key={category}
            className={`project-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full gap-4">
          <AnimatePresence>
            {filteredProjects.map((item) => (
              <motion.div
                key={item.title}
                className="border border-borderLight dark:border-borderDark rounded-md hover:border-lightAccent dark:hover:border-darkAccent gradient hover:cursor-pointer"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ scale: 1.03, rotate: 1.1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="relative overflow-hidden rounded-md">
                  <img
                    src={item.image}
                    alt={`Screenshot of ${item.title} project`}
                    loading="lazy"
                    className="w-full object-cover"
                  />
                </div>
                <div className="py-4 px-2">
                  <h1 className="text-lightText dark:text-darkText">
                    {item.title}
                  </h1>
                  <p className="text-secondaryLightText dark:text-secondaryDarkText text-sm mt-3 mb-5 min-h-[140px]">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 group">
                      {item.liveLink && (
                        <a
                          href={item.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View live version of ${item.title} project`}
                        >
                          <FaLink className="h-5 w-5 fill-secondaryLightText transition-all duration-300 hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300 cursor-pointer" />
                        </a>
                      )}
                      <a
                        href={item.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View repository of ${item.title} project`}
                      >
                        <FaGithub className="h-5 w-5 fill-secondaryLightText transition-all duration-300 hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300 cursor-pointer" />
                      </a>
                    </div>
                    <a
                      href="#"
                      aria-label={`Learn more about ${item.title} project`}
                      className="flex gap-2 items-center text-lightAccent dark:text-darkAccent"
                    >
                      <span className="text-sm">More details</span>
                      <FaArrowRight className="items-end" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Main;
