export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=800&fit=crop&crop=center",
    title: "Thắp sáng vùng cao",
    description: "Mang ánh sáng đến các vùng núi xa xôi, hẻo lánh",
    gridClass: "md:col-span-3 md:row-span-3",
    aspectClass: "aspect-square",
  },
  {
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=800&fit=crop&crop=center",
    title: "Cộng đồng kết nối",
    description: "Xây dựng cầu nối giữa các thế hệ trong cộng đồng",
    gridClass: "md:col-span-3 md:row-span-3 md:col-start-4",
    aspectClass: "aspect-square",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509909756405-be0199881695?w=1200&h=400&fit=crop&crop=center",
    title: "Năng lượng xanh",
    description: "Phát triển bền vững với năng lượng mặt trời",
    gridClass: "md:col-span-6 md:row-span-2 md:col-start-1 md:row-start-4",
    aspectClass: "aspect-square md:aspect-[3/1]",
  },
  {
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=1000&fit=crop&crop=center",
    title: "Tình nguyện viên",
    description: "Đội ngũ tình nguyện viên tận tâm phục vụ cộng đồng",
    gridClass: "md:col-span-3 md:row-span-5 md:col-start-7 md:row-start-1",
    aspectClass: "aspect-square md:aspect-[3/5]",
    isHighlight: true,
  },
];

export const demoExperiences = [
  {
    title: "The Light Concert",
    href: "https://thelightconcert.jcidanang.com/",
    location: "76 Thái Phiên, Phước Ninh, Hải Châu, Đà Nẵng",
    time: "18:30 - 22:30",
    date: "2025-07-17",
    image: "/images/home/upcoming/the-light-concert.png",
    description:
      "The Light Concert với các nghệ sĩ indie địa phương. Không gian ấm cúng, âm nhạc sống động cùng mục đích ý nghĩa.",
    isComingSoon: false,
  },
  {
    title: "Phòng Trà Hương Sen",
    href: "https://thelightconcert.jcidanang.com/",
    location: "Đà Nẵng",
    time: "19:00 - 22:00",
    date: "2025-07-01",
    image: "/images/home/upcoming/the-light-concert.png",
    description:
      "Buổi tối thơ ca và trà đạo từ thiện. Thưởng thức trà ngon, lắng nghe những vần thơ hay và cùng góp phần lan tỏa yêu thương.",
    isComingSoon: true,
  },
  {
    title: "The Coffee Bean",
    href: "https://thelightconcert.jcidanang.com/",
    location: "Đà Nẵng",
    time: "19:00 - 22:00",
    date: "2025-07-01",
    image: "/images/home/upcoming/the-light-concert.png",
    description:
      "Acoustic night tại The Coffee Bean với các ca sĩ trẻ Đà Nẵng. Một đêm âm nhạc đầy cảm xúc vì cộng đồng vùng cao.",
    isComingSoon: true,
  },
];
