import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="flex flex-col justify-center items-center text-center px-6 py-16 sm:py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-[#111] text-white"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        src="/profile.jpg"
        alt="Akash Harh"
        className="rounded-full w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover mb-6 border-4 border-white shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      />

      <motion.h1
        className="text-3xl sm:text-4xl font-extrabold tracking-wide"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        Akash Harh
      </motion.h1>

      <motion.p
        className="text-gray-300 text-base sm:text-lg max-w-2xl mt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        Data Analyst &nbsp; | &nbsp;Undergraduate Researcher&nbsp; | &nbsp;ML & AI Enthusiast
      </motion.p>
    </motion.section>
  );
}
