import * as React from "react";
import { IconMail, IconPhone, IconLocations } from "@/components/icon";

interface ContactInfoProps {}

export function ContactInfo({}: ContactInfoProps) {
  return (
    <section className="min-w-60 w-[251px]">
      <h3 className="text-lg font-semibold leading-none text-blue-800">
        Get In Touch
      </h3>
      <div className="flex flex-col mt-6 w-full text-xs max-w-[251px] text-neutral-500">
        <div className="flex gap-3 items-center self-start leading-none whitespace-nowrap">
          <div className="shrink-0 self-stretch my-auto size-7 inline-flex text-blue-800 bg-blue-50 justify-center items-center rounded-full aspect-square ">
            <IconMail />
          </div>
          <a
            href="mailto:info@halongbaytours.com"
            className="self-stretch my-auto hover:text-blue-800 transition-colors"
          >
            info@halongbaytours.com
          </a>
        </div>

        <h4 className="mt-3 font-semibold text-black">Hanoi Head Office</h4>

        <div className="flex gap-3 items-center self-start mt-3 leading-none">
          <div className="shrink-0 self-stretch my-auto size-7 inline-flex text-blue-800 bg-blue-50 justify-center items-center rounded-full aspect-square ">
            <IconPhone />
          </div>
          <div className="flex flex-col justify-center self-stretch my-auto">
            <a
              href="tel:+842438364212"
              className="hover:text-blue-800 transition-colors"
            >
              +84 24 38364212
            </a>
            <a
              href="tel:+842437568868"
              className="hover:text-blue-800 transition-colors"
            >
              +84 24 37568868
            </a>
          </div>
        </div>

        <div className="flex gap-3 items-center mt-3 w-full leading-4">
          <div className="shrink-0 self-stretch my-auto size-7 inline-flex text-blue-800 bg-blue-50 justify-center items-center rounded-full aspect-square ">
            <IconLocations />
          </div>
          <address className="self-stretch my-auto not-italic">
            85-87 Hoang Quoc Viet street, <br />
            Cau Giay District, Hanoi, Vietnam
          </address>
        </div>

        <h4 className="mt-3 font-semibold text-black">
          Ho chi minh City Office
        </h4>

        <div className="flex gap-3 items-center self-start mt-3 leading-none">
          <div className="shrink-0 self-stretch my-auto size-7 inline-flex text-blue-800 bg-blue-50 justify-center items-center rounded-full aspect-square ">
            <IconPhone />
          </div>
          <a
            href="tel:+842838333388"
            className="self-stretch my-auto hover:text-blue-800 transition-colors"
          >
            +84 28 38 3333 88
          </a>
        </div>

        <div className="flex gap-3 items-center mt-3 w-full leading-4">
          <div className="shrink-0 self-stretch my-auto size-7 inline-flex text-blue-800 bg-blue-50 justify-center items-center rounded-full aspect-square ">
            <IconLocations />
          </div>
          <address className="self-stretch my-auto not-italic">
            Room 3A2, First floor, Toong Office, <br />
            126 Nguyen Thi Minh Khai Street, <br />
            Distric 3, Ho chi minh City
          </address>
        </div>
      </div>
    </section>
  );
}

