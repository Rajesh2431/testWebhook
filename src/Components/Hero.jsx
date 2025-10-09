import React from "react";
import { motion } from "framer-motion";
import DesktopBG from "/src/assets/Landing.jpg";
import MobileBG from "/src/assets/Mobile_Landing.jpg";

export const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Desktop Background */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${DesktopBG})` }}
      />

      {/* Mobile Background */}
      <div
        className="block md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${MobileBG})` }}
      />

      {/* Animated Title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.2,
          }}
          className="text-6xl sm:text-6xl md:text-9xl 2xl:text-[11rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#724935] to-[#D88A64] mb-70"
        >
          FURNICHO
        </motion.h1>
      </div>
    </div>
  );
};
