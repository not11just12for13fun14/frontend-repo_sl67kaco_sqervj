import React from 'react';
import Hero3D from './components/Hero3D';
import ModulesGrid from './components/ModulesGrid';
import TelemedicineShowcase from './components/TelemedicineShowcase';
import HealthDash from './components/HealthDash';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#0b0f10] text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0b0f10]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-teal-400" />
            <span className="font-['Manrope'] text-lg font-bold">Wysh Care</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#modules" className="hover:text-white">Platform</a>
            <a href="#telemedicine" className="hover:text-white">Telemedicine</a>
            <a href="#healthdash" className="hover:text-white">Health Dash</a>
          </nav>
          <a href="#telemedicine" className="rounded-lg bg-teal-500 px-4 py-2 text-sm font-medium text-white hover:bg-teal-400">Get Started</a>
        </div>
      </header>

      <main>
        <Hero3D />
        <ModulesGrid />
        <TelemedicineShowcase />
        <HealthDash />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Wysh Care • Powered by Wysh Group</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
