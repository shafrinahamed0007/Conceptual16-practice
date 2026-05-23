import Image from "next/image";
import React from "react";
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa6"; // প্রফেশনাল লুকের জন্য সলিড স্টার ব্যবহার করা হয়েছে
import Link from "next/link";

const AppCard = ({ app }) => {
  return (
    <Link 
      href={`/apps/${app?.id}`} 
      key={app?.id} 
      className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-xl hover:shadow-purple-500/10 hover:bg-white/10 hover:scale-[1.03] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
    >
    
      <div className="flex justify-center items-center bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4 border border-white/5 group-hover:bg-white/15 transition-colors h-[160px] w-full">
        <Image 
          src={app?.image} 
          alt={app?.title || "App Image"} 
          width={100} 
          height={100} 
          className="rounded-2xl object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex-grow flex flex-col justify-between space-y-4">
        <div>
          {/* টাইটেল */}
          <h3 className="text-lg font-bold tracking-tight text-white line-clamp-1 mb-0.5 group-hover:text-purple-400 transition-colors">
            {app?.title}
          </h3>
         
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            {app?.companyName || "Unknown Developer"}
          </p>
        </div>

       
        <div className="flex items-center justify-between bg-slate-950/40 backdrop-blur-sm border border-white/5 rounded-xl px-3 py-2 text-xs font-bold text-slate-200 shadow-inner">
          
        
          <div className="flex items-center gap-1.5">
            <FaStar className="text-amber-400" size={13} />
            <span>{app?.ratingAvg || "0.0"}</span>
          </div>

          <span className="text-white/10">|</span>

        
          <div className="flex items-center gap-1.5">
            <FaDownload className="text-purple-400" size={11} />
            <span>{app?.downloads || "0"}</span>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default AppCard;