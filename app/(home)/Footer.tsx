"use client";

import { navItems } from "@/app/Navbar";
import { Separator } from "@/components/ui/separator";
import Logo from "@/public/logo.svg";
import { Link } from "nextjs13-progress";

const Footer = () => {
  return (
    <footer className="bg-black flex flex-col gap-8 px-8 md:px-24 py-8">
      <div className="flex justify-between items-center gap-8">
        <Link href="/">
          <Logo className="h-8 w-fit" />
        </Link>
      </div>
      <Separator />
      <div className="flex justify-between flex-col md:flex-row md:items-center gap-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {navItems.map((item) => (
            <Link key={item.title} href={item.href} className="text-gray-400">
              {item.title}
            </Link>
          ))}
        </div>
        <p className="text-gray-400">© Copyright 2023. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
