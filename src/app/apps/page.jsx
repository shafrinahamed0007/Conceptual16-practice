"use client";
import AppCard from "@/components/ui/AppCard";
import { ClockLoader } from "react-spinners";
import useApps from "@/hooks/useApps";



const AppsPage = () => {
  const { apps, loading } = useApps();
  return (
    <div className="container mx-auto px-4 py-16 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="flex justify-center items-center gap-2">
          <span className="h-[2px] w-8 bg-purple-500 rounded-full"></span>
          <h2 className="font-black text-3xl md:text-4xl text-white tracking-tight uppercase">
            All Apps
          </h2>
          <span className="h-[2px] w-8 bg-purple-500 rounded-full"></span>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed font-medium">
          Explore our most popular and highly rated digital experiences. Crafted
          precisely to make your everyday routine simpler, smarter, and highly
          productive.
        </p>

        {!loading && (
          <div className="pt-2">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 text-purple-400 px-3 py-1 rounded-full">
              Featured: {apps.length} Live Apps
            </span>
          </div>
        )}
      </div>

      {loading ? (
        <div className="flex flex-col justify-center items-center min-h-[30vh] gap-3">
          <ClockLoader color="#8b5cf6" size={45} />
          <p className="text-xs text-slate-500 font-bold tracking-widest uppercase animate-pulse">
            Loading Apps...
          </p>
        </div>
      ) : (
        <div className="space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {apps.map((app) => {
              return <AppCard key={app.id} app={app} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AppsPage;
