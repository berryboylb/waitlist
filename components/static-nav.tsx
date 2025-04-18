"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
// import { Button } from "./ui/button";
import { Popup } from "./popup";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // function scrollToBottom() {
  //   window.scrollTo({
  //     top: document.body.scrollHeight,
  //     behavior: "smooth", // 'auto' for instant
  //   });
  // }

  return (
    <nav
      className={cn(
        "w-full py-4 transition-all duration-300 z-50",
        isScrolled
          ? "fixed top-0 left-0 right-0 backdrop-blur-sm "
          : "relative bg-transparent"
      )}
    >
      <div className="container  mx-auto  flex items-center  gap-5 lg:gap-10">
        <div className="flex items-center justify-between lg:bg-white/95 lg:custom-header-shadow  lg:py-4 lg:px-8 rounded-4xl flex-1 lg:shadow-md lg:backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <Link href={"/"}>
              <Image src={Logo} alt={Logo} className="hover:opacity-90" />
            </Link>
          </div>
          <Link
            href="/"
            className="text-xs font-bold text-secondary hidden md:block font-[family-name:var(--font-transforma-sans)]"
          >
            Home
          </Link>
        </div>
        <Popup/>
        {/* <div className="flex items-center  lg:p-4 lg:bg-white/95 custom-header-shadow rounded-4xl">
          <Button
            onClick={scrollToBottom}
            className="rounded-4xl font-[family-name:var(--font-transforma-sans)] text-xs font-bold text-white p-2 lg:p-5 hover:animate-pulse"
          >
            Join the waitlist
          </Button>
         
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
