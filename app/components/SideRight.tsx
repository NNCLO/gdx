"use client";

export default function SideRight() {
  return (
    <div className="fixed z-50 flex flex-col items-center right-4 bottom-4 lg:right-8 lg:bottom-0">
      {/* Email */}
      <a
        href="mailto:emailkamu@gmail.com"
        className="text-gray-400 hover:text-[#64ffda] tracking-widest text-xs lg:text-sm transition duration-300 [writing-mode:vertical-rl]"
      >
        go.olahdata@gmail.com
      </a>

      {/* Garis */}
      <div className="w-px h-16 lg:h-24 bg-gray-600 mt-2 lg:mt-6"></div>
    </div>
  );
}