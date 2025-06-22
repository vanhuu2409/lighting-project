import { TourInfo } from "./TourInfo";
import { DecorativeDivider } from "./DecorativeDivider";
import { PricingSection } from "./PricingSection";
import { Product } from "@/types";
import Image from "next/image";
import { BLUR_IMAGE } from "@/components/constants";

export const TourCard: React.FC<Product> = ({
  name = "Orchid Classic Cruise",
  description = "Orchid Classic Cruise is a 2-day, 1-night cruise that offers a unique experience of Halong Bay. The cruise includes a visit to the Titov Island, Sung Sot Cave, and Luon Cave.",
  price = 299,
  image = "/images/home/affordable/image_affordable1.png",
  tripDuration = "2 Days 1 Night",
  routing = "Ha Noi - Ha Long - Ha Noi",
  tourStyle = "Nature, Culture & History Tour",
  tourStart = "In Ha Noi",
  tourEnd = "In Ha Noi",
}) => {
  return (
    <div className='flex flex-col items-start group w-full cursor-pointer'>
      <article className='overflow-hidden p-4 bg-white rounded-lg shadow-[0px_0px_0px_2px_rgba(230,243,255,1.00)] outline outline-1 outline-offset-[-1px] outline-blue-100 w-full'>
        <div className='overflow-hidden relative size-full rounded aspect-[4/3] '>
          <Image
            src={image}
            className='object-cover group-hover:scale-110 transition-all duration-300 size-full'
            alt={name}
            fill
            sizes='(max-width: 768px) 100vw, 33vw'
            placeholder='blur'
            blurDataURL={BLUR_IMAGE}
          />
        </div>
        <div className='flex flex-col mt-4'>
          <TourInfo
            title={name}
            description={description}
            routing={routing}
            tourStyle={tourStyle}
            tourStart={tourStart}
            tourEnd={tourEnd}
            tripDuration={tripDuration || "2 Days 1 Night"}
          />
          <DecorativeDivider />
          <PricingSection
            price={price.toString() + "$"}
            tripDuration={tripDuration || "2 Days 1 Night"}
          />
        </div>
      </article>
    </div>
  );
};

export default TourCard;
