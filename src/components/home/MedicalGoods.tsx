import Image from "next/image";

const MedicalGoods = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

     
          <div className="flex justify-center">
            <Image
              src="/medical-shield.jpg"   
              alt="Medical Security"
              width={450}
              height={450}
              className="object-contain"
              priority
            />
          </div>

          
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Your faithful partners <br /> Medical Goods
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Houzez allow you to design unlimited panels and real estate
              custom forms to capture leads and keep record of all information
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-green-600 text-xl">✔</span>
                <span>Better security for patient privacy and information.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-600 text-xl">✔</span>
                <span>More products at lower prices.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-600 text-xl">✔</span>
                <span>Connect customers with the power of eCommerce.</span>
              </li>
            </ul>

            <div className="flex items-center gap-6 pt-6 border-t">
              <div>
                <p className="font-semibold">Jerry Henson</p>
                <p className="text-sm text-gray-500">Medical Specialist</p>
              </div>

              <div className="bg-gray-50 px-6 py-3 rounded-lg">
                <p className="text-sm text-gray-500">Get Support</p>
                <p className="font-semibold text-green-600">
                  123-456-789-10
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalGoods;
