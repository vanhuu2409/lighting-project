"use client";
import { Button } from "@/components/ui/common/button";
import { Card, CardContent } from "@/components/ui/common/card";
import { Input } from "@/components/ui/common/input";
import {
  Heart,
  Users,
  Gift,
  Mail,
  Building,
  Calendar,
  Briefcase,
  LightbulbIcon,
  FireExtinguisher,
  Flame,
} from "lucide-react";
import { HoverText } from "@/components/common";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { motion, AnimatePresence } from "framer-motion";

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

const projects = [
  {
    image: "/images/village.jpg",
    title: "Du an",
    description: "Du an",
    gridClass: "md:col-span-3 md:row-span-3",
    aspectClass: "aspect-square",
  },
  {
    image: "/images/village.jpg",
    title: "Du an",
    description: "Du an",
    gridClass: "md:col-span-3 md:row-span-3 md:col-start-4",
    aspectClass: "aspect-square",
  },
  {
    image: "/images/village.jpg",
    title: "Du an",
    description: "Du an",
    gridClass: "md:col-span-6 md:row-span-2 md:col-start-1 md:row-start-4",
    aspectClass: "aspect-square md:aspect-[3/1]",
  },
  {
    image: "/images/village.jpg",
    title: "Du an",
    description: "Du an",
    gridClass: "md:col-span-3 md:row-span-5 md:col-start-7 md:row-start-1",
    aspectClass: "aspect-square md:aspect-[3/5]",
    isHighlight: true,
  },
];

const demoExperiences = [
  {
    title: "Sự kiện",
    image: "/images/village.jpg",
    description:
      "Đồng hành cùng Thắp Sáng CẢI THIỆN CHẤT LƯỢNG CUỘC SỐNG người dân vùng khó khăn.",
  },
  {
    title: "Hoạt động",
    image: "/images/village.jpg",
    description:
      "Đồng hành cùng Thắp Sáng CẢI THIỆN CHẤT LƯỢNG CUỘC SỐNG người dân vùng khó khăn.",
  },
  {
    title: "Tuyển dụng",
    image: "/images/village.jpg",
    description:
      "Đồng hành cùng Thắp Sáng CẢI THIỆN CHẤT LƯỢNG CUỘC SỐNG người dân vùng khó khăn.",
  },
];

