"use client";

import { motion, Variants } from "framer-motion";
import { Globe, Mail } from "lucide-react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const links = [
  { name: "My Portfolio", url: "https://haricharan.dpdns.org", icon: <Globe size={20} /> },
  { name: "GitHub", url: "https://github.com/tab-try", icon: <FaGithub size={20} /> },
  { name: "LinkedIn", url: "https://linkedin.com", icon: <FaLinkedin size={20} /> },
  { name: "Twitter / X", url: "https://twitter.com", icon: <FaTwitter size={20} /> },
  { name: "Contact Me", url: "mailto:tab386339@gmail.com", icon: <Mail size={20} /> },
];

export default function Home() {
  // We added ': Variants' here to satisfy TypeScript
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  // We added ': Variants' here as well
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center p-4 bg-gray-950 overflow-hidden font-sans">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[128px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[128px] animate-pulse pointer-events-none delay-1000" />

      <motion.div 
        className="z-10 w-full max-w-md flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative"
        >
          <img
            src="https://github.com/tab-try.png"
            alt="Profile"
            className="w-28 h-28 rounded-full border-2 border-white/20 shadow-2xl mb-4 object-cover backdrop-blur-md"
          />
        </motion.div>

        <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Your Name</h1>
        <p className="text-gray-400 mb-8 font-medium">Software Engineer & Designer</p>

        <motion.div 
          className="w-full flex flex-col gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-white shadow-lg overflow-hidden transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="mr-4 text-gray-300 group-hover:text-white transition-colors z-10">
                {link.icon}
              </div>
              <span className="font-semibold text-lg z-10">{link.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
}
