"use client";

import Image from "next/image";

export default function MedicalGoods() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6">

        {/* LEFT: IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/medical-shield.jpg" // path from public
            alt="Medical Goods Protection"
            width={500}
            height={500}
            priority
            className="max-w-full h-auto"
          />
        </div>

        {/* RIGHT: CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your faithful partners <br /> Medical Goods
          </h2>

          <p className="text-gray-600 mb-6">
            Houzez allow you to design unlimited panels and real estate custom
            forms to capture leads and keep record of all information
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              ✅ Better security for patient privacy and information.
            </li>
            <li className="flex items-center gap-3">
              ✅ More products at lower prices.
            </li>
            <li className="flex items-center gap-3">
              ✅ Connect customers with the power of eCommerce.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
