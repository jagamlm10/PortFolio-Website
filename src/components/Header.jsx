import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/type5.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:order-1">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center justify-center lg:items-start lg:pl-8 lg:pt-24 lg:-my-12">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-4xl pb-16 text-fill font-extralight tracking-tight lg:mt-16 lg:text-8xl -ml-1"
            >
              Atharva Jagam
            </motion.h1>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-center text-4xl tracking-tight text-transparent pb-1"
            >
              Final Year Undergrad
            </motion.span>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="my—1 max-w-xl py-6 tracking-tighter text-2xl"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="flex justify-center relative"
          >
            <motion.img
              className="relative w-96 mb-24 bg-gradient-to-t from-transparent to-purple-800 backdrop-blur-lg"
              style={{ borderRadius: "5rem 5rem 2rem 2rem" }}
              src={profilePic}
              alt="Profile Photo"
            />
            {/* <div className="w-96 absolute inset-0 flex justify-center items-end overflow-hidden">
              <div className="w-full h-1/3 bg-gradient-to-t from-transparent to-white backdrop-blur-lg" />
            </div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
