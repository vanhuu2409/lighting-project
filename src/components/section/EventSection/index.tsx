import { fadeInUp, projects, stagger } from "@/components/constants/animations";
import { BLUR_IMAGE } from "@/components/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const EventSection = () => {
  return (
    <section id='events' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='mb-12'
        >
          <h2 className='text-5xl md:text-7xl font-bold mb-4 uppercase !leading-tight'>
            Sự kiện & hoạt động
          </h2>
          <p className='leading-snug tracking-tight text-base md:text-lg text-justify text-neutral-900'>
            Đồng hành cùng <b className='text-mainColor'>Thắp Sáng</b>{" "}
            <b>CẢI THIỆN CHẤT LƯỢNG CUỘC SỐNG</b> người dân vùng khó khăn.
          </p>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={stagger}
          className='grid md:grid-cols-9 grid-cols-1 md:grid-rows-5 gap-6'
        >
          {projects.map((option, index) => (
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
              <div className='absolute bottom-6 left-6 right-6 transform translate-y-0 lg:translate-y-8 lg:group-hover:translate-y-0 transition-transform duration-500 ease-out'>
                <h3 className='text-lg font-bold text-white mb-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-100'>
                  {option.title}
                </h3>
                <p className='text-sm text-white/90 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-200'>
                  {option.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventSection;
