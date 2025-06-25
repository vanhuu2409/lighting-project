import React from "react";
import { Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/components/constants/animations";

const TestimonialSection = () => {
  const iconVariant = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 150,
      },
    },
  };

  const pulseVariant = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id='testimonials' className='bg-mainColor py-16'>
      <div className='container mx-auto px-4'>
        <motion.div
          className='max-w-4xl mx-auto text-center text-white'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.div
            className='flex items-center justify-center mb-8'
            variants={fadeInUp}
          >
            <motion.div
              className='w-16 h-16 bg-white rounded-full flex items-center justify-center'
              variants={iconVariant}
              whileInView='animate'
              viewport={{ once: true }}
              animate={pulseVariant.animate}
            >
              <Lightbulb className='w-8 h-8 text-mainColor' />
            </motion.div>
          </motion.div>

          <motion.blockquote
            className='text-2xl md:text-3xl font-light mb-8 text-justify leading-tight tracking-tighter'
            variants={fadeInUp}
          >
            "Với sự hỗ trợ của các đối tác, chúng tôi đang mang ánh sáng và hy
            vọng đến những vùng đất khó khăn nhất. Mỗi ngọn đèn được thắp lên
            không chỉ là ánh sáng, mà còn là cơ hội cho một tương lai tươi sáng
            hơn."
          </motion.blockquote>

          <motion.p className='text-xl opacity-90' variants={fadeInUp}>
            — Đại diện dự án Thắp Sáng
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
