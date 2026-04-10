"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "How do I place an order?",
    a: "Browse products from the shop, add items to your cart, and proceed to checkout. Fill in your details and confirm your order.",
  },
  {
    q: "How long does delivery take?",
    a: "Delivery usually takes 2–5 business days depending on your location.",
  },
  {
    q: "Can I track my order?",
    a: "Yes! You can track your order from the 'My Orders' section in your profile.",
  },
  {
    q: "What payment methods are available?",
    a: "We support online payments, cards, and cash on delivery.",
  },
];

export default function FAQPage() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Frequently Asked <span className="text-teal-600">Questions</span>
          </h1>

          <div className="space-y-5">
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="bg-white border border-gray-100 shadow-sm rounded-xl p-5 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {item.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <Image
              src="/faq/faq-image.png"
              alt="FAQ"
              width={520}
              height={520}
              className="rounded-2xl shadow-xl"
            />

            {/* subtle glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-teal-500/10 blur-2xl -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}