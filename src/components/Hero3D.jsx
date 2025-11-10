import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Video, Stethoscope, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero3D = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-[#0b0f10]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle vignette + gradient to ensure text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0f10]/60 via-[#0b0f10]/20 to-[#0b0f10]/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">
            <Shield className="h-3.5 w-3.5 text-teal-300" />
            <span className="tracking-wide text-teal-200">HIPAA-ready • NDHM-aligned</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-['Manrope'] text-4xl font-extrabold leading-tight text-white drop-shadow md:text-6xl">
            Wysh Care
            <span className="block text-teal-300">Where Technology meets Compassion</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-4 max-w-xl text-base text-white/80 md:text-lg">
            A 3D, immersive healthcare platform unifying Telemedicine, EHR/EMR, Medical Coding, and AI-driven Health Dashboards for patients, doctors, and insurers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#modules"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-500 px-5 py-3 font-medium text-white shadow-lg shadow-teal-600/30 transition hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300">
              <Rocket className="h-4 w-4" /> Explore Platform
            </a>
            <a
              href="#telemedicine"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40">
              <Video className="h-4 w-4" /> Start a Visit
            </a>
            <div className="ml-2 hidden items-center gap-2 text-sm text-white/70 md:flex">
              <Stethoscope className="h-4 w-4 text-teal-200" />
              Secure • Real-time • Multi-device
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
