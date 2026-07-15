'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faArrowRight,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

import { useLanguage } from './LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080808] py-28 px-6"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080808] to-black" />

      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A84C]/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Badge */}

        <div className="flex justify-center">

          <span className="rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">

            {t('Contact.title') === "Let's Work Together"
              ? 'GET IN TOUCH'
              : 'CONTACTEZ-NOUS'}

          </span>

        </div>

        {/* Heading */}

        <h2 className="mt-8 text-center text-5xl md:text-6xl font-black text-white">
          {t('contact.title')}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-400">
          {t('contact.subtitle')}
        </p>

        {/* Contact Card */}

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl shadow-[0_0_60px_rgba(201,168,76,0.08)]">

          <div className="grid gap-8 md:grid-cols-2">

            {/* WhatsApp */}

            <a
              href="https://wa.me/237671043512"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-green-500/20 bg-green-500/10 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="mb-6 text-5xl text-green-400"
              />

              <h3 className="text-2xl font-bold text-white">
                WhatsApp
              </h3>

              <p className="mt-3 text-gray-400">
                {t('contact.whatsapp')}
              </p>

              <div className="mt-6 flex items-center gap-2 text-green-400 font-semibold">
                Chat Now

                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="transition-transform group-hover:translate-x-2"
                />

              </div>

            </a>

            {/* Email */}

            <a
              href="mailto:yvanleonissoa@gmail.com"
              className="group rounded-2xl border border-[#C9A84C]/20 bg-[#C9A84C]/10 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A84C] hover:shadow-[0_0_30px_rgba(201,168,76,0.25)]"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mb-6 text-5xl text-[#C9A84C]"
              />

              <h3 className="text-2xl font-bold text-white">
                Email
              </h3>

              <p className="mt-3 text-gray-400">
                {t('contact.email')}
              </p>

              <div className="mt-6 flex items-center gap-2 text-[#C9A84C] font-semibold">
                Send Email

                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="transition-transform group-hover:translate-x-2"
                />

              </div>

            </a>

          </div>

          {/* Bottom */}

          <div className="mt-10 flex flex-col items-center justify-center gap-3 border-t border-white/10 pt-8">

            <div className="flex items-center gap-3 text-[#C9A84C]">

              <FontAwesomeIcon icon={faClock} />

              <span className="font-medium">
                {t('contact.response')}
              </span>

            </div>

            <p className="text-center text-gray-500">
              {t('contact.responseText')}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}