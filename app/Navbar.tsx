"use client";

import { useState } from "react";
// next
import { usePathname } from "next/navigation";
import { Link } from "nextjs13-progress";
// components
import { ConnectWallet } from "@/app/ConnectWallet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils/cn";
import LogoIcon from "@/public/logo.svg";
import { useWallet } from "@solana/wallet-adapter-react";
import { Menu } from "lucide-react";

const items: { title: string; href: string }[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Fund a Project",
    href: "/fund",
  },
  {
    title: "Start Fundraising",
    href: "/raise",
  },
];

export const Navbar = () => {
  const { publicKey } = useWallet();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(false); // close the menu after interaction
  };

  return (
    <div className="fixed left-0 top-0 right-0 z-50">
      <div className="flex flex-wrap justify-center text-xs items-center p-2 bg-accent text-foreground font-medium">
        This is a demo site for Solana Hyperdrive and mock data are currently
        used. Be the first to know when we launch!{" "}
        <Link
          href="https://xovoxlabs.my.canva.site/daocre-8-waitlist"
          target="_blank"
          className="font-bold underline md:ml-2"
        >
          Join our waitlist.
        </Link>
      </div>
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
            } md:static md:w-auto md:bg-transparent md:flex-row md:gap-8 md:transform-none`}
          >
            {items.map((item) => (
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
            {publicKey && (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar className="h-14 w-14 hover:brightness-105 hover:scale-110 duration-300 ease-in-out">
                    {/* TODO: Change to actual avatar or NFT */}
                    <AvatarImage src="/" alt="8" />
                    {/* TODO: Change to name initials */}
                    <AvatarFallback className="bg-primary/20 text-sm">
                      You
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild onClick={handleMenuClick}>
                    <Link href={"/creator"}>Creator Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild onClick={handleMenuClick}>
                    <Link href={"/creator/your-projects"}>Your Projects</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild onClick={handleMenuClick}>
                    <Link href={"/backed-projects"}>Backed Projects</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild onClick={handleMenuClick}>
                    <Link href={"/settings"}>Settings</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
