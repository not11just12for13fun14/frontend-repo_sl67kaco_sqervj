import React from 'react';
import { Stethoscope, FileText, Barcode, Activity, ShieldCheck, Users, Wallet, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

const modules = [
  {
    id: 'telemedicine',
    icon: Stethoscope,
    title: 'Online Telemedicine',
    desc: '3D virtual rooms with video, voice, and secure chat. Scheduling, payments, and multi-language support built-in.',
    color: 'from-teal-500/30 to-teal-300/20',
    href: '#telemedicine'
  },
  {
    id: 'ehr',
    icon: FileText,
    title: 'EHR / EMR System',
    desc: 'Encrypted records with labs, imaging, medications, and real-time collaboration. ABHA & NDHM aligned.',
    color: 'from-cyan-500/30 to-blue-300/20',
    href: '#ehr'
  },
  {
    id: 'coding',
    icon: Barcode,
    title: 'Medical Coding',
    desc: 'Automated ICD-10/CPT generation, audit engine, and insurance-ready exports with FHIR/HL7.',
    color: 'from-violet-500/30 to-fuchsia-300/20',
    href: '#coding'
  },
  {
    id: 'healthdash',
    icon: Activity,
    title: 'AI Health Dash',
    desc: 'Predictive risk insights, adherence scores, and personalized lifestyle plans with a 3D holographic UI.',
    color: 'from-emerald-500/30 to-lime-300/20',
    href: '#healthdash'
  }
];

const ModulesGrid = () => {
  return (
    <section id="modules" className="relative z-10 mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="font-['Manrope'] text-3xl font-bold text-white md:text-4xl">Core Modules</h2>
          <p className="mt-2 max-w-2xl text-white/70">A modular system connecting patients, providers, insurers, and analytics through one seamless experience.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {modules.map(({ id, icon: Icon, title, desc, color, href }, idx) => (
          <motion.a
            key={id}
            href={href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:border-white/20">
            <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${color} blur-2xl opacity-50 group-hover:opacity-80 transition`} />
            <div className="relative z-10">
              <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3">
                <Icon className="h-6 w-6 text-teal-200" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ModulesGrid;
