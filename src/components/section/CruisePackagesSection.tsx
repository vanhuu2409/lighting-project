"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import IconHeart from "@/components/icon/IconHeart";
import { Product } from "@/types/product.type";
import productService from "@/services/product.service";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BLUR_IMAGE, DEFAULT_IMAGE } from "@/components/constants";
import { ProductSkeleton } from "@/components/common";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.4,
      bounce: 0.3,
    },
  },
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

export default function CruisePackagesSection() {
  const router = useRouter();
  const MAX_PRODUCTS = 9;

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    productService
      .getAllProducts()
      .then((data) => {
        const limitedProducts = (data.list || cruisePackages).slice(
          0,
          MAX_PRODUCTS
        );
        setProducts(limitedProducts);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleViewAllClick = () => {
    router.push("/tours");
  };

  return (
    <section id='cruise-packages' className='py-20'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-2.5 space-y-2'>
          <motion.h2
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
            className='text-4xl font-bold text-blue-800'
          >
            Cruise Packages
          </motion.h2>
          <motion.button
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            onClick={handleViewAllClick}
            className='text-stone-950 underline underline-offset-2 max-md:ml-auto hover:text-blue-700 font-medium text-base md:text-lg flex items-center gap-1 leading-relaxed'
          >
            <span>View All</span>
            <ArrowRight className='md:size-6 size-4' />
          </motion.button>
        </div>

        <motion.div
          initial='hidden'
          animate='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'
        >
          {isLoading
            ? Array(6)
                .fill(0)
                .map((_, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <ProductSkeleton />
                  </motion.div>
                ))
            : products.map((cruise) => (
                <motion.div
                  key={cruise.id}
                  variants={itemVariants}
                  className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer'
                >
                  <Link href={`/cruise/${cruise.id}`}>
                    <div className='aspect-[4/3] overflow-hidden relative'>
                      <Image
                        src={cruise?.urls[0]?.url || DEFAULT_IMAGE}
                        alt={cruise.name}
                        fill
                        sizes='(max-width: 768px) 100vw, 33vw'
                        className='size-full object-cover group-hover:scale-110 transition-transform duration-500'
                        placeholder='blur'
                        blurDataURL={BLUR_IMAGE}
                      />
                    </div>
                    <div className='p-6'>
                      <h3 className='text-xl font-bold text-gray-900 mb-2 leading-7 line-clamp-2'>
                        {cruise.name}
                      </h3>
                      <p className='text-neutral-500 text-sm mb-4 line-clamp-3 leading-tight'>
                        {cruise.description}
                      </p>
                      <div className='flex justify-between items-end'>
                        <div>
                          <span className='text-xs text-neutral-500'>
                            Starting from
                          </span>
                          <div className='text-2xl font-semibold leading-[32px] tracking-wide text-blue-800'>
                            ${cruise.price}
                          </div>
                          <span className='text-xs text-neutral-500'>
                            /person
                          </span>
                        </div>
                        <div className='flex flex-col items-end gap-3'>
                          <IconHeart />
                          <button className='bg-white text-blue-800 px-4 py-2 rounded hover:bg-blue-50 text-xs outline outline-[0.75px] outline-offset-[-0.75px] outline-blue-800 transition-colors'>
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
        </motion.div>
      </div>
    </section>
  );
}
