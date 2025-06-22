import { IconSend } from "@/components/icon";
import * as React from "react";

interface NewsletterSignupProps {}

export function NewsletterSignup({}: NewsletterSignupProps) {
  return (
    <section className='flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full'>
      <div className='flex flex-col justify-center self-stretch my-auto min-w-60'>
        <h2 className='text-2xl font-semibold leading-none text-blue-800'>
          Sign up for our free newsletter
        </h2>
        <p className='mt-1 text-xs text-neutral-500'>
          Receive news and offers from Halong Bay Tours
        </p>
      </div>
      <form className='flex gap-2 self-stretch my-auto text-xs min-w-60 max-md:max-w-full'>
        <input
          type='email'
          placeholder='Enter your Email'
          className='overflow-hidden px-5 py-2 bg-white rounded border border-solid border-stone-300 min-w-60 text-neutral-500 w-[311px]'
        />
        <button
          type='submit'
          className='flex overflow-hidden gap-1.5 items-center self-start px-5 py-2 leading-loose text-center text-white bg-blue-800 rounded'
        >
          <span className='self-stretch my-auto'>Subscribe Now</span>
          <IconSend />
        </button>
      </form>
    </section>
  );
}
