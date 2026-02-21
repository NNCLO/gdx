'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import Particles from './components/particles';
import { 
  MessageCircle, 
  Crown 
} from 'lucide-react';

const navigation = [
  { name: "Fundamental", href: "/paket/fundamental" },
  { name: "Comprehensive", href: "/paket/comprehensive" },
  { name: "Struktural", href: "/paket/struktural" },
  { name: "Advanced", href: "/paket/advanced" },
];

const packages = [
  {
    title: "Fundamental",
    price: "Rp 500.000 - 900.000",
    desc: "Cocok untuk skripsi S1 metode dasar. Data cleaning, deskriptif, korelasi, regresi sederhana.",
    href: "/paket/fundamental",
    gradient: "from-emerald-500 to-teal-400",
    border: "border-emerald-500/30 hover:border-emerald-400",
    badge: "Paling Diminati"
  },
  {
    title: "Comprehensive",
    price: "Rp 700.000 - 1.200.000",
    desc: "Untuk penelitian kompleks. Include uji asumsi lengkap, regresi berganda, ANOVA, draft Bab III.",
    href: "/paket/comprehensive",
    gradient: "from-amber-500 to-orange-500",
    border: "border-amber-500/30 hover:border-amber-400",
    badge: "Best Value"
  },
  {
    title: "Struktural",
    price: "Rp 1.000.000 - 2.500.000",
    desc: "SEM lengkap (AMOS/SmartPLS). CFA, model fit, bootstrapping. Untuk tesis S2.",
    href: "/paket/struktural",
    gradient: "from-violet-500 to-cyan-400",
    border: "border-violet-500/30 hover:border-violet-400",
    badge: "High-End"
  },
  {
    title: "Advanced",
    price: "Rp 2.000.000 - 4.000.000",
    desc: "Mediasi, moderasi, multi-group + pendampingan publikasi jurnal Scopus/Sinta. Revisi unlimited.",
    href: "/paket/advanced",
    gradient: "from-[#d4af37] to-amber-300",
    border: "border-[#d4af37]/30 hover:border-[#d4af37]",
    badge: "👑 Puncak Karya"
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [particleQuantity, setParticleQuantity] = useState(120); // default

  // Responsive Particles Quantity (Client-side only)
  useEffect(() => {
    const updateQuantity = () => {
      setParticleQuantity(window.innerWidth < 768 ? 80 : 160);
    };

    updateQuantity(); // jalankan pertama kali
    window.addEventListener('resize', updateQuantity);
    
    return () => window.removeEventListener('resize', updateQuantity);
  }, []);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 80, scale: 0.95 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { delay: i * 0.08, duration: 0.9, ease: [0.23, 1, 0.32, 1] } 
    })
  };

  return (
    <main className="bg-[#050507] text-white font-sans overflow-hidden relative">
      {/* Particles Background – Luxury Fullscreen */}
      <Particles 
        className="absolute inset-0 -z-10 pointer-events-none" 
        quantity={particleQuantity} 
      />

      {/* NAVBAR – Gold Premium */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050507]/95 backdrop-blur-2xl border-b border-[#d4af37]/30">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-linear-to-br from-[#d4af37] to-amber-300 rounded-2xl flex items-center justify-center text-3xl shadow-2xl shadow-[#d4af37]/60 group-hover:rotate-6 transition-transform">👑</div>
            <div>
              <span className="text-xs tracking-[4px] text-[#d4af37] font-medium">GDX</span>
              <div className="font-serif text-2xl font-bold text-white">GOOLAHDATA</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-3">
            {navigation.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="px-7 py-3 rounded-3xl text-sm font-medium border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <a href="https://wa.me/6282342714048?text=Halo,%20saya%20mau%20konsultasi%20paket%20analisis%20data" target="_blank"
            className="hidden md:flex items-center gap-3 px-8 py-3 bg-linear-to-r from-[#d4af37] to-amber-300 text-black font-semibold rounded-3xl hover:scale-105 transition-all">
            <MessageCircle size={20} /> Konsultasi
          </a>

          {/* Mobile Hamburger */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-3 text-[#d4af37]">
            <Crown className={`w-7 h-7 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-[#d4af37]/20 bg-[#050507] px-6 py-8"
            >
              {navigation.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-5 px-6 mb-3 bg-[#111113] rounded-3xl border border-[#d4af37]/30 hover:border-[#d4af37]"
                >
                  {item.name}
                </Link>
              ))}
              <a href="https://wa.me/6282342714048?text=Halo,%20saya%20mau%20konsultasi%20paket%20analisis%20data" target="_blank"
                className="block mt-6 py-6 text-center bg-linear-to-r from-[#d4af37] to-amber-300 text-black font-semibold rounded-3xl">
                Chat WhatsApp
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO */}
      <section className="min-h-screen pt-32 pb-24 px-6 relative flex items-center">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 bg-linear-to-r from-[#d4af37]/10 to-amber-300/10 border border-[#d4af37]/40 px-8 py-3 rounded-full mb-10 text-sm font-medium text-[#d4af37]">
            Melayani analisis data untuk skripsi dan thesis menggunakan spss, amos, eviews, lisrel, smartPLS, dll.
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-[82px] font-serif font-bold leading-none tracking-tighter mb-8">
            Analisis Data yang<br />
            <span className="bg-linear-to-r from-[#d4af37] via-amber-300 to-[#d4af37] bg-clip-text text-transparent">Membuatmu Lulus Tepat Waktu</span>
          </h1>

          <p className="text-2xl text-zinc-400 max-w-2xl mx-auto mb-12">
            • Revisi unlimited • Konsultasi gratis • Sampai ACC •
          </p>
          <p className="text-2xl text-zinc-400 max-w-2xl mx-auto mb-12">
            "Dalam konteks biaya pendidikan tinggi dan risiko revisi berulang atau keterlambatan kelulusan, paket jasa analisis data berbasis Kompleksitas dan Standar Akademik bukanlah biaya tambahan, melainkan investasi intelektual yang rasional dan strategis."
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a 
              href="https://wa.me/6282342714048?text=Halo,%20saya%20mau%20konsultasi%20paket%20analisis%20data%20untuk%20skripsi/tesis" 
              target="_blank"
              className="group px-14 py-7 bg-linear-to-r from-[#d4af37] to-amber-300 text-black font-bold text-2xl rounded-3xl flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-2xl shadow-[#d4af37]/60"
            >
              <MessageCircle size={32} /> Chat WA Sekarang
            </a>
            <Link 
              href="#paket" 
              className="px-14 py-7 border-2 border-[#d4af37] hover:bg-white/5 font-semibold text-2xl rounded-3xl transition-all"
            >
              Lihat Paket →
            </Link>
          </div>
        </div>
      </section>

      {/* 4 PAKET – Gradient Per Paket */}
      <section id="paket" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#d4af37] tracking-widest text-sm font-medium">PILIH PAKET YANG TEPAT</p>
            <h2 className="text-5xl font-serif font-bold mt-3">4 Tingkat Kedalaman Analisis</h2>
            <p className="text-2xl text-zinc-400 max-w-2xl mx-auto mb-12">
            "Pendekatan berbasis urutan ini menjadi diferensiator fundamental dari jasa analisis data konvensional yang seringkali melompat langsung ke analisis utama tanpa fondasi metodologis yang memadai."
          </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: true }}
                className={`group bg-[#111113] border ${pkg.border} rounded-3xl p-9 hover:shadow-2xl transition-all duration-500 overflow-hidden relative`}
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${pkg.gradient}`} />
                
                <div className="inline-block mb-6 px-5 py-1.5 bg-linear-to-r from-white/5 to-white/10 text-xs font-medium rounded-full border border-white/10">
                  {pkg.badge}
                </div>

                <h3 className="text-3xl font-semibold mb-3">{pkg.title}</h3>
                <div className={`text-3xl font-serif mb-8 bg-linear-to-r ${pkg.gradient} bg-clip-text text-transparent`}>
                  {pkg.price}
                </div>

                <p className="text-zinc-400 leading-relaxed mb-10 min-h-22">{pkg.desc}</p>

                <Link 
                  href={pkg.href}
                  className="block w-full py-5 text-center border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-2xl font-medium transition-all group-hover:scale-[1.02]"
                >
                  Pilih {pkg.title} →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 px-6 text-center bg-linear-to-b from-transparent via-[#d4af37]/5 to-transparent">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-serif font-bold mb-6">Siap Memulai Bab 4 yang Sempurna?</h2>
          <p className="text-xl text-zinc-400 mb-12">Konsultasi gratis sekarang. Kami bantu pilih paket yang paling cocok.</p>
          
          <a 
            href="https://wa.me/6282342714048?text=Halo,%20saya%20mau%20konsultasi%20paket%20analisis%20data%20untuk%20skripsi/tesis" 
            target="_blank"
            className="inline-flex items-center gap-5 px-16 py-8 bg-linear-to-r from-[#d4af37] to-amber-300 text-black font-bold text-2xl rounded-3xl hover:scale-105 transition-all shadow-2xl shadow-[#d4af37]/60"
          >
            <MessageCircle size={36} /> Chat WhatsApp Sekarang
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#d4af37]/10 py-12 text-center text-zinc-500 text-sm">
        © 2026 <span className="text-[#d4af37] font-serif">GDX</span> — Helping Students Survive Chapter 4, Serious Analysis Only
      </footer>
    </main>
  );
}