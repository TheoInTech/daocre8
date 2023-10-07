"use client";

import { useState } from "react";
// next
import { usePathname } from "next/navigation";
import { Link } from "nextjs13-progress";
// components
import { ConnectWallet } from "@/app/ConnectWallet";
import { cn } from "@/lib/utils/cn";
import LogoIcon from "@/public/logo.svg";
import { useWallet } from "@solana/wallet-adapter-react";
import { Menu } from "lucide-react";

export const navItems: { title: string; href: string }[] = [
  {
    title: "Home",
    href: "/",
  },
  // {
  //   title: "Fund a Project",
  //   href: "/fund",
  // },
  // {
  //   title: "Fundraise",
  //   href: "/raise",
  // },
  {
    title: "Join Waitlist",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSeIUD7FSluhW2QjspFW7R9YU1VVMBtfPBPvJX2YD5LqdwYiXA/viewform",
  },
];

export const Navbar = () => {
  const { publicKey } = useWallet();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="fixed left-0 top-0 right-0 z-50">
      {/* <div className="flex flex-wrap justify-center text-xs items-center p-2 bg-accent text-foreground font-medium text-center">
        This is a demo site for Solana Hyperdrive and mock data are currently
        used. Be the first to know when we launch!{" "}
        <Link
          href="https://xovoxlabs.my.canva.site/daocre-8-waitlist"
          target="_blank"
          className="font-bold underline md:ml-2"
        >
          Join our waitlist.
        </Link>
      </div> */}
      <div className="flex px-4 md:px-20 text-lg py-4 bg-black/80 items-center justify-between backdrop-blur-sm shadow-md">
        <Link
          href="/"
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
            className={`fixed flex flex-col top-24 items-end md:items-center p-8 md:p-0 gap-4 left-0 w-full bg-black/95 z-40 transition-transform duration-300 ease-in-out transform ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            } md:static md:w-auto md:bg-transparent md:flex-row md:gap-8 md:transform-none md:text-sm`}
          >
            {navItems.map((item) => (
              <div key={item.title}>
                <Link
                  href={item.href}
                  className={cn(
                    "hover:bg-muted/20 p-3 rounded-lg block",
                    pathname === item.href &&
                      "border-b-2 rounded-none p-2 hover:bg-transparent border-primary cursor-default"
                  )}
                  onClick={handleMenuClick}
                >
                  {item.title}
                </Link>
              </div>
            ))}
            <ConnectWallet />
          </div>
        </div>
      </div>
    </div>
  );
};
