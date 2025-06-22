import * as React from "react";
import {
  IconFacebook,
  IconLinkedin,
  IconInstagram,
  IconWhatsapp,
} from "@/components/icon";

interface CompanyInfoProps {}

export function CompanyInfo({}: CompanyInfoProps) {
  return (
    <section className='flex flex-col min-w-60 w-[367px]'>
      <h3 className='text-base font-semibold leading-none capitalize text-neutral-900'>
        Halong Tours - Asia Pacific Travel{" "}
      </h3>
      <p className='mt-5 text-xs leading-5 text-stone-500'>
        Halongbaytours.com is a premium cruise and tour booking service offered
        by Blue Dragon Tours. Here on our website you can find listings of the
        best selected cruises of Halong Bay, one of the UNESCO World's Natural
        Heritage.
      </p>
      <div className='flex gap-2 items-center self-start mt-5'>
        <div className='shrink-0 self-stretch my-auto size-7 inline-flex text-blue-800 bg-blue-50 justify-center items-center rounded-full aspect-square '>
          <IconFacebook />
        </div>
        <div className='shrink-0 self-stretch my-auto size-7 inline-flex text-blue-800 bg-blue-50 justify-center items-center rounded-full aspect-square '>
          <IconLinkedin />
        </div>
        <div className='shrink-0 self-stretch my-auto size-7 inline-flex text-blue-800 bg-blue-50 justify-center items-center rounded-full aspect-square '>
          <IconWhatsapp />
        </div>
        <div className='shrink-0 self-stretch my-auto size-7 inline-flex text-blue-800 bg-blue-50 justify-center items-center rounded-full aspect-square '>
          <IconInstagram />
        </div>
      </div>
    </section>
  );
}
