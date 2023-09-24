"use client";

import { useState } from "react";
// next
import Link from "next/link";
// components
import { ConnectWallet } from "@/app/ConnectWallet";
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

  const handleMenuClick = () => {
    setMenuOpen(false); // close the menu after interaction
  };

  return (
    <div className="fixed flex left-0 top-0 right-0 px-4 md:px-20 text-lg py-4 bg-black bg-opacity-40 items-center justify-between z-50 backdrop-blur-sm shadow-md">
      <Link
        href="/"
        passHref
        className="hover:bg-muted/20 p-4 rounded-lg"
        onClick={handleMenuClick}
      >
        <LogoIcon className="h-8 w-auto" />
      </Link>

      <div className="flex relative gap-4 justify-end items-center h-full">
        <div className="md:hidden">
          <Menu size={24} onClick={() => setMenuOpen(!menuOpen)} />
        </div>

        <div
          className={`fixed flex flex-col top-24 items-end gap-8 left-0 w-full p-8 bg-black/95 z-40 transition-transform duration-300 ease-in-out transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } md:static md:w-auto md:bg-transparent md:flex-row md:gap-16 md:transform-none`}
        >
          {items.map((item) => (
            <div key={item.title}>
              <Link
                href={item.href}
                passHref
                className="hover:bg-muted/20 p-4 rounded-lg block"
                onClick={handleMenuClick}
              >
                {item.title}
              </Link>
            </div>
          ))}
          <ConnectWallet />
          <Avatar className="h-14 w-14">
            {/* TODO: Change to actual avatar or NFT */}
            <AvatarImage src="/" alt="8" />
            {/* TODO: Change to name initials */}
            <AvatarFallback className="bg-primary/20">TR</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};
