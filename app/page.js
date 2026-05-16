import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const whatsapp = 'https://wa.me/5562998800465?text=Ol%C3%A1%2C%20Gabriel%21%20Vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento.';

const services = [
  ['Troca de tela', 'Substituição de tela com avaliação prévia e orientação transparente.'],
  ['Troca de bateria', 'Diagnóstico da saúde da bateria e troca quando necessário.'],
  ['Conector de carga', 'Reparo em entrada de carregamento e problemas de conexão.'],
  ['Limpeza técnica', 'Higienização interna e manutenção preventiva do aparelho.'],
  ['Reparo básico', 'Soluções para falhas comuns em celulares Android e iPhone.'],
  ['Diagnóstico completo', 'Análise detalhada antes de qualquer orçamento ou serviço.'],
];

const faq = [
  ['Vocês fazem orçamento antes do serviço?', 'Sim. O orçamento é informado antes de qualquer reparo, com transparência e clareza.'],
  ['Atende em Goiânia?', 'Sim. A Gabriel Tech Elite atende em Goiânia - GO e também recebe aparelhos enviados de outras regiões.'],
  ['Faz troca de tela e bateria?', 'Sim. Troca de tela, bateria, conector de carga, limpeza técnica e diagnóstico completo.'],
  ['Atende aparelhos de todo o Brasil?', 'Sim. O atendimento pode ser feito para clientes de todo o Brasil, combinando o envio pelo WhatsApp.'],
];

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Gabriel Tech Elite',
    description: 'Assistência técnica em celulares em Goiânia - GO.',
    telephone: '+55 62 99880-0465',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Goiânia',
      addressRegion: 'GO',
      addressCountry: 'BR',
    },
    areaServed: ['Goiânia', 'Goiás', 'Brasil'],
    url: 'https://gabrieltechelite.com.br',
    sameAs: ['https://www.instagram.com/gabrieltechelite/'],
    makesOffer: services.map(([name, description]) => ({ '@type': 'Offer', name, description })),
  };

  return (
    <main className="min-h-screen overflow-hidden bg-eliteDark text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
  <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
    
    <a
      href="#inicio"
      className="flex items-center gap-3"
      aria-label="Gabriel Tech Elite"
    >
      <img
        src="/assets/logo-gabriel-tech-elite.png"
        alt="Logo Gabriel Tech Elite"
        className="h-20 w-auto object-contain"
      />
    </a>

    <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
      <a
        href="#servicos"
        className="transition hover:text-eliteCyan"
      >
        Serviços
      </a>

      <a
        href="#goiania"
        className="transition hover:text-eliteCyan"
      >
        Goiânia
      </a>

      <a
        href="#faq"
        className="transition hover:text-eliteCyan"
      >
        Dúvidas
      </a>
    </div>

    <div className="flex items-center gap-3">

  {/* WhatsApp */}
  <a
    href={whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp Gabriel Tech Elite"
    className="
      group
      flex h-11 w-11 items-center justify-center
      rounded-full
      border border-white/10
      bg-gradient-to-br from-emerald-500 to-green-400
      text-white
      shadow-[0_0_25px_rgba(34,197,94,0.35)]
      transition-all duration-300
      hover:-translate-y-1
      hover:scale-110
      hover:shadow-[0_0_40px_rgba(34,197,94,0.5)]
    "
  >
    <FaWhatsapp className="text-[1.35rem]" />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/gabrieltechelite"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram Gabriel Tech Elite"
    className="
      group
      flex h-11 w-11 items-center justify-center
      rounded-full
      border border-white/10
      bg-gradient-to-br from-pink-500 via-red-500 to-yellow-400
      text-white
      shadow-[0_0_25px_rgba(236,72,153,0.35)]
      transition-all duration-300
      hover:-translate-y-1
      hover:scale-110
      hover:shadow-[0_0_40px_rgba(236,72,153,0.45)]
    "
  >
    <FaInstagram className="text-[1.2rem]" />
  </a>

</div>
  </nav>
</header>

      <section id="inicio" className="bg-grid relative px-4 pb-20 pt-32 md:px-6 md:pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div className="reveal">
            <p className="mb-4 inline-flex rounded-full border border-eliteBlue/40 bg-eliteBlue/10 px-4 py-2 text-sm font-semibold text-eliteCyan">
              Assistência técnica em celulares em Goiânia - GO
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Conserto de celular com <span className="text-gradient">qualidade, transparência e confiança.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Troca de tela, bateria, conector de carga, limpeza técnica, reparo básico e diagnóstico completo. Atendimento humanizado e orçamento antes de qualquer serviço.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={whatsapp} className="rounded-2xl bg-eliteBlue px-7 py-4 text-center font-black text-white shadow-glow transition hover:-translate-y-1 hover:bg-eliteCyan">
                Fazer orçamento pelo WhatsApp
              </a>
              <a href="#servicos" className="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-center font-bold text-white transition hover:bg-white/10">
                Ver serviços
              </a>
            </div>
            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 text-sm text-slate-300 md:grid-cols-4">
              {['Orçamento antes', 'Goiânia - GO', 'Todo Brasil', 'Atendimento humanizado'].map((item) => (
                <span key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center">{item}</span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md reveal">
            <div className="absolute -inset-6 rounded-[40px] bg-eliteBlue/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-eliteBlue/30 bg-slate-950 p-3 shadow-glow">
              <img src="/assets/flyer-gabriel-tech-elite.png" alt="Serviços Gabriel Tech Elite" className="w-full rounded-[24px] object-cover" />
            </div>
          </div>
        </div>
      </section>

<section id="servicos" className="relative overflow-hidden px-4 py-24 md:px-6">
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(0,140,255,0.16),transparent_35%)]" />

  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        <p className="font-bold uppercase tracking-[.3em] text-eliteCyan">
          Serviços de assistência técnica
        </p>

        <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
          Conserto de celular em Goiânia com diagnóstico claro e atendimento humanizado.
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          A Gabriel Tech Elite realiza reparos em celulares Android e iPhone, com orçamento antes de qualquer serviço, transparência e foco em resolver o problema do aparelho com segurança.
        </p>
      </div>

<a
  href={whatsapp}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center rounded-2xl border border-eliteCyan/30 bg-eliteCyan/10 px-6 py-4 text-sm font-black uppercase tracking-wider text-eliteCyan transition hover:-translate-y-1 hover:bg-eliteCyan hover:text-eliteDark"
>
  Solicitar orçamento
</a>
    </div>

    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map(([title, desc], index) => (
        <article
          key={title}
          className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-2 hover:border-eliteBlue/60 hover:shadow-glow"
        >
          <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-eliteBlue/10 transition group-hover:bg-eliteCyan/15" />

          <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-eliteCyan/20 bg-eliteBlue/15 text-lg font-black text-eliteCyan">
            {String(index + 1).padStart(2, '0')}
          </div>

          <h3 className="relative text-xl font-black text-white">
            {title}
          </h3>

          <p className="relative mt-3 leading-7 text-slate-300">
            {desc}
          </p>

          <p className="relative mt-5 text-sm font-bold text-eliteCyan">
            Atendimento em Goiânia e todo o Brasil →
          </p>
        </article>
      ))}
    </div>
  </div>
</section>

      <section
  id="goiania"
  className="relative overflow-hidden bg-slate-950 px-4 md:py-24 md:px-6"
>
  {/* Glow background */}
  <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-eliteBlue/20 blur-3xl" />

  <div className="relative mx-auto max-w-7xl">
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-14">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        
        {/* Left */}
        <div>
          <span className="inline-flex rounded-full border border-eliteBlue/40 bg-eliteBlue/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-eliteCyan">
            Atendimento em Goiânia - GO
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-4xl">
            Assistência técnica
            <span className="text-eliteBlue"> especializada </span>
            em celulares.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            A Gabriel Tech Elite atende clientes em Goiânia com foco em
            transparência, diagnóstico completo e atendimento humanizado.
            Tudo é explicado antes do serviço para garantir segurança,
            clareza e confiança.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4">
              <p className="text-sm text-slate-400">
                Atendimento
              </p>
              <strong className="text-white">
                Rápido e transparente
              </strong>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4">
              <p className="text-sm text-slate-400">
                Cobertura
              </p>
              <strong className="text-white">
                Goiânia e região
              </strong>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="rounded-[28px] border border-eliteBlue/20 bg-gradient-to-br from-eliteBlue/10 to-slate-900 p-8 shadow-2xl">
            <h3 className="text-2xl font-black text-white">
              Precisando consertar seu celular?
            </h3>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              Troca de tela, bateria, conector de carga, limpeza técnica e
              diagnóstico completo com atendimento humanizado e orçamento
              antes de qualquer serviço.
            </p>

<a
  href={whatsapp}
  target="_blank"
  rel="noopener noreferrer"
  className="
    mt-8 inline-flex w-full items-center justify-center
    rounded-2xl
    bg-gradient-to-r from-eliteBlue via-sky-500 to-eliteCyan
    px-7 py-5
    text-lg font-black text-white
    shadow-[0_0_30px_rgba(0,140,255,0.35)]
    border border-white/10
    backdrop-blur-sm
    transition-all duration-300
    hover:-translate-y-1
    hover:scale-[1.02]
    hover:shadow-[0_0_45px_rgba(0,212,255,0.45)]
    hover:from-eliteCyan hover:to-eliteBlue
  "
>
  Chamar Gabriel no WhatsApp
</a>

            <p className="mt-4 text-center text-sm text-slate-400">
              Atendimento rápido • Orçamento transparente
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="faq" className="relative overflow-hidden px-4 py-24 md:px-6">
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(0,212,255,0.12),transparent_35%)]" />

  <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
    <div className="lg:sticky lg:top-24">
      <p className="font-bold uppercase tracking-[.3em] text-eliteCyan">
        Dúvidas frequentes
      </p>

      <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
        Antes de solicitar seu orçamento de conserto de celular
      </h2>

      <p className="mt-5 leading-8 text-slate-300">
        Tire as principais dúvidas sobre diagnóstico, orçamento, troca de tela,
        troca de bateria e atendimento técnico em Goiânia.
      </p>

