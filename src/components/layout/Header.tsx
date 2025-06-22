"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import IconClock from "@/components/icon/IconClock";
import IconLocation from "@/components/icon/IconLocation";
import AuthModal from "@/components/auth/AuthModal";
import Image from "next/image";

interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [subHeaderHeight, setSubHeaderHeight] = useState(0);
  const subHeaderRef = useRef<HTMLDivElement>(null);
  const navigationItems = [
    { name: "Daily Departure", href: "#daily-departure" },
    { name: "Cruise Category", href: "#cruise-category" },
    { name: "Best Seller 2025", href: "#best-seller" },
    { name: "Cruise Packages", href: "#cruise-packages" },
    { name: "Think To Do", href: "#activities" },
    { name: "Customize Trip", href: "#customize" },
    { name: "Why Us", href: "#why-us" },
    // { name: "Contact Us", href: "#contact" },
  ];

  // Set mặc định là item đầu tiên
  const [activeItem, setActiveItem] = useState<string>(navigationItems[0].href);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const updateSubHeaderHeight = () => {
      if (subHeaderRef.current) {
        setSubHeaderHeight(subHeaderRef.current.offsetHeight);
      }
    };

    updateSubHeaderHeight();
    window.addEventListener("resize", updateSubHeaderHeight);
    return () => window.removeEventListener("resize", updateSubHeaderHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Smooth scroll function
  const scrollTo = (elementId: string) => {
    setActiveItem(""); // Reset trước
    setTimeout(() => {
      setActiveItem(elementId);
      console.log("Active item set to:", elementId); // Debug
    }, 10);
    setIsMenuOpen(false);
    const id = elementId.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Static Sub Header */}
      <div
        ref={subHeaderRef}
        className='fixed top-0 left-0 right-0 bg-stone-50 z-[9999] shadow-md'
      >
        <div className='lg:px-24 p-2 text-[10px] text-stone-950 w-full flex justify-center md:justify-between items-center'>
          <div className='flex items-center max-md:flex-col md:divide-x divide-neutral-400 *:px-3 *:cursor-pointer max-md:text-center'>
            <div className='flex items-center text-xs gap-1.5'>
              <IconLocation />
              <div className=''>85 Hoang Quoc Viet Str, Hanoi , Vietnam</div>
            </div>
            <div className='flex items-center text-xs gap-1.5'>
              <IconClock />
              <div className=''>
                Hotline: +84 24 38364212
                <span className=''> / </span>+84 24 37568868
              </div>
            </div>
          </div>
          <div className='md:flex items-center hidden gap-2.5'>
            <div className='flex items-center *:text-xs divide-x divide-neutral-400 *:px-3 *:cursor-pointer'>
              <div className='#'>FAQ</div>
              <div className='#'>Support</div>
              <button onClick={() => setShowAuthModal(true)}>
                Sign in/ Register
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Main Header */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -200 }}
        transition={{ duration: 0.3 }}
        style={{
          opacity: headerOpacity,
          top: `${subHeaderHeight}px`,
        }}
        className={`fixed left-0 right-0 bg-white shadow-md z-50 ${className}`}
      >
        {/* Main Header */}
        <div className='px-8 space-x-4 lg:px-24 py-4 md:py-0'>
          <div className='flex items-center justify-between'>
            {/* Logo */}
            <Link href='/' className='flex items-center space-x-2'>
              <div className='size-16 md:size-24 aspect-square rounded-full flex items-center justify-center relative'>
                <Image
                  src='/images/logo/logo.webp'
                  alt='logo'
                  fill
                  className='object-contain'
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className='hidden lg:w-[70%] lg:flex items-center'>
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  className={`text-neutral-600 w-full hover:text-blue-800 transition-colors px-3 capitalize text-sm min-w-20 ${
                    activeItem === item.href ? "!text-blue-800 font-bold" : ""
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className='flex items-center gap-2 md:gap-4'>
              <Link href={"#booking-tour"}>
                <button className='bg-blue-800 text-white px-3 md:px-5 py-2 text-xs capitalize rounded hover:bg-blue-700 transition-colors'>
                  Book A Tour
                </button>
              </Link>
              <button
                className='lg:hidden'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className='w-6 h-6' />
                ) : (
                  <Menu className='w-6 h-6' />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className='lg:hidden mt-4 py-4 border-t border-gray-100'
            >
              <nav className='flex flex-col space-y-4'>
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollTo(item.href)}
                    className={`text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm md:text-base ${
                      activeItem === item.href ? "text-blue-600 font-bold" : ""
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <Link href='#travel-blog'>FAQ</Link>
                <Link href='#'>Support</Link>
                <button onClick={() => setShowAuthModal(true)}>
                  Sign in/ Register
                </button>
              </nav>
            </motion.div>
          )}
        </div>
      </motion.header>
      <AuthModal open={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
}
