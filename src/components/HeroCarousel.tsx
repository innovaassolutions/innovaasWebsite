"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Example slide data (update as needed)
const slides = [
  {
    image: "/FactoryoftheFuture.png",
    headline: "Everything and Everyone Connected",
    description:
      "Innovaas Solutions delivers digital transformation services, enabling businesses to connect every machine, sensor, human activity, and business transaction into one single source of truth. Real-time visibility for stakeholders into the state of the business at any time.",
  },
  {
    image: "/UNSScalability.webp",
    headline: "Enabling ML & AI Solutions for Manufacturing",
    description:
      "ML predicts the future state, AI recommends changes, management executes more accurately from a position of augmented information.",
  },
  {
    image: "/dataGovernance.webp",
    headline: "Data Democratization & Governance for Industry",
    description:
      "Data originates from a disparate, siloed, and highly varied sources within your organization. You need your data democratized & governed in order to rely on the information it provides to augment your decision making processes.",
  },
];

const HeroCarousel: React.FC = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto mt-4 rounded-xl overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-[400px] md:h-[500px]"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
              <Image
                src={slide.image}
                alt={slide.headline}
                fill
                className="object-cover object-center z-0"
                priority={idx === 0}
              />
              {/* Overlay for better text contrast */}
              <div className="absolute inset-0 bg-black/60 z-10" />
              <div className="absolute inset-0 flex items-center justify-center z-20 px-4 md:px-12">
                <div className="bg-black/70 rounded-lg p-6 md:p-10 max-w-2xl w-full">
                  <h2 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg text-white">
                    {slide.headline}
                  </h2>
                  <p className="text-lg md:text-2xl mb-8 drop-shadow-md text-white">
                    {slide.description}
                  </p>
                  <button
                    type="button"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg"
                    onClick={() => {}}
                  >
                    Call to Action
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroCarousel; 