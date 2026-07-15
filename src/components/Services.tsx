'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faPalette,
  faChartLine,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from './LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: faCode,
      title: t('services.web'),
      desc: t('services.webDesc'),
    },
    {
      icon: faPalette,
      title: t('services.branding'),
      desc: t('services.brandingDesc'),
    },
    {
      icon: faChartLine,
      title: t('services.marketing'),
      desc: t('services.marketingDesc'),
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden py-32 bg-[#080808]"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-20 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#C9A84C]/10 blur-[180px]" />

      {/* Large Background Text */}

      <h1 className="absolute left-1/2 top-10 -translate-x-1/2 text-[180px] md:text-[260px] font-black text-white/[0.02] select-none">
        02
      </h1>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Badge */}

        <div className="flex justify-center">

          <span className="rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[#C9A84C]">
            {t('services.badge')}
          </span>

        </div>

        {/* Heading */}

        <h2 className="mt-8 text-center text-5xl md:text-6xl font-bold leading-tight">

          <span className="text-white">
            {t('services.heading1')}
          </span>

          <br />

          <span className="bg-gradient-to-r from-white via-[#C9A84C] to-white bg-clip-text text-transparent">
            {t('services.heading2')}
          </span>

        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-gray-400">
          {t('services.subtitle')}
        </p>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {services.map((service, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 transition-all duration-500 hover:-translate-y-3 hover:border-[#C9A84C]/50 hover:shadow-[0_20px_80px_rgba(201,168,76,0.15)]"
            >

              {/* Gold Hover Glow */}

              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/0 via-[#C9A84C]/0 to-[#C9A84C]/10 opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Icon */}

              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C9A84C]/10 text-[#C9A84C] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">

                <FontAwesomeIcon
                  icon={service.icon}
                  className="text-2xl"
                />

              </div>

              {/* Title */}

              <h3 className="relative z-10 mt-8 text-2xl font-semibold text-white">

                {service.title}

              </h3>

              {/* Description */}

              <p className="relative z-10 mt-5 leading-8 text-gray-400">

                {service.desc}

              </p>

              {/* Divider */}

              <div className="relative z-10 mt-8 h-px bg-white/10" />

              {/* CTA */}

              <button className="relative z-10 mt-8 flex items-center gap-3 font-medium text-[#C9A84C] transition duration-300 group-hover:gap-5">

                {t('services.learnMore')}

                <FontAwesomeIcon
                  icon={faArrowRight}
                />

              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
