import { blogs } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <div className="p-10 text-center">Blog not found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        
        {/* Image */}
        <div className="relative w-full h-80">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-10">
          <p className="text-sm text-green-600 font-medium mb-2">
            {blog.category}
          </p>

          <h1 className="text-3xl font-bold text-gray-900 mb-3 leading-snug">
            {blog.title}
          </h1>

          <p className="text-gray-400 text-sm mb-8">{blog.date}</p>

          <div className="text-gray-700 leading-8 space-y-5 text-[17px]">
            {blog.content}
          </div>

          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-block mt-10 text-green-600 font-semibold hover:underline"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}
