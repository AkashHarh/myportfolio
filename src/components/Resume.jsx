import { useState } from "react";

export default function Resume() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="resume" className="text-center py-20 px-6 bg-[#0a0a0a] text-white">
      <h2 className="text-3xl font-bold mb-10">Resume</h2>

      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={() => setShowPreview(!showPreview)}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow transition"
        >
          {showPreview ? "Hide Preview" : "Preview Resume"}
        </button>

        <a
          href="/Akash_Harh_Resume.pdf"
          download
          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow transition"
        >
          Download CV
        </a>
      </div>

      {showPreview && (
        <div className="max-w-4xl mx-auto mt-10 border border-gray-700 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="/Akash_Harh_Resume.pdf"
            className="w-full h-[500px] bg-white"
            title="Akash Harh Resume Preview"
          />
        </div>
      )}
    </section>
  );
}
