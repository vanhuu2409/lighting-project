import * as React from "react";
import { NewsletterSignup } from "./NewsletterSignup";
import { CompanyInfo } from "./CompanyInfo";
import { QuickLinks } from "./QuickLinks";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import { FooterBottom } from "./FooterBottom";

interface FooterProps {}

export function Footer({}: FooterProps) {
  return (
    <footer className='relative bg-neutral-50'>
      <div className='z-0 px-24 py-20 w-full max-md:px-5 max-md:max-w-full'>
        <NewsletterSignup />

        <hr className='mt-12 w-full border border-solid border-zinc-200 min-h-px max-md:mt-10 max-md:max-w-full' />

        <div className='flex flex-wrap gap-10 justify-between items-start mt-12 w-full max-md:mt-10 max-md:max-w-full'>
          <CompanyInfo />
          <QuickLinks />
          <ContactInfo />
          <ContactForm />
        </div>
      </div>

      <div className='flex absolute z-0 max-w-full h-[15px] left-[225px] min-h-[15px] top-[267px] w-[148px]' />

      <FooterBottom />
    </footer>
  );
}

export default Footer;
