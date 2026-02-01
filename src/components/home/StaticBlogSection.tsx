import Link from "next/link";
import { FaUserAlt, FaTag } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { blogs } from "@/data/blogs";

export default function StaticBlogSection() {
  return (
    <section className="bg-[#f8fbfb] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.slug} // ✅ fixed: use slug instead of id
              className="bg-white shadow-sm hover:shadow-md transition duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                {/* Top Info */}
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2 text-green-600">
                    <FaUserAlt /> <span>by Admin</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <FaTag /> <span>{blog.category}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-5 leading-snug">
                  {blog.title}
                </h3>

                <hr className="mb-5" />

                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2 text-gray-500">
                    <FiCalendar className="text-green-600" />
                    {blog.date}
                  </div>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="text-green-600 font-semibold hover:underline"
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
