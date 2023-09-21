"use client";

// next
import Link from "next/link";
// components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
  return (
    <div className="fixed flex left-0 top-0 right-0 px-20 text-lg py-4 items-center justify-between z-50 backdrop-blur shadow-md">
      <div className="flex gap-16 items-center">
        <Link href="/" passHref className="hover:bg-accent p-4 rounded-lg">
          Logo
        </Link>
        {items.map((item) => (
          <div key={item.title}>
            <Link
              href={item.href}
              passHref
              className="hover:bg-accent p-4 rounded-lg"
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
