import { motion } from "framer-motion";

export default function Certifications() {
  const certifications = [
    {
      name: "Journey to Cloud: Envisioning Your Solution",
      issuer: "IBM",
      link: "https://www.credly.com/badges/e7bca17b-6007-4c86-acd4-4257a6591a52/public_url",
    },
    {
      name: "Preparing Data for Analysis with Microsoft Excel",
      issuer: "Microsoft",
      link: "https://coursera.org/verify/YZNC8Q3G7YHB",
    },
    {
      name: "Power BI for Beginners",
      issuer: "Microsoft",
      link: "https://simpli-web.app.link/e/6EPaTH2jHSb",
    },
    {
      name: "Crash Course on Python",
      issuer: "Google",
      link: "https://www.coursera.org/account/accomplishments/verify/FWE9X7HMRYQM",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-[#0a0a0a] text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-[#111] hover:bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 shadow-md transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <h3 className="text-lg font-semibold text-indigo-400 mb-1">{cert.name}</h3>
            <p className="text-sm text-gray-400 mb-3">Issued by {cert.issuer}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-indigo-300 underline hover:text-indigo-400 transition"
            >
              View Certificate ↗
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
