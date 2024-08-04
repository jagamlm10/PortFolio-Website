import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className=" mb-20 flex items-center justify-between py-6"
    >
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-24" src={logo} alt="" />
      </div>
      <div className="flex justify-center items-center gap-4 text-2xl">
        <a href="https://leetcode.com/u/jagamlm10/"><SiLeetcode className="text-5xl text-gray-600" /></a>
        <a href="https://www.codechef.com/users/jagamlm10"><SiGeeksforgeeks className="text-5xl text-green-600" /></a>
        <a href="https://www.geeksforgeeks.org/user/jagam5ybv/"><SiCodechef className="text-5xl" /></a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
