'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { products } from '../produtos/data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function FeaturedProductsCarousel() {
  const carouselRef = useRef(null);
  const featuredProducts = products.slice(-10).reverse();

  function scrollCarousel(direction) {
    carouselRef.current?.scrollBy({
      left: direction === 'left' ? -340 : 340,
      behavior: 'smooth',
    });
  }

  return (
    <section id="produtos" className="relative overflow-hidden px-4 py-24 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-bold uppercase tracking-[.3em] text-eliteCyan">
              Produtos disponíveis
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
              Acessórios, celulares e eletrônicos.
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Confira alguns produtos disponíveis na Gabriel Tech Elite.
            </p>
          </div>

          <Link href="/produtos" className="inline-flex items-center justify-center
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
    hover:from-eliteCyan hover:to-eliteBlue">
            Ver todos os produtos
          </Link>
        </div>

        <div className="relative">
<button
  type="button"
  onClick={() => scrollCarousel('left')}
  aria-label="Ver produtos anteriores"
  className="absolute left-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/90 text-white shadow-lg transition hover:bg-eliteBlue"
>
  <FaChevronLeft className="text-sm" />
</button>

          <div
            ref={carouselRef}
            className="no-scrollbar flex snap-x gap-5 overflow-x-auto scroll-smooth px-14 pb-2"
            aria-label="Carrossel de produtos em destaque"
          >
            {featuredProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/produtos/${product.slug}`}
                className="group min-w-[260px] snap-start overflow-hidden rounded-[30px] border border-white/10 bg-white/5 transition hover:-translate-y-2 hover:border-eliteBlue/60 md:min-w-[310px]"
              >
                <img
                  src={product.image}
                  alt={`${product.name} - Gabriel Tech Elite`}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="p-5">
                  <span className="inline-flex rounded-full bg-eliteBlue/10 px-3 py-1 text-xs font-bold text-eliteCyan">
                    {product.category}
                  </span>

                  <h3 className="mt-4 text-xl font-black text-white">
                    {product.name}
                  </h3>

                  <p className="mt-4 font-bold text-eliteCyan">
                    Ver produto →
                  </p>
                </div>
              </Link>
            ))}
          </div>

<button
  type="button"
  onClick={() => scrollCarousel('right')}
  aria-label="Ver próximos produtos"
  className="absolute right-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/90 text-white shadow-lg transition hover:bg-eliteBlue"
>
  <FaChevronRight className="text-sm" />
</button>
        </div>
      </div>
    </section>
  );
}