"use client";

import Image from "next/image";
import Link from "next/link";
import { HeartPulse } from "lucide-react";

export default function AboutPage() {
  return (
      <div className="bg-white text-gray-800 min-h-screen w-full">
           <div className=" max-w-7xl mx-auto px-6 py-16 space-y-16">
      
    
      <section className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-teal-600">About MediStore</h1>
          <p className="text-gray-700 text-lg">
            MediStore is your trusted online pharmacy, providing high-quality medicines, healthcare products, and wellness solutions right to your doorstep. We are committed to making healthcare accessible, convenient, and reliable for everyone.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition"
          >
            Explore Our Store
          </Link>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/about-hero.jpg"
            alt="Medical team"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>


      <section className="grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition">
          <HeartPulse size={40} className="text-teal-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To provide reliable, affordable, and fast healthcare products to customers nationwide.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition">
          <HeartPulse size={40} className="text-teal-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-600">
            To become the leading online pharmacy where quality healthcare meets convenience.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition">
          <HeartPulse size={40} className="text-teal-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Our Values</h2>
          <p className="text-gray-600">
            Integrity, reliability, innovation, and customer satisfaction are at the heart of everything we do.
          </p>
        </div>
      </section>

      
      <section className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 order-2 md:order-1">
          <Image
            src="/about-team.jpg"
            alt="Team"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="md:w-1/2 order-1 md:order-2 space-y-4">
          <h2 className="text-3xl font-bold text-teal-600">Our Story</h2>
          <p className="text-gray-700">
            MediStore started with a simple idea: to make access to medicines and healthcare products easy and stress-free. Our team of healthcare professionals and tech enthusiasts work tirelessly to ensure our customers get what they need, when they need it.
          </p>
          <p className="text-gray-700">
            With years of experience in pharmacy and e-commerce, we are proud to serve thousands of satisfied customers and continue growing as a trusted healthcare partner.
          </p>
        </div>
      </section>

      
      <section className="text-center bg-teal-50 py-12 rounded-lg">
        <h2 className="text-3xl font-bold text-teal-600 mb-4">Ready to Take Care of Your Health?</h2>
        <p className="text-gray-700 mb-6">Browse our extensive collection of medicines and wellness products today.</p>
        <Link
          href="/shop"
          className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-700 transition"
        >
          Shop Now
        </Link>
      </section>

    </div>
          
   </div>
  );
}
