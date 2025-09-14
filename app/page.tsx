// "use client";
// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// function Stat({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="bg-white/4 p-4 rounded-lg border border-white/8">
//       <div className="text-sm text-white/70">{label}</div>
//       <div className="text-2xl font-bold">{value}</div>
//     </div>
//   );
// }

// function Chip({ label }: { label: string }) {
//   return (
//     <div className="text-xs px-3 py-1 rounded-full bg-white/6 border border-white/8">
//       {label}
//     </div>
//   );
// }

// // Recommended packages (install before using):
// // yarn add framer-motion lucide-react
// // TailwindCSS should be configured for your Next.js app (app router)

// // This file is a single-file, ready-to-drop-in React component for app/page.tsx
// // It uses TailwindCSS for styling and Framer Motion for animations.
// // Colors provided by the user are exposed as CSS variables for easy theming.

// export default function CignumOnePager() {
//   // custom cursor state
//   const [cursor, setCursor] = useState({ x: -100, y: -100, hovering: false });

//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       setCursor((c) => ({ ...c, x: e.clientX, y: e.clientY }));
//     };
//     const enter = () => setCursor((c) => ({ ...c, hovering: true }));
//     const leave = () => setCursor((c) => ({ ...c, hovering: false }));

//     window.addEventListener("mousemove", move);
//     window.addEventListener("mouseenter", enter);
//     window.addEventListener("mouseleave", leave);
//     return () => {
//       window.removeEventListener("mousemove", move);
//       window.removeEventListener("mouseenter", enter);
//       window.removeEventListener("mouseleave", leave);
//     };
//   }, []);

//   const services = [
//     {
//       title: "Custom SaaS Development",
//       desc: "End-to-end software tailored to your industry and growth stage.",
//     },
//     {
//       title: "Fintech Solutions",
//       desc: "Payments, lending, remittances, digital banking & compliance.",
//     },
//     {
//       title: "Marketing Tech",
//       desc: "Automation, engagement platforms, analytics.",
//     },
//     {
//       title: "E‑commerce & Retail",
//       desc: "Scalable storefronts, integrations & CX.",
//     },
//     {
//       title: "Healthcare IT",
//       desc: "Secure patient management & telemedicine.",
//     },
//     {
//       title: "Logistics & Supply Chain",
//       desc: "Tracking, automation & delivery optimization.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[var(--bg-top)] to-[var(--bg-bottom)] text-white antialiased relative overflow-hidden">
//       {/* CSS variables to match the user's palette + suggested tech accents */}
//       <style>{`:root{ --cignum-blue:#0078E5; --cignum-deep:#002C77; --cignum-mid:#0052B4; --accent:#00E5A8; --muted:rgba(255,255,255,0.08); --glass: rgba(255,255,255,0.06); --bg-top: #002C77; --bg-bottom: #001636 }
//         /* small devices: reduce heavy animations */
//         @media (max-width:640px){ .desk-only{ display:none } }
//       `}</style>

//       {/* animated background shapes */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="absolute inset-0 pointer-events-none"
//         aria-hidden
//       >
//         <svg
//           className="absolute -left-24 -top-20 w-96 h-96 opacity-30"
//           viewBox="0 0 200 200"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <defs>
//             <linearGradient id="g1" x1="0" x2="1">
//               <stop offset="0%" stopColor="#0078E5" />
//               <stop offset="100%" stopColor="#0052B4" />
//             </linearGradient>
//           </defs>
//           <circle cx="60" cy="40" r="80" fill="url(#g1)" />
//         </svg>

//         <svg
//           className="absolute -right-40 -bottom-40 w-96 h-96 opacity-20 rotate-12"
//           viewBox="0 0 200 200"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <defs>
//             <linearGradient id="g2" x1="0" x2="1">
//               <stop offset="0%" stopColor="#002C77" />
//               <stop offset="100%" stopColor="#0052B4" />
//             </linearGradient>
//           </defs>
//           <rect x="0" y="0" width="200" height="200" rx="40" fill="url(#g2)" />
//         </svg>
//       </motion.div>

