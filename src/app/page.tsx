"use client";

import { HoverText } from "@/components/common";
import {
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconYoutube,
  IconMail,
  IconPhone,
} from "@/components/icon";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AboutSection,
  CTASection,
  EventSection,
  HeroSection,
  PartnerSection,
  TestimonialSection,
  TicketSection,
} from "@/components/section";

export default function HomePage() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrollingFromClick, setIsScrollingFromClick] = useState(false);

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

  // Handle navigation click
  const handleNavClick = (sectionId: string) => {
    setIsScrollingFromClick(true);
    setIsMobileMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      // Reset flag after scroll animation completes
      setTimeout(() => {
        setIsScrollingFromClick(false);
      }, 1000);
    }
  };

  // Intersection Observer for active sections
  useEffect(() => {
    const sections = ["about", "events", "tickets", "cta", "footer"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      // Don't hide header if scrolling from navigation click
      if (isScrollingFromClick) return;

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
  }, [lastScrollY, isScrollingFromClick]);

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
        id='header'
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
              <button
                onClick={() => handleNavClick("about")}
                className='min-w-[102px]'
              >
                <HoverText
                  text='Về chúng tôi'
                  classTextNormal={
                    activeSection === "about"
                      ? "text-mainColor"
                      : "text-neutral-800"
                  }
                  classTextHover='text-mainColor'
                />
              </button>
              <button
                onClick={() => handleNavClick("events")}
                className='min-w-[158px]'
              >
                <HoverText
                  text='Sự kiện & hoạt động'
                  classTextNormal={
                    activeSection === "events"
                      ? "text-mainColor"
                      : "text-neutral-800"
                  }
                  classTextHover='text-mainColor'
                />
              </button>
              <button
                onClick={() => handleNavClick("tickets")}
                className='min-w-[62px]'
              >
                <HoverText
                  text='Mua vé'
                  classTextNormal={
                    activeSection === "tickets"
                      ? "text-mainColor"
                      : "text-neutral-800"
                  }
                  classTextHover='text-mainColor'
                />
              </button>
              <button
                onClick={() => handleNavClick("cta")}
                className='min-w-[96px]'
              >
                <HoverText
                  text='Tuyển dụng'
                  classTextNormal={
                    activeSection === "cta"
                      ? "text-mainColor"
                      : "text-neutral-800"
                  }
                  classTextHover='text-mainColor'
                />
              </button>
              <button
                onClick={() => handleNavClick("footer")}
                className='min-w-[62px]'
              >
                <HoverText
                  text='Liên hệ'
                  classTextNormal={
                    activeSection === "footer"
                      ? "text-mainColor"
                      : "text-neutral-800"
                  }
                  classTextHover='text-mainColor'
                />
              </button>
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
                    <button
                      onClick={() => handleNavClick("about")}
                      className={`block w-full text-left py-3 text-lg font-medium transition-colors duration-200 border-b border-gray-100 ${
                        activeSection === "about"
                          ? "text-mainColor"
                          : "text-neutral-800 hover:text-mainColor"
                      }`}
                    >
                      Về chúng tôi
                    </button>
                  </motion.div>
                  <motion.div variants={menuItemVariants}>
                    <button
                      onClick={() => handleNavClick("events")}
                      className={`block w-full text-left py-3 text-lg font-medium transition-colors duration-200 border-b border-gray-100 ${
                        activeSection === "events"
                          ? "text-mainColor"
                          : "text-neutral-800 hover:text-mainColor"
                      }`}
                    >
                      Sự kiện & hoạt động
                    </button>
                  </motion.div>
                  <motion.div variants={menuItemVariants}>
                    <button
                      onClick={() => handleNavClick("tickets")}
                      className={`block w-full text-left py-3 text-lg font-medium transition-colors duration-200 border-b border-gray-100 ${
                        activeSection === "tickets"
                          ? "text-mainColor"
                          : "text-neutral-800 hover:text-mainColor"
                      }`}
                    >
                      Mua vé
                    </button>
                  </motion.div>
                  <motion.div variants={menuItemVariants}>
                    <button
                      onClick={() => handleNavClick("cta")}
                      className={`block w-full text-left py-3 text-lg font-medium transition-colors duration-200 border-b border-gray-100 ${
                        activeSection === "cta"
                          ? "text-mainColor"
                          : "text-neutral-800 hover:text-mainColor"
                      }`}
                    >
                      Tuyển dụng
                    </button>
                  </motion.div>
                  <motion.div variants={menuItemVariants}>
                    <button
                      onClick={() => handleNavClick("footer")}
                      className={`block w-full text-left py-3 text-lg font-medium transition-colors duration-200 ${
                        activeSection === "footer"
                          ? "text-mainColor"
                          : "text-neutral-800 hover:text-mainColor"
                      }`}
                    >
                      Liên hệ
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Partners */}
      <PartnerSection />

      {/* About */}
      <AboutSection />

      {/* Events */}
      <EventSection />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Tickets */}
      <TicketSection />

      {/* CTA */}
      <CTASection />

      {/* Partners */}
      <PartnerSection />

      {/* Footer */}
      <footer id='footer' className='bg-white border-t border-gray-200 py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-3 gap-12 mb-12'>
            {/* Thông tin dự án */}
            <div className='md:col-span-2'>
              <div className='mb-6'>
                <h3 className='text-2xl font-bold text-mainColor mb-4'>
                  Thắp Sáng - JCI Danang
                </h3>
                <p className='text-gray-700 leading-relaxed mb-6 md:max-w-[75%]'>
                  Thắp Sáng là dự án trực thuộc JCI Danang, hướng đến cải thiện
                  chất lượng cuộc sống cho người dân vùng khó khăn, thiếu điều
                  kiện ánh sáng.
                </p>
              </div>

              {/* Contact Info */}
              <div className='space-y-3'>
                <Link
                  href='mailto:duanthapsang@gmail.com'
                  className='flex items-center space-x-3 group'
                >
                  <div className='text-text-gray-700 group-hover:text-mainColor transition-colors duration-300 flex items-center justify-center w-5 h-5'>
                    <IconMail />
                  </div>
                  <HoverText
                    text='duanthapsang@gmail.com'
                    classTextNormal='text-gray-700'
                    classTextHover='text-mainColor'
                  />
                </Link>
                <Link
                  href='tel:0972261739'
                  className='flex items-center space-x-3 group'
                >
                  <div className='text-gray-700 group-hover:text-mainColor transition-colors duration-300 flex items-center justify-center w-5 h-5'>
                    <IconPhone />
                  </div>
                  <HoverText
                    text='097 226 17 39'
                    classTextNormal='text-gray-700'
                    classTextHover='text-mainColor'
                  />
                </Link>
                <div className='flex items-center space-x-3'>
                  <span className='w-5 h-5 text-mainColor text-center'>📍</span>
                  <span className='text-gray-700'>Da Nang, Vietnam</span>
                </div>
              </div>
            </div>

            {/* Social Media & Quick Links */}
            <div>
              <h4 className='font-bold mb-6 text-xl text-gray-800'>KẾT NỐI</h4>
              <div className='space-y-3'>
                <Link
                  href='https://www.facebook.com/duanthapsang'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center space-x-3 group'
                >
                  <div className='text-gray-700 group-hover:text-mainColor transition-colors duration-300'>
                    <IconFacebook />
                  </div>
                  <HoverText
                    text='Facebook'
                    classTextNormal='text-gray-700'
                    classTextHover='text-mainColor'
                  />
                </Link>
                <Link href='#' className='flex items-center space-x-3 group'>
                  <div className='text-gray-700 group-hover:text-mainColor transition-colors duration-300'>
                    <IconInstagram />
                  </div>
                  <HoverText
                    text='Instagram'
                    classTextNormal='text-gray-700'
                    classTextHover='text-mainColor'
                  />
                </Link>
                <Link href='#' className='flex items-center space-x-3 group'>
                  <div className='text-gray-700 group-hover:text-mainColor transition-colors duration-300'>
                    <IconYoutube />
                  </div>
                  <HoverText
                    text='YouTube'
                    classTextNormal='text-gray-700'
                    classTextHover='text-mainColor'
                  />
                </Link>
                <Link href='#' className='flex items-center space-x-3 group'>
                  <div className='text-gray-700 group-hover:text-mainColor transition-colors duration-300'>
                    <IconLinkedin />
                  </div>
                  <HoverText
                    text='LinkedIn'
                    classTextNormal='text-gray-700'
                    classTextHover='text-mainColor'
                  />
                </Link>
              </div>

              {/* Quick Links */}
              <div className='mt-8'>
                <h5 className='font-semibold mb-4 text-gray-800'>
                  LIÊN KẾT NHANH
                </h5>
                <div className='space-y-2'>
                  <Link href='#about' className='block'>
                    <HoverText
                      text='Về chúng tôi'
                      classTextNormal='text-gray-600'
                      classTextHover='text-mainColor'
                    />
                  </Link>
                  <Link href='#events' className='block'>
                    <HoverText
                      text='Sự kiện & hoạt động'
                      classTextNormal='text-gray-600'
                      classTextHover='text-mainColor'
                    />
                  </Link>
                  <Link href='#tickets' className='block'>
                    <HoverText
                      text='Tham gia cùng chúng tôi'
                      classTextNormal='text-gray-600'
                      classTextHover='text-mainColor'
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='border-t border-gray-200 pt-8 text-center'>
            <p className='text-gray-600 mb-2'>
              © 2024 Thắp Sáng - JCI Danang. All rights reserved.
            </p>
            <p className='text-sm text-gray-500'>
              Mang ánh sáng đến mọi miền tổ quốc 🌟
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
