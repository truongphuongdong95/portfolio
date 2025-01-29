import React from "react";
import Image from "next/image";
import SlideUpAnimation from "./SlideUpAnimation";

const Footer = () => {
  return (
    <SlideUpAnimation>
      <footer className="bg-white text-black px-6 md:px-20 py-3">
        <div className="max-w-full mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 md:w-20 h-10 md:h-20 relative">
              <Image
                src="/images/avatar.png"
                alt="Personal logo"
                width={80}
                height={80}
              />
            </div>
            <span className="font-bold text-xl leading-6">DDoong</span>
          </div>

          <div className="flex flex-col items-end gap-2 md:gap-4 text-sm">
            <span>©2025 DDoong</span>
            <span>Made In DDoong</span>
          </div>
        </div>
      </footer>
    </SlideUpAnimation>
  );
};

export default Footer;
