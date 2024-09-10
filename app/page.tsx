"use client"
import { FloatingDock } from "@/components/ui/floating-dock";
import { FaHome } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { PiReadCvLogoFill } from "react-icons/pi";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Image from 'next/image';
import { motion } from "framer-motion"
export default function Home() {
  return (
    <div className="bg-black min-h-screen h-fit custom-scrollbar">
      <div className="flex p-6 justify-between">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="">
            <Image src="/logo.png" width={80}
              height={80} alt="LOGO" />
          </div>
        </motion.button>
        <div className="hidden md:block">
          <FloatingDock desktopClassName="dark bg-[#121212] gap-6 flex justify-center " mobileClassName="dark" items={[{ title: "HOME", icon: <FaHome className="text-purple-500 text-lg" />, href: "/" }, { title: "ABOUT", icon: <IoMdPerson className="text-purple-500 text-lg" />, href: "/" }, { title: "SKILLS", icon: <FaBrain className="text-purple-500 text-lg" />, href: "/" }, { title: "RESUME", icon: <PiReadCvLogoFill className="text-purple-500 text-lg" />, href: "/" }, { title: "CONTACT", icon: <MdConnectWithoutContact className="text-purple-500 text-lg" />, href: "/" }]} />
        </div>
        <div className="hidden md:block">
          <FloatingDock desktopClassName="dark bg-[#121212] w-fit gap-4 flex justify-center" mobileClassName="dark" items={[{ title: "LINKED IN", icon: <FaLinkedin className="text-purple-500" />, href: "https://www.linkedin.com/in/adityaverma7099" }, { title: "X", icon: <FaXTwitter className="text-purple-500" />, href: "https://x.com/KaplishAditya" }, { title: "GITHUB", icon: <FaGithubSquare className="text-purple-500" />, href: "https://github.com/AadiVerma" }, { title: "INSTAGRAM", icon: <FaInstagramSquare className="text-purple-500" />, href: "https://www.instagram.com/aditya946verma/" }]} />
        </div>
      </div>
      <section className="flex p-10 mt-10">
        <div className="w-[65%] ">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="text-xl text-white bg-[#121212] p-2 pl-4 pr-4 border-2 rounded-full w-fit border-[#212121]" >
              <h1>Hello, I′m <span className="text-transparent insset-0 bg-gradient-to-r from-pink-500 to-violet-600 inline-block bg-clip-text">Aditya Verma.</span></h1>
            </div>
          </motion.button>
          <h1 className="text-6xl text-white mt-6">
            I′m a
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-transparent bg-gradient-to-r from-pink-500 to-violet-600 inline-block bg-clip-text"> Full Stack Developer </span>
            </motion.button>
            Based in
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-transparent bg-gradient-to-r from-pink-500 to-violet-600 inline-block bg-clip-text ml-4">India.</span></motion.button>
          </h1>
          <h1 className="text-white text-xl mt-4">
            With a passion for innovation, I develop elegant, high-performance web solutions that are designed to adapt and scale effortlessly, ensuring a robust, scalable user experience.
          </h1>
        </div>
        <div className="mt-[-5%]">
          <div className="rounded-full p-4 border-2 border-purple-500 ">
            <div className="rounded-full p-4 border-2 border-purple-700 ">
              <div className="rounded-full p-3 border-4 border-purple-800 ">
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Image src="/PersonalImage.jpg" width={400} height={200} alt="Personal Image" className="rounded-full" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section></section>
    </div>
  );
}
