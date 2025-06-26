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
          src='/images/base-banner.png'
          alt='banner'
          fill
          className='object-cover'
          sizes='100vw 80vh'
          priority
          placeholder='blur'
          blurDataURL={BLUR_IMAGE}
        />

        {/* Text Overlay */}
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-center text-white px-4 max-w-6xl'>
            {/* Description Text */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className='text-base md:text-lg lg:text-xl mb-8 leading-relaxed lg:max-w-[54rem] mx-auto font-medium tracking-wide'
              style={{ textShadow: "2px 2px 4px rgba(255,255,255,0.7)" }}
            >
              "Thắp Sáng là dự án trực thuộc JCI Đà Nẵng, hướng đến cải thiện
              chất lượng cuộc sống cho người dân vùng khó khăn, thiếu điều kiện
              ánh sáng."
            </motion.p>

            {/* Main Title with Script Font */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              className='max-[400px]:text-7xl text-6xl lg:text-8xl leading-tight font-great-vibes'
              style={{
                textShadow:
                  "3px 3px 6px rgba(255,255,255,0.8), -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",
                WebkitTextStroke: "2px #fff",
              }}
            >
              Thắp triệu ngọn{" "}
              <span className='text-mainColor relative inline-block'>
                <span
                  className='relative inline-block text-[1.45em]'
                  style={{
                    textShadow:
                      "3px 3px 6px rgba(255,255,255,0.8), -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",
                    WebkitTextStroke: "2px #fff",
                  }}
                >
                  <span className='relative inline-block'>
                    S
                    <span
                      className='absolute inset-0 flex items-center justify-center text-[0.5em]'
                      style={{
                        textShadow:
                          "1px 1px 2px rgba(255,255,255,0.8), -0.5px -0.5px 0 #fff, 0.5px -0.5px 0 #fff, -0.5px 0.5px 0 #fff, 0.5px 0.5px 0 #fff",
                        WebkitTextStroke: "1px #fff",
                        // fontWeight: "bold",
                        // transform: "translateY(-10%)",
                      }}
                    >
                      đèn
                    </span>
                  </span>
                  áng
                </span>
              </span>{" "}
              triệu con tim
            </motion.h1>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
