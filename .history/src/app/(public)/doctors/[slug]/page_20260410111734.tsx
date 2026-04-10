import { doctors } from "@/data/doctors";
import { notFound } from "next/navigation";

export default function DoctorDetails({ params }: any) {
  const doctor = doctors.find(d => d.slug === params.slug);

  if (!doctor) return notFound();

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-white to-green-50">
      
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl p-10 grid md:grid-cols-2 gap-10">
        
        {/* 👤 Left: Image */}
        <div className="flex justify-center items-center">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-80 h-80 object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* 💡 Right: Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800">
            {doctor.name}
          </h1>

          <p className="text-green-600 mt-2">
            {doctor.specialty}
          </p>

          <p className="mt-6 text-gray-700 leading-relaxed text-lg">
            {doctor.tip}
          </p>
        </div>
      </div>
    </div>
  );
}