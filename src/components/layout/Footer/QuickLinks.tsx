import * as React from "react";

interface QuickLinksProps {}

export function QuickLinks({}: QuickLinksProps) {
  const links = [
    "About Us",
    "Daily Tours",
    "Exclusive Tours",
    "Special Offers",
    "Group Tours",
    "Private Tours",
    "Customize Tours"
  ];

  return (
    <nav className="w-[103px]">
      <h3 className="text-lg font-semibold leading-none text-blue-800">
        Quick Links
      </h3>
      <ul className="mt-6 w-full text-xs leading-none text-neutral-500">
        {links.map((link, index) => (
          <li key={index} className={index > 0 ? "mt-3" : ""}>
            <a href="#" className="hover:text-blue-800 transition-colors">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
