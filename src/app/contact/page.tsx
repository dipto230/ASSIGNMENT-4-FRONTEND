"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white text-gray-800 min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">

       
        <section className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold text-teal-600">Contact MediStore</h1>
            <p className="text-gray-700 text-lg">
              We’d love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help.
            </p>
            <p className="text-gray-700 text-lg">
              Reach out via phone, email, or use the contact form below, and we’ll get back to you as soon as possible.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/contact-hero.jpg"
              alt="Contact us"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </section>

        
        <section className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition">
            <Mail size={40} className="text-teal-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Email Us</h2>
            <p className="text-gray-600">support@medistore.com</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition">
            <Phone size={40} className="text-teal-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Call Us</h2>
            <p className="text-gray-600">+1 234 567 890</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition">
            <MapPin size={40} className="text-teal-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Visit Us</h2>
            <p className="text-gray-600">123 Health St, Wellness City, USA</p>
          </div>
        </section>

      
        <section className="bg-teal-50 p-8 rounded-lg max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-teal-600 mb-6 text-center">Send Us a Message</h2>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition"
            >
              Send Message
            </button>
          </form>
        </section>

    
        <section className="text-center bg-teal-50 py-12 rounded-lg">
          <h2 className="text-3xl font-bold text-teal-600 mb-4">Need Immediate Assistance?</h2>
          <p className="text-gray-700 mb-6">Call us now or email our support team for quick help.</p>
          <Link
            href="/shop"
            className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-700 transition"
          >
            Browse Our Store
          </Link>
        </section>

      </div>
    </div>
  );
}
