'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { 
  MessageCircle, 
  Zap, 
  Network, 
  GitBranch, 
  Award, 
  Users, 
  CheckCircle2, 
  ChevronDown 
} from 'lucide-react';

export default function PaketStrukturalPremium() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "AMOS vs SmartPLS, pilih yang mana?", a: "Pilih AMOS (CB-SEM) kalau data normal, sampel besar (≥200), fokus theory testing. SmartPLS kalau data kecil (30-100), non-normal, model kompleks. Konsultasi dulu biar pas." },
    { q: "Minimal sampel buat SEM?", a: "AMOS: ≥200 atau 5-10 obs per parameter. SmartPLS: fleksibel, 30-100 tergantung kompleksitas. Rule: 10x indikator." },
    { q: "Apa itu variabel laten?", a: "Variabel laten = konstruk tak terukur langsung, direpresentasi oleh beberapa indikator. Contoh: Kepuasan Kerja (gaji, lingkungan, atasan)." },
    { q: "Model fit kurang bagus?", a: "Kalau model fit nggak memenuhi kriteria (RMSEA > 0.08, CFI < 0.90, dll), kami bantu modifikasi: hapus indikotor dengan loading rendah, tambah covariance antar error, atau revisi struktur model." },
    { q: "Mediasi/moderasi bisa?", a: "Paket Struktural ini untuk model dasar (path analysis langsung). Kalau butuh mediasi/moderasi kompleks, cek Paket Advanced yang sudah include analisis lanjutan." },
  ];

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const nodeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.6, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } }
  };

  const stepperVariants: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0, 
      transition: { delay: i * 0.15, duration: 0.6 } 
    })
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Paket Struktural SEM AMOS SmartPLS",
        "serviceType": "Jasa Analisis Structural Equation Modeling Tesis S2",
        "provider": { "@type": "Organization", "name": "GoolahData" },
        "areaServed": "Indonesia",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "itemListElement": [{ "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paket Struktural" }, "price": "1000000", "priceCurrency": "IDR" }]
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
    <main className="bg-[#0a0a14] text-white font-sans overflow-hidden relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a14]/95 backdrop-blur-xl border-b border-violet-500/20">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-linear-to-br from-violet-500 to-cyan-400 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-violet-500/30">🎓</div>
            <div>
              <span className="text-xs text-violet-400 uppercase tracking-[3px]">GDX</span>
              <div className="font-serif font-bold text-xl">GOOLAHDATA</div>
            </div>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm">
            ← Kembali ke Semua Paket
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen pt-32 pb-20 px-6 relative flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_70%_30%,rgba(139,92,246,0.18),transparent_50%)]" />
        <div className="absolute inset-0 opacity-30 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, rgba(165,243,252,0.4) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-3 bg-linear-to-r from-violet-500/20 to-cyan-400/20 border border-violet-400/40 text-violet-300 px-7 py-3 rounded-3xl text-sm font-medium backdrop-blur-xl">
              🎯 High-End Tesis S2
            </div>

            <motion.h1 variants={nodeVariants} className="text-6xl md:text-7xl font-serif font-bold leading-none tracking-tighter">
              Paket <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-cyan-300 to-amber-300">Struktural</span>
            </motion.h1>

            <motion.p variants={nodeVariants} className="text-xl text-zinc-400 max-w-lg">
              SEM lengkap untuk tesis S2. Analisis model kompleks, variabel laten, model fit valid & ready dipakai laporan.
            </motion.p>

            <motion.div variants={nodeVariants} className="text-5xl font-serif font-bold text-white">
              Rp 1.000.000 - 2.500.000 <span className="text-base font-normal text-zinc-400">/ project</span>
            </motion.div>

            <motion.div variants={nodeVariants} className="flex flex-wrap gap-4">
              <a href="https://wa.me/6282342714048?text=Halo,%20saya%20tertarik%20dengan%20Paket%20Struktural%20(SEM)" target="_blank"
                className="group px-10 py-5 bg-linear-to-r from-violet-500 to-indigo-600 text-white font-semibold rounded-3xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-violet-500/40">
                <MessageCircle size={24} className="group-hover:rotate-12 transition" /> Konsultasi Gratis
              </a>
              <a href="#" target="_blank"
                className="group px-10 py-5 bg-linear-to-r from-amber-400 to-orange-500 text-black font-semibold rounded-3xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl">
                <Zap size={24} className="group-hover:rotate-12 transition" /> Order di Fastwork
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="relative"
          >
            <Image src="/imgpkts.jpg" alt="Paket Struktural SEM - Analisis Model Kompleks Tesis S2" width={680} height={520} className="rounded-3xl shadow-2xl" priority />
            <div className="absolute -inset-8 border-[3px] border-violet-400/30 rounded-[40px] -z-10" />
          </motion.div>
        </div>
      </section>

      {/* FEATURES – Glowing Node Cards */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-violet-400 text-sm font-semibold tracking-widest mb-4">APA YANG KAMU DAPATKAN</p>
          <h2 className="text-4xl font-serif font-bold mb-16">Detail Layanan Paket Struktural</h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: Network, title: "Confirmatory Factor Analysis (CFA)", desc: "Validasi model pengukuran dengan uji validitas konvergen (AVE, CR) dan validitas diskriminan (Fornell-Larcker, HTMT)." },
              { icon: GitBranch, title: "Structural Equation Modeling", desc: "Model struktural lengkap dengan path analysis, estimasi koefisien jalur, R², dan effect size (f²)." },
              { icon: Award, title: "Model Fit Evaluation", desc: "Evaluasi goodness-of-fit: CMIN/DF, CFI, TLI, RMSEA, SRMR. Dengan interpretasi lengkap dan rekomendasi perbaikan." },
              { icon: Users, title: "Software AMOS / SmartPLS", desc: "Pilih software sesuai kebutuhan: AMOS untuk CB-SEM (data normal, sampel besar) atau SmartPLS untuk PLS-SEM (data tidak normal, sampel kecil)." },
              { icon: Zap, title: "Bootstrapping", desc: "Uji signifikansi path coefficient dengan resampling. Hasil lebih robust terhadap asumsi distribusi data." },
              { icon: CheckCircle2, title: "Diagram Model Lengkap", desc: "Visualisasi model SEM profesional dengan semua estimasi parameter siap dimasukkan ke laporan tesis." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={nodeVariants}
                whileHover={{ scale: 1.04, boxShadow: "0 0 60px -10px rgb(167 139 250)" }}
                className="group bg-[#11111f]/80 border border-violet-500/30 rounded-3xl p-9 relative overflow-hidden hover:border-violet-400 transition-all duration-500"
              >
                <div className="absolute top-6 right-6 w-10 h-10 bg-linear-to-br from-violet-500 to-cyan-400 rounded-2xl flex items-center justify-center text-xs font-bold text-black">
                  {String(i+1).padStart(2, '0')}
                </div>
                <div className="mb-8 w-20 h-20 bg-linear-to-br from-violet-500/10 to-cyan-400/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon size={48} className="text-violet-300" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 pr-10">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DITUJUKAN UNTUK */}
      <section className="py-24 px-6 bg-linear-to-b from-transparent via-violet-500/5 to-transparent">
        <div className="max-w-5xl mx-auto">
          <p className="text-violet-400 text-sm font-semibold tracking-widest mb-4">Cocok Buat Kamu Yang...</p>
          <h2 className="text-4xl font-serif font-bold mb-16">Paket Ini Ditujukan Untuk</h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              { icon: Users, title: "Mahasiswa S2 (Magister)", desc: "Yang lagi ngerjain tesis dengan metode SEM/PLS sesuai standar akademik." },
              { icon: Network, title: "Penelitian dengan variabel laten", desc: "Model yang punya konstruk tidak teramati (unobserved variables) dengan indikator reflektif/formatif." },
              { icon: Award, title: "Butuh model fit yang valid", desc: "Pengujian goodness-of-fit indices lengkap untuk memastikan model diterima." },
              { icon: GitBranch, title: "Hubungan variabel kompleks", desc: "Model dengan banyak variabel (8-15 variabel) dan jalur yang saling berhubungan." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={nodeVariants}
                className="bg-[#11111f]/70 border border-violet-500/20 rounded-3xl p-10 hover:border-violet-400 hover:shadow-2xl hover:shadow-violet-500/20 transition-all group"
              >
                <item.icon size={52} className="text-violet-400 mb-8" />
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ALUR PENGERJAAN – Horizontal Glowing Stepper */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-violet-400 text-sm font-semibold tracking-widest mb-4">Alur Pengerjaan</p>
          <h2 className="text-4xl font-serif font-bold mb-16">Prosesnya Gimana?</h2>

          <div className="relative flex flex-col md:flex-row gap-8 md:gap-0 md:justify-between items-start">
            <div className="absolute top-8 left-8 right-8 h-px bg-linear-to-r from-violet-500/30 via-cyan-400/30 to-transparent hidden md:block" />

            {[
              { icon: Network, title: "Konsultasi Model", desc: "Kirim kerangka konseptual/konseptual. Kami bantu konversi ke model SEM dan tentuin pakai AMOS atau SmartPLS (Request)." },
              { icon: GitBranch, title: "Analisis CFA (5-7 Hari)", desc: "Validasi model pengukuran: uji validitas konvergen & diskriminan, reliabilitas komposit. Revisi indikator kalau perlu." },
              { icon: Award, title: "Analisis Model Struktural (2-3 hari)", desc: "Estimasi path coefficients, evaluasi R², effect size, predictive relevance (Q²). Uji hipotesis dengan bootstrapping." },
              { icon: CheckCircle2, title: "Final Delivery", desc: "File AMOS/SmartPLS, diagram model, tabel hasil lengkap, narasi interpretasi Bab IV-V. Revisi sampai dosen ACC." },
            ].map((step, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={stepperVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 bg-[#11111f]/80 border border-violet-500/30 rounded-3xl p-9 w-full md:w-auto md:flex-1 hover:border-cyan-400 transition-all group"
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#0a0a14] border-4 border-violet-400 rounded-full flex items-center justify-center text-2xl font-bold text-violet-400">
                  {i + 1}
                </div>
                <div className="mt-6 flex flex-col items-center text-center md:items-start md:text-left">
                  <step.icon size={42} className="text-cyan-300 mb-6" />
                  <h3 className="font-semibold text-2xl mb-4">{step.title}</h3>
                  <p className="text-zinc-400 text-[15px] leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 px-6 bg-[#11111f]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-violet-400 text-sm font-semibold tracking-widest mb-6">Deliverable:</p>
          <div className="bg-linear-to-br from-violet-500/10 to-cyan-400/10 border border-violet-500/30 rounded-3xl p-12 italic text-xl leading-relaxed">
            • File SPSS bersih (.sav) dengan dokumentasi
            • Tabel dan grafik siap insert Bab IV 
            • Laporan analisis dengan pembahasan detail
            • Interpretasi implikasi teoritis dan praktis
            <div className="mt-8 text-base not-italic font-medium text-violet-300">— Interpretasi dan Pembahasan —</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-violet-400 text-sm font-semibold tracking-widest mb-4">PERTANYAAN UMUM</p>
          <h2 className="text-4xl font-serif font-bold mb-16">FAQ Paket Struktural</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#11111f] border border-violet-500/20 rounded-3xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-9 py-7 text-left flex justify-between items-center hover:bg-violet-500/5 transition-all group"
                >
                  <span className="font-medium text-lg pr-6">{faq.q}</span>
                  <motion.div animate={{ rotate: openFaq === index ? 180 : 0 }} transition={{ duration: 0.4 }}>
                    <ChevronDown size={28} className={openFaq === index ? "text-cyan-400" : "text-zinc-400"} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden border-t border-violet-500/10"
                    >
                      <div className="px-9 py-8 text-zinc-400 leading-relaxed">
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
      <section className="py-24 px-6 text-center bg-linear-to-b from-transparent via-violet-500/5 to-transparent">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-serif font-bold mb-6">Siap Bikin Model SEM-mu?</h2>
          <p className="text-xl text-zinc-400 mb-12">Konsultasi gratis & dapat rekomendasi software, model, dan strategi tesis S2.</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <a href="https://wa.me/6282342714048?text=Halo,%20saya%20tertarik%20dengan%20Paket%20Struktural%20(SEM)" target="_blank"
              className="px-14 py-6 bg-linear-to-r from-violet-500 to-indigo-600 text-white font-semibold rounded-3xl text-lg hover:scale-105 transition-all flex items-center gap-3 shadow-2xl shadow-violet-500/50">
              💬 Chat WhatsApp
            </a>
            <a href="#" target="_blank"
              className="px-14 py-6 bg-linear-to-r from-amber-400 to-orange-500 text-black font-semibold rounded-3xl text-lg hover:scale-105 transition-all flex items-center gap-3 shadow-2xl">
              ⚡ Order di Fastwork
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-violet-500/10 py-14 text-center text-zinc-400 text-sm">
        © 2026 <span className="text-violet-400 font-serif">GDX</span> — Helping Students Survive Chapter 4, Serious Analysis Only
      </footer>
    </main>
  );
}