<a
  href={whatsapp}
  target="_blank"
  rel="noopener noreferrer"
  className="
    mt-8 inline-flex w-full items-center justify-center
    rounded-2xl
    bg-gradient-to-r from-eliteBlue via-sky-500 to-eliteCyan
    px-7 py-5
    text-lg font-black text-white
    shadow-[0_0_30px_rgba(0,140,255,0.35)]
    border border-white/10
    backdrop-blur-sm
    transition-all duration-300
    hover:-translate-y-1
    hover:scale-[1.02]
    hover:shadow-[0_0_45px_rgba(0,212,255,0.45)]
    hover:from-eliteCyan hover:to-eliteBlue
  "
>
  Falar no Whatsapp
</a>
    </div>

    <div className="space-y-4">
      {faq.map(([question, answer], index) => (
        <details
          key={question}
          className="group overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition hover:border-eliteCyan/40"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 text-lg font-black text-white">
            <span className="flex items-center gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-eliteBlue/15 text-sm font-black text-eliteCyan">
                {String(index + 1).padStart(2, '0')}
              </span>
              {question}
            </span>

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-eliteCyan/20 text-eliteCyan transition group-open:rotate-45 group-open:bg-eliteCyan group-open:text-eliteDark">
              +
            </span>
          </summary>

          <div className="border-t border-white/10 px-6 pb-6 pt-5">
            <p className="leading-8 text-slate-300">{answer}</p>
          </div>
        </details>
      ))}
    </div>
  </div>
