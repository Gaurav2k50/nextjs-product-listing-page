import React from "react";
import Image from "next/image";
import Link from "next/link";
import Frame51 from "../../public/icons/Frame 51.png";
import Frame52 from "../../public/icons/Frame 52.png";
import Frame53 from "../../public/icons/Frame 53.png";
import Frame54 from "../../public/icons/Frame 54.png";

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full md:w-[1280px] h-auto md:h-[105px] bg-[#0C0C0C] shadow-[0px_2px_16px_0px_#00000029] z-50 px-4 md:px-[50px]">
      <div className="flex flex-col justify-between h-full py-4 md:py-[19px]">
        {/* Top: Brand + Icons */}
        <div className="flex justify-between items-center">
          {/* Left: Brand */}
          <div className="text-[#E5DFD9] font-comme text-[16px] md:text-[20px] leading-[100%] tracking-[0.55em]">
            TANN TRIM
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-3 md:gap-[14px]">
            <Image src={Frame51} alt="Search" width={24} height={24} />
            <Image src={Frame52} alt="Contact" width={24} height={24} />
            <Image src={Frame53} alt="Cart" width={24} height={24} />
            <Image src={Frame54} alt="Save" width={24} height={24} />
          </div>
        </div>

        {/* Bottom: Navigation */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-[32px] mt-4 md:mt-[18px] text-[#E5DFD9] text-[12px] md:text-[14px] font-encode leading-[100%] tracking-[0.1em]">
          <Link href="#">Bags</Link>
          <Link href="#">Travel</Link>
          <Link href="#">Accessories</Link>
          <Link href="#">Gifting</Link>
          <Link href="#">Jewelery</Link>
        </div>
      </div>
    </nav>
  );
};
