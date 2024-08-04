import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="my-10 text-center text-4xl"
      >
        Get in touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="my-4"
        >
          <div className="flex justify-center items-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/atharva-jagam-31aa71257/">
              <FaLinkedin className="text-blue-700" />
            </a>
            <a href="https://github.com/jagamlm10">
              <FaGithub />
            </a>
            <a href="https://x.com/6022Jagam">
              <FaXTwitter className="text-black" />
            </a>
            <a href="https://www.instagram.com/jagamatharva/">
              <FaInstagram className="text-orange-500" />
            </a>
            <a href="https://www.facebook.com/atharva.jagam.9/">
              <FaFacebookF className="text-blue-500" />
            </a>
          </div>
        </motion.div>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 mt-6 font-mono text-lg"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="mailto:jagamlm10@gmail.com">{CONTACT.email}</a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

