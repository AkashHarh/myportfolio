import { motion } from "framer-motion";

export default function FinalProject() {
  return (
    <section id="final-project" className="py-20 px-6 bg-[#0a0a0a] text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Final Year Project</h2>

      <motion.div
        className="max-w-5xl mx-auto bg-[#111] border border-gray-800 rounded-lg p-6 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-xl font-semibold text-indigo-400 mb-4">
         MoodTune: Smart Music Recommendations from Your Mood
        </h3>

        <p className="text-gray-300 mb-4 leading-relaxed">
          In today's digital world, emotional expression has shifted to online platforms, demanding emotionally intelligent systems. This web-based project recommends songs and playlists based on users' moods, extracted from text inputs using NLP, deep learning, and LLMs.
        </p>

        <ul className="list-disc list-inside text-gray-400 mb-4 space-y-2">
          <li>Users log in securely via Google OAuth and take a quiz-based emotional input.</li>
          <li>Text input is processed through an emotion model (9 emotions) and sentiment model (3 sentiments).</li>
          <li>Hybrid fusion: 60% weight to emotion + 40% to sentiment generates a mood vector.</li>
          <li>A 9×3 emotion-sentiment matrix classifies the mood into categories like comfort, reflective, or energetic.</li>
          <li>Google Gemini LLM dynamically generates music search queries.</li>
          <li>Spotify API fetches tailored playlists with title, album, and cover art.</li>
        </ul>

        <p className="text-gray-300 mb-4">
          This system reduces manual curation, boosts relevance, and enhances emotional context awareness—offering a smart, emotionally-aware listening experience.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="https://github.com/AkashHarh/songrecommend"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-indigo-300 underline hover:text-indigo-400 transition"
          >
            GitHub – Frontend Repo ↗
          </a>
          <a
            href="https://github.com/AkashHarh/songbackend"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-indigo-300 underline hover:text-indigo-400 transition"
          >
            GitHub – Backend Repo ↗
          </a>
        </div>
      </motion.div>
    </section>
  );
}
