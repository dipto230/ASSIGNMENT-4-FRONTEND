import Image from "next/image";

export default function FAQPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
      
    
      <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          
          <div>
            <h3 className="font-semibold text-lg">How do I place an order?</h3>
            <p className="text-gray-600">
              Browse products from the shop, add items to your cart, and proceed to checkout. Fill in your details and confirm your order.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">How long does delivery take?</h3>
            <p className="text-gray-600">
              Delivery usually takes 2–5 business days depending on your location.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Can I track my order?</h3>
            <p className="text-gray-600">
              Yes! You can track your order from the “My Orders” section in your profile.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">What payment methods are available?</h3>
            <p className="text-gray-600">
              We support online payments, cards, and cash on delivery.
            </p>
          </div>

        </div>
      </div>

      
     
      <div className="flex justify-center">
        <Image
          src="/faq/faq-image.png" // 👉 public folder e image add korba
          alt="FAQ"
          width={500}
          height={500}
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}