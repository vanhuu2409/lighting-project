"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { Partner } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";

const PartnerSkeleton = ({ index }: { index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className='relative size-full w-[100px] shrink-0 self-stretch my-auto aspect-[4/3] rounded-lg bg-gray-200 animate-pulse'
    />
  );
};

interface PartnerSectionProps {
  className?: string;
}
const demoData = [
  {
    id: "1",
    name: "Bliss WorldWide",
    logo: "/images/home/partners/bliss_worldwide.png",
  },
  {
    id: "2",
    name: "Adventure",
    logo: "/images/home/partners/adventure.png",
  },
  {
    id: "3",
    name: "Maichau Tourist",
    logo: "/images/home/partners/maichau_tourist.png",
  },
  {
    id: "4",
    name: "Hagiang Travel",
    logo: "/images/home/partners/hagiang_travel.png",
  },
  {
    id: "5",
    name: "Halong Travel",
    logo: "/images/home/partners/halong_travel.png",
  },
];

function PartnerSection({ className = "" }: PartnerSectionProps) {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setPartners(demoData as unknown as Partner[]);
      } catch (error) {
        console.error("Error fetching partners:", error);
        setPartners(demoData as unknown as Partner[]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPartners();

    return () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={containerVariants}
      className={`flex flex-wrap gap-6 justify-center items-center py-24 ${className}`}
    >
      {isLoading
        ? Array(5)
            .fill(0)
            .map((_, index) => <PartnerSkeleton key={index} index={index} />)
        : partners.map((partner, index) => (
            <motion.div
              key={partner.id || index}
              variants={itemVariants}
              className='relative size-full w-[100px] shrink-0 self-stretch my-auto aspect-[4/3] group'
            >
              <Image
                sizes='(max-width: 768px) 100vw, 33vw'
                src={partner.logo}
                alt={partner.name}
                fill
                className='object-contain transition-transform duration-300 group-hover:scale-110'
              />
            </motion.div>
          ))}
    </motion.section>
  );
}

export default PartnerSection;
