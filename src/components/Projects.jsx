import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Breast Cancer Detection",
      description:
        "Used 20 features with Gini importance. Achieved 98.2% (RandomForest), 97.36% (XGBoost), 98.6% (SVM), and 99.12% using SMOTE.",
      link: "https://github.com/AkashHarh/Breast_Cancer_Detection",
    },
    {
      title: "Stock Price Prediction",
      description:
        "Implemented LSTM and GRU with 851K+ data points and 100 epochs. Achieved 90.5% accuracy, R² score of 54.86%.",
      link: "https://github.com/AkashHarh/stock_-price-_prediction",
    },
    {
      title: "Cement Quality Prediction",
      description:
        "Used Linear, Ridge, Lasso (63%), RandomForest (92.23%), and GradientBoost (90.5%) on 8 cement features.",
    },
    {
      title: "Indian EV Market Segment Analysis",
      description:
        "Maharashtra has 35K+ EVs and 300+ chargers. Analyzed buyer behavior by age, income, education, and preference.",
      link: "https://github.com/AkashHarh/EV_Indian_Market-_Segment_Analysis",
    },
    {
      title: "Churn Prediction (Telecom)",
      description:
        "Used 7,043 records. Performed EDA, feature scaling, logistic regression. Achieved 80% accuracy.",
      link: "https://github.com/AkashHarh/churnprediction",
    },
    {
      title: "Course Recommendation System",
      description:
        "NLP-based system using TF-IDF. Achieved 79.4% accuracy across 3,683 student profiles.",
      link: "https://github.com/AkashHarh/COURSE_RECOMMENDATION-_SYSTEM",
    },
    {
      title: "SafeWalk Pedestrian Safety (Computer Vision)",
      description:
        "Human detection, posture, and phone usage detection using DL. Achieved 89.24% accuracy.",
      link: "https://github.com/AkashHarh/MobileSafety-Alert-Fine-System",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-[#0a0a0a] text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#111] hover:bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 shadow-md transition duration-300"
            whileHover={{ scale: 1.04 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <h3 className="text-xl font-semibold text-indigo-400">{project.title}</h3>
            <p className="mt-2 text-gray-300 leading-relaxed">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm text-indigo-300 underline hover:text-indigo-400 transition"
              >
                View on GitHub ↗
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
