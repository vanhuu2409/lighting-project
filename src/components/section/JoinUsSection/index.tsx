import {
  demoExperiences,
  fadeInUp,
  stagger,
} from "@/components/constants/animations";
import { BLUR_IMAGE } from "@/components/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const JoinUsSection = () => {
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
          <h2 className='text-5xl md:text-7xl font-bold mb-4 uppercase !leading-tight'>
            Tham gia cùng chúng tôi
          </h2>
          <p className='leading-snug tracking-tight text-base md:text-lg text-justify text-neutral-900'>
            Đồng hành cùng <b className='text-mainColor'>Thắp Sáng</b>{" "}
            <b>MANG ÁNH SÁNG VÀ HY VỌNG</b> đến những vùng đất khó khăn nhất
            Việt Nam.
          </p>
        </motion.div>

        <motion.div
          initial='hidden'
          animate='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className='grid md:grid-cols-3 gap-8'
        >
          {demoExperiences.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer overflow-hidden transform hover:-translate-y-3 hover:scale-[1.02] hover:rotate-1 relative'
            >
              <div className='relative'>
                {/* Image Container */}
                <div className='relative aspect-[3/2] overflow-hidden'>
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

                {/* Heart Icon */}
                <button className='absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors duration-200'>
                  <svg
                    className='w-4 h-4 text-gray-600 hover:text-red-500 transition-colors duration-200'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                    />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-3 leading-tight'>
                  {item.title}
                </h3>

                <div className='space-y-2 mb-4'>
                  <div className='flex items-center gap-2 text-gray-600'>
                    <svg
                      className='w-4 h-4 text-mainColor'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <span className='text-sm font-medium'>{item.location}</span>
                  </div>
                  <div className='flex items-center gap-2 text-gray-600'>
                    <svg
                      className='w-4 h-4 text-mainColor'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <span className='text-sm font-medium'>
                      {new Date(item.date).toLocaleDateString("vi-VN", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}{" "}
                      • {item.time}
                    </span>
                  </div>
                </div>

                <p className='text-sm text-gray-600 leading-relaxed mb-6'>
                  {item.description}
                </p>

                {/* Price and Button */}
                <div className='flex items-end justify-between'>
                  <div>
                    <p className='text-sm text-gray-500 mb-1'>Vé từ</p>
                    <div className='flex items-baseline gap-1'>
                      <span className='text-2xl font-bold bg-gradient-to-r from-mainColor to-orange-500 bg-clip-text text-transparent'>
                        150.000₫
                      </span>
                      <span className='text-sm text-gray-500'>/người</span>
                    </div>
                  </div>
                  <button className='px-4 py-2 bg-gradient-to-r from-mainColor to-orange-500 text-white text-sm font-medium rounded-lg hover:from-mainColor/90 hover:to-orange-500/90 transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105'>
                    Tham gia
                  </button>
                </div>
              </div>

              {/* Coming Soon Overlay - Covers entire card */}
              {item.isComingSoon && (
                <div className='absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center rounded-2xl z-10'>
                  <div className='text-center'>
                    <div className='bg-white/95 backdrop-blur-md rounded-xl px-8 py-6 shadow-xl border border-white/20'>
                      <h4 className='text-2xl font-bold text-gray-900 mb-2'>
                        Coming Soon
                      </h4>
                      <p className='text-base text-gray-600'>Sắp ra mắt</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUsSection;
