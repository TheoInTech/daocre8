"use client";

import { navItems } from "@/app/Navbar";
import { Separator } from "@/components/ui/separator";
import Logo from "@/public/logo.svg";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "nextjs13-progress";

const Footer = () => {
  return (
    <footer className="bg-black flex flex-col gap-8 px-8 md:px-24 py-8">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-8">
        <div>
          <Link href="/">
            <Logo className="h-8 w-fit" />
          </Link>
        </div>
        <div className="flex items-center justify-end flex-nowrap gap-8">
          <Link href={"https://twitter.com/DAOCre8"} target="_blank">
            <Twitter className="w-6 h-6 hover:text-secondary duration-300 stroke-1" />
          </Link>
          <Link
            href={"https://www.linkedin.com/company/daocre8/"}
            target="_blank"
          >
            <Linkedin className="w-6 h-6 hover:text-secondary duration-300 stroke-1" />
          </Link>
          <Link href={"https://www.facebook.com/daocre8"} target="_blank">
            <Facebook className="w-6 h-6 hover:text-secondary duration-300 stroke-1" />
          </Link>
          <Link
            href={"https://github.com/theindiehacker/daocre8"}
            target="_blank"
          >
            <Github className="w-6 h-6 hover:text-secondary duration-300 stroke-1" />
          </Link>
        </div>
      </div>
      <Separator />
      <div className="flex justify-center md:justify-between flex-col md:flex-row items-center gap-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start">
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
