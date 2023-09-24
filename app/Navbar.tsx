"use client";

import { useState } from "react";
// next
import Link from "next/link";
// components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LogoIcon from "@/public/logo.svg";
import { Menu } from "lucide-react";

const items: { title: string; href: string }[] = [
  {
    title: "Fund",
    href: "/fund",
  },
  {
    title: "Raise",
    href: "/raise",
  },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed flex left-0 top-0 right-0 px-4 md:px-20 text-lg py-4 bg-black bg-opacity-20 items-center justify-between z-50 backdrop-blur-sm shadow-md">
      <Link href="/" passHref className="hover:bg-muted/20 p-4 rounded-lg">
        <LogoIcon className="h-8 w-auto" />
      </Link>

      <div className="md:hidden">
        <Menu size={24} onClick={() => setMenuOpen(!menuOpen)} />
      </div>

      <div
        className={`fixed flex flex-col top-24 left-0 w-full bg-muted z-40 transition-transform duration-300 ease-in-out transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:static md:w-auto md:bg-transparent md:flex-row md:gap-16 md:transform-none`}
      >
        {items.map((item) => (
          <div key={item.title}>
            <Link
              href={item.href}
              passHref
              className="hover:bg-muted/20 p-4 rounded-lg block"
            >
              {item.title}
            </Link>
          </div>
        ))}
      </div>

      <div className="flex gap-16 justify-end items-center">
        <Avatar className="h-14 w-14">
          {/* TODO: Change to actual avatar or NFT */}
          <AvatarImage src="/" alt="8" />
          {/* TODO: Change to name initials */}
          <AvatarFallback className="bg-primary/20">TR</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
