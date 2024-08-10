import aboutImg from "../assets/Portfolio.jpg";
import { ABOUT_TEXT1, ABOUT_TEXT2, ABOUT_TEXT3 } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 my-2">
      <motion.h2
        initial={{ y: -100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl w-96"
              src={aboutImg}
              alt="About Section"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full lg:w-1/2 sm:flex sm:justify-center sm:items-center  lg:-mt-8"
        >
          <div className="flex flex-col justify-center gap-10 lg:justify-start py-6 lg:pt-16">
            <p className="max-w-xl text-lg">{ABOUT_TEXT1}</p>
            <p className="max-w-xl text-lg">{ABOUT_TEXT2}</p>
            <p className="max-w-xl text-lg">{ABOUT_TEXT3}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
