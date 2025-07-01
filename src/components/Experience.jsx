import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    // {
    //   role: "Data Analyst",
    //   company: "Polestar Solutions",
    //   date: "June 2025 – Present",
    //   description:
    //     "Recently placed as a Data Analyst. Applying analytical methodologies to drive business insights using data visualization, SQL, and predictive modeling.",
    // },
    {
      role: "Software Trainee",
      company: "CyberSWIFT Infotech",
      date: "Aug 2024 – Jan 2025",
      description:
        "Full-stack developer on a PERN-based Land Acquisition System. Built 4 modules, resolved 200+ bugs, and collaborated within a 7-member agile team.",
    },
    {
      role: "Undergraduate Researcher",
      company: "Techno Main Salt Lake",
      date: "2023 – Present",
      description:
        "Published impactful research in deep learning and NLP. Best Paper award at ICDIA 2024 for bird sound classification. Contributed to Springer publications.",
    },
    {
      role: "Machine Learning Intern",
      company: "Feynn Labs, Kolkata",
      date: "Jul 2023 – Sep 2023",
      description:
        "Investigated EV market trends with a projected 18.2% growth (2021–2030). Developed a cement quality prediction web app using ML, achieving 92.23% accuracy through advanced modeling and data analysis.",
    },
    {
    role: "Data Science Intern",
    company: "Celebal Technologies, Kolkata",
    date: "May 2024 – Jul 2024",
    description:
      "Optimized several ML models with a 15% accuracy boost, processed 100K+ records, reduced data noise by 25%, enhanced feature selection by 22%, and improved pipeline efficiency by 30%.",
  },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-[#0a0a0a] text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

      <div className="grid gap-8 max-w-5xl mx-auto md:grid-cols-2">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-[#111] hover:bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 shadow-lg transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-indigo-400 mb-1">{exp.role}</h3>
            <p className="text-sm text-gray-400 italic mb-3">{exp.company} | {exp.date}</p>
            <p className="text-gray-300 leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
