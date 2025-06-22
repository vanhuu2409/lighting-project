import { motion } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IconBoat } from "@/components/icon";
import { BLUR_IMAGE } from "@/components/constants";

export default function HeroSection() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCruise, setSelectedCruise] = useState("Cruise category");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const cruiseOptions = ["Luxury Cruise", "Budget Cruise", "Family Cruise"];

  const handleSelectCruise = (option: string) => {
    setSelectedCruise(option);
    setIsDropdownOpen(false);
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section
      id='daily-departure'
      className='relative min-h-screen flex items-center justify-center'
    >
      <div className='absolute inset-0 overflow-hidden'>
        <Image
          src='/images/home/image_hero.png'
          alt='Hero background'
          fill
          priority
          className='object-cover brightness-[0.7]'
          sizes='100vw'
          placeholder='blur'
          blurDataURL={BLUR_IMAGE}
        />
      </div>
      <div className='absolute inset-0 bg-gradient-to-b from-black/20 to-black/40' />

      <div className='relative z-10 text-center text-white max-w-7xl w-full  mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-5xl lg:text-6xl script-font mb-4 leading-tight'>
            Unforgettable{" "}
            <span className='text-yellow-300'>Halong Bay Cruises</span>
          </h1>
          <p className='text-3xl lg:text-5xl mb-12 font-bold'>
            with Asia Pacific Travel - Since 2002
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='lg:px-6 lg:py-4 py-2 px-3 bg-white/30 rounded-2xl flex backdrop-blur-lg mx-auto'
        >
          <div className='flex flex-col w-full md:flex-row *:px-3 md:divide-x md:divide-white/70'>
            <div className='w-full relative'>
              <div className='flex items-center'>
                <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-white/70 size-6' />
                <input
                  type='text'
                  placeholder='Search destinations, hotels'
                  className='w-full pl-10 pr-4 py-3.5 rounded-lg text-white/70 focus:outline-none bg-transparent'
                />
              </div>
            </div>
            <div className='w-full relative'>
              <div className='flex items-center pl-6'>
                <IconBoat className='absolute md:left-8 left-3 top-1/2 -translate-y-1/2 text-white/70 size-6' />

                {/* Custom Dropdown */}
                <div className='relative w-full' ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className='w-full pl-4 md:pl-10 pr-10 py-3.5 rounded-lg text-white/70 focus:outline-none bg-transparent text-left flex items-center justify-between'
                  >
                    <span>{selectedCruise}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className='absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50'
                    >
                      {cruiseOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleSelectCruise(option)}
                          className='w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg transition-colors'
                        >
                          {option}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
            <button
              data-state='Default'
              className='min-w-40 px-6 py-2 max-md:mt-2 md:py-3.5 bg-white rounded-[32px] shadow-[0px_5px_12px_0px_rgba(130,130,130,0.10)] outline outline-1 outline-offset-[-1px] flex justify-center items-center gap-3 overflow-hidden'
            >
              <div className="justify-start text-blue-700 text-lg font-bold font-['Be_Vietnam_Pro']">
                Search
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
