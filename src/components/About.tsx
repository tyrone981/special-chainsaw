'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faStar,
  faHeadset,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from './LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: faCode,
      value: '3+',
      label: t('about.statProjects'),
    },
    {
      icon: faStar,
      value: '100%',
      label: t('about.statSatisfaction'),
    },
    {
      icon: faHeadset,
      value: '24/7',
      label: t('about.statSupport'),
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#080808] py-32"
    >
      {/* Background */}

      <div className="absolute left-0 top-0 h-[650px] w-[650px] rounded-full bg-[#C9A84C]/10 blur-[180px]" />

      <h1 className="absolute left-8 top-8 text-[220px] font-black text-white/[0.02] select-none">
        04
      </h1>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[#C9A84C]">
              {t('about.badge')}
            </span>

            <h2 className="mt-8 text-5xl md:text-6xl font-bold leading-tight">

              <span className="text-white">
                {t('about.heading1')}
              </span>

              <br />

              <span className="bg-gradient-to-r from-white via-[#C9A84C] to-white bg-clip-text text-transparent">
                {t('about.heading2')}
              </span>

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-400">
              {t('about.paragraph1')}
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-400">
              {t('about.paragraph2')}
            </p>

            <div className="mt-10 flex items-center gap-3">

              <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

              <span className="uppercase tracking-[0.3em] text-sm text-gray-300">
                {t('about.available')}
              </span>

            </div>

            <a
              href="#contact"
              className="inline-flex mt-12 items-center gap-3 rounded-xl bg-gradient-to-r from-[#C9A84C] to-[#e8d08a] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]"
            >
              {t('about.cta')}

              <FontAwesomeIcon icon={faArrowRight} />

            </a>

          </div>

          {/* Right */}

          <div className="grid gap-6">

            {stats.map((stat, index) => (

              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#C9A84C]/40 hover:shadow-[0_20px_60px_rgba(201,168,76,0.15)]"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C9A84C]/10 text-2xl text-[#C9A84C] transition duration-500 group-hover:rotate-6 group-hover:scale-110">

                      <FontAwesomeIcon icon={stat.icon} />

                    </div>

                    <h3 className="text-5xl font-bold text-white">

                      {stat.value}

                    </h3>

                    <p className="mt-3 uppercase tracking-[0.25em] text-sm text-gray-500">

                      {stat.label}

                    </p>

                  </div>

                  <span className="text-6xl font-black text-white/5">

                    0{index + 1}

                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
