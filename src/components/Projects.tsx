'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from './LanguageContext';

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.hydra'),
      category: t('projects.hydraCat'),
      image: '/projects/hydra.png',
      url: 'https://hydra-beauty-institute.vercel.app/',
    },
    {
      title: t('projects.nenkicks'),
      category: t('projects.nenkicksCat'),
      image: '/projects/kiks.png',
      url: 'https://nenkicks-x6n2.vercel.app/',
    },
    {
      title: t('projects.Lounge'),
      category: t('projects.LoungeCat'),
      image: '/projects/Lounge.png',
      url: '',
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#080808] py-32"
    >
      {/* Background Glow */}

      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-[#C9A84C]/10 blur-[180px]" />

      {/* Background Number */}

      <h1 className="absolute right-10 top-10 text-[220px] font-black text-white/[0.02] select-none">
        03
      </h1>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="text-center">

          <span className="rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[#C9A84C]">
            {t('projects.badge')}
          </span>

          <h2 className="mt-8 text-5xl md:text-6xl font-bold text-white">
            {t('projects.heading1')}
            <span className="block bg-gradient-to-r from-white via-[#C9A84C] to-white bg-clip-text text-transparent">
              {t('projects.heading2')}
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            {t('projects.subtitle')}
          </p>

        </div>

        {/* Projects */}

        <div className="mt-20 grid gap-10 lg:grid-cols-3">

          {projects.map((project, index) => (

            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#C9A84C]/40 hover:shadow-[0_25px_80px_rgba(201,168,76,0.18)]"
            >

              {/* Image */}

              <div className="relative h-[260px] overflow-hidden">

                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#C9A84C]/20 to-black/50 flex items-center justify-center">
                    <span className="text-6xl">🍽️</span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <span className="absolute left-6 top-6 rounded-full bg-[#C9A84C] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-black">
                  {project.category}
                </span>

              </div>

              {/* Content */}

              <div className="p-8">

                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {t('projects.description')}
                </p>

                <div className="mt-8 flex items-center justify-between">

                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 font-medium text-[#C9A84C] transition duration-300 hover:gap-5"
                    >
                      {t('projects.liveSite')}

                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                      />

                    </a>
                  ) : (
                    <span className="text-sm text-gray-500">
                      {t('projects.comingSoon')}
                    </span>
                  )}

                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-white/30 transition duration-300 group-hover:translate-x-2 group-hover:text-[#C9A84C]"
                  />

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
