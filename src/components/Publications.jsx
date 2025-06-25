import { motion } from "framer-motion";

export default function Publications() {
  const publications = [
    {
      title: "A Hybrid Deep Learning Framework for Text Independent Automatic Speaker Recognition System",
      journal: "Springer Nature",
      link: "https://doi.org/10.1007/978-981-97-4799-3_15",
    },
    {
      title: "An Efficient Deep Convolutional Neural Network for Automated Bird Song Classification",
      journal: "Springer Nature (under publish procedure)",
      link: "#", // Update this once published
    },
  ];

  return (
    <section id="publications" className="py-20 px-6 bg-[#0a0a0a] text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Publications</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            className="bg-[#111] hover:bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 shadow-md transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <h3 className="text-lg font-semibold text-indigo-400 mb-2">{pub.title}</h3>
            <p className="text-sm text-gray-400 mb-3">{pub.journal}</p>
            {pub.link === "#" ? (
              <span className="text-sm text-gray-500 italic">Link coming soon</span>
            ) : (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-300 underline hover:text-indigo-400 transition"
              >
                View Publication ↗
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
