import React from 'react';
import { Video, Mic, MessageSquare, Calendar, Globe, CreditCard, FileUp, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
    <div className="mt-1 rounded-lg bg-white/10 p-2"><Icon className="h-5 w-5 text-teal-200" /></div>
    <div>
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="text-xs text-white/70">{desc}</p>
    </div>
  </div>
);

const TelemedicineShowcase = () => {
  return (
    <section id="telemedicine" className="mx-auto max-w-7xl px-6 pb-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="font-['Manrope'] text-3xl font-bold text-white md:text-4xl">Telemedicine</h2>
          <p className="mt-2 max-w-2xl text-white/70">3D doctor avatars and real-time consultations with video, voice, chat, and secure file exchange.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="col-span-2 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a2224] to-[#0d1416] p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs text-white/60">Live Consultation Room</span>
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black/50">
            <video className="h-full w-full object-cover opacity-70" autoPlay loop muted playsInline>
              <source src="https://cdn.coverr.co/videos/coverr-video-conference-2715/1080p.mp4" type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20"><Mic className="h-4 w-4" /></button>
                <button className="rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20"><Video className="h-4 w-4" /></button>
                <button className="rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20"><MessageSquare className="h-4 w-4" /></button>
              </div>
              <button className="rounded-full bg-teal-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-teal-600/30 hover:bg-teal-400">End Call</button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <Feature icon={Calendar} title="Smart Scheduling" desc="Syncs with provider availability and patient preferences." />
          <Feature icon={Globe} title="Multi-language" desc="Localized UI and transcription-ready chat." />
          <Feature icon={CreditCard} title="Payments" desc="Integrated checkout for consultation fees." />
          <Feature icon={FileUp} title="Secure Files" desc="Share reports and prescriptions with encryption." />
          <Feature icon={Star} title="Feedback" desc="Post-visit ratings improve quality of care." />
        </motion.div>
      </div>
    </section>
  );
};

export default TelemedicineShowcase;
