import { Logo } from "@/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-12 bg-[#F4F1FF]">
      <div className="container mx-auto px-4 md:px-6 border-t lg:pt-20">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-8">
            <Image src={Logo} alt={Logo} className=" w-[200p] h-[50px] lg:w-[400px] lg:h-[100px] object-contain hover:animate-pulse" />
          </div>

          <p className="text-xs text-black mb-6 font-[family-name:var(--font-transforma-sans)]">
            © 2025 Ticketeur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
