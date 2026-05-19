'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

export default function Header({ whatsapp }) {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Início', href: '/' },
    { label: 'Serviços', href: '/#servicos' },
    { label: 'Goiânia', href: '/#goiania' },
    { label: 'Dúvidas', href: '/#faq' },
    { label: 'Produtos', href: '/produtos' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" aria-label="Gabriel Tech Elite">
          <img
            src="/assets/logo-gabriel-tech-elite.png"
            alt="Logo Gabriel Tech Elite"
            className="h-14 w-auto object-contain"
          />
        </Link>

        <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-eliteCyan">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-emerald-500 to-green-400 text-white shadow-[0_0_25px_rgba(34,197,94,0.35)]">
            <FaWhatsapp className="text-[1.35rem]" />
          </a>

          <a href="https://www.instagram.com/gabrieltechelite" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-400 text-white shadow-[0_0_25px_rgba(236,72,153,0.35)]">
            <FaInstagram className="text-[1.2rem]" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white md:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-5 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-bold text-slate-200 transition hover:bg-white/10 hover:text-eliteCyan"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-3 flex gap-3">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-400 px-5 py-4 font-black text-white">
                <FaWhatsapp /> WhatsApp
              </a>

              <a href="https://www.instagram.com/gabrieltechelite" target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 px-5 py-4 font-black text-white">
                <FaInstagram /> Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}