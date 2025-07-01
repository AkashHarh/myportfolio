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
    I’m a driven <span className="text-indigo-400 font-semibold">Data Analyst</span> with hands-on experience from a 
    <span className="text-indigo-400 font-semibold"> 6-month Software Trainee program at CyberSWIFT Infotech</span>, 
    along with internships in <span className="text-indigo-400 font-semibold">Machine Learning</span> at Feynn Labs and 
    <span className="text-indigo-400 font-semibold"> Data Science</span> at Celebal Technologies. I’m passionate about 
    solving real-world challenges through <span className="text-indigo-400 font-semibold">data, AI, and machine learning</span>.
  </p>

  <p className="mb-4">
    As an <span className="text-indigo-400 font-semibold">Undergraduate Researcher</span>, I’ve published impactful 
    work on deep learning and NLP, including papers at the 
    <span className="text-indigo-400 font-semibold"> ICACA 2024</span> and 
    <span className="text-indigo-400 font-semibold"> ICDAI 2025</span> conferences. Notably, my research on automated 
    bird sound classification earned the <span className="text-indigo-400 font-semibold">Best Paper Award at ICDIA 2024</span> 
    and was published in <span className="text-indigo-400 font-semibold">Springer Nature</span>.
  </p>

  <p>
    I combine <span className="text-indigo-400 font-semibold">analytical rigor</span> with 
    <span className="text-indigo-400 font-semibold"> creative problem-solving</span>, committed to delivering data-driven 
    solutions that create real impact through precision, insight, and innovation.
  </p>
</motion.div>

    </section>
  );
}
