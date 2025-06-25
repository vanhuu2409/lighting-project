import { BLUR_IMAGE } from "@/components/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className='mt-20'>
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className='w-full relative select-none h-[80vh]'
      >
        <Image
          src='/images/banner.png'
          alt='banner'
          fill
          className='object-cover'
          sizes='100vw 80vh'
          priority
          placeholder='blur'
          blurDataURL={
            "data:image/png;base64,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"
          }
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