//       {/* cursor */}
//       <div
//         className="pointer-events-none fixed z-50"
//         style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
//       >
//         <AnimatePresence>
//           <motion.div
//             key={cursor.hovering ? "hover" : "base"}
//             initial={{ scale: 0.4, opacity: 0 }}
//             animate={{ scale: cursor.hovering ? 1.6 : 1, opacity: 0.95 }}
//             exit={{ opacity: 0 }}
//             transition={{ type: "spring", stiffness: 500, damping: 30 }}
//             className="-translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-white/20 bg-white/5 backdrop-blur"
//             style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.45)" }}
//           />
//         </AnimatePresence>
//       </div>

//       <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/6 ring-1 ring-white/10">
//             <svg
//               width="28"
//               height="28"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#lg)" />
//               <defs>
//                 <linearGradient id="lg" x1="0" x2="1">
//                   <stop offset="0" stopColor="#0078E5" />
//                   <stop offset="1" stopColor="#0052B4" />
//                 </linearGradient>
//               </defs>
//             </svg>
//           </div>
//           <div>
//             <div className="font-bold">
//               <Image
//                 src="/logo.png"
//                 alt="Cignum Solutions"
//                 width={120}
//                 height={30}
//               />
//             </div>
//             <div className="text-xs text-white/60">
//               Innovating Software. Powering Business.
//             </div>
//           </div>
//         </div>

//         <nav className="hidden md:flex gap-6 items-center">
//           <Link href="#services" className="hover:text-[var(--accent)] transition">
//             What We Do
//           </Link>
//           <Link href="#why" className="hover:text-[var(--accent)] transition">
//             Why Choose Us
//           </Link>
//           <Link
//             href="#contact"
//             className="bg-[var(--cignum-blue)] hover:bg-[var(--cignum-mid)] px-4 py-2 rounded-md shadow"
//           >
//             Get in Touch
//           </Link>
//         </nav>
//       </header>

//       <main className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-10 items-center">
//         {/* Left: Hero content */}
//         <section className="space-y-6">
//           <motion.h1
//             initial={{ y: -10, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl md:text-5xl font-extrabold leading-tight"
//           >
//             Cignum Solutions
//             <br />
//             <span className="text-[var(--accent)]">
//               Innovating Software.
//             </span>{" "}
//             Powering Business.
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.25 }}
//             className="text-white/80 max-w-xl"
//           >
//             At Cignum Solutions, we deliver Software-as-a-Service (SaaS)
//             solutions that help organizations thrive in today’s digital-first
//             world. We design, build, and manage scalable software platforms that
//             power industries such as Fintech, Marketing, E-commerce, Healthcare,
//             Real Estate, Logistics, and Professional Services.
//           </motion.p>

//           <div className="flex gap-4">
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <Link
//                 href="#contact"
//                 className="inline-flex items-center gap-3 bg-[var(--cignum-blue)] hover:bg-[var(--cignum-mid)] px-5 py-3 rounded-lg font-semibold shadow-lg"
//               >
//                 Contact Sales{" "}
//               </Link>
//             </motion.div>

//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <Link
//                 href="#services"
//                 className="inline-flex items-center gap-3 border border-white/10 px-5 py-3 rounded-lg font-semibold"
//               >
//                 Our Services
//               </Link>
//             </motion.div>
//           </div>

//           <div className="grid grid-cols-2 gap-4 mt-6">
//             <Stat label="Industries" value="7+" />
//             <Stat label="Years" value="10" />
//             <Stat label="Scale" value="Enterprise-ready" />
//             <Stat label="Global" value="UK, NG, US" />
//           </div>
//         </section>

//         {/* Right: Hero visual */}
//         <section className="relative">
//           <motion.div
//             initial={{ scale: 0.95, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="rounded-2xl bg-gradient-to-br from-[var(--cignum-mid)] to-[var(--cignum-deep)] p-6 shadow-2xl"
//           >
//             <div className="flex gap-4 items-start">
//               <div className="flex-1">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <div className="text-sm text-white/80">Product</div>
//                     <div className="text-lg font-bold">Cignum Solution</div>
//                   </div>
//                   <div className="text-xs text-white/60">Live • Sandbox</div>
//                 </div>

//                 <div className="mt-6">
//                   {/* <div className="text-xs text-white/70">Revenue</div> */}
//                   <div className="text-2xl font-semibold">
//                     {/* $1.2M <span className="text-sm text-white/60">YT D</span> */}
//                   </div>
//                 </div>

