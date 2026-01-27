import {
  BeakerIcon,
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import { getCategories } from "@/lib/api-client";

const icons = [
  BeakerIcon,
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon,
  Squares2X2Icon,
];

type Category = {
  id: string;
  name: string;
  medicines: { id: string }[];
};

const Categories = async () => {
  const categories: Category[] = await getCategories();

  return (
    <section className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
          {categories.map((category, index) => {
            const Icon = icons[index % icons.length];

            return (
              <a
                key={category.id}
                href={`/shop?category=${category.id}`}
                className="group flex flex-col items-center gap-3 rounded-xl p-4 hover:bg-gray-50 transition"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 group-hover:bg-teal-100 transition">
                  <Icon className="h-7 w-7 text-teal-600" />
                </div>

                <p className="text-sm font-semibold text-gray-900">
                  {category.name}
                </p>

                <p className="text-xs text-gray-500">
                  {category.medicines.length} medicines
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
