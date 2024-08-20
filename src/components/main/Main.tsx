import { useState } from "react";
import { projectData } from "../../data";
import { FaLink, FaGithub, FaArrowRight } from "react-icons/fa";

const Main = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Projects");

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
          {filteredProjects.map((item) => (
            <div
              className="border border-borderLight dark:border-borderDark rounded-md hover:border-accent dark:hover:border-accent transition duration-300 hover:rotate-1 hover:scale-100 hover:cursor-pointer gradient"
              key={item.title}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                height={140}
                className="overflow-hidden rounded-md"
              />
              <div className="py-4 px-2">
                <h1 className="text-lightText dark:text-darkText">
                  {item.title}
                </h1>
                <p className="text-secondaryLightText dark:text-secondaryDarkText text-sm mt-3 mb-5">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 group">
                    {item.liveLink && (
                      <a
                        href={item.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <FaLink className="h-5 w-5 fill-secondaryLightText transition-all duration-300 hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300 cursor-pointer" />
                      </a>
                    )}
                    <a
                      href={item.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <FaGithub className="h-5 w-5 fill-secondaryLightText transition-all duration-300 hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300 cursor-pointer" />
                    </a>
                  </div>
                  <a href="" className="flex gap-2 items-center text-accent">
                    <span className="text-sm">more</span>{" "}
                    <FaArrowRight className="items-end" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
