"use client";

import { BLUR_IMAGE, DEFAULT_IMAGE } from "@/components/constants";
import { Blog } from "@/types";
import { motion } from "framer-motion";
import { Calendar, User, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const FeaturedPostSkeleton = () => {
  return (
    <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
      {/* Image skeleton */}
      <div className='aspect-[16/9] bg-gray-200 animate-pulse' />

      <div className='p-8 space-y-4'>
        {/* Author and date */}
        <div className='flex items-center space-x-4'>
          <div className='flex items-center space-x-2'>
            <div className='w-4 h-4 bg-gray-200 rounded animate-pulse' />
            <div className='w-20 h-4 bg-gray-200 rounded animate-pulse' />
          </div>
          <div className='flex items-center space-x-2'>
            <div className='w-4 h-4 bg-gray-200 rounded animate-pulse' />
            <div className='w-24 h-4 bg-gray-200 rounded animate-pulse' />
          </div>
        </div>

        {/* Title */}
        <div className='h-8 bg-gray-200 rounded w-3/4 animate-pulse' />

        {/* Excerpt */}
        <div className='space-y-2'>
          <div className='h-4 bg-gray-200 rounded w-full animate-pulse' />
          <div className='h-4 bg-gray-200 rounded w-5/6 animate-pulse' />
        </div>

        {/* Button */}
        <div className='w-32 h-6 bg-gray-200 rounded animate-pulse' />
      </div>
    </div>
  );
};

const RecentPostSkeleton = () => {
  return (
    <div className='flex space-x-4'>
      {/* Thumbnail */}
      <div className='flex-shrink-0 w-20 h-20 rounded-lg bg-gray-200 animate-pulse' />

      <div className='flex-1 space-y-2'>
        {/* Title */}
        <div className='h-4 bg-gray-200 rounded w-5/6 animate-pulse' />
        <div className='h-4 bg-gray-200 rounded w-3/4 animate-pulse' />

        {/* Meta */}
        <div className='flex items-center space-x-2'>
          <div className='w-16 h-3 bg-gray-200 rounded animate-pulse' />
          <div className='w-2 h-2 bg-gray-200 rounded-full animate-pulse' />
          <div className='w-20 h-3 bg-gray-200 rounded animate-pulse' />
        </div>
      </div>
    </div>
  );
};

const demoBlogPosts = [
  {
    id: 1,
    title: "When is the Best Time To Visit Halong Bay?",
    excerpt: "Discover the perfect seasons for your Halong Bay adventure",
    author: "Travel Expert",
    createdAt: "Jan 15, 2025",
    image: "/images/home/blog/image_blog1.png",
  },
  {
    id: 2,
    title: "Top 10 Must-Visit Caves in Halong Bay",
    excerpt: "Explore the most stunning caves and grottos",
    author: "Adventure Guide",
    createdAt: "Jan 12, 2025",
    image: "/images/home/blog/image_blog2.png",
  },
  {
    id: 3,
    title: "Halong Bay Photography Tips",
    excerpt: "Capture the perfect shot of limestone karsts",
    author: "Photography Pro",
    createdAt: "Jan 10, 2025",
    image: "/images/home/blog/image_blog3.png",
  },
  {
    id: 4,
    title: "Traditional Vietnamese Cuisine on Board",
    excerpt: "Experience authentic flavors during your cruise",
    author: "Food Critic",
    createdAt: "Jan 8, 2025",
    image: "/images/home/blog/image_blog4.png",
  },
];

const demoBlogTags = [
  "Halong Bay",
  "Cruise",
  "Travel Tips",
  "Photography",
  "Adventure",
  "Culture",
  "Food",
  "Nature",
];

export default function TravelBlog() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const [blogPosts, setBlogPosts] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setBlogPosts(demoBlogPosts as unknown as Blog[]);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();

    return () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <section className='py-20 bg-sky-50' id='travel-blog'>
      <div className='container mx-auto px-4 space-y-10'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className='text-4xl font-bold text-blue-800 mb-1'>Travel Blog</h2>
          <p className='text-sm text-neutral-900'>
            With over 20 years of expertise, Asia Pacific Travel has been
            crafting memorable journeys for travelers worldwide. Our experienced
            tour guides and dedicated advisor team ensure every detail of your
            adventure is seamless and unforgettable.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-3 gap-8'>
          {/* Featured Post */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}
            className='lg:col-span-2'
          >
            {isLoading ? (
              <FeaturedPostSkeleton />
            ) : (
              <div className='bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300'>
                <div className='aspect-[16/9] overflow-hidden relative size-full'>
                  <Image
                    src={blogPosts[0]?.image || DEFAULT_IMAGE}
                    alt='Featured Post'
                    className=' object-cover group-hover:scale-110 transition-transform duration-500'
                    sizes='(max-width: 768px) 100vw, 33vw'
                    placeholder='blur'
                    blurDataURL={BLUR_IMAGE}
                    fill
                  />
                </div>
                <div className='p-8'>
                  <div className='flex items-center space-x-4 text-sm text-gray-500 mb-4'>
                    <div className='flex items-center space-x-2'>
                      <User className='w-4 h-4' />
                      <span>{blogPosts[0]?.author || ""}</span>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <Calendar className='w-4 h-4' />
                      <span>{blogPosts[0]?.createdDate || ""}</span>
                    </div>
                  </div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                    {blogPosts[0]?.title || ""}
                  </h3>
                  <p className='text-gray-600 mb-6 leading-relaxed'>
                    {blogPosts[0]?.excerpt || ""}
                  </p>
                  <button className='text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-2 group'>
                    <span>Read Full Article</span>
                    <ChevronRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                  </button>
                </div>
              </div>
            )}
          </motion.div>

          {/* Sidebar with Recent Posts */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={stagger}
            className='space-y-6'
          >
            <motion.div
              variants={fadeInUp}
              className='bg-gray-50 rounded-2xl p-6'
            >
              <motion.h4 className='text-xl font-bold text-gray-900 mb-6'>
                Recent Posts
              </motion.h4>
              <div className='space-y-6'>
                {isLoading
                  ? Array(3)
                      .fill(0)
                      .map((_, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                          <RecentPostSkeleton />
                        </motion.div>
                      ))
                  : blogPosts.slice(1).map((post) => (
                      <motion.div
                        key={post.id}
                        variants={fadeInUp}
                        className='group cursor-pointer'
                      >
                        <div className='flex space-x-4'>
                          <div className='flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden relative'>
                            <Image
                              src={post.image || DEFAULT_IMAGE}
                              alt={post.title}
                              className='size-full object-cover group-hover:scale-110 transition-transform duration-300'
                              sizes='(max-width: 768px) 100vw, 33vw'
                              placeholder='blur'
                              blurDataURL={BLUR_IMAGE}
                              fill
                            />
                          </div>
                          <div className='flex-1'>
                            <h5 className='font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors'>
                              {post.title}
                            </h5>
                            <div className='flex items-center space-x-2 text-xs text-gray-500'>
                              <span>{post.author}</span>
                              <span>•</span>
                              <span>{post.createdDate}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
              </div>
            </motion.div>

            {/* Popular Tags */}
            <motion.div
              variants={fadeInUp}
              className='bg-white rounded-2xl p-6'
            >
              <h4 className='text-xl font-bold text-gray-900 mb-4'>
                Popular Tags
              </h4>
              <div className='flex flex-wrap gap-2'>
                {isLoading
                  ? Array(8)
                      .fill(0)
                      .map((_, index) => (
                        <div
                          key={index}
                          className='w-16 h-6 bg-gray-200 rounded-full animate-pulse'
                        />
                      ))
                  : demoBlogTags.map((tag, index) => (
                      <span
                        key={index}
                        className='px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-blue-100 hover:text-blue-600 cursor-pointer transition-colors'
                      >
                        {tag}
                      </span>
                    ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
