"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MyLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href}
      className={`relative pb-1.5 font-bold text-sm uppercase tracking-widest transition-all duration-300 group ${
        isActive 
          ? "text-white ]" 
          : "text-white/50 hover:text-white/90"
      }`}
    >
      {children}

     
      <span 
        className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300 shadow-[0_0_10px_#8b5cf6] ${
          isActive ? "w-full" : "w-0 group-hover:w-full bg-white/40 shadow-none"
        }`}
      />
    </Link>
  );
};

export default MyLink;