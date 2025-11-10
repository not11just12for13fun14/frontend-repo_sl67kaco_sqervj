import React from 'react';
import { Activity, HeartPulse, Pill, Utensils, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const StatCard = ({ icon: Icon, label, value, accent }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs uppercase tracking-wide text-white/60">{label}</p>
        <p className="mt-1 text-2xl font-semibold text-white">{value}</p>
      </div>
      <div className={`rounded-lg p-2 ${accent}`}>
        <Icon className="h-5 w-5 text-white" />
      </div>
    </div>
  </div>
);

const HealthDash = () => {
  return (
    <section id="healthdash" className="mx-auto max-w-7xl px-6 pb-24">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="font-['Manrope'] text-3xl font-bold text-white md:text-4xl">Health Dash</h2>
          <p className="mt-2 max-w-2xl text-white/70">A predictive, AI-powered dashboard visualized as a holographic medical board.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative col-span-2 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0f1518] to-[#0a0f10] p-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(77,139,131,0.25),transparent_60%)]" />
          <div className="relative z-10">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Risk Overview</h3>
              <div className="flex items-center gap-2 text-xs text-white/60">
                Updated just now
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <StatCard icon={Activity} label="Cardiac Risk" value="Medium" accent="bg-amber-500/30" />
              <StatCard icon={HeartPulse} label="Hypertension" value="Low" accent="bg-emerald-500/30" />
              <StatCard icon={Pill} label="Adherence" value="82%" accent="bg-sky-500/30" />
            </div>
            <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-semibold text-white">Lifestyle & Diet Recommendations</p>
                <TrendingUp className="h-4 w-4 text-teal-200" />
              </div>
              <ul className="list-disc space-y-1 pl-5 text-sm text-white/70">
                <li>Adopt a Mediterranean-style meal plan with omega-3 rich foods.</li>
                <li>30 minutes of moderate cardio, 5 days a week.</li>
                <li>Limit sodium intake; target < 1,800 mg/day.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-4">
          <StatCard icon={Utensils} label="Food Planner" value="12 meal matches" accent="bg-teal-500/30" />
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold text-white">Next Checkups</p>
            <ul className="mt-2 space-y-2 text-sm text-white/70">
              <li>HbA1c Test — in 14 days</li>
              <li>Lipid Profile — in 30 days</li>
              <li>Blood Pressure Review — next week</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HealthDash;
