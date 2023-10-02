

'use client'
import Link from 'next/link';
import React, { useState } from 'react';

import { RiParentFill } from "react-icons/ri";
import { FaChartPie } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import Image from 'next/image';
const Sidebar = () => {
  const [activeNavItem, setActiveNavItem] = useState("/dasboard");
  const handleNavItemClick = (item: string) => {
    setActiveNavItem(item);
  };
  return (
    <div className="h-screen w-1/6 bg-emerald-600  fixed ">
       {/* <img src="logoA.png" alt="Logo" className="ml-24 mb-28 w-32 mt-16 items-center" /> */}

       <Image
     src="/LO.png"
      alt="Logo"
      width={200}
      height={90}
      style={{ marginTop: '80px', marginLeft: '60px', marginBottom: '100px' }}
      
    /> 
    <div className="mt-5 ml-8 text-2xl">
    <div className={`ml-8 mb-16 cursor-pointer ${ activeNavItem === '/dashboard' ? 'bg-emerald-600' : 'text-white'}`}
          onClick={() => handleNavItemClick('/dashboard')} >
          <Link href="/dashboard">
            <div className="flex "><FaChartPie size={40} className="mr-2 -mt-1" />
              Dashboard
            </div>
          </Link>
        </div>
        <div className={`ml-8 cursor-pointer ${ activeNavItem === '/' ? 'bg-emerald-600' : 'text-white' }`}
          onClick={() => handleNavItemClick('/lactationist')}>
          <Link href="/lactationist">
            <div className="flex"><BsFillPersonFill size={40} className="mr-2 -mt-1" />
              Lactationist
            </div>
          </Link>
        </div>
    <div className={`ml-8 mt-16 cursor-pointer ${activeNavItem === '/' ? 'bg-emerald-600' : 'text-white' }`}
          onClick={() => handleNavItemClick('/mothers')}>
          <Link href="/mothers">
            <div className="flex"><RiParentFill size={40} className="mr-2 -mt-1" />
              Mothers
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;