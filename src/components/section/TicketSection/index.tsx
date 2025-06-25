import {
  demoExperiences,
  fadeInUp,
  stagger,
} from "@/components/constants/animations";
import { BLUR_IMAGE } from "@/components/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const TicketSection = () => {
  return (
    <section id='tickets' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='mb-12'
        >
          <h2 className='text-5xl md:text-7xl font-bold mb-4 uppercase'>
            Hoạt động sắp tới
          </h2>
          <p className='leading-snug tracking-tight text-base md:text-lg text-justify text-neutral-900'>
            Tham gia các buổi biểu diễn từ thiện tại những địa điểm nổi tiếng
            nhất Đà Nẵng. Mỗi tấm vé bạn mua là một{" "}
            <b className='text-mainColor'>đóng góp ý nghĩa</b> cho dự án{" "}
            <b>THẮP SÁNG</b> - mang ánh sáng đến vùng cao.
          </p>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={stagger}
          className='grid md:grid-cols-3 gap-8'
        >
          {demoExperiences.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className='group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer'
            >
              <div className='size-full relative aspect-[3/4] overflow-hidden'>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes='(max-width: 768px) 100vw, 33vw'
                  className='object-cover group-hover:scale-110 transition-transform duration-500'
                  placeholder='blur'
                  blurDataURL={BLUR_IMAGE}
                />
              </div>
              <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent' />
              <div className='absolute bottom-0 inset-x-0 p-6 text-white'>
                <div className='bg-black/20 backdrop-blur-sm rounded-xl p-4 shadow-[0px_4px_48px_0px_rgba(0,0,0,0.15)]'>
                  <h3 className='text-lg font-bold text-center mb-3'>
                    {item.title}
                  </h3>
                  <p className='text-sm opacity-90 text-center leading-relaxed'>
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TicketSection;
