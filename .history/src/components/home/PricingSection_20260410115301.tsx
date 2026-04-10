"use client";

export default function PricingSection() {
  const plans = [
    {
      name: "Basic Consultation",
      price: "₹499",
      desc: "Perfect for quick health advice",
      features: [
        "General Doctor Consultation",
        "Basic Health Checkup",
        "Email Support",
      ],
      highlight: false,
    },
    {
      name: "Premium Checkup",
      price: "₹999",
      desc: "Best for complete health analysis",
      features: [
        "Full Body Checkup",
        "Specialist Consultation",
        "Priority Support",
        "Free Follow-up",
      ],
      highlight: true,
    },
    {
      name: "Emergency Support",
      price: "₹1499",
      desc: "Immediate medical assistance",
      features: [
        "24/7 Doctor Availability",
        "Emergency Consultation",
        "Instant Response",
        "Dedicated Support",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      
      {/* 🔥 Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Consultation Plans 💊
        </h2>
        <p className="text-gray-600 mt-3 text-sm">
          Choose the perfect plan for your healthcare needs
        </p>
      </div>

      {/* 💎 Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-2xl p-6 shadow-md transition duration-300 hover:scale-105 ${
              plan.highlight
                ? "bg-green-600 text-white shadow-xl scale-105"
                : "bg-white"
            }`}
          >
            {/* 🔥 Badge */}
            {plan.highlight && (
              <span className="absolute top-4 right-4 text-xs bg-white text-green-600 px-3 py-1 rounded-full font-semibold">
                Most Popular
              </span>
            )}

            {/* 🧾 Plan Info */}
            <h3 className="text-lg font-semibold">{plan.name}</h3>
            <p className="text-sm mt-1 opacity-80">{plan.desc}</p>

            {/* 💰 Price */}
            <div className="mt-5 mb-6">
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-sm opacity-70"> / visit</span>
            </div>

            {/* ✅ Features */}
            <ul className="space-y-3 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span>✔</span> {feature}
                </li>
              ))}
            </ul>

            {/* 🚀 Button */}
            <button
              className={`mt-6 w-full py-2 rounded-lg font-medium transition ${
                plan.highlight
                  ? "bg-white text-green-600 hover:bg-gray-100"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}