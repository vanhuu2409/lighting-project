import { BLUR_IMAGE } from "@/components/constants";
import Image from "next/image";
import React from "react";
import { Eye, Heart, Sun } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id='about' className='bg-mainColor text-white py-16 md:py-24'>
      <div className='container mx-auto px-4'>
        {/* Top */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='flex gap-12 flex-col lg:flex-row items-center'
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className='space-y-4 flex-1'
          >
            <h1 className='text-7xl md:text-8xl font-bold font-great-vibes'>
              Thắp Sáng
            </h1>
            <p className='leading-snug tracking-tight text-base md:text-lg text-justify'>
              là một dự án trực thuộc <b>JCI Đà Nẵng</b>, với mục tiêu cải thiện
              chất lượng cuộc sống cho người dân{" "}
              <b>ở vùng khó khăn, thiếu điều kiện ánh sáng</b>, thông qua việc
              <b>
                {" "}
                lắp đặt đèn năng lượng mặt trời và máy phát điện quang năng.
              </b>{" "}
              Dự án được triển khai dựa trên 17 Mục tiêu Phát triển Bền vững (17
              SDGs) của <b>Liên Hợp Quốc</b>.
            </p>
            <p className='text-lg md:text-xl'>
              Thắp triệu ngọn <span className='font-bold'>đèn sáng</span> triệu
              con tim
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className='bg-white rounded-2xl p-2 size-[300px] md:size-[500px] overflow-hidden shadow-2xl'
          >
            <div className='rounded-lg overflow-hidden relative  aspect-square'>
              <Image
                src='https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=800&fit=crop&crop=center'
                alt='Solar panels bringing light to rural community'
                fill
                className='object-cover'
                placeholder='blur'
                blurDataURL={BLUR_IMAGE}
              />
            </div>
          </motion.div>
        </motion.div>
        {/* Bottom - Vision, Mission, Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className='mt-16 md:mt-24'
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8, staggerChildren: 0.2 }}
            className='grid md:grid-cols-3 gap-8'
          >
            {/* Tầm nhìn */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className='bg-white/20 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/25 transition-all duration-300 border border-white/20 shadow-lg hover:shadow-xl'
            >
              <div className='w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg'>
                <Eye className='w-10 h-10 text-white' />
              </div>
              <h3 className='text-2xl font-bold mb-4 text-white'>Tầm nhìn</h3>
              <p className='text-base leading-relaxed text-white'>
                Trở thành dự án hàng đầu về phát triển bền vững tại Việt Nam,
                mang ánh sáng và hy vọng đến mọi ngóc ngách của đất nước, góp
                phần xây dựng một cộng đồng văn minh và thịnh vượng.
              </p>
            </motion.div>

            {/* Sứ mệnh */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className='bg-white/20 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/25 transition-all duration-300 border border-white/20 shadow-lg hover:shadow-xl'
            >
              <div className='w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg'>
                <Sun className='w-10 h-10 text-white' />
              </div>
              <h3 className='text-2xl font-bold mb-4 text-white'>Sứ mệnh</h3>
              <p className='text-base leading-relaxed text-white'>
                Cải thiện chất lượng cuộc sống cho người dân vùng khó khăn thông
                qua việc cung cấp năng lượng sạch, bền vững. Kết nối cộng đồng
                và lan tỏa tinh thần tương thân tương ái trong xã hội.
              </p>
            </motion.div>

            {/* Giá trị cốt lõi */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className='bg-white/20 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/25 transition-all duration-300 border border-white/20 shadow-lg hover:shadow-xl'
            >
              <div className='w-20 h-20 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg'>
                <Heart className='w-10 h-10 text-white' />
              </div>
              <h3 className='text-2xl font-bold mb-4 text-white'>
                Giá trị cốt lõi
              </h3>
              <div className='text-base leading-relaxed text-white space-y-3'>
                <div className='flex items-center justify-center gap-3'>
                  <span className='text-xl'>🌱</span>
                  <span>Phát triển bền vững</span>
                </div>
                <div className='flex items-center justify-center gap-3'>
                  <span className='text-xl'>🤝</span>
                  <span>Kết nối cộng đồng</span>
                </div>
                <div className='flex items-center justify-center gap-3'>
                  <span className='text-xl'>💡</span>
                  <span>Sáng tạo và đổi mới</span>
                </div>
                <div className='flex items-center justify-center gap-3'>
                  <span className='text-xl'>❤️</span>
                  <span>Tình nguyện và chia sẻ</span>
                </div>
                <div className='flex items-center justify-center gap-3'>
                  <span className='text-xl'>🌟</span>
                  <span>Trách nhiệm xã hội</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
