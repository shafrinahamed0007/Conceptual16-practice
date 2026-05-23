import React from "react";
import bannerImg from "../../../public/images/hero.png";
import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative min-h-[75vh] flex flex-col items-center justify-between container mx-auto px-4 pt-16 pb-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] md:w-[500px] h-[350px] bg-gradient-to-tr from-purple-600/20 to-cyan-500/10 blur-[100px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 text-center space-y-6 max-w-3xl">
        <span className="inline-block text-[11px] font-black uppercase tracking-[0.25em] bg-purple-500/10 text-purple-400 px-4 py-1.5 rounded-full border border-purple-500/20 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
          Welcome to Hero.io
        </span>

        <h2 className="font-black text-4xl md:text-6xl tracking-tight text-white leading-[1.15]">
          We Build <br />
          <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            Productive
          </span>{" "}
          Apps
        </h2>

        <p className="text-sm md:text-base text-slate-400 font-medium leading-relaxed max-w-xl mx-auto">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
          {/* গুগল প্লে বাটন */}
          <button className="flex items-center gap-2.5 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-xl border border-white/10 shadow-lg backdrop-blur-md transition-all active:scale-95 group">
            <FaGooglePlay
              className="text-purple-400 group-hover:scale-110 transition-transform"
              size={14}
            />
            Play Store
          </button>

          <button className="flex items-center gap-2.5 px-6 py-3 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-purple-950/40 transition-all active:scale-95 group">
            <FaApple
              className="text-white group-hover:scale-110 transition-transform"
              size={16}
            />
            App Store
          </button>
        </div>
      </div>

      <div className="relative z-10 flex justify-center mt-12 max-w-4xl w-full px-4 group">
        <div className="absolute inset-0 bg-purple-500/5 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>

        <div className="relative transition-transform duration-500 hover:-translate-y-1 mb-0 flex items-end">
          <Image
            src={bannerImg}
            alt="Banner Image"
            width={680}
            height={680}
            className="drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)] object-contain block"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
