"use client";

import { motion } from "framer-motion";
import { BookOpen, CalendarCheck, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image src="/mentora-logo-clean.png" alt="Mentora Edutors" width={180} height={48} className="h-8 md:h-10 w-auto object-contain" />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#programs" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Programs</Link>
            <Link href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">How it Works</Link>
            <Link href="#trust" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Why Mentora</Link>
            <Link href="#for-tutors" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">For Tutors</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900 hidden sm:block">Login</Link>
            <Link href="/book" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium shadow-sm h-9 px-4 py-2 bg-slate-900 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800">
              Book Intro
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 mt-20">
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4 inline-flex items-center rounded-full border border-emerald-800/20 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-900"
              >
                Parent-Facing Learning Platform
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-balance text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl mb-6"
              >
                Structured Home Learning <br />
                <span className="text-emerald-800">for Classes 6–12</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-relaxed text-slate-600 md:text-lg mb-10"
              >
                Personalised home tutoring and competitive prep (JEE, NEET, CUET). Designed for academic consistency and competitive confidence.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
              >
                <Link href="/book" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium shadow h-10 rounded-md px-8 group min-w-[210px] bg-slate-900 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800">
                  Book Intro Session
                  <ArrowRight className="lucide lucide-arrow-right ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <span className="mt-4 text-xs text-slate-500 sm:mt-0 sm:ml-4">Intro session booking will open shortly.</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How Mentora Works */}
        <section id="how-it-works" className="py-24 bg-gray-50/50 border-y border-gray-100">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-4 inline-flex items-center rounded-full border border-emerald-800/20 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-900">How Mentora Works</h2>
              <h3 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">A clear four-step journey for parents and students</h3>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Select Program",
                  description: "Choose from subject clusters spanning 6th to 12th grade and competitive exams."
                },
                {
                  step: "02",
                  title: "Intro Session",
                  description: "Book a preliminary session for our academic team to assess the student's baseline."
                },
                {
                  step: "03",
                  title: "Educator Assigned",
                  description: "Our admin allocates a verified, trained educator perfectly matched to the requirement."
                },
                {
                  step: "04",
                  title: "Continuous Tracking",
                  description: "Monitor session progression directly via the Mentora app, ensuring full transparency."
                }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-xl border border-slate-200/80 bg-white p-6 pt-8 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-800/30 hover:shadow-sm relative overflow-hidden"
                >
                  <div className="absolute -right-4 -top-6 text-8xl font-heading font-black text-slate-50 opacity-50 z-0">
                    {feature.step}
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-lg font-semibold tracking-tight leading-snug text-slate-900 mb-3">{feature.title}</h4>
                    <p className="text-sm leading-relaxed text-slate-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust & Governance */}
        <section id="trust" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-900 mb-3">Trust & Governance</h2>
                <h3 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl mb-6">Built with academic quality controls parents can rely on</h3>
                <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-2xl">
                  Mentora Edutors operates with a process-first model so every student receives consistent educator quality, clear structure, and measurable learning continuity.
                </p>
                
                <div className="grid gap-5 md:grid-cols-2">
                  {[
                    { title: "Verified educators", desc: "Screened and reviewed before onboarding." },
                    { title: "Standardised pricing", desc: "Transparent fee structures across programs." },
                    { title: "Admin-controlled allocation", desc: "Educator assignment managed by Mentora academics." },
                    { title: "Progress tracking", desc: "Consistent visibility on milestones and learning continuity." }
                  ].map((item, i) => (
                     <div key={i} className="group rounded-lg border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-emerald-800/30 hover:shadow-sm">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 rounded-md bg-slate-900 p-2 text-white transition-colors duration-300 group-hover:bg-emerald-800">
                            <CheckCircle2 className="h-4 w-4" />
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                            <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                          </div>
                        </div>
                     </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-emerald-900/20 bg-gradient-to-r from-emerald-50 to-white p-8 md:p-12"
              >
                 <div className="flex flex-col items-start justify-between gap-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-900">Educator Network</p>
                      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">Join Mentora as an Educator</h2>
                    </div>
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">Structured learning support for classes 6–12 and competitive prep. Partner with a platform that values your expertise.</p>
                    <Link href="/register/tutor" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium border shadow-sm h-9 px-4 py-2 border-slate-300 bg-white text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-900 hover:bg-slate-50">
                       Apply as Tutor
                    </Link>
                 </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
            <div className="flex items-center gap-3 bg-white/95 px-3 py-1.5 rounded-lg border border-white/20">
              <Image src="/mentora-logo-clean.png" alt="Mentora Edutors" width={140} height={40} className="h-8 w-auto object-contain brightness-100" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/programs" className="hover:text-white transition-colors">Programs</Link>
              <Link href="/for-tutors" className="hover:text-white transition-colors">For Tutors</Link>
              <Link href="/login" className="hover:text-white transition-colors">Login</Link>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
            &copy; {new Date().getFullYear()} Mentora Edutors. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
