// import { useState } from "react";

// export default function Navbar() {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <nav className={`fixed w-full flex justify-between p-4 ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow z-10`}>
//       <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Akash Harh</h1>

//       <div className="space-x-4 text-sm">
//         <a href="#about" className="hover:text-indigo-500">About</a>
//         <a href="#projects" className="hover:text-indigo-500">Projects</a>
//         <a href="#contact" className="hover:text-indigo-500">Contact</a>
//         <button
//           onClick={() => {
//             document.documentElement.classList.toggle("dark");
//             setDarkMode(!darkMode);
//           }}
//           className="ml-4 px-3 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700"
//         >
//           {darkMode ? "Light" : "Dark"}
//         </button>
//       </div>
//     </nav>
//   );
// }
// export default function Navbar() {
//   return (
//     <nav className="fixed w-full flex justify-between items-center px-6 py-4 bg-gray text-white z-50 shadow-lg backdrop-blur-sm">
//       <h1 className="text-xl font-bold tracking-wide">Akash Harh</h1>
      
//       <div className="space-x-4 text-sm font-medium hidden md:flex">
//         <a href="#hero" className="hover:text-indigo-400 transition">Home</a>
//         <a href="#about" className="hover:text-indigo-400 transition">About</a>
//         <a href="#skills" className="hover:text-indigo-400 transition">Skills</a>
//         <a href="#experience" className="hover:text-indigo-400 transition">Experience</a>
//         <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
//         <a href="#certifications" className="hover:text-indigo-400 transition">Certifications</a>
//         <a href="#awards" className="hover:text-indigo-400 transition">Awards</a>
//         <a href="#publications" className="hover:text-indigo-400 transition">Publications</a>
//         <a href="#resume" className="hover:text-indigo-400 transition">Resume</a>
//         <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
//       </div>
//     </nav>
//   );
// }



import { useState } from "react";
import Scrollspy from "react-scrollspy";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "awards", label: "Awards" },
    { id: "publications", label: "Publications" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-black text-white shadow-lg z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold tracking-wide">Akash Harh</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 text-sm font-medium">
          <Scrollspy
            items={navItems.map((item) => item.id)}
            currentClassName="text-indigo-400"
            className="flex space-x-4"
            offset={-100}
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:text-indigo-400 transition">
                  {item.label}
                </a>
              </li>
            ))}
          </Scrollspy>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 text-sm font-medium bg-[#0a0a0a] text-white">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block hover:text-indigo-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
