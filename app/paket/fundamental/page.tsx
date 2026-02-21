'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { 
  Check, 
  ChevronDown, 
  MessageCircle, 
  Zap, 
  Sparkles, 
  BarChart3, 
  Award, 
  TrendingUp, 
  LineChart, 
  Users 
} from 'lucide-react';

export default function PaketFundamental() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Berapa lama waktu pengerjaannya?", a: "Estimasi 3-5 hari kerja tergantung kompleksitas data dan antrian. Kalau butuh cepat, bisa request express (ada tambahan biaya)." },
    { q: "Software apa yang dipakai?", a: "Kami pakai SPSS versi terbaru (berlisensi resmi). Output bisa kamu buka di SPSS versi apapun." },
    { q: "Bisa revisi kalau ada masukan dosen?", a: "Bisa! Paket ini include revisi gratis berdasarkan masukan dosen pembimbing. Revisi tanpa biaya tambahan" },
    { q: "Bagaimana sistem pembayarannya?", a: "Tidak memerlukan DP di awal, kecuali 50% untuk tambahan pengerjaan lain-lain maka pelunasan 50% setelah hasil diterima. Bisa transfer bank atau e-wallet (DANA, OVO, GoPay)." },
    { q: "Apa bedanya sama paket Comprehensive?", a: "Paket Fundamental untuk analisis dasar (deskriptif, korelasi, regresi sederhana). Paket Comprehensive sudah include regresi berganda, ANOVA, dan uji asumsi klasik lengkap." },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0 
    }
  };

  const faqVariants: Variants = {
    collapsed: { height: 0, opacity: 0 },
    open: { 
      height: "auto", 
      opacity: 1 
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Paket Fundamental Analisis Data SPSS",
        "serviceType": "Jasa Olah Data Statistik untuk Skripsi",
        "provider": { "@type": "Organization", "name": "GoolahData" },
        "areaServed": "Indonesia",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "itemListElement": [{
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Paket Fundamental" },
            "price": "500000",
            "priceCurrency": "IDR"
          }]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a }
        }))
      }
    ]
  };

  return (
    <main className="bg-[#0f0f1a] text-white font-sans overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f1a]/90 backdrop-blur-lg border-b border-[#d4af37]/20">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/LOGO.png" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#d4af37]/20 rounded-2xl flex items-center justify-center text-2xl">🎓</div>
            <div>
              <span className="text-xs text-[#d4af37] uppercase tracking-widest">GDX</span>
              <div className="font-serif font-bold text-lg">GOOLAHDATA</div>
            </div>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-[#a0a0b0] hover:text-[#d4af37] transition-colors text-sm">
            ← Kembali ke Semua Paket
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen pt-28 pb-16 px-6 relative flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(76,175,80,0.1),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 px-5 py-2 rounded-full text-sm font-medium">
              ✨ Paket Paling Diminati
            </div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-serif font-bold leading-none">
              Paket <span className="text-[#d4af37]">Fundamental</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-[#a0a0b0] max-w-lg">
              Buat kamu yang baru mulai penelitian dan butuh analisis data yang rapi tanpa ribet. Cocok buat skripsi S1 dengan metode dasar.
            </motion.p>

            <motion.div variants={itemVariants} className="text-5xl font-serif font-bold text-[#d4af37]">
              Rp 500.000 - 900.000 <span className="text-base font-normal text-[#a0a0b0]">/ project</span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a href="https://wa.me/6282342714048?text=Halo,%20saya%20tertarik%20dengan%20Paket%20Fundamental.%20Bisa%20konsultasi?" target="_blank"
                className="group px-8 py-4 bg-linear-to-r from-[#d4af37] to-[#b8941f] text-black font-semibold rounded-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all duration-300">
                <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" /> Konsultasi Gratis
              </a>
              <a href="#" target="_blank"
                className="group px-8 py-4 bg-linear-to-r from-[#ff6b35] to-[#ff8c5a] font-semibold rounded-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all duration-300">
                <Zap size={20} className="group-hover:rotate-12 transition-transform" /> Order di Fastwork
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <Image src="/imgpktf.jpg" alt="Paket Fundamental - Analisis Data Skripsi SPSS" width={620} height={460} className="rounded-3xl shadow-2xl" priority />
            <div className="absolute -inset-5 border-2 border-[#d4af37]/30 rounded-[28px] -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#d4af37] text-sm font-semibold tracking-widest mb-3">APA YANG KAMU DAPATKAN</p>
          <h2 className="text-4xl font-serif font-bold mb-12">Detail Layanan Paket Fundamental</h2>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              { icon: Sparkles, title: "Data Cleaning", desc: "Pembersihan data dari missing values, outliers, dan inkonsistensi. Data kamu jadi siap olah tanpa error." },
              { icon: BarChart3, title: "Statistik Deskriptif", desc: "Mean, median, modus, standar deviasi, frekuensi, dan visualisasi grafik. Lengkap dengan interpretasi." },
              { icon: Award, title: "Uji Validitas & Reliabilitas", desc: "Uji instrumen pakai Cronbach's Alpha dan korelasi item-total. Pastikan kuesionermu valid." },
              { icon: TrendingUp, title: "Korelasi Bivariat", desc: "Analisis hubungan 2 variabel pakai Pearson atau Spearman. Dengan interpretasi kekuatan hubungan." },
              { icon: LineChart, title: "Regresi Linear Sederhana", desc: "Prediksi variabel dependen dari 1 variabel independen. Lengkap dengan koefisien determinasi (R²)." },
              { icon: Users, title: "Uji Beda Dua Sampel", desc: "Independent t-test atau Mann-Whitney U sesuai kondisi data. Buat bandingin 2 kelompok." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-[#1a1a2e]/70 border border-[#d4af37]/20 rounded-3xl p-8 hover:border-[#d4af37]/50 hover:shadow-xl hover:shadow-[#d4af37]/10 transition-all duration-300 group"
              >
                <div className="text-4xl mb-6 text-[#d4af37] group-hover:scale-110 transition-transform">
                  <item.icon size={48} />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-[#a0a0b0] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 px-6 bg-linear-to-b from-transparent via-emerald-500/5 to-transparent">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#d4af37] text-sm font-semibold tracking-widest mb-3">COCOK BUAT KAMU YANG</p>
          <h2 className="text-4xl font-serif font-bold mb-12">Paket Ini Ditujukan Untuk</h2>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-4"
          >
            {[
              { title: "Mahasiswa S1 semester akhir", desc: "Yang lagi ngerjain skripsi dengan analisis data sederhana (2-5 variabel)" },
              { title: "Penelitian eksploratif", desc: "Butuh statistik deskriptif dan korelasi dasar tanpa model kompleks" },
              { title: "Budget terbatas", desc: "Mau hasil yang rapi tapi dengan biaya yang masuk akal" },
              { title: "Deadline 1-2 minggu", desc: "Butuh pengerjaan cepat untuk bab analisis data" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="flex gap-5 bg-[#1a1a2e]/60 border-l-4 border-emerald-500 p-7 rounded-3xl hover:bg-[#1a1a2e]/80 transition-colors"
              >
                <div className="w-8 h-8 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center shrink-0">
                  <Check size={16} />
                </div>
                <div>
                  <strong className="block text-lg mb-1">{item.title}</strong>
                  <span className="text-[#a0a0b0]">{item.desc}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#d4af37] text-sm font-semibold tracking-widest mb-3">PERTANYAAN UMUM</p>
          <h2 className="text-4xl font-serif font-bold mb-12">FAQ Paket Fundamental</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#1a1a2e]/60 border border-[#d4af37]/20 rounded-3xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-[#d4af37]/5 transition-colors cursor-pointer group"
                >
                  <span className="font-medium text-lg pr-4">{faq.q}</span>
                  <motion.div animate={{ rotate: openFaq === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown size={24} className={openFaq === index ? 'text-[#d4af37]' : 'text-[#a0a0b0]'} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      variants={faqVariants}
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8">
                        <p className="text-[#a0a0b0] leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-linear-to-b from-transparent via-[#d4af37]/5 to-transparent">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-serif font-bold mb-6">Siap Mulai Analisis Data?</h2>
          <p className="text-xl text-[#a0a0b0] mb-10">Konsultasi gratis dulu yuk! Jelaskan kebutuhan penelitianmu dan kami bantu pilih paket yang tepat.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/6282342714048?text=Halo,%20saya%20tertarik%20dengan%20Paket%20Fundamental.%20Bisa%20konsultasi?" target="_blank"
              className="px-10 py-5 bg-linear-to-r from-[#d4af37] to-[#b8941f] text-black font-semibold rounded-2xl text-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
              <MessageCircle size={20} /> Chat WhatsApp
            </a>
            <a href="#" target="_blank"
              className="px-10 py-5 bg-linear-to-r from-[#ff6b35] to-[#ff8c5a] font-semibold rounded-2xl text-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
              <Zap size={20} /> Order di Fastwork
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#d4af37]/10 py-12 text-center text-[#a0a0b0] text-sm">
        © 2026 <span className="text-[#d4af37] font-serif">GDX</span> — Helping Students Survive Chapter 4
      </footer>
    </main>
  );
}