//                 <div className="mt-6 flex gap-3">
//                   <button className="px-3 py-1 rounded bg-white/8 text-white/90 text-sm">
//                     Overview
//                   </button>
//                   <button className="px-3 py-1 rounded bg-white/4 text-white/80 text-sm">
//                     Settings
//                   </button>
//                 </div>
//               </div>

//               <div className="w-28 h-28 bg-white/4 rounded-lg flex items-center justify-center">
//                 <Image
//                   src="/pay.webp"
//                   alt="illustration"
//                   width={96}
//                   height={96}
//                   className="w-full h-full object-cover rounded"
//                 />
//               </div>
//             </div>

//             {/* small feature chips */}
//             <div className="mt-6 flex flex-wrap gap-3">
//               <Chip label="Cloud Native" />
//               <Chip label="PCI Compliant" />
//               <Chip label="Multi-Region" />
//               <Chip label="SLA 99.99%" />
//             </div>
//           </motion.div>

//           {/* floating badge */}
//           <motion.div
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             className="absolute -bottom-[120px] bg-white/6 px-4 py-3 rounded-xl border border-white/8 shadow-lg "
//           >
//             <div className="text-xs text-white/80">Trusted by</div>
//             <div className="flex items-center gap-4 mt-2">
//               <div className="w-10 h-6 bg-white/6 rounded flex items-center justify-center text-[10px]">
//                 Bank
//               </div>
//               <div className="w-10 h-6 bg-white/6 rounded flex items-center justify-center text-[10px]">
//                 MSB
//               </div>
//               <div className="w-10 h-6 bg-white/6 rounded flex items-center justify-center text-[10px]">
//                 IMTO
//               </div>
//             </div>
//           </motion.div>
//         </section>
//       </main>

//       {/* Services */}
//       <section id="services" className="max-w-7xl mx-auto px-6 py-12">
//         <h3 className="text-2xl font-bold mb-4 text-[var(--accent)]">What We Do</h3>
//         <p className="text-white/75 max-w-2xl">
//           We design, build, and manage scalable platforms across verticals.
//           Below are some of our core services:
//         </p>

//         <div className="mt-8 grid md:grid-cols-3 gap-6">
//           {services.map((s) => (
//             <motion.div
//               key={s.title}
//               whileHover={{ y: -6 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className="bg-white/4 p-5 rounded-xl border border-white/8"
//             >
//               <div className="text-lg font-semibold">{s.title}</div>
//               <div className="text-sm text-white/70 mt-2">{s.desc}</div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section id="why" className="max-w-7xl mx-auto px-6 py-12">
//         <div className="grid lg:grid-cols-2 gap-8 items-center">
//           <div>
//             <h3 className="text-2xl font-bold text-[var(--accent)]">Why Choose Us</h3>
//             <p className="text-white/75 mt-3 max-w-xl">
//               We combine deep industry expertise with modern engineering
//               practices to deliver secure, compliant, and high-performing
//               software platforms.
//             </p>

//             <ul className="mt-6 space-y-3">
//               <li className="flex gap-3 items-start">
//                 <div className="w-8 h-8 rounded-md bg-[var(--muted)] flex items-center justify-center mt-1">
//                   ✓
//                 </div>
//                 <div>
//                   <div className="font-semibold">Industry Expertise</div>
//                   <div className="text-sm text-white/70">
//                     Deep knowledge of regulated and high-growth industries.
//                   </div>
//                 </div>
//               </li>

//               <li className="flex gap-3 items-start">
//                 <div className="w-8 h-8 rounded-md bg-[var(--muted)] flex items-center justify-center mt-1">
//                   ⚙️
//                 </div>
//                 <div>
//                   <div className="font-semibold">Scalable Architecture</div>
//                   <div className="text-sm text-white/70">
//                     Cloud-native solutions designed to grow with your business.
//                   </div>
//                 </div>
//               </li>

//               <li className="flex gap-3 items-start">
//                 <div className="w-8 h-8 rounded-md bg-[var(--muted)] flex items-center justify-center mt-1">
//                   🔒
//                 </div>
//                 <div>
//                   <div className="font-semibold">Security & Compliance</div>
//                   <div className="text-sm text-white/70">
//                     Built to meet international standards in data protection and
//                     financial regulation.
//                   </div>
//                 </div>
//               </li>
//             </ul>
//           </div>

