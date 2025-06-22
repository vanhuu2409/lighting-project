import { motion } from "framer-motion";
import Image from "next/image";
import { BLUR_IMAGE } from "@/components/constants";
import { useState, useEffect } from "react";
import { ProductSkeleton } from "@/components/common";

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

const tourOptions = [
  {
    image: "/images/home/tour_options/image_tour_option1.png",
    title: "2 Days Cruise",
    description: "Experience The Ancient History & Beaches",
    gridClass: "md:col-span-3 md:row-span-3",
    aspectClass: "aspect-square",
  },
  {
    image: "/images/home/tour_options/image_tour_option2.png",
    title: "3 Days Cruise",
    description: "Discover The Land Of Pharaohs & Pyramids",
    gridClass: "md:col-span-3 md:row-span-3 md:col-start-4",
    aspectClass: "aspect-square",
  },
  {
    image: "/images/home/tour_options/image_tour_option3.png",
    title: "Cat Ba Island",
    description: "Embark On A Journey For Your Lifetime",
    gridClass: "md:col-span-6 md:row-span-2 md:col-start-1 md:row-start-4",
    aspectClass: "aspect-square md:aspect-[3/1]",
  },
  {
    image: "/images/home/tour_options/image_tour_option4.png",
    title: "Halong Bay",
    description: "Indulge In The Art, Culture, And Cuisine",
    gridClass: "md:col-span-3 md:row-span-5 md:col-start-7 md:row-start-1",
    aspectClass: "aspect-square md:aspect-[3/5]",
    isHighlight: true,
  },
];

const TourCardSkeleton = () => {
  return (
    <>
      <div className='md:col-span-6 md:row-span-3'>
        <ProductSkeleton className='h-full' />
      </div>
      <div className='md:col-span-3 md:row-span-2'>
        <ProductSkeleton className='h-full' />
      </div>
      <div className='md:col-span-3 md:row-span-3'>
        <ProductSkeleton className='h-full' />
      </div>
      <div className='md:col-span-6 md:row-span-2'>
        <ProductSkeleton className='h-full' />
      </div>
    </>
  );
};

export default function AdvisorTeamSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for demo
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id='why-us' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='text-center mb-16'
        >
          <h2 className='text-4xl font-bold text-blue-800 mb-4'>
            Meet Our Advisor Team
          </h2>
          <p className='text-sm text-gray-900'>
            Our experienced advisor team is here to help you plan your perfect
            cruise vacation.
          </p>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={stagger}
          className='grid md:grid-cols-9 grid-cols-1 md:grid-rows-5 gap-6'
        >
          {isLoading ? (
            <TourCardSkeleton />
          ) : (
            tourOptions.map((option, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`${option.gridClass} relative group overflow-hidden cursor-pointer rounded-2xl`}
              >
                <div
                  className={`${option.aspectClass} overflow-hidden h-full relative`}
                >
                  <Image
                    src={option.image}
                    alt={option.title}
                    className='object-cover group-hover:scale-110 transition-transform duration-500'
                    fill
                    sizes='(max-width: 768px) 100vw, 33vw'
                    placeholder='blur'
                    blurDataURL={BLUR_IMAGE}
                  />
                </div>
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                <div className='absolute bottom-6 left-6 right-6'>
                  <h3 className='text-lg font-bold text-white mb-2'>
                    {option.title}
                  </h3>
                  <p className='text-sm text-white/90'>{option.description}</p>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
}
