import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import logo from "../../../../public/images/logo.png";
import Image from "next/image";
import MyLink from "./MyLink";

const Navbar = () => {
  const navItem = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/apps",
      text: "Apps",
    },
    {
      path: "/installation",
      text: "Installation",
    },
    {
      path: "/dashboard",
      text: "Dashboard"
    }
  ];

  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg px-4 md:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-slate-900/90 backdrop-blur-md rounded-xl z-[50] mt-3 w-52 p-2 shadow-2xl border border-white/10 text-white font-semibold"
            >
              {/* {links} */}
              {
                navItem.map((item, index) => (
                  <MyLink key={index} href={item?.path}>
                    {item?.text}

                  </MyLink>
                ))
              }
            </ul>
          </div>

          <Link href="/">
            <Image src={logo} alt="PH Play" width={50} height={50} />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 text-sm font-bold text-white">
            {/* {links} */}
             {
                navItem.map((item, index) => (
                  <MyLink key={index} href={item?.path}>
                    {item.text}

                  </MyLink>
                ))
              }
          </ul>
        </div>

        <div className="navbar-end ">
          <Link
            href="/"
            className="flex gap-2 items-center py-2.5 px-6 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-extrabold text-xs tracking-widest rounded-xl shadow-lg shadow-purple-900/20 active:scale-95 transition-all uppercase"
          >
            <FaGithub /> <h2>Contribute</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
