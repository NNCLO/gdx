'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { 
  MessageCircle, 
  Zap, 
  Crown, 
  Diamond, 
  Trophy, 
  Users, 
  Target, 
  Award, 
  ChevronDown 
} from 'lucide-react';

export default function PaketAdvanced() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Apa itu mediasi dan moderasi?", a: "Mediasi = variabel perantara yang menjelaskan 'kenapa' X mempengaruhi Y. Moderasi = variabel yang memperkuat/melemahkan hubungan X-Y ('kapan' hubungan itu terjadi). Moderated mediation = kombinasi keduanya." },
    { q: "Multi-group analysis buat apa?", a: "Buat bandingin apakah model yang sama berlaku untuk kelompok berbeda. Contoh: apakah hubungan X→Y sama antara laki-laki dan perempuan? Atau apakah model berbeda antar perusahaan?" },
    { q: "Berapa lama sampai publikasi jurnal?", a: "Timeline publikasi bervariasi: 3-6 bulan untuk jurnal Sinta, 6-12 bulan untuk Scopus Q3-Q4, 12-24 bulan untuk Q1-Q2. Kami bantu dari submit sampai diterima." },
    { q: "Apakah include APC?", a: "Biaya publikasi (APC) ditanggung klien. Kami bantu cari jurnal sesuai budget: gratis (diamond OA) sampai berbayar." },
    { q: "Revisi unlimited itu beneran?", a: "Ya! Selama masih dalam scope analisis data yang disepakati, revisi tidak dibatasi. Komitmen sampai kamu lulus." },
  ];

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.3 } }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 80, scale: 0.92 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: [0.23, 1, 0.32, 1] } }
  };

  const timelineVariants: Variants = {
    hidden: { opacity: 0, x: -80 },
    visible: (i: number) => ({ opacity: 1, x: 0, transition: { delay: i * 0.2, duration: 0.8 } })
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Paket Advanced SEM Mediasi Moderasi Publikasi Jurnal",
        "serviceType": "Jasa Analisis SEM Tingkat Lanjut + Pendampingan Publikasi",
        "provider": { "@type": "Organization", "name": "GoolahData" },
        "areaServed": "Indonesia",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "itemListElement": [{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paket Advanced" }, "price": "2000000", "priceCurrency": "IDR" }]
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
    <main className="bg-[#050507] text-white font-sans overflow-hidden relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Navigation – Ultra Premium */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050507]/95 backdrop-blur-2xl border-b border-[#d4af37]/30">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-linear-to-br from-[#d4af37] to-amber-300 rounded-2xl flex items-center justify-center text-3xl shadow-2xl shadow-[#d4af37]/50">👑</div>
            <div>
              <span className="text-xs text-[#d4af37] uppercase tracking-[4px] font-medium">GDX</span>
              <div className="font-serif font-bold text-2xl">GOOLAHDATA</div>
            </div>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-[#d4af37] transition-colors text-sm font-medium">
            ← Kembali ke Semua Paket
          </Link>
        </div>
      </nav>

      {/* HERO – Puncak Kemewahan */}
      <section className="min-h-screen pt-32 pb-20 px-6 relative flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#d4af37_0.8px,transparent_1.5px)] bg-size-[60px_60px] opacity-10" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#050507]/80 to-[#050507]" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-3 bg-linear-to-r from-[#d4af37]/10 to-amber-300/10 border border-[#d4af37]/50 text-[#d4af37] px-8 py-4 rounded-3xl text-sm font-medium backdrop-blur-xl shadow-xl">
              👑 Paket Premium
            </div>

            <motion.h1 variants={cardVariants} className="text-6xl md:text-7xl font-serif font-bold leading-none tracking-tighter">
              Paket <span className="bg-linear-to-rrom-[#d4af37] via-amber-300 to-[#d4af37] bg-clip-text text-transparent">Advanced</span>
            </motion.h1>

            <motion.p variants={cardVariants} className="text-xl text-zinc-400 max-w-lg">
              SEM kompleks dengan mediasi, moderasi, dan multi-group analysis. 
              Plus pendampingan sampai publikasi jurnal.
            </motion.p>

            <motion.div variants={cardVariants} className="text-5xl font-serif font-bold text-[#d4af37]">
              Rp 2.000.000 - 4.000.000 <span className="text-base font-normal text-zinc-400">/ project</span>
            </motion.div>

            <motion.div variants={cardVariants} className="flex flex-wrap gap-4">
              <a href="https://wa.me/6282342714048?text=Halo,%20saya%20tertarik%20dengan%20Paket%20Advanced%20(SEM%20Kompleks).%20Bisa%20konsultasi?" target="_blank"
                className="group relative px-10 py-5 bg-linear-to-r from-[#d4af37] to-amber-300 text-black font-semibold rounded-3xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-[#d4af37]/60 overflow-hidden">
                <MessageCircle size={24} className="group-hover:rotate-12 transition" /> Konsultasi Gratis
                <div className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full animate-pulse">DISKON</div>
              </a>
              <a href="#" target="_blank"
                className="group px-10 py-5 bg-linear-to-r from-zinc-800 to-black border border-[#d4af37]/70 font-semibold rounded-3xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-2xl">
                <Zap size={24} className="group-hover:rotate-12 transition" /> Order di Fastwork
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <Image src="/imgpkta.jpg" alt="Paket Advanced - SEM Mediasi Moderasi Publikasi Jurnal" width={680} height={520} className="rounded-3xl shadow-2xl" priority />
            <div className="absolute -inset-8 border-4 border-[#d4af37]/40 rounded-[40px] -z-10" />
          </motion.div>
        </div>
      </section>

      {/* FEATURES – Gold Frame Luxury Cards */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#d4af37] text-sm font-semibold tracking-widest mb-4">APA YANG KAMU DAPATKAN</p>
          <h2 className="text-4xl font-serif font-bold mb-16">Detail Layanan Paket Advanced</h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              { icon: Target, title: "Analisis Mediasi Lengkap", desc: "Uji efek tidak langsung (indirect effect) dengan Sobel test atau bootstrapping. Hitung efek mediasi parsial maupun full mediasi." },
              { icon: Diamond, title: "Analisis Moderasi", desc: "Uji efek moderasi dengan interaksi variabel. Conditional effect analysis dengan spotlight analysis di nilai moderator tertentu." },
              { icon: Crown, title: "Moderated Mediation", desc: "Kombinasi mediasi dan moderasi dalam satu model (conditional indirect effect). Index of Moderated Mediation (IMM) untuk pengujian." },
              { icon: Users, title: "Multi-Group Analysis", desc: "Perbandingan model antar kelompok (gender, organisasi, waktu). Invariance testing: configural, metric, scalar." },
              { icon: Trophy, title: "Higher-Order Constructs", desc: "Second-order factor analysis dan hierarchical component model. Konstruk laten yang diukur oleh konstruk laten lainnya." },
              { icon: Award, title: "Pendampingan Publikasi", desc: "Konversi tesis ke format artikel jurnal. Bantu respons reviewer dan revisi sampai artikel diterima." },
              { icon: Target, title: "Pendampingan Sampai Lulus", desc: "Revisi unlimited berdasarkan masukan dosen dan penguji. Konsultasi sampai sidang tesis selesai." },
              { icon: Diamond, title: "Format Jurnal Siap Submit", desc: "Output disusun sesuai standar jurnal internasional (APA style). Tabel dan diagram sesuai guideline Scopus/Sinta." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ scale: 1.03, boxShadow: "0 0 80px -20px #d4af37" }}
                className="group bg-[#111113] border border-[#d4af37]/30 rounded-3xl p-10 hover:border-[#d4af37] transition-all duration-700 relative overflow-hidden"
              >
                <div className="absolute top-8 right-8 w-14 h-14 bg-linear-to-br from-[#d4af37]/10 to-amber-300/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon size={36} className="text-[#d4af37]" />
                </div>
                <h3 className="text-2xl font-semibold mb-6 pr-12">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DITUJUKAN UNTUK */}
      <section className="py-24 px-6 bg-linear-to-b from-transparent via-[#d4af37]/5 to-transparent">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#d4af37] text-sm font-semibold tracking-widest mb-4">Cocok Buat Kamu Yang...</p>
          <h2 className="text-4xl font-serif font-bold mb-16">Paket Ini Ditujukan Untuk</h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              { icon: Crown, title: "Penelitian S2 dengan model kompleks", desc: "Butuh analisis mediasi, moderasi, atau multi-group dalam satu model SEM" },
              { icon: Trophy, title: "Target publikasi jurnal", desc: "Mau submit ke jurnal Scopus/Sinta dan butuh output sesuai standar internasional" },
              { icon: Diamond, title: "Butuh pendampingan intensif", desc: "Mau revisi unlimited dan konsultasi sampai benar-benar lulus sidang" },
              { icon: Award, title: "Model dengan banyak variabel", desc: "Penelitian dengan 10+ variabel, multiple mediators/moderators, atau second-order constructs" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="bg-[#111113] border border-[#d4af37]/30 rounded-3xl p-10 hover:border-[#d4af37] transition-all group"
              >
                <item.icon size={56} className="text-[#d4af37] mb-8" />
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ALUR PENGERJAAN – Luxury Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#d4af37] text-sm font-semibold tracking-widest mb-4">Alur Pengerjaan</p>
          <h2 className="text-4xl font-serif font-bold mb-16">Prosesnya Gimana?</h2>

          <div className="relative pl-12 space-y-20">
            <div className="absolute left-6 top-6 bottom-6 w-px bg-linear-to-b from-[#d4af37] to-transparent" />
            {[
              { icon: Target, title: "Konsultasi Model Kompleks", desc: "Bahas kerangka konseptual lengkap dengan mediasi/moderasi. Tentuin variabel, indikator, dan hipotesis. Kami bantu perbaiki model." },
              { icon: Crown, title: "Analisis CFA & Model Struktural (5-7 Hari)", desc: "Validasi pengukuran, estimasi path, uji mediasi/moderasi/multi-group. Semua dengan bootstrapping untuk hasil robust." },
              { icon: Diamond, title: "Review & Revisi Unlimited", desc: "Kamu dapat: file SEM lengkap, diagram model, tabel hasil, narasi Bab IV-V. Revisi berdasarkan masukan dosen tanpa batas." },
              { icon: Trophy, title: "Pendampingan Sidang & Publikasi", desc: "Konsultasi persiapan sidang. Setelah lulus, bantu konversi ke artikel jurnal dan pendampingan submit sampai diterima." },
            ].map((step, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={timelineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-3 w-14 h-14 bg-[#050507] border-4 border-[#d4af37] rounded-full flex items-center justify-center text-[#d4af37] font-bold text-2xl">
                  {i + 1}
                </div>
                <div className="ml-20 bg-[#111113] border border-[#d4af37]/30 rounded-3xl p-10 hover:border-[#d4af37] transition-all">
                  <div className="flex items-center gap-5 mb-6">
                    <step.icon size={42} className="text-[#d4af37]" />
                    <h3 className="font-semibold text-2xl">{step.title}</h3>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 px-6 bg-[#111113]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#d4af37] text-sm font-semibold tracking-widest mb-6">Deliverable:</p>
          <div className="bg-linear-to-br from-[#d4af37]/10 to-transparent border border-[#d4af37]/30 rounded-3xl p-14 italic text-xl leading-relaxed">
            • Laporan akademik lengkap sesuai standar jurnal
            • Presentasi hasil untuk seminar/sidang
            • Pendampingan revisi hingga kelulusan
            • Konversi ke artikel jurnal ilmiah 
            <div className="mt-10 text-base not-italic font-medium text-[#d4af37]">— Revisi dan Pendampingan —</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#d4af37] text-sm font-semibold tracking-widest mb-4">PERTANYAAN UMUM</p>
          <h2 className="text-4xl font-serif font-bold mb-16">FAQ Paket Advanced</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#111113] border border-[#d4af37]/30 rounded-3xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-9 py-7 text-left flex justify-between items-center hover:bg-[#d4af37]/5 transition-all group"
                >
                  <span className="font-medium text-lg pr-6">{faq.q}</span>
                  <motion.div animate={{ rotate: openFaq === index ? 180 : 0 }} transition={{ duration: 0.4 }}>
                    <ChevronDown size={28} className={openFaq === index ? "text-[#d4af37]" : "text-zinc-400"} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden border-t border-[#d4af37]/10"
                    >
                      <div className="px-9 py-9 text-zinc-400 leading-relaxed">
                        {faq.a}
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
      <section className="py-24 px-6 text-center bg-linear-to-brom-transparent via-[#d4af37]/5 to-transparent">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-serif font-bold mb-6">Siap Bikin Model SEM-mu?</h2>
          <p className="text-xl text-zinc-400 mb-12">Konsultasi gratis & dapat rekomendasi software, model, dan strategi tesis S2.</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <a href="https://wa.me/6282342714048?text=Halo,%20saya%20tertarik%20dengan%20Paket%20Advanced%20(SEM%20Kompleks).%20Bisa%20konsultasi?" target="_blank"
              className="px-16 py-7 bg-linear-to-r from-[#d4af37] to-amber-300 text-black font-semibold rounded-3xl text-lg hover:scale-105 transition-all flex items-center gap-3 shadow-2xl shadow-[#d4af37]/60">
              💬 Chat WhatsApp
            </a>
            <a href="#" target="_blank"
              className="px-16 py-7 bg-linear-to-r from-zinc-900 to-black border border-[#d4af37] font-semibold rounded-3xl text-lg hover:scale-105 transition-all flex items-center gap-3 shadow-2xl">
              ⚡ Order di Fastwork
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#d4af37]/10 py-14 text-center text-zinc-400 text-sm">
        © 2026 <span className="text-[#d4af37] font-serif">GDX</span> — Helping Students Survive Chapter 4, Serious Analysis Only
      </footer>
    </main>
  );
}