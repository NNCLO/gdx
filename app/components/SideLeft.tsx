"use client";

import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

export default function SideLeft() {
  return (
    <div className="fixed z-50 flex flex-col items-center gap-4 left-4 bottom-4 lg:left-8 lg:bottom-0">
      
      {/* Social Icons */}
      <a
        href="https://github.com/username"
        target="_blank"
        rel="noreferrer"
        className="text-gray-400 hover:text-[#64ffda] transition duration-300 hover:-translate-y-1"
      >
        <Github size={18} className="lg:scale-100 scale-90" />
      </a>

      <a
        href="https://linkedin.com/in/username"
        target="_blank"
        rel="noreferrer"
        className="text-gray-400 hover:text-[#64ffda] transition duration-300 hover:-translate-y-1"
      >
        <Linkedin size={18} className="lg:scale-100 scale-90" />
      </a>

      <a
        href="https://instagram.com/username"
        target="_blank"
        rel="noreferrer"
        className="text-gray-400 hover:text-[#64ffda] transition duration-300 hover:-translate-y-1"
      >
        <Instagram size={18} className="lg:scale-100 scale-90" />
      </a>

      <a
        href="https://twitter.com/username"
        target="_blank"
        rel="noreferrer"
        className="text-gray-400 hover:text-[#64ffda] transition duration-300 hover:-translate-y-1"
      >
        <Twitter size={18} className="lg:scale-100 scale-90" />
      </a>

      {/* Garis */}
      <div className="w-px h-16 bg-gray-600 mt-2 lg:h-24"></div>
    </div>
  );
}