import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative bg-ink">
      <div className="absolute inset-0 opacity-15 mix-blend-luminosity -z-10">
        <Image src="/images/portrait-overlay.jpg" alt="" fill className="object-cover" />
      </div>
      <div className="section text-white">
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase">связаться</h2>
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <a className="inline-flex h-16 px-10 items-center justify-center rounded-full bg-lime text-ink font-extrabold hover:shadow-glow">
            Записаться
          </a>
          <nav className="flex items-center gap-6 text-white/90">
            <a href="#">Instagram</a><a href="#">TikTok</a><a href="#">LinkedIn</a><a href="#">YouTube</a>
          </nav>
        </div>
        <p className="text-neutral-400 mt-10">© Марьям, 2025</p>
      </div>
    </section>
  );
}