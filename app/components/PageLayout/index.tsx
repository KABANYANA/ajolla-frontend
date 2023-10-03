

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
  //   <div className="h-screen w-1/6 bg-emerald-600  fixed ">
  //      {/* <img src="logoA.png" alt="Logo" className="ml-24 mb-28 w-32 mt-16 items-center" /> */}

  //      <Image
  //    src="/LO.png"
  //     alt="Logo"
  //     width={150}
  //     height={90}
  //     style={{ marginTop: '80px', marginLeft: '60px', marginBottom: '100px' }}
      
  //   /> 
  //   <div className="mt-5 ml-8 text-2xl">
  //   <div className={`ml-8 mb-16 cursor-pointer ${ activeNavItem === '/dashboard' ? 'bg-emerald-600' : 'text-white'}`}
  //         onClick={() => handleNavItemClick('/dashboard')} >
  //         <Link href="/dashboard">
  //           <div className="flex "><FaChartPie size={40} className="mr-2 -mt-1" />
  //             Dashboard
  //           </div>
  //         </Link>
  //       </div>
  //       <div className={`ml-8 cursor-pointer ${ activeNavItem === '/' ? 'bg-emerald-600' : 'text-white' }`}
  //         onClick={() => handleNavItemClick('/lactationist')}>
  //         <Link href="/lactationist">
  //           <div className="flex"><BsFillPersonFill size={40} className="mr-2 -mt-1" />
  //             Lactationist
  //           </div>
  //         </Link>
  //       </div>
  //   <div className={`ml-8 mt-16 cursor-pointer ${activeNavItem === '/' ? 'bg-emerald-600' : 'text-white' }`}
  //         onClick={() => handleNavItemClick('/mothers')}>
  //         <Link href="/mothers">
  //           <div className="flex"><RiParentFill size={40} className="mr-2 -mt-1" />
  //             Mothers
  //           </div>
  //         </Link>
  //       </div>
  //     </div>
  //   </div>
  // );

  <div className="h-screen w-1/6 bg-emerald-600 fixed">
  <div className="flex flex-col h-full justify-between">
    <div className="mt-16 ml-8">
      <Image
        src="/LO.png"
        alt="Logo"
        width={150}
        height={90}
        className="w-32 mb-4"
        style={{ marginTop: '20px', marginBottom: '100px' }}
      />
      <div className="mt-5">
        <div
          className={`ml-8 mb-8 cursor-pointer ${
            activeNavItem === '/dashboard' ? 'bg-emerald-600' : 'text-white'
          }`}
          onClick={() => handleNavItemClick('/dashboard')}
        >
          <Link href="/dashboard">
            <div className="flex ">
              <FaChartPie size={40} className="-ml-12 -mt-1" />
              <span className="text-xl">Dashboard</span>
            </div>
          </Link>
        </div>
        <div
          className={`ml-8 mb-8 cursor-pointer ${
            activeNavItem === '/lactationist' ? 'bg-emerald-600' : 'text-white'
          }`}
          onClick={() => handleNavItemClick('/lactationist')}
        >
          <Link href="/lactationist">
            <div className="flex items-center">
              <BsFillPersonFill size={40} className="-ml-12  -mt-1" />
              <span className="text-xl">Lactationist</span>
            </div>
          </Link>
        </div>
        <div
          className={`ml-8 cursor-pointer ${
            activeNavItem === '/mothers' ? 'bg-emerald-600' : 'text-white'
          }`}
          onClick={() => handleNavItemClick('/mothers')}
        >
          <Link href="/mothers">
            <div className="flex items-center">
              <RiParentFill size={40} className="-ml-12 -mt-1" />
              <span className="text-xl">Mothers</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
  )
};
export default Sidebar;