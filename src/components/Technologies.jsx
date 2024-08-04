import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { motion } from "framer-motion";
import { SiMysql } from "react-icons/si";


const anime = (duration) => ({
  initial: { y: -10, scale : 1 },
  animate: {
    y: [10, -10],
    transition: {
      ease: "linear",
      duration: duration,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <motion.div className="border-b border-neutral-800 pb-24">
      <motion.h1
        initial={{ y: -100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="my-20 text-center text-4xl"
      >
        Skills and Technologies
      </motion.h1>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* HTML  */}
        <motion.div
          variants={anime(2.4)}
          initial="initial"
          animate="animate"
          whileHover={{scale : 1.2}}
          className="rounded-2xl border-4 p-3 border-neutral-800"
        >
          <FaHtml5 className="text-6xl text-orange-600" />
        </motion.div>
        {/* CSS  */}
        <motion.div
          variants={anime(2)}
          initial="initial"
          animate="animate"
          whileHover={{scale : 1.2}}
          className="rounded-2xl border-4 border-neutral-800 p-3"
        >
          <FaCss3Alt className="text-6xl text-blue-600" />
        </motion.div>
        {/* Javascript  */}
        <motion.div
          variants={anime(1.9)}
          initial="initial"
          animate="animate"
          whileHover={{scale : 1.2}}
          className="rounded-2xl border-4 border-neutral-800 p-3"
        >
          <IoLogoJavascript className="text-6xl text-yellow-400" />
        </motion.div>
        {/* React  */}
        <motion.div
          variants={anime(1.4)}
          initial="initial"
          animate="animate"
          whileHover={{scale : 1.2}}
          className="rounded-2xl border-4 border-neutral-800 p-3"
        >
          <RiReactjsLine className="text-6xl text-cyan-400" />
        </motion.div>
        {/* NodeJS  */}
        <motion.div
          variants={anime(1.5)}
          initial="initial"
          animate="animate"
          whileHover={{scale : 1.2}}
          className="rounded-2xl border-4 border-neutral-800 p-3"
        >
          <FaNodeJs className="text-6xl text-green-600" />
        </motion.div>
        {/* ExpressJs  */}
        <motion.div
          variants={anime(1.3)}
          initial="initial"
          animate="animate"
          whileHover={{scale : 1.2}}
          className="rounded-2xl border-4 border-neutral-800 p-3"
        >
          <SiExpress className="text-6xl text-white" />
        </motion.div>
        {/* MongoDB  */}
        <motion.div
          variants={anime(1.8)}
          initial="initial"
          animate="animate"
          whileHover={{scale : 1.2}}
          className="rounded-2xl border-4 border-neutral-800 p-3"
        >
          <SiMongodb className="text-6xl text-green-400" />
        </motion.div>
        {/* MySQL  */}
        <motion.div
          variants={anime(1.1)}
          initial="initial"
          animate="animate"
          whileHover={{scale : 1.2}}
          className="rounded-2xl border-4 border-neutral-800 p-3"
        >
          <SiMysql className="text-6xl text-orange-400" />
        </motion.div>
        {/* C++  */}
        <motion.div
          variants={anime(1.6)}
          initial="initial"
          animate="animate"
          whileHover={{scale : 1.2}}
          className="rounded-2xl border-4 border-neutral-800 p-3"
        >
          <SiCplusplus className="text-6xl text-blue-600 bg-white rounded-2xl p-1" />
        </motion.div>
        {/* Python  */}
        <motion.div
          variants={anime(2.7)}
          initial="initial"
          animate="animate"
          whileHover={{scale : 1.2}}
          className="rounded-2xl border-4 border-neutral-800 p-3"
        >
          <FaPython className="text-6xl text-blue-500 bg-white rounded-2xl p-1" />
        </motion.div>
        {/* Flask  */}
        <motion.div
          variants={anime(1.3)}
          initial="initial"
          animate="animate"
          whileHover={{scale : 1.2}}
          className="rounded-2xl border-4 border-neutral-800 p-3"
        >
          <SiFlask className="text-6xl text-black bg-white rounded-2xl p-1" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Technologies;
