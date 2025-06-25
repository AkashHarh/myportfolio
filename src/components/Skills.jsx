import { motion } from "framer-motion";

export default function Skills() {
  const topSkills = [
    "Python",
    "TensorFlow",
    "Keras",
    "Scikit-learn",
    "NLP",
    "React",
    "Node.js",
    "MongoDB",
    "SQL",
    "AWS",
    "Docker",
    "Data Visualization",
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-[#0a0a0a] text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Top Skills</h2>

      <motion.div
        className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {topSkills.map((skill, index) => (
          <motion.span
            key={index}
            className="bg-indigo-600 hover:bg-indigo-500 transition text-white px-4 py-2 rounded-full text-sm font-medium shadow"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
