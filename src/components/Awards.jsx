import { motion } from "framer-motion";

export default function Awards() {
  const awards = [
    {
      title: "Winner - Smart India Hackathon",
      description:
        "Led a team project to develop a sentiment analysis tool using Twitter RoBERTa and tokenizers, achieving 86% accuracy. Secured 1st place in national-level competition.",
    },
    {
      title: "GeeksforGeeks Achievement",
      description: "Solved over 400+ programming problems on the GeeksforGeeks platform.",
    },
    {
      title: "HackerRank",
      description: "Recognized as a 5-Star Coder in C++ by HackerRank for excellence in problem-solving.",
    },
  ];

  return (
    <section id="awards" className="py-20 px-6 bg-[#0a0a0a] text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Awards & Achievements</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            className="bg-[#111] hover:bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 shadow-md transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <h3 className="text-lg font-semibold text-indigo-400 mb-2">{award.title}</h3>
            <p className="text-gray-300 leading-relaxed">{award.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