export default function HomePage() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Animation variants
  const burgerLineVariants = {
    closed: {
      rotate: 0,
      y: 0,
      opacity: 1,
    },
    openTop: {
      rotate: 45,
      y: 8,
      opacity: 1,
    },
    openMiddle: {
      opacity: 0,
    },
    openBottom: {
      rotate: -45,
      y: -8,
      opacity: 1,
    },
  };

  const mobileMenuVariants = {
    closed: {
      y: "-10%",
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const menuItemVariants = {
    closed: {
      x: -20,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
    },
  };

  const menuItemsContainerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Always show header when at the top
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header
        setIsHeaderVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when header hides
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (
        isMobileMenuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".burger-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className='min-h-screen'>
      {/* Header */}
      <header
        className={`bg-white fixed top-0 inset-x-0 h-20 z-50 transition-transform duration-300 ease-in-out shadow-sm ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className='container mx-auto px-4 h-full'>
          <nav className='flex items-center gap-4 justify-between h-full'>
            <Link href='#'>
              <div className='relative size-20 min-w-20'>
                <Image
                  src='/images/logo.png'
                  alt='logo'
                  fill
                  className='object-contain'
                />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className='hidden md:flex space-x-8 items-center'>
              <Link href='#' className='min-w-[98px] h-5'>
                <HoverText
                  text='Về chúng tôi'
                  classTextNormal='text-neutral-800'
                  classTextHover='text-yellow-600'
                />
              </Link>
              <Link href='#' className='min-w-[154px] h-5'>
                <HoverText
                  text='Sự kiện & hoạt động'
                  classTextNormal='text-neutral-800'
                  classTextHover='text-yellow-600'
                />
              </Link>
              <Link href='#' className='min-w-[58px] h-5'>
                <HoverText
                  text='Mua vé'
                  classTextNormal='text-neutral-800'
                  classTextHover='text-yellow-600'
                />
              </Link>
              <Link href='#' className='min-w-[92px] h-5'>
                <HoverText
                  text='Tuyển dụng'
                  classTextNormal='text-neutral-800'
                  classTextHover='text-yellow-600'
                />
              </Link>
              <Link href='#' className='min-w-[58px] h-5'>
                <HoverText
                  text='Liên hệ'
                  classTextNormal='text-neutral-800'
                  classTextHover='text-yellow-600'
                />
              </Link>
            </div>

            {/* Mobile Burger Button */}
            <motion.button
              className='md:hidden burger-button flex flex-col justify-center items-center w-8 h-8 space-y-1'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label='Toggle mobile menu'
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className='w-6 h-0.5 bg-neutral-800 block'
                variants={burgerLineVariants}
                animate={isMobileMenuOpen ? "openTop" : "closed"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.span
                className='w-6 h-0.5 bg-neutral-800 block'
                variants={burgerLineVariants}
                animate={isMobileMenuOpen ? "openMiddle" : "closed"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.span
                className='w-6 h-0.5 bg-neutral-800 block'
                variants={burgerLineVariants}
                animate={isMobileMenuOpen ? "openBottom" : "closed"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className='mobile-menu md:hidden fixed top-20 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40'
              variants={mobileMenuVariants}
              initial='closed'
              animate='open'
              exit='closed'
            >
              <div className='px-4 py-6'>
                {/* Menu Items */}
                <motion.div
                  variants={menuItemsContainerVariants}
                  initial='closed'
                  animate='open'
                  exit='closed'
                  className='space-y-2'
                >
                  <motion.div variants={menuItemVariants}>
                    <Link
                      href='#'
                      className='block py-3 text-lg font-medium text-neutral-800 hover:text-yellow-600 transition-colors duration-200 border-b border-gray-100'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Về chúng tôi
                    </Link>
                  </motion.div>
                  <motion.div variants={menuItemVariants}>
                    <Link
                      href='#'
                      className='block py-3 text-lg font-medium text-neutral-800 hover:text-yellow-600 transition-colors duration-200 border-b border-gray-100'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sự kiện & hoạt động
                    </Link>
                  </motion.div>
                  <motion.div variants={menuItemVariants}>
                    <Link
                      href='#'
                      className='block py-3 text-lg font-medium text-neutral-800 hover:text-yellow-600 transition-colors duration-200 border-b border-gray-100'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Mua vé
                    </Link>
                  </motion.div>
                  <motion.div variants={menuItemVariants}>
                    <Link
                      href='#'
                      className='block py-3 text-lg font-medium text-neutral-800 hover:text-yellow-600 transition-colors duration-200 border-b border-gray-100'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Tuyển dụng
                    </Link>
                  </motion.div>
                  <motion.div variants={menuItemVariants}>
                    <Link
                      href='#'
                      className='block py-3 text-lg font-medium text-neutral-800 hover:text-yellow-600 transition-colors duration-200'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Liên hệ
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className='mt-20'>
        <div className='w-full relative select-none h-[80vh]'>
          <Image
            src='/images/banner.png'
            alt='banner'
            fill
            className='object-cover'
            sizes='100vw 80vh'
          />
        </div>

        {/* partners */}
        <div className='w-full py-6 bg-gray-50 overflow-hidden'>
          <div className='space-y-3'>
            <Marquee
              speed={50}
              gradient={true}
              gradientColor='rgb(249, 250, 251)'
              gradientWidth={100}
              pauseOnHover={true}
              direction='right'
              autoFill
            >
              <div className='flex items-center space-x-16 mx-8'>
                <div className='flex gap-16 items-center filter grayscale hover:grayscale-0 transition-all duration-300'>
                  <Flame className='size-6 text-yellow-500' />
                </div>
                <div className='flex gap-16 items-center filter grayscale hover:grayscale-0 transition-all duration-300'>
                  <span className='text-xl font-bold text-yellow-500'>
                    Thắp Sáng - JCI Danang
                  </span>
                </div>

                <div className='flex gap-16 items-center filter grayscale hover:grayscale-0 transition-all duration-300'>
                  <Flame className='size-6 text-yellow-500' />
                </div>
                <div className='flex gap-16 items-center filter grayscale hover:grayscale-0 transition-all duration-300'>
                  <span className='text-xl font-bold text-yellow-500 text-outline-thin'>
                    Thắp Sáng - JCI Danang
                  </span>
                </div>
              </div>
            </Marquee>

            <Marquee
              speed={50}
              gradient={true}
              gradientColor='rgb(249, 250, 251)'
              gradientWidth={100}
              pauseOnHover={true}
              autoFill
            >
              <div className='flex items-center space-x-16 mx-8 *:w-32 *:h-20'>
                <div className='relative flex-shrink-0'>
                  <Image
                    src='/images/partners/jci-da-nang.png'
                    alt='JCI Da Nang'
                    fill
                    className='object-contain filter grayscale hover:grayscale-0 transition-all duration-300'
                  />
                </div>
                <div className='relative flex-shrink-0'>
                  <Image
                    src='/images/logo.png'
                    alt='JCI Da Nang'
                    fill
                    className='object-contain filter grayscale hover:grayscale-0 transition-all duration-300'
                  />
                </div>
                <div className='relative flex-shrink-0'>
                  <Image
                    src='/images/partners/yba-jci-vietnam.png'
                    alt='YBA JCI Vietnam'
                    fill
                    className='object-contain filter grayscale hover:grayscale-0 transition-all duration-300'
                  />
                </div>
              </div>
            </Marquee>
          </div>
        </div>
      </section>

      <section className='bg-yellow-400 text-white py-16 md:py-24'>
        <div className='container mx-auto px-4'>
          <div className='flex gap-12 flex-col lg:flex-row items-center'>
            <div className='space-y-4 flex-1'>
              <h1 className='text-6xl md:text-8xl font-bold leading-tight'>
                THẮP SÁNG
              </h1>
              <p className='leading-snug tracking-tight text-base md:text-lg text-justify'>
                là một dự án trực thuộc <b>JCI Đà Nẵng</b>, với mục tiêu cải
                thiện chất lượng cuộc sống cho người dân{" "}
                <b>ở vùng khó khăn, thiếu điều kiện ánh sáng</b>, thông qua việc
                <b>
                  {" "}
                  lắp đặt đèn năng lượng mặt trời và máy phát điện quang năng.
                </b>{" "}
                Dự án được triển khai dựa trên 17 Mục tiêu Phát triển Bền vững
                (17 SDGs) của <b>Liên Hợp Quốc</b>.
              </p>
              <p className='text-lg md:text-xl'>
                Thắp triệu ngọn <span className='font-bold'>đèn sáng</span>{" "}
                triệu con tim
              </p>
            </div>
            <div className='bg-white rounded-2xl p-2 size-[300px] md:size-[500px] overflow-hidden shadow-2xl'>
              <div className='rounded-lg overflow-hidden relative  aspect-square'>
                <Image
                  src='/images/village.jpg'
                  alt='village'
                  fill
                  className='object-cover '
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='why-us' className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}
            className='mb-12'
          >
            <h2 className='text-6xl md:text-8xl font-bold leading-tight mb-4'>
              Sự kiện & hoạt động
            </h2>
            <p className='leading-snug tracking-tight text-base md:text-lg text-justify text-neutral-900'>
              Đồng hành cùng <b className='text-yellow-400'>Thắp Sáng</b>{" "}
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
                    // placeholder='blur'
                    // blurDataURL={BLUR_IMAGE}
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
            ))}
          </motion.div>
        </div>
      </section>

      <section id='cruise-category' className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}
            className='mb-12'
          >
            <h2 className='text-6xl md:text-8xl font-bold leading-tight mb-4'>
              Mua vé
            </h2>
            <p className='leading-snug tracking-tight text-base md:text-lg text-justify text-neutral-900'>
              Đồng hành cùng <b className='text-yellow-400'>Thắp Sáng</b>{" "}
              <b>CẢI THIỆN CHẤT LƯỢNG CUỘC SỐNG</b> người dân vùng khó khăn.
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
                className='group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer'
              >
                <div className='size-full relative aspect-[3/4] overflow-hidden'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes='(max-width: 768px) 100vw, 33vw'
                    className='object-cover group-hover:scale-110 transition-transform duration-500'
                    // placeholder='blur'
                    // blurDataURL={BLUR_IMAGE}
                  />
                </div>
                <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent' />
                <div className='absolute bottom-0 inset-x-0 p-3 text-white'>
                  <h3 className='text-lg font-bold text-center p-6 rounded-xl overflow-hidden bg-black/10 shadow-[0px_4px_48px_0px_rgba(31,93,151,0.15)] backdrop-blur-[5px]'>
                    {item.title}
                  </h3>
                  {/* <p className='text-sm opacity-90'>{item.description}</p> */}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* More Ways to Get Involved */}
      <section className='bg-rose-300 py-16 md:py-24'>
        <div className='container mx-auto px-4'>
          <h2 className='text-6xl md:text-8xl font-bold text-teal-800 mb-16 leading-tight'>
            MORE WAYS TO GET INVOLVED
          </h2>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Donate Today */}
            <Card className='bg-white shadow-lg'>
              <CardContent className='p-8 text-center'>
                <div className='w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <Heart className='w-8 h-8 text-teal-600' />
                </div>
                <h3 className='text-2xl font-bold text-teal-800 mb-4'>
                  DONATE TODAY
                </h3>
                <p className='text-gray-700 mb-6'>
                  Your donation helps fund community tourism projects that
                  create sustainable livelihoods and preserve local cultures.
                </p>
                <Button className='bg-teal-800 hover:bg-teal-700 text-white'>
                  DONATE
                </Button>
              </CardContent>
            </Card>

            {/* Become a Citizen of Change */}
            <Card className='bg-white shadow-lg'>
              <CardContent className='p-8 text-center'>
                <div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <Users className='w-8 h-8 text-orange-600' />
                </div>
                <h3 className='text-2xl font-bold text-teal-800 mb-4'>
                  BECOME A CITIZEN OF CHANGE
                </h3>
                <p className='text-gray-700 mb-6'>
                  Join our monthly giving program and become part of a community
                  committed to sustainable change.
                </p>
                <Button className='bg-teal-800 hover:bg-teal-700 text-white'>
                  JOIN TODAY
                </Button>
              </CardContent>
            </Card>

            {/* Fundraise */}
            <Card className='bg-white shadow-lg'>
              <CardContent className='p-8 text-center'>
                <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <Gift className='w-8 h-8 text-green-600' />
                </div>
                <h3 className='text-2xl font-bold text-teal-800 mb-4'>
                  FUNDRAISE
                </h3>
                <p className='text-gray-700 mb-6'>
                  Start your own fundraising campaign and rally your friends,
                  family, and community to support our cause.
                </p>
                <Button className='bg-teal-800 hover:bg-teal-700 text-white'>
                  GET STARTED
                </Button>
              </CardContent>
            </Card>

            {/* Send an E-Card */}
            <Card className='bg-white shadow-lg'>
              <CardContent className='p-8 text-center'>
                <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <Mail className='w-8 h-8 text-blue-600' />
                </div>
                <h3 className='text-2xl font-bold text-teal-800 mb-4'>
                  SEND AN E-CARD
                </h3>
                <p className='text-gray-700 mb-6'>
                  Send a meaningful e-card to someone special while supporting
                  community tourism projects.
                </p>
                <Button className='bg-teal-800 hover:bg-teal-700 text-white'>
                  SEND E-CARD
                </Button>
              </CardContent>
            </Card>

            {/* Corporate Support */}
            <Card className='bg-white shadow-lg'>
              <CardContent className='p-8 text-center'>
                <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <Building className='w-8 h-8 text-purple-600' />
                </div>
                <h3 className='text-2xl font-bold text-teal-800 mb-4'>
                  CORPORATE SUPPORT
                </h3>
                <p className='text-gray-700 mb-6'>
                  Partner with us to create meaningful corporate social
                  responsibility programs that make a real impact.
                </p>
                <Button className='bg-teal-800 hover:bg-teal-700 text-white'>
                  LEARN MORE
                </Button>
              </CardContent>
            </Card>

            {/* Donate Your Birthday */}
            <Card className='bg-white shadow-lg'>
              <CardContent className='p-8 text-center'>
                <div className='w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <Calendar className='w-8 h-8 text-pink-600' />
                </div>
                <h3 className='text-2xl font-bold text-teal-800 mb-4'>
                  DONATE YOUR BIRTHDAY
                </h3>
                <p className='text-gray-700 mb-6'>
                  Turn your special day into an opportunity to support
                  communities around the world.
                </p>
                <Button className='bg-teal-800 hover:bg-teal-700 text-white'>
                  START CAMPAIGN
                </Button>
              </CardContent>
            </Card>

            {/* Work With Us */}
            <Card className='bg-white shadow-lg lg:col-start-2'>
              <CardContent className='p-8 text-center'>
                <div className='w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <Briefcase className='w-8 h-8 text-yellow-600' />
                </div>
                <h3 className='text-2xl font-bold text-teal-800 mb-4'>
                  WORK WITH US
                </h3>
                <p className='text-gray-700 mb-6'>
                  Join our team and help us build a more sustainable and
                  equitable tourism industry.
                </p>
                <Button className='bg-teal-800 hover:bg-teal-700 text-white'>
                  VIEW CAREERS
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className='bg-teal-600 py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center text-white'>
            <div className='flex items-center justify-center mb-8'>
              <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center'>
                <span className='text-teal-600 text-2xl'>"</span>
              </div>
            </div>
            <blockquote className='text-2xl md:text-3xl font-light mb-8 leading-relaxed'>
              "With the support of our partners, we are helping local
              communities develop sustainable tourism that benefits everyone.
              Together, we are changing the future."
            </blockquote>
            <p className='text-xl opacity-90'>— Planeterra Team</p>
          </div>
        </div>
      </section>

      {/* Corporate Support Section */}
      <section className='bg-teal-700 text-white py-16 md:py-24'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl'>
            <h2 className='text-5xl md:text-7xl font-bold mb-12 leading-tight'>
              CORPORATE SUPPORT
            </h2>

            <div className='grid md:grid-cols-2 gap-12'>
              <div>
                <h3 className='text-2xl font-bold mb-6'>
                  Why partner with us?
                </h3>
                <ul className='space-y-4 text-lg'>
                  <li>• Meaningful impact on local communities</li>
                  <li>• Sustainable tourism development</li>
                  <li>• Transparent reporting and accountability</li>
                  <li>• Global reach with local expertise</li>
                  <li>• Proven track record of success</li>
                </ul>
              </div>

              <div>
                <h3 className='text-2xl font-bold mb-6'>
                  Partnership opportunities
                </h3>
                <ul className='space-y-4 text-lg'>
                  <li>• Project sponsorship</li>
                  <li>• Employee engagement programs</li>
                  <li>• Cause marketing campaigns</li>
                  <li>• Corporate volunteer programs</li>
                  <li>• Custom partnership solutions</li>
                </ul>
              </div>
            </div>

            <div className='mt-12'>
              <Button
                size='lg'
                className='bg-white text-teal-700 hover:bg-gray-100'
              >
                EXPLORE PARTNERSHIPS
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Changemakers */}
      <section className='bg-gray-100 py-16 md:py-24'>
        <div className='container mx-auto px-4'>
          <h2 className='text-5xl md:text-7xl font-bold text-teal-800 mb-16 leading-tight'>
            CORPORATE CHANGEMAKERS
          </h2>

          <div className='text-center mb-12'>
            <h3 className='text-2xl font-bold text-teal-800 mb-4'>
              Founding Partner
            </h3>
            <div className='flex justify-center mb-12'>
              <div className='bg-white p-8 rounded-lg shadow-lg'>
                <div className='text-4xl font-bold text-purple-600'>
                  G Adventures
                </div>
              </div>
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-12 mb-12'>
            <div>
              <h3 className='text-2xl font-bold text-teal-800 mb-6'>
                Impact Partners
              </h3>
              <div className='grid grid-cols-2 gap-4'>
                <div className='bg-white p-4 rounded-lg shadow text-center'>
                  <div className='font-bold text-blue-600'>Foundation</div>
                </div>
                <div className='bg-white p-4 rounded-lg shadow text-center'>
                  <div className='font-bold text-orange-600'>evaneos</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className='text-2xl font-bold text-teal-800 mb-6'>
                Supporting Partners
              </h3>
              <div className='space-y-2 text-gray-700'>
                <p>• Adventure Travel Trade Association</p>
                <p>• Responsible Travel</p>
                <p>• Tourism Cares</p>
                <p>• World Wildlife Fund</p>
              </div>
            </div>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            <div>
              <h4 className='font-bold text-teal-800 mb-4'>Network Partners</h4>
              <ul className='space-y-2 text-sm text-gray-600'>
                <li>Andes Adventures</li>
                <li>Belize Audubon Society</li>
                <li>Costa Rica Expeditions</li>
                <li>Local Ocean Trust</li>
                <li>Maasai Wilderness Conservation Trust</li>
                <li>Planeterra COOP-UITA</li>
                <li>Sacred Valley Project</li>
                <li>Salkantay Trekking</li>
                <li>Shinta Mani Foundation</li>
                <li>Socios En Salud</li>
              </ul>
            </div>

            <div>
              <h4 className='font-bold text-teal-800 mb-4'>
                Strategic Partners
              </h4>
              <ul className='space-y-2 text-sm text-gray-600'>
                <li>Adventure Travel Trade Association</li>
                <li>Ashoka U</li>
                <li>B Corp Community</li>
                <li>Global Sustainable Tourism Council</li>
                <li>International Ecotourism Society</li>
                <li>Responsible Travel</li>
                <li>Tourism Cares</li>
                <li>UN Global Compact</li>
                <li>World Wildlife Fund</li>
              </ul>
            </div>

            <div>
              <h4 className='font-bold text-teal-800 mb-4'>Travel Partners</h4>
              <ul className='space-y-2 text-sm text-gray-600'>
                <li>ACDI/VOCA</li>
                <li>Adventure Life</li>
                <li>Exodus Travels</li>
                <li>Intrepid Travel</li>
                <li>Natural Habitat Adventures</li>
                <li>Peregrine Adventures</li>
                <li>REI Adventures</li>
                <li>Responsible Travel</li>
                <li>World Expeditions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Citizens of Change */}
      <section className='bg-rose-300 py-16 md:py-24'>
        <div className='container mx-auto px-4'>
          <h2 className='text-5xl md:text-7xl font-bold text-teal-800 mb-8 leading-tight'>
            CITIZENS OF CHANGE
          </h2>
          <p className='text-xl text-teal-800 mb-12 max-w-3xl'>
            These amazing individuals have committed to monthly giving, creating
            lasting change in communities around the world. Join them in making
            a difference!
          </p>

          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm'>
            {[
              "Sarah Johnson",
              "Michael Chen",
              "Emma Rodriguez",
              "David Kim",
              "Lisa Thompson",
              "James Wilson",
              "Maria Garcia",
              "Robert Taylor",
              "Jennifer Lee",
              "Christopher Brown",
              "Amanda Davis",
              "Matthew Miller",
              "Jessica Anderson",
              "Daniel Martinez",
              "Ashley White",
              "Ryan Jackson",
              "Stephanie Harris",
              "Kevin Clark",
              "Rachel Lewis",
              "Brandon Walker",
              "Nicole Hall",
              "Justin Allen",
              "Samantha Young",
              "Tyler King",
              "Megan Wright",
              "Jordan Lopez",
              "Brittany Hill",
              "Austin Green",
              "Kayla Adams",
              "Connor Baker",
              "Alexis Nelson",
              "Cameron Carter",
              "Morgan Mitchell",
              "Blake Perez",
              "Sydney Roberts",
              "Hayden Turner",
              "Taylor Phillips",
              "Casey Campbell",
              "Riley Parker",
              "Avery Evans",
              "Quinn Edwards",
              "Sage Collins",
              "River Stewart",
              "Phoenix Sanchez",
              "Skylar Morris",
              "Dakota Rogers",
              "Rowan Reed",
              "Emery Cook",
            ].map((name, index) => (
              <div
                key={index}
                className='bg-white p-3 rounded shadow text-center text-teal-800 font-medium'
              >
                {name}
              </div>
            ))}
          </div>

          <div className='text-center mt-12'>
            <Button
              size='lg'
              className='bg-teal-800 hover:bg-teal-700 text-white'
            >
              BECOME A CITIZEN OF CHANGE
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-teal-900 text-white py-12'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-4 gap-8 mb-8'>
            <div>
              <h4 className='font-bold mb-4 text-xl'>CONTACT</h4>
              <div className='space-y-2 text-teal-200'>
                <p>📍 19 Duncan Street, Toronto</p>
                <p>Ontario, Canada M5H 3H1</p>
                <p>📞 +1 416 260 0999</p>
                <p>✉️ info@planeterra.org</p>
              </div>
            </div>

            <div>
              <h4 className='font-bold mb-4 text-xl'>SOCIAL MEDIA</h4>
              <div className='space-y-2'>
                <a href='#' className='block text-teal-200 hover:text-white'>
                  Facebook
                </a>
                <a href='#' className='block text-teal-200 hover:text-white'>
                  Instagram
                </a>
                <a href='#' className='block text-teal-200 hover:text-white'>
                  Twitter
                </a>
                <a href='#' className='block text-teal-200 hover:text-white'>
                  LinkedIn
                </a>
                <a href='#' className='block text-teal-200 hover:text-white'>
                  YouTube
                </a>
              </div>
            </div>

            <div className='md:col-span-2'>
              <h4 className='font-bold mb-4 text-xl'>NEWSLETTER SIGN UP</h4>
              <p className='text-teal-200 mb-4'>
                Stay updated with our latest projects and impact stories.
              </p>
              <div className='flex gap-2'>
                <Input
                  type='email'
                  placeholder='Enter your email'
                  className='bg-white text-black'
                />
                <Button className='bg-orange-500 hover:bg-orange-600 text-white px-6'>
                  SUBSCRIBE
                </Button>
              </div>
            </div>
          </div>

          <div className='border-t border-teal-700 pt-8 text-center text-teal-200'>
            <p>
              Planeterra is a not-for-profit organization. CHARITY # 84780 1285
              RR0001 | Privacy Policy
            </p>
            <p className='mt-2'>&copy; 2024 Planeterra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