//           <div className="bg-white/4 p-6 rounded-xl border border-white/6">
//             <div className="font-semibold">Case Snapshot</div>
//             <div className="text-sm text-white/70 mt-3">
//               Transvault implemented a secure remittance pipeline with
//               end-to-end encryption, reducing settlement time by 43% while
//               improving compliance reporting.
//             </div>

//             <div className="mt-5 flex gap-3">
//               <button className="px-4 py-2 rounded bg-[var(--cignum-blue)]">
//                 View Case Study
//               </button>
//               <button className="px-4 py-2 rounded border border-white/8">
//                 Request Demo
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer / Contact */}
//       <footer id="contact" className="max-w-7xl mx-auto px-6 py-12">
//         <div className="bg-white/5 p-8 rounded-xl grid md:grid-cols-3 gap-6">
//           <div>
//             <div className="font-bold text-lg">Cignum Solutions</div>
//             <div className="text-white/70 mt-2">
//               Innovating Software. Powering Business.
//             </div>

//             <div className="mt-4 text-sm text-white/70">
//               📍 39th Floor, One Canada Square, London E14
//               <br />
//               📞 +44 (0)203 489 0807
//               <br />
//               ✉️ info@cignumsolutions.net
//             </div>
//           </div>

//           <div>
//             <div className="font-semibold mb-2">Quick Links</div>
//             <div className="grid grid-cols-2 gap-2 text-white/70 text-sm">
//               <Link href="#services">Services</Link>
//               <Link href="#why">Why Us</Link>
//               {/* <Link href="#">Careers</Link>
//               <Link href="#">Privacy</Link> */}
//             </div>
//           </div>

//           <div>
//             <div className="font-semibold mb-2">Newsletter</div>
//             <div className="text-sm text-white/70">
//               Get product updates, case studies and engineering insights.
//             </div>
//             <div className="mt-3 flex gap-2">
//               <input
//                 placeholder="you@company.com"
//                 className="flex-1 rounded px-3 py-2 bg-white/6 border border-white/8 outline-none"
//               />
//               <button className="px-4 py-2 rounded bg-[var(--cignum-blue)]">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="mt-6 text-center text-white/50 text-sm">
//           © {new Date().getFullYear()} Cignum Solutions. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/4 p-4 rounded-lg border border-white/8">
      <div className="text-sm text-white/70">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <div className="text-xs px-3 py-1 rounded-full bg-white/6 border border-white/8">
      {label}
    </div>
  );
}

