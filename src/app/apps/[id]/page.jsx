import Image from "next/image";
import { FaDownload, FaStar, FaArrowLeft } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import Link from "next/link";

// 🌐 ডাটা ফেচিং ফাংশন (প্রোডাকশন ইউআরএল ফিক্সসহ)
const appsPromise = async function () {
  // আপনার ভেরসেল ব্যাকএন্ড বা লোকালহোস্টের জন্য ডাইরেক্ট পাথ
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://conceptual15-next.vercel.app";
  try {
    const res = await fetch(`${baseUrl}/data.json`, { cache: 'no-store' });
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch Error: ", error);
    return [];
  }
};

const AppDetailPage = async ({ params }) => {
  const { id } = await params;
  const apps = await appsPromise();

  // 🛠️ String ID কে Number এ কনভার্ট করে নিখুঁতভাবে ফাইন্ড করা হলো
  const app = apps.find((item) => Number(item.id) === Number(id));

  // ⚠️ অ্যাপ না পাওয়া গেলে ফাঁকা স্ক্রিন না দেখিয়ে সুন্দর এই এরর পেজটি আসবে
  if (!app) {
    return (
      <div className="min-h-screen bg-[#070b12] flex flex-col items-center justify-center text-center p-6 text-slate-200">
        <h2 className="text-2xl font-bold text-white mb-2">App Not Found</h2>
        <p className="text-sm text-slate-400 mb-6">The app with ID {id} could not be recovered.</p>
        <Link href="/" className="px-5 py-2.5 bg-[#8b5cf6] text-white font-bold text-xs tracking-widest rounded-xl shadow-lg hover:bg-[#7c3aed] transition-all uppercase">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    /* 🌌 Abyss ডার্ক ব্যাকগ্রাউন্ড কন্টেইনার */
    <div className="relative min-h-screen bg-[#070b12] text-slate-100 py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden">
      
      {/* 🔮 ব্যাকগ্রাউন্ডে লাক্সারি পার্পল লিকুইড গ্লো */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="w-full max-w-2xl relative z-10">
        
        {/* ⬅️ ব্যাক টু এক্সপ্লোর বাটন */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest mb-6 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Explore
        </Link>

        {/* 💎 হোয়াইট লিকুইড গ্লাস ডিটেইলস কার্ড (নবারের সাথে ১০০% ম্যাচ) */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl space-y-6">
          
          {/* 🌟 টপ সেকশন: বড় লোগো এবং টাইটেল লেআউট */}
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
            
            {/* ডার্ক গ্লাস লোগো বক্স */}
            <div className="flex justify-center items-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/5 shadow-md flex-shrink-0 w-[130px] h-[130px]">
              <Image
                src={app?.image}
                alt={app?.title || "App Image"}
                width={95}
                height={95}
                className="rounded-2xl object-contain drop-shadow-xl"
              />
            </div>

            {/* অ্যাপের টেক্সট ইনফো */}
            <div className="flex-grow space-y-1 pt-2 w-full">
              <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white">
                {app?.title}
              </h1>
              <p className="text-xs font-bold text-[#8b5cf6] uppercase tracking-widest">
                {app?.companyName || "Unknown Developer"}
              </p>
            </div>
          </div>

          {/* 📊 মিডল সেকশন: ৩-কলাম প্রিমিয়াম স্ট্যাটাস বক্স */}
          <div className="grid grid-cols-3 border border-white/5 py-4 text-center bg-slate-950/40 backdrop-blur-sm rounded-xl px-2 shadow-inner">
            
            {/* রেটিং কলাম */}
            <div className="border-r border-white/5 flex flex-col justify-center items-center">
              <p className="text-base font-black text-white flex items-center gap-1.5">
                {app?.ratingAvg || "0.0"} <FaStar className="text-amber-400" size={14} />
              </p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Rating</p>
            </div>

            {/* ডাউনলোডস কলাম */}
            <div className="border-r border-white/5 flex flex-col justify-center items-center">
              <p className="text-base font-black text-white flex items-center gap-1.5">
                {app?.downloads || "0"} <FaDownload className="text-purple-400" size={12} />
              </p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Downloads</p>
            </div>

            {/* রিভিউ কলাম */}
            <div className="flex flex-col justify-center items-center">
              <p className="text-base font-black text-white flex items-center gap-1.5">
                {app?.reviews || "0"} <AiFillLike className="text-cyan-400" size={14} />
              </p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Reviews</p>
            </div>

          </div>

          {/* 🚀 আপনার সিগনেচার পার্পল "INSTALL NOW" বাটন */}
          <div className="w-full">
            <button className="w-full py-3.5 px-4 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-extrabold text-xs tracking-widest rounded-xl shadow-lg shadow-purple-950/50 hover:shadow-purple-500/20 active:scale-[0.98] transition-all uppercase">
              Install Now {app?.size ? `(${app.size} MB)` : ""}
            </button>
          </div>

          {/* 📄 ডেসক্রিপশন সেকশন */}
          <div className="border-t border-white/5 pt-5 space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Description</h3>
            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              {app?.description || "No description available for this application. Experience simpler, smarter, and more exciting digital interactions with our newly updated version."}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AppDetailPage;