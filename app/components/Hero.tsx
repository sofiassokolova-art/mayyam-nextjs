"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[100svh] overflow-hidden bg-black">
      <Image
        src="/images/hero-phones.jpg"
        alt="Maryam"
        fill
        priority
        className="object-cover object-center opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      <div className="section relative h-full flex items-end md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl md:max-w-3xl"
        >
          <h1 className="text-lime font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-[clamp(64px,10vw,140px)]">
            МАРЬЯМ
          </h1>
          <p className="text-white text-2xl md:text-3xl font-bold mt-4">
            продюсер <span className="font-serif italic">роста</span> продаж
          </p>
          <p className="text-muted mt-3 max-w-xl">
            Запуски, воронки, маркетинг и рост выручки под ключ.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a className="inline-flex h-14 px-8 items-center justify-center rounded-full bg-lime text-ink font-extrabold hover:shadow-glow transition">
              НА СВЯЗЬ
            </a>
            <a className="inline-flex h-14 px-8 items-center justify-center rounded-full border-2 border-lime text-white font-extrabold hover:bg-lime hover:text-ink transition">
              МОЙ ПОДХОД
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}