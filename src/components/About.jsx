import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-[#0a0a0a] text-white">
      <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>

      <motion.div
        className="max-w-3xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-4">
          I'm a driven <span className="text-indigo-400 font-semibold">Data Analyst</span>, recently placed at 
          <span className="text-indigo-400 font-semibold"> Polestar Solutions</span>, passionate about solving real-world problems through 
          <span className="text-indigo-400 font-semibold"> data, AI, and machine learning</span>.
        </p>

        <p className="mb-4">
          As an <span className="text-indigo-400 font-semibold">Undergraduate Researcher</span>, I’ve authored 
          impactful research on deep learning and NLP. My work on bird sound classification received the 
          <span className="text-indigo-400 font-semibold"> Best Paper Award at ICDIA 2024</span>, and was published in 
          <span className="text-indigo-400 font-semibold"> Springer Nature</span>.
        </p>

        <p>
          I blend <span className="text-indigo-400 font-semibold">analytical thinking</span> with <span className="text-indigo-400 font-semibold">creative problem-solving</span>, driven to deliver 
          solutions that matter through precision, insight, and innovation.
        </p>
      </motion.div>
    </section>
  );
}