</section>

<section className="relative overflow-hidden px-4 pb-24 md:px-6 py-24">
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(0,212,255,0.14),transparent_35%)]" />

  <div className="mx-auto max-w-5xl overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#07111f] via-slate-950 to-[#020617] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.35)] md:p-14">
    
    <div className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-eliteBlue/20 blur-3xl" />
    <div className="absolute bottom-[-100px] right-[80px] h-[240px] w-[240px] rounded-full bg-eliteCyan/10 blur-3xl" />

    <div className="relative z-10 text-center">
      <span className="inline-flex rounded-full border border-eliteCyan/20 bg-eliteCyan/10 px-5 py-2 text-sm font-bold uppercase tracking-[.2em] text-eliteCyan">
        Atendimento rápido
      </span>

      <h2 className="mt-6 text-3xl font-black leading-tight md:text-5xl">
        Seu celular precisa de reparo?
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
        Fale diretamente com Gabriel Bruno e receba um atendimento transparente,
        diagnóstico claro e orçamento antes de qualquer serviço.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={whatsapp} className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-black text-slate-950 transition hover:-translate-y-1">
            Solicitar orçamento
          </a>


      </div>
    </div>
  </div>
</section>

<footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-slate-400 md:px-6">
  <p>
    Gabriel Tech Elite — Assistência técnica em celulares em Goiânia - GO.
  </p>

  <p className="mt-2">
    Qualidade que conecta, confiança que fica.
  </p>

  <p className="mt-4 text-slate-500">
    Desenvolvido por:{' '}
    
    <a
      href="https://kinkajoudev.com.br"
      target="_blank"
      rel="noopener noreferrer"
      className="
        font-bold text-eliteCyan
        transition duration-300
        hover:text-white
      "
    >
      Kinkajou Dev
    </a>
  </p>
</footer>
      <a
  href={whatsapp}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Falar com Gabriel Tech Elite pelo WhatsApp"
  className="
    fixed bottom-5 right-5 z-[999]
    flex h-14 w-14 items-center justify-center
    rounded-full
    bg-gradient-to-br from-emerald-500 to-green-400
    text-white
    shadow-[0_0_30px_rgba(34,197,94,0.45)]
    transition-all duration-300
    hover:-translate-y-1 hover:scale-110
    md:bottom-8 md:right-8 md:h-16 md:w-16
  "
>
  <FaWhatsapp className="text-[1.8rem] md:text-[2rem]" />
</a>
    </main>
  );
}
