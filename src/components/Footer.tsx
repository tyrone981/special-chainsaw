'use client';

import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import {
  faArrowUp,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const navItems = ['home', 'services', 'projects', 'about', 'contact'];

  return (
    <footer className="relative overflow-hidden bg-[#050505] border-t border-white/10">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C9A84C]/10 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* Top */}

        <div className="grid gap-16 lg:grid-cols-3">

          {/* Brand */}

          <div>

            <h2 className="text-4xl font-black tracking-tight">

              <span className="text-white">
                FYN
              </span>

              <span className="text-[#C9A84C]">
                .
              </span>

            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              {t('footer.description')}
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="text-white font-semibold uppercase tracking-[0.3em] text-sm">
              {t('footer.navigation')}
            </h3>

            <div className="mt-8 flex flex-col gap-4">

              {navItems.map((item) => (

                <a
                  key={item}
                  href={`#${item}`}
                  className="group flex items-center gap-3 text-gray-400 transition hover:text-[#C9A84C]"
                >

                  <span className="h-px w-0 bg-[#C9A84C] transition-all duration-300 group-hover:w-6" />

                  {t(`navbar.${item}`)}

                </a>

              ))}

            </div>

          </div>

          {/* CTA */}

          <div>

            <h3 className="text-white font-semibold uppercase tracking-[0.3em] text-sm">
              {t('footer.ready')}
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              {t('footer.ctaText')}
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#C9A84C] to-[#e8d08a] px-7 py-4 font-semibold text-black transition-all duration-500 hover:scale-105 hover:shadow-[0_0_35px_rgba(201,168,76,0.4)]"
            >

              {t('footer.button')}

              <FontAwesomeIcon
                icon={faArrowRight}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </a>

          </div>

        </div>

        {/* Divider */}

        <div className="my-16 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

        {/* Bottom */}

        <div className="flex flex-col gap-8 md:flex-row items-center justify-between">

          <p className="text-sm text-gray-500">
            {t('footer.copyright')}
          </p>

          {/* Socials */}

          <div className="flex gap-4">

            {[
              {
                icon: faGithub,
                href: '#',
              },
              {
                icon: faLinkedin,
                href: '#',
              },
              {
                icon: faInstagram,
                href: '#',
              },
            ].map((social, index) => (

              <a
                key={index}
                href={social.href}
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A84C]/40 hover:bg-[#C9A84C]/10 hover:text-[#C9A84C]"
              >

                <FontAwesomeIcon
                  icon={social.icon}
                />

              </a>

            ))}

          </div>

          {/* Back To Top */}

          <a
            href="#home"
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-[#C9A84C]/40 hover:bg-[#C9A84C]/10"
          >

            <FontAwesomeIcon
              icon={faArrowUp}
              className="text-gray-300 transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-[#C9A84C]"
            />

          </a>

        </div>

      </div>

    </footer>
  );
}
