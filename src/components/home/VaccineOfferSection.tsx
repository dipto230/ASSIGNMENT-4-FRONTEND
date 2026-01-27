"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function VaccineOfferSection() {

  const targetDate = new Date("2026-02-10T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        {/* LEFT SIDE */}
        <div>
          <p className="text-teal-600 font-semibold mb-4">
            Todays Hot Offer
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Free Covid-19 Vaccine <br /> Campaign Ticket
          </h1>

          <p className="text-gray-600 text-lg mb-10 max-w-xl">
            Cur tantas regiones barbarorum obit, tot maria transmisit summo
            bono fruitur id est voluptate barbarorum.
          </p>

          {/* ⏳ LIVE COUNTDOWN */}
          <div className="flex gap-6 mb-10">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hrs", value: timeLeft.hours },
              { label: "Mins", value: timeLeft.minutes },
              { label: "Secs", value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="bg-white shadow-md rounded-lg px-5 py-4 text-2xl font-bold text-teal-600">
                  {item.value}
                </div>
                <p className="text-gray-500 text-sm mt-2">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-6">
            <Link href="/booking">
              <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition">
                BOOK NOW
              </button>
            </Link>

            <Link href="/shop">
              <span className="text-teal-600 font-semibold underline cursor-pointer hover:text-teal-700">
                Deal of The Day
              </span>
            </Link>
          </div>
        </div>

        
        <div className="relative w-full h-[350px] lg:h-[500px]">
          <Image
            src="/vaccine-offer.jpg"
            alt="Vaccine Offer"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
