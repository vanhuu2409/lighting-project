"use client";

import { motion } from "framer-motion";
import { TourCard } from "@/components/ui";
import { useEffect, useState } from "react";
import { Product } from "@/types";
import productService from "@/services/product.service";
import { DEFAULT_IMAGE } from "@/components/constants";

const TourCardSkeleton = ({ index }: { index: number }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className='bg-white rounded-2xl p-4 shadow-lg space-y-4'
    >
      {/* Image skeleton */}
      <div className='relative w-full aspect-[4/3] rounded-xl bg-gray-200 animate-pulse overflow-hidden' />

      {/* Content skeleton */}
      <div className='space-y-4'>
        {/* Title and rating */}
        <div className='flex justify-between items-start'>
          <div className='space-y-2 flex-1'>
            <div className='h-6 bg-gray-200 rounded w-3/4 animate-pulse' />
            <div className='h-4 bg-gray-200 rounded w-1/2 animate-pulse' />
          </div>
          <div className='flex items-center space-x-1'>
            <div className='h-5 w-5 bg-gray-200 rounded animate-pulse' />
            <div className='h-4 w-8 bg-gray-200 rounded animate-pulse' />
          </div>
        </div>

        {/* Details */}
        <div className='space-y-2'>
          <div className='h-4 bg-gray-200 rounded w-full animate-pulse' />
          <div className='h-4 bg-gray-200 rounded w-5/6 animate-pulse' />
        </div>

        {/* Price and button */}
        <div className='flex items-center justify-between pt-2'>
          <div className='h-6 w-24 bg-gray-200 rounded animate-pulse' />
          <div className='h-10 w-32 bg-gray-200 rounded-lg animate-pulse' />
        </div>
      </div>
    </motion.div>
  );
};

const cruisePackages: Product[] = [
  {
    id: "1",
    name: "Orchid Classic Cruise",
    location: "Halong Bay",
    rating: 4.8,
    reviews: 234,
    price: 299,
    image: "/images/home/affordable/image_affordable1.png",
    routing: "Ha Noi - Ha Long - Ha Noi",
    tourStyle: "Nature, Culture & History Tour",
    tourStart: "In Ha Noi",
    tourEnd: "In Ha Noi",
    description:
      "Orchid Classic Cruise is a 2-day, 1-night cruise that offers a unique experience of Halong Bay. The cruise includes a visit to the Titov Island, Sung Sot Cave, and Luon Cave.",
    urls: [
      {
        url: "/images/home/affordable/image_affordable1.png",
        type: 1,
      },
    ],
    status: 1,
    overviews: [],
    tripDuration: "2 Days 1 Night",
    tag: [],
    isDelete: false,
    pageSite: 1,
    createdDate: new Date().toISOString(),
    latestUpdate: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Paradise Elegance",
    location: "Halong & Lan Ha Bay",
    rating: 4.9,
    reviews: 189,
    price: 499,
    image: "/images/home/affordable/image_affordable2.png",
    routing: "Ha Noi - Lan Ha - Ha Noi",
    tourStyle: "Luxury, Adventure",
    tourStart: "In Ha Noi",
    tourEnd: "In Ha Noi",
    description:
      "Paradise Elegance is a 3-day, 2-night cruise that offers a unique experience of Halong Bay. The cruise includes a visit to the Titov Island, Sung Sot Cave, and Luon Cave.",
    urls: [
      {
        url: "/images/home/affordable/image_affordable2.png",
        type: 1,
      },
    ],
    status: 1,
    overviews: [],
    tripDuration: "3 Days 2 Nights",
    tag: [],
    isDelete: false,
    pageSite: 1,
    createdDate: new Date().toISOString(),
    latestUpdate: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Dragon Legend Cruise",
    location: "Bai Tu Long Bay",
    rating: 4.7,
    reviews: 156,
    price: 349,
    image: "/images/home/affordable/image_affordable3.png",
    routing: "Ha Noi - Bai Tu Long - Ha Noi",
    tourStyle: "Classic, Local Experience",
    tourStart: "In Ha Noi",
    tourEnd: "In Ha Noi",
    description:
      "Dragon Legend Cruise is a 2-day, 1-night cruise that offers a unique experience of Halong Bay. The cruise includes a visit to the Titov Island, Sung Sot Cave, and Luon Cave.",
    urls: [
      {
        url: "/images/home/affordable/image_affordable3.png",
        type: 1,
      },
    ],
    status: 1,
    overviews: [],
    tripDuration: "2 Days 1 Night",
    tag: [],
    isDelete: false,
    pageSite: 1,
    createdDate: new Date().toISOString(),
    latestUpdate: new Date().toISOString(),
  },
];

export default function AffordableCruises() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const [products = cruisePackages, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAllProducts();
        setProducts(data.list || cruisePackages);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts(cruisePackages);
      } finally {
        setTimeout(() => setIsLoading(false), 1000);
      }
    };

    fetchProducts();

    return () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <section className='py-20' id='booking-tour'>
      <div className='container mx-auto md:!px-20 !py-20 !px-4 bg-gradient-to-br from-slate-50 via-sky-50 to-sky-50 rounded-[20px] space-y-12'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='text-center'
        >
          <h2 className='text-4xl font-bold text-blue-800 mb-4'>
            Affordable Cruise Packages
          </h2>
          <p className='text-sm text-neutral-900'>
            With over 20 years of expertise, Asia Pacific Travel has been
            crafting memorable journeys for travelers worldwide. Our experienced
            tour guides and dedicated advisor team ensure every detail of your
            adventure is seamless and unforgettable.
          </p>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}
          className='grid lg:grid-cols-3 gap-6 items-center *:w-full'
        >
          {isLoading
            ? Array(6)
                .fill(0)
                .map((_, index) => (
                  <TourCardSkeleton key={index} index={index} />
                ))
            : products.map((product, index) => (
                <motion.div variants={fadeInUp} key={product.id || index}>
                  <TourCard
                    {...product}
                    image={product?.urls[0]?.url || DEFAULT_IMAGE}
                  />
                </motion.div>
              ))}
        </motion.div>
      </div>
    </section>
  );
}
