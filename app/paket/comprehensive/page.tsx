'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { 
  CheckCircle, 
  ChevronDown, 
  MessageCircle, 
  Zap, 
  Package, 
  Settings, 
  BarChart2, 
  TrendingUp, 
  Hash, 
  FileText, 
  Award 
} from 'lucide-react';

export default function PaketComprehensive() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Berapa variabel maksimal yang bisa dianalisis?", a: "Paket ini cocok untuk 5-10 variabel. Kalau lebih dari itu, kita rekomendasikan upgrade ke Paket Struktural (SEM)." },
    { q: "Apa bedanya ANOVA sama t-test?", a: "t-test buat bandingin 2 kelompok doang. ANOVA buat 3 kelompok atau lebih. Kalau ANOVA hasilnya signifikan, perlu post-hoc buat tau kelompok mana yang beda." },
    { q: "Kenapa uji asumsi penting?", a: "Uji asumsi (normalitas, multikolinearitas, dll) itu syarat buat pakai regresi linear. Kalau asumsi nggak terpenuhi, hasil analisis bisa bias atau nggak valid." },
    { q: "Bisa bantu jelasin hasil ke dosen?", a: "Bisa! Kami provide narasi interpretasi yang detail. Kalau dosen ada pertanyaan teknis, bisa konsultasi follow-up via chat." },
    { q: "Apa bedanya sama Paket Fundamental?", a: "Comprehensive include uji asumsi klasik lengkap, regresi berganda (banyak variabel), ANOVA, dan bantuan draft Bab III. Fundamental cuma dasar-dasar aja." },
  ];

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  // === VARIANTS BARU (berbeda dari Fundamental) ===
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.92 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } }
  };

  const timelineVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
  };

  const faqVariants: Variants = {
    collapsed: { height: 0, opacity: 0 },
    open: { height: "auto", opacity: 1 }
  };

  // JSON-LD SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Paket Comprehensive Analisis Data SPSS",
        "serviceType": "Jasa Olah Data Statistik Skripsi Lanjutan",
        "provider": { "@type": "Organization", "name": "GoolahData" },
        "areaServed": "Indonesia",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "itemListElement": [{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paket Comprehensive" }, "price": "700000", "priceCurrency": "IDR" }]
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

      {/* Navigation (sama untuk konsistensi brand) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f1a]/90 backdrop-blur-lg border-b border-[#d4af37]/20">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
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

      {/* HERO – Dramatis & berbeda */}
      <section className="min-h-screen pt-28 pb-20 px-6 relative flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(245,158,11,0.15),transparent_60%)]" />
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-3 bg-linear-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-400 px-6 py-3 rounded-3xl text-sm font-medium backdrop-blur">
              🔥 Paket Best Value
            </div>

            <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl font-serif font-bold leading-none tracking-tight">
              Paket <span className="text-[#d4af37]">Comprehensive</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-[#a0a0b0] max-w-lg">
              Analisis lengkap untuk penelitian S1 yang lebih kompleks. Include uji asumsi klasik, regresi berganda, dan ANOVA.
            </motion.p>

            <motion.div variants={itemVariants} className="text-5xl font-serif font-bold text-[#d4af37]">
              Rp 700.000 - 1.200.000 <span className="text-base font-normal text-[#a0a0b0]">/ project</span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a href="https://wa.me/6282342714048?text=Halo,%20saya%20tertarik%20dengan%20Paket%20Comprehensive.%20Bisa%20konsultasi?" target="_blank"
                className="group px-9 py-5 bg-linear-to-r from-amber-400 to-orange-500 text-black font-semibold rounded-3xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl hover:shadow-amber-500/30">
                <MessageCircle size={22} className="group-hover:rotate-12 transition-transform" /> Konsultasi Gratis
              </a>
              <a href="#" target="_blank"
                className="group px-9 py-5 bg-linear-to-r from-[#ff6b35] to-[#ff8c5a] font-semibold rounded-3xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl">
                <Zap size={22} className="group-hover:rotate-12 transition-transform" /> Order di Fastwork
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <Image src="/imgpktc.jpg" alt="Paket Comprehensive - Analisis Data Skripsi SPSS Lanjutan" width={620} height={480} className="rounded-3xl shadow-2xl" priority />
            <div className="absolute -inset-6 border border-amber-500/30 rounded-4xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* FEATURES – Premium circular icon */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold tracking-widest mb-3">APA YANG KAMU DAPATKAN</p>
          <h2 className="text-4xl font-serif font-bold mb-12">Detail Layanan Paket Comprehensive</h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: Package, title: "Semua Fitur Fundamental", desc: "Dapetin semua yang ada di Paket Fundamental: data cleaning, statistik deskriptif, uji validitas & reliabilitas." },
              { icon: Settings, title: "Uji Asumsi Klasik Lengkap", desc: "Normalitas, homogenitas, multikolinearitas (VIF), heteroskedastisitas, dan autokorelasi. Penting buat validitas hasil." },
              { icon: BarChart2, title: "Regresi Linear Berganda", desc: "Analisis pengaruh beberapa variabel independen terhadap 1 variabel dependen. Include uji F, uji t, dan R² adjusted." },
              { icon: TrendingUp, title: "ANOVA / ANCOVA", desc: "Uji beda untuk 3+ kelompok. Include uji post-hoc (Tukey, Bonferroni) buat tau kelompok mana yang beda." },
              { icon: Hash, title: "Analisis Faktor Eksploratori (EFA)", desc: "Reduksi dimensi data dan identifikasi faktor-faktor laten. Cocok buat validasi instrumen penelitian." },
              { icon: FileText, title: "Draft Bab III Metodologi", desc: "Kami bantu susun bagian metodologi: variabel, sampel, teknik analisis, dan pengujian instrumen." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group bg-[#1a1a2e]/80 border border-amber-500/20 rounded-3xl p-9 hover:border-amber-400/60 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500"
              >
                <div className="w-20 h-20 bg-linear-to-brrom-amber-500/10 to-orange-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <item.icon size={42} className="text-amber-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-[#a0a0b0] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PAKET INI DITUJUKAN UNTUK – 2x2 grid dengan glow */}
      <section className="py-24 px-6 bg-linear-to-b from-transparent via-amber-500/5 to-transparent">
        <div className="max-w-5xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold tracking-widest mb-3">Cocok Buat Kamu Yang...</p>
          <h2 className="text-4xl font-serif font-bold mb-12">Paket Ini Ditujukan Untuk</h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              { icon: BarChart2, title: "Skripsi dengan variabel kompleks", desc: "Penelitian yang punya 5-7 variabel atau lebih dengan hubungan yang kompleks" },
              { icon: Settings, title: "Butuh uji asumsi lengkap", desc: "Dosen pembimbing minta uji normalitas, multikolinearitas, dll dilampirin" },
              { icon: FileText, title: "Perlu bantuan nulis Bab III", desc: "Mau metodologi yang rapi dan sesuai standar akademik" },
              { icon: CheckCircle, title: "Butuh revisi fleksibel", desc: "Paket ini include revisi gratis sampai ACC sesuai dari masukan dosen" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-[#1a1a2e]/70 border-t-4 border-amber-400 rounded-3xl p-8 hover:bg-[#1a1a2e]/90 transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-amber-500/20 transition-colors">
                    <item.icon size={28} className="text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                    <p className="text-[#a0a0b0]">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ALUR PENGERJAAN – VERTICAL TIMELINE ELEGANT */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold tracking-widest mb-3">Alur Pengerjaan</p>
          <h2 className="text-4xl font-serif font-bold mb-16">Prosesnya Gimana?</h2>

          <div className="relative pl-12 space-y-16">
            {/* Line connector */}
            <div className="absolute left-6 top-8 bottom-8 w-px bg-linear-to-b from-amber-500/30 to-transparent" />

            {[
              { icon: MessageCircle, title: "Konsultasi & Assessment", desc: "Jelaskan variabel penelitianmu dan kirim data. Kami assessment dulu buat tentuin metode yang tepat (jika perlu)." },
              { icon: BarChart2, title: "Analisis Data (3-5 atau 7 hari untuk kendala diluar dugaan)", desc: "Proses lengkap: cleaning → uji asumsi → analisis utama → interpretasi. Pakai SPSS berlisensi atau sesuai kebutuhan software analisis." },
              { icon: CheckCircle, title: "Review & Revisi", desc: "Kamu dapat: output SPSS, tabel hasil, narasi interpretasi, dan draft Bab III/IV. Revisi gratis hingga ACC kecuali pemesanan di Faswork." },
              { icon: Award, title: "Final Delivery", desc: "Semua file siap pakai untuk Bab IV dan V dengan pembayaran 80%. Pelunasan sisanya setelah kamu puas dengan hasilnya atau setelah revisi berikutnya" },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={timelineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-3 w-12 h-12 bg-[#0f0f1a] border-4 border-amber-400 rounded-full flex items-center justify-center">
                  <span className="text-amber-400 font-bold text-xl">{i + 1}</span>
                </div>
                <div className="ml-16 bg-[#1a1a2e]/70 border border-amber-500/20 rounded-3xl p-8 hover:border-amber-400/60 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <step.icon size={32} className="text-amber-400" />
                    <h3 className="font-semibold text-2xl">{step.title}</h3>
                  </div>
                  <p className="text-[#a0a0b0] leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ – Left accent bar */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold tracking-widest mb-3">PERTANYAAN UMUM</p>
          <h2 className="text-4xl font-serif font-bold mb-12">FAQ Paket Comprehensive</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#1a1a2e]/70 border border-amber-500/20 rounded-3xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-amber-500/5 transition-colors group"
                >
                  <span className="font-medium text-lg pr-8">{faq.q}</span>
                  <motion.div animate={{ rotate: openFaq === index ? 180 : 0 }} transition={{ duration: 0.4 }}>
                    <ChevronDown size={26} className={openFaq === index ? "text-amber-400" : "text-[#a0a0b0]"} />
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
                      <div className="px-8 pb-9 border-l-4 border-amber-400 ml-8">
                        <p className="text-[#a0a0b0] leading-relaxed pt-2">{faq.a}</p>
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
      <section className="py-24 px-6 text-center bg-linear-to-b from-transparent via-amber-500/5 to-transparent">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-serif font-bold mb-6">Yuk, Lanjut ke Analisis Data!</h2>
          <p className="text-xl text-[#a0a0b0] mb-10">Konsultasi gratis dulu biar kita bisa rekomendasikan metode yang paling cocok buat penelitianmu.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/6282342714048?text=Halo,%20saya%20tertarik%20dengan%20Paket%20Comprehensive.%20Bisa%20konsultasi?" target="_blank"
              className="px-12 py-6 bg-linear-to-r from-amber-400 to-orange-500 text-black font-semibold rounded-3xl text-lg hover:scale-105 transition-all flex items-center gap-3">
              💬 Chat WhatsApp
            </a>
            <a href="#" target="_blank"
              className="px-12 py-6 bg-linear-to-r from-[#ff6b35] to-[#ff8c5a] font-semibold rounded-3xl text-lg hover:scale-105 transition-all flex items-center gap-3">
              ⚡ Order di Fastwork
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#d4af37]/10 py-12 text-center text-[#a0a0b0] text-sm">
        © 2026 <span className="text-[#d4af37] font-serif">GDX</span> — Helping Students Survive Chapter 4, Serious Analysis Only
      </footer>
    </main>
  );
}