export default function CignumOnePager() {
  const [cursor, setCursor] = useState({ x: -100, y: -100, hovering: false });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setCursor((c) => ({ ...c, x: e.clientX, y: e.clientY }));
    };
    const enter = () => setCursor((c) => ({ ...c, hovering: true }));
    const leave = () => setCursor((c) => ({ ...c, hovering: false }));

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseenter", enter);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseenter", enter);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  const services = [
    {
      title: "Custom SaaS Development",
      desc: "End-to-end software tailored to your industry and growth stage.",
    },
    {
      title: "Fintech Solutions",
      desc: "Payments, lending, remittances, digital banking & compliance.",
    },
    {
      title: "Marketing Tech",
      desc: "Automation, engagement platforms, analytics.",
    },
    {
      title: "E-commerce & Retail",
      desc: "Scalable storefronts, integrations & CX.",
    },
    {
      title: "Healthcare IT",
      desc: "Secure patient management & telemedicine.",
    },
    {
      title: "Logistics & Supply Chain",
      desc: "Tracking, automation & delivery optimization.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--bg-top)] to-[var(--bg-bottom)] text-white antialiased relative overflow-hidden">
      <style>{`:root{ --cignum-blue:#0078E5; --cignum-deep:#002C77; --cignum-mid:#0052B4; --accent:#00E5A8; --muted:rgba(255,255,255,0.08); --glass: rgba(255,255,255,0.06); --bg-top: #002C77; --bg-bottom: #001636 }
        @media (max-width:640px){ .desk-only{ display:none } }
      `}</style>

      {/* Animated background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <svg
          className="absolute -left-24 -top-20 w-96 h-96 opacity-30"
          viewBox="0 0 200 200"
        >
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#0078E5" />
              <stop offset="100%" stopColor="#0052B4" />
            </linearGradient>
          </defs>
          <circle cx="60" cy="40" r="80" fill="url(#g1)" />
        </svg>
        <svg
          className="absolute -right-40 -bottom-40 w-96 h-96 opacity-20 rotate-12"
          viewBox="0 0 200 200"
        >
          <defs>
            <linearGradient id="g2" x1="0" x2="1">
              <stop offset="0%" stopColor="#002C77" />
              <stop offset="100%" stopColor="#0052B4" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="200" height="200" rx="40" fill="url(#g2)" />
        </svg>
      </motion.div>

      {/* Cursor */}
      <div
        className="pointer-events-none fixed z-50"
        style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
      >
        <AnimatePresence>
          <motion.div
            key={cursor.hovering ? "hover" : "base"}
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: cursor.hovering ? 1.6 : 1, opacity: 0.95 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="-translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-white/20 bg-white/5 backdrop-blur"
            style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.45)" }}
          />
        </AnimatePresence>
      </div>

      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/6 ring-1 ring-white/10">
            <svg width="28" height="28" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#lg)" />
              <defs>
                <linearGradient id="lg" x1="0" x2="1">
                  <stop offset="0" stopColor="#0078E5" />
                  <stop offset="1" stopColor="#0052B4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
            <Image
              src="/logo.png"
              alt="Cignum Solutions"
              width={120}
              height={30}
            />
            <div className="text-xs text-white/60">
              Innovating Software. Powering Business.
            </div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <Link
            href="#services"
            className="hover:text-[var(--accent)] transition"
          >
            What We Do
          </Link>
          <Link href="#why" className="hover:text-[var(--accent)] transition">
            Why Choose Us
          </Link>
          <Link
            href="#contact"
            className="bg-[var(--cignum-blue)] hover:bg-[var(--cignum-mid)] px-4 py-2 rounded-md shadow"
          >
            Get in Touch
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <main className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-10 items-center">
        <section className="space-y-6">
          <motion.h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Cignum Solutions <br />
            <span className="text-[var(--accent)]">
              Innovating Software.
            </span>{" "}
            Powering Business.
          </motion.h1>
          <motion.p className="text-white/80 max-w-xl">
            At Cignum Solutions, we deliver SaaS solutions that help
            organizations thrive...
          </motion.p>
          <div className="flex gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 bg-[var(--cignum-blue)] hover:bg-[var(--cignum-mid)] px-5 py-3 rounded-lg font-semibold shadow-lg"
            >
              Contact Sales
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-3 border border-white/10 px-5 py-3 rounded-lg font-semibold"
            >
              Our Services
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <Stat label="Industries" value="7+" />
            <Stat label="Years" value="10" />
            <Stat label="Scale" value="Enterprise-ready" />
            <Stat label="Global" value="UK, NG, US" />
          </div>
        </section>

        {/* Right: Hero Visual with badge fix */}
        <section className="relative pb-32">
<motion.div className="rounded-2xl bg-gradient-to-br from-[var(--cignum-mid)] to-[var(--cignum-deep)] p-6 shadow-2xl relative pb-20">            <div className="flex gap-4 items-start">
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/80">Product</div>
                    <div className="text-lg font-bold">Cignum Solution</div>
                  </div>
                  <div className="text-xs text-white/60">Live • Sandbox</div>
                </div>
                <div className="mt-6"></div>
                <div className="mt-6 flex gap-3">
                  <button className="px-3 py-1 rounded bg-white/8 text-white/90 text-sm">
                    Overview
                  </button>
                  <button className="px-3 py-1 rounded bg-white/4 text-white/80 text-sm">
                    Settings
                  </button>
                </div>
              </div>
              <div className="w-28 h-28 bg-white/4 rounded-lg flex items-center justify-center">
                <Image
                  src="/pay.webp"
                  alt="illustration"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Chip label="Cloud Native" />
              <Chip label="PCI Compliant" />
              <Chip label="Multi-Region" />
              <Chip label="SLA 99.99%" />
            </div>
          </motion.div>

          {/* Floating badge inside padded section */}
 <motion.div className="absolute left-1/2 -bottom-6 -translate-x-1/2 bg-white/6 px-4 py-3 rounded-xl border border-white/8 shadow-lg">            <div className="text-xs text-white/80">Trusted by</div>
            <div className="flex items-center gap-4 mt-2">
              <div className="w-10 h-6 bg-white/6 rounded flex items-center justify-center text-[10px]">
                Bank
              </div>
              <div className="w-10 h-6 bg-white/6 rounded flex items-center justify-center text-[10px]">
                MSB
              </div>
              <div className="w-10 h-6 bg-white/6 rounded flex items-center justify-center text-[10px]">
                IMTO
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-4 text-[var(--accent)]">
          What We Do
        </h3>
        <p className="text-white/75 max-w-2xl">
          We design, build, and manage scalable platforms...
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <motion.div
              key={s.title}
              whileHover={{ y: -6 }}
              className="bg-white/4 p-5 rounded-xl border border-white/8"
            >
              <div className="text-lg font-semibold">{s.title}</div>
              <div className="text-sm text-white/70 mt-2">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-[var(--accent)]">
              Why Choose Us
            </h3>
            <p className="text-white/75 mt-3 max-w-xl">
              We combine deep industry expertise with modern engineering
              practices to deliver secure, compliant, and high-performing
              software platforms.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-md bg-[var(--muted)] flex items-center justify-center mt-1">
                  ✓
                </div>
                <div>
                  <div className="font-semibold">Industry Expertise</div>
                  <div className="text-sm text-white/70">
                    Deep knowledge of regulated and high-growth industries.
                  </div>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-md bg-[var(--muted)] flex items-center justify-center mt-1">
                  ⚙️
                </div>
                <div>
                  <div className="font-semibold">Scalable Architecture</div>
                  <div className="text-sm text-white/70">
                    Cloud-native solutions designed to grow with your business.
                  </div>
                </div>
              </li>

              <li className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-md bg-[var(--muted)] flex items-center justify-center mt-1">
                  🔒
                </div>
                <div>
                  <div className="font-semibold">Security & Compliance</div>
                  <div className="text-sm text-white/70">
                    Built to meet international standards in data protection and
                    financial regulation.
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white/4 p-6 rounded-xl border border-white/6">
            <div className="font-semibold">Case Snapshot</div>
            <div className="text-sm text-white/70 mt-3">
              Transvault implemented a secure remittance pipeline with
              end-to-end encryption, reducing settlement time by 43% while
              improving compliance reporting.
            </div>

            <div className="mt-5 flex gap-3">
              <button className="px-4 py-2 rounded bg-[var(--cignum-blue)]">
                View Case Study
              </button>
              <button className="px-4 py-2 rounded border border-white/8">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </section>
{/* Footer / Contact */}
<footer id="contact" className="max-w-7xl mx-auto px-6 py-12">
  <div className="bg-white/5 p-8 rounded-xl grid gap-10 md:grid-cols-3">
    {/* Company Info */}
    <div>
      <div className="font-bold text-lg">Cignum Solutions</div>
      <div className="text-white/70 mt-2">
        Innovating Software. Powering Business.
      </div>

      <div className="mt-4 text-sm text-white/70 space-y-1">
        <p>📍 39th Floor, One Canada Square, London E14</p>
        <p>📞 +44 (0)203 489 0807</p>
        <p>✉️ info@cignumsolutions.net</p>
      </div>
    </div>

    {/* Quick Links */}
    <div>
      <div className="font-semibold mb-3">Quick Links</div>
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-2 text-white/70 text-sm">
        <Link href="#services" className="hover:text-white transition">
          Services
        </Link>
        <Link href="#why" className="hover:text-white transition">
          Why Us
        </Link>
        {/* <Link href="#">Careers</Link>
        <Link href="#">Privacy</Link> */}
      </div>
    </div>

    {/* Newsletter */}
    <div>
      <div className="font-semibold mb-3">Newsletter</div>
      <div className="text-sm text-white/70">
        Get product updates, case studies and engineering insights.
      </div>
      <form className="mt-3 flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="you@company.com"
          className="flex-1 rounded px-3 py-2 bg-white/10 border border-white/20 outline-none text-sm"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded bg-[var(--cignum-blue)] text-white text-sm font-medium hover:opacity-90 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>

  {/* Bottom Line */}
  <div className="mt-6 text-center text-white/50 text-sm">
    © {new Date().getFullYear()} Cignum Solutions. All rights reserved.
  </div>
</footer>

    </div>
  );
}
