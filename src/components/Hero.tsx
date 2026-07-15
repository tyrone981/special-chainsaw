'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from './LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#080808] flex items-center justify-center px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0d0d0d] to-black" />

      {/* Glow Effects */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-[#C9A84C]/10 blur-[180px]" />

      <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#C9A84C]/5 blur-[120px]" />

      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-white/5 blur-[120px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-5xl text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-3 rounded-full border border-[#C9A84C]/20 bg-white/5 backdrop-blur-xl px-5 py-2 mb-10">

          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

          <span className="uppercase tracking-[0.35em] text-xs text-gray-300">
            {t('hero.available')}
          </span>

        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">

          <span className="block text-white">
            {t('hero.line1')}
          </span>

          <span className="block bg-gradient-to-r from-white via-[#C9A84C] to-white bg-clip-text text-transparent">
            {t('hero.line2')}
          </span>

          <span className="block text-white">
            {t('hero.line3')}
          </span>

        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-lg md:text-xl leading-9 text-gray-400">
          {t('hero.subtitle')}
        </p>

        {/* Buttons */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5">

          <a
            href="#contact"
            className="group rounded-xl bg-gradient-to-r from-[#C9A84C] to-[#e8d08a] px-8 py-4 font-semibold text-black transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(201,168,76,0.45)]"
          >
            {t('hero.cta')}

            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
            />

          </a>

          <a
            href="#projects"
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-4 text-white transition-all duration-500 hover:border-[#C9A84C]/60 hover:bg-white/10"
          >
            {t('hero.viewWork')}
          </a>

        </div>

        {/* Stats */}
        <div className="mt-20 flex flex-wrap justify-center gap-12">

          <div>
            <h3 className="text-3xl font-bold text-white">{t('hero.statProjects')}</h3>
            <p className="mt-2 text-gray-500 uppercase tracking-[0.25em] text-xs">
              {t('hero.statProjectsLabel')}
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">{t('hero.statClients')}</h3>
            <p className="mt-2 text-gray-500 uppercase tracking-[0.25em] text-xs">
              {t('hero.statClientsLabel')}
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">{t('hero.statDedication')}</h3>
            <p className="mt-2 text-gray-500 uppercase tracking-[0.25em] text-xs">
              {t('hero.statDedicationLabel')}
            </p>
          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">

        <div className="flex flex-col items-center gap-3">

          <span className="text-[10px] tracking-[0.4em] uppercase text-gray-500">
            {t('hero.scroll')}
          </span>

          <div className="h-10 w-6 rounded-full border border-white/20 flex justify-center">

            <div className="mt-2 h-2 w-2 rounded-full bg-[#C9A84C] animate-bounce" />

          </div>

        </div>

      </div>

    </section>
  );
}
