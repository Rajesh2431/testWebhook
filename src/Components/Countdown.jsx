import React, { useState, useEffect } from "react";
import { FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";

const CountdownDate = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: "000",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const countdown = () => {
      const deadline = new Date("2025-08-15T00:00:00").getTime();
      const now = Date.now();
      const diff = deadline - now;

      if (diff > 0) {
        const totalSeconds = Math.floor(diff / 1000);
        const totalHours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60)
          .toString()
          .padStart(2, "0");
        const seconds = Math.floor(totalSeconds % 60)
          .toString()
          .padStart(2, "0");

        setTimeLeft({
          hours: totalHours.toString().padStart(3, "0"),
          minutes,
          seconds,
        });
      } else {
        setTimeLeft({ hours: "000", minutes: "00", seconds: "00" });
      }
    };

    countdown(); // initial call
    const interval = setInterval(countdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-[#f3f4ef] relative overflow-hidden">
      {/* Headline Animation */}
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl lg:text-6xl 2xl:text-6xl font-medium font-josefin text-gray-800 mb-4"
      >
        Live from{" "}
        <span className="bg-gradient-to-b from-[#724935] to-[#D88A64] text-transparent bg-clip-text font-bold font-josefin">
          15 August
        </span>
      </motion.p>

      {/* Countdown Timer Box Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-4 w-full scale-85 md:scale-100 md:px-28 xl:px-80 relative font-josefin"
      >
        {/* Fade overlays */}
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-[#f3f4ef] to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-[#f3f4ef] to-transparent z-10 pointer-events-none" />

        {/* Timer Box */}
        <div className="relative overflow-hidden h-auto md:h-36 lg:h-42 px-6 py-3 border-2 border-gray-500 rounded-full shadow-sm flex items-center justify-center space-x-8">
          {/* Hours */}
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl xl:text-5xl font-bold bg-gradient-to-b from-[#724935] to-[#D88A64] text-transparent bg-clip-text transition duration-500">
              {timeLeft.hours}
            </span>
            <span className="text-sm mt-1 text-[#724935] font-semibold uppercase tracking-wide">
              Hours
            </span>
          </div>

          <div className="h-10 w-px bg-[#724935]"></div>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl xl:text-5xl font-bold bg-gradient-to-b from-[#724935] to-[#D88A64] text-transparent bg-clip-text transition duration-500">
              {timeLeft.minutes}
            </span>
            <span className="text-sm mt-1 text-[#724935] font-semibold uppercase tracking-wide">
              Minutes
            </span>
          </div>

          <div className="h-10 w-px bg-[#724935]"></div>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl xl:text-5xl font-bold bg-gradient-to-b from-[#724935] to-[#D88A64] text-transparent bg-clip-text transition duration-500">
              {timeLeft.seconds}
            </span>
            <span className="text-sm mt-1 text-[#724935] font-semibold uppercase tracking-wide">
              Seconds
            </span>
          </div>
        </div>
      </motion.div>

      {/* Contact Section Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center space-x-3 sm:space-x-4 mt-5"
      >
        <div className="bg-[#874d2c] p-3 sm:p-4 rounded-full shadow-md">
          <FiPhone className="text-white text-lg sm:text-xl" />
        </div>

        <a
          href="tel:9000130692"
          className="text-[#333] text-2xl lg:text-4xl font-semibold mt-1 drop-shadow-sm hover:text-[#874d2c] transition duration-200 font-josefin"
        >
          9000130692
        </a>
      </motion.div>
    </div>
  );
};

export default CountdownDate;
