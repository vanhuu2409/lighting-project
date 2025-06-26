import { Button } from "@/components/ui/common/button";
import { Card, CardContent } from "@/components/ui/common/card";
import { Facebook, Mail, Users } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id='cta' className='bg-mainColor py-16 md:py-24'>
      <div className='container mx-auto px-4'>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='text-5xl md:text-7xl font-bold text-white mb-16 uppercase'
        >
          ĐỒNG HÀNH CÙNG THẮP SÁNG
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, staggerChildren: 0.2 }}
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {/* Facebook Fanpage */}
          <Card className='bg-white/20 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/25 transition-all duration-300 border border-white/20 shadow-lg hover:shadow-xl'>
            <CardContent className='p-8 text-center'>
              <div className='w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg'>
                <Facebook className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-white mb-4'>
                THEO DÕI FANPAGE
              </h3>
              <p className='text-white/90 mb-6'>
                Theo dõi các hoạt động, sự kiện và những câu chuyện ý nghĩa từ
                dự án Thắp Sáng trên Facebook.
              </p>
              <Button
                className='bg-white text-mainColor hover:bg-white/90'
                onClick={() =>
                  window.open("https://www.facebook.com/duanthapsang", "_blank")
                }
              >
                TRUY CẬP FANPAGE
              </Button>
            </CardContent>
          </Card>

          {/* Volunteer Registration */}
          <Card className='bg-white/20 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/25 transition-all duration-300 border border-white/20 shadow-lg hover:shadow-xl'>
            <CardContent className='p-8 text-center'>
              <div className='w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg'>
                <Users className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-white mb-4'>
                ĐĂNG KÝ TÌNH NGUYỆN
              </h3>
              <p className='text-white/90 mb-6'>
                Tham gia đội ngũ tình nguyện viên để cùng mang ánh sáng đến
                những vùng đất khó khăn nhất Việt Nam.
              </p>
              <Button
                className='bg-white text-mainColor hover:bg-white/90'
                onClick={() =>
                  window.open(
                    "https://forms.google.com/volunteer-registration-demo",
                    "_blank"
                  )
                }
              >
                ĐĂNG KÝ NGAY
              </Button>
            </CardContent>
          </Card>

          {/* Contact Email */}
          <Card className='bg-white/20 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/25 transition-all duration-300 border border-white/20 shadow-lg hover:shadow-xl'>
            <CardContent className='p-8 text-center'>
              <div className='w-20 h-20 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg'>
                <Mail className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-white mb-4'>
                LIÊN HỆ TRỰC TIẾP
              </h3>
              <p className='text-white/90 mb-6'>
                Có ý tưởng hợp tác hoặc cần hỗ trợ? Hãy gửi email cho chúng tôi
                để được tư vấn và hỗ trợ nhanh nhất.
              </p>
              <Button
                className='bg-white text-mainColor hover:bg-white/90'
                onClick={() =>
                  window.open(
                    "mailto:duanthapsang@gmail.com?subject=Liên hệ về dự án Thắp Sáng",
                    "_blank"
                  )
                }
              >
                GỬI EMAIL
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
