"use client";

import {
  Truck,
  RotateCcw,
  ShieldCheck,
  Gift,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free shipping",
    subtitle: "On all orders over $49.00",
  },
  {
    icon: RotateCcw,
    title: "15 days returns",
    subtitle: "Moneyback guarantee",
  },
  {
    icon: ShieldCheck,
    title: "Secure checkout",
    subtitle: "Protected by Paypal",
  },
  {
    icon: Gift,
    title: "Offer & gift here",
    subtitle: "On all orders over",
  },
];

export default function HomeFeatures() {
  return (
    <section className="w-full bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4"
            >
              <item.icon className="w-8 h-8 text-gray-900 shrink-0" />

              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
