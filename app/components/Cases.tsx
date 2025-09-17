"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const CASES = [
  { title: "Beauty D2C", metric: "+182% выручки", img: "/images/case-1.jpg" },
  { title: "EdTech",     metric: "ROAS ×2.7",     img: "/images/case-2.jpg" },
  { title: "Retail",     metric: "CR 31%",        img: "/images/case-3.jpg" },
  { title: "Accessories",metric: "+31%",          img: "/images/case-4.jpg" },
  { title: "Cosmetics",  metric: "AOV +14%",      img: "/images/case-5.jpg" },
];

export default function Cases() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10">
        <Image src="/images/orange-texture-1.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="section text-white">
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-6">кейсы</h2>

        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={1.05}
          spaceBetween={16}
          loop
          autoplay={{ delay: 2600, reverseDirection: true, disableOnInteraction: false }}
          breakpoints={{ 768: { slidesPerView: 2.2, spaceBetween: 20 }, 1024: { slidesPerView: 3.2, spaceBetween: 24 } }}
          navigation
        >
          {CASES.slice(0, 5).map((c) => (
            <SwiperSlide key={c.title}>
              <article className="bg-[#111] rounded-2xl p-5 md:p-6 shadow-soft hover:shadow-lg transition">
                <div className="relative w-full aspect-[16/9] mb-4">
                  <Image src={c.img} alt={c.title} fill className="object-cover rounded-xl grayscale hover:grayscale-0 transition" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">{c.title}</h3>
                <div className="text-lime text-3xl md:text-4xl font-extrabold mt-2">{c.metric}</div>
                <p className="text-neutral-300 text-sm mt-2">Краткое описание результата — одно предложение.</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}