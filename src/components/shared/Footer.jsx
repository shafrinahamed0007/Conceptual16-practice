import Link from "next/link";

const Footer = () => {
 
  const links = (
    <>
      <Link href={'/'} className="tracking-widest uppercase text-xs font-bold text-white/60 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition-all duration-200">
        Home
      </Link>
      <Link href={'/apps'} className="tracking-widest uppercase text-xs font-bold text-white/60 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition-all duration-200">
        Apps
      </Link>
      <Link href="/installation" className="tracking-widest uppercase text-xs font-bold text-white/60 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition-all duration-200">
        App Install
      </Link>
      <Link href="/dashboard" className="tracking-widest uppercase text-xs font-bold text-white/60 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition-all duration-200">
        Dashboard
      </Link>
    </>
  );

  return (
  
    <footer className="footer footer-horizontal mt-[120px] footer-center bg-white/5 backdrop-blur-md border-t border-white/10 rounded-t-3xl p-10 shadow-2xl">
      
     
      <nav className="grid grid-flow-col gap-8">
        {links}
      </nav>
      
      
      <nav className="my-2">
        <div className="grid grid-flow-col gap-6">
          
          
          <a className="p-2.5 rounded-full bg-white/5 border border-white/10 shadow-sm text-white/60 hover:text-purple-400 hover:bg-white/10 hover:border-purple-500/30 hover:scale-110 transition-all cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          
         
          <a className="p-2.5 rounded-full bg-white/5 border border-white/10 shadow-sm text-white/60 hover:text-red-400 hover:bg-white/10 hover:border-red-500/30 hover:scale-110 transition-all cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          
         
          <a className="p-2.5 rounded-full bg-white/5 border border-white/10 shadow-sm text-white/60 hover:text-purple-400 hover:bg-white/10 hover:border-purple-500/30 hover:scale-110 transition-all cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>

        </div>
      </nav>
      
    
      <aside className="border-t border-white/5 w-full pt-4 mt-2">
        <p className="text-xs font-semibold tracking-wider text-slate-400">
          Copyright © {new Date().getFullYear()} — <span className="text-white font-bold tracking-wide">Shafrin Ahamed</span>
        </p>
      </aside>

    </footer>
  );
};

export default Footer;