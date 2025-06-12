import React from "react";
import Image from "next/image";

import Image1 from "../../public/icons/Group-1.png";
import Image2 from "../../public/icons/Group-2.png";
import Image3 from "../../public/icons/Group-3.png";
import Image4 from "../../public/icons/Group-4.png";
import Image5 from "../../public/icons/Group-5.png";
import Image6 from "../../public/icons/Group-6.png";
import Image7 from "../../public/icons/Group-7.png";
import Image8 from "../../public/icons/Group-8.png";
import Image9 from "../../public/icons/Group-9.png";
import upArrow from "../../public/icons/Vector 4.png";

const categories = [
  { icon: Image1 },
  { icon: Image2 },
  { icon: Image3 },
  { icon: Image4 },
  { icon: Image5 },
  { icon: Image6 },
  { icon: Image7 },
  { icon: Image8 },
  { icon: Image9 },
];

export const CategoryBar: React.FC = () => {
  return (
    <div className="bg-[#0C0C0C] mt-16 sm:mt-24 md:mt-24 py-6 shadow-[0px_2px_16px_0px_#00000029]">
      {/* Scrollable icon row with gap */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-[56px] px-8 min-w-max mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="w-[90px] h-[124px] flex items-center justify-center flex-shrink-0"
            >
              <Image
                src={category.icon}
                alt={`category-${index}`}
                className="object-contain max-w-full max-h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Subcategory info */}
      <div className="flex justify-between items-center mt-6 text-[#E5DFD9] text-sm font-['Encode_Sans']  bg-[#0C0C0C] max-w-[1215px] mx-auto px-4 py-2">
        <span className="tracking-wide">Bags • Backpacks</span>
        <span className="flex items-center gap-1">
          13 products
          <Image
            src={upArrow}
            alt="up-arrow"
            width={16}
            height={16}
            className="ml-2"
          />
        </span>
      </div>
    </div>
  );
};
