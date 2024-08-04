import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ y: -100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div className="px-4">
        {PROJECTS.map(
          ({ title, image, description, technologies, link }, index) => {
            return (
              <a
                key={index}
                href={link}
                className="mb-8 flex flex-wrap lg:flex-nowrap lg:justify-center cursor-pointer"
              >
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.15 * (index + 1) }}
                  className="w-full mb-4 lg:mb-0 lg:w-1/4 flex justify-center"
                >
                  <img
                    width={250}
                    height={150}
                    src={image}
                    alt={title}
                    className="rounded"
                  />
                </motion.div>
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 * (index + 1) }}
                  className="w-full lg:w-2/4"
                >
                  <h4 className="mb-2 font-semibold text-center lg:text-left">
                    {title}
                  </h4>
                  <p className="mb-4 text-neutral-400 text-center lg:text-left">
                    {description}
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start">
                    {technologies.map((tech, index) => {
                      return (
                        <span
                          key={index}
                          className="mr-2 mb-2 bg-neutral-900 rounded px-2 py-1 text-sm font-medium text-purple-400"
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </motion.div>
              </a>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Projects;
