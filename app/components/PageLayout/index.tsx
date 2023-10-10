



// 'use client'
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { BiSolidLogOut} from "react-icons/bi";
// import { RiParentFill } from "react-icons/ri";
// import { FaChartPie } from "react-icons/fa";
// import { BsFillPersonFill } from "react-icons/bs";
// import Image from 'next/image';

// const Sidebar = () => {
//   const [activeNavItem, setActiveNavItem] = useState("/dashboard");
//   const [showLogoutPopup, setShowLogoutPopup] = useState(false);

//   const handleNavItemClick = (item: string) => {
//     setActiveNavItem(item);
//   };

//   const handleLogout = () => {

//   };

//   return (
//     <div className="h-screen w-1/6 bg-emerald-600 fixed">
//       <div className="flex flex-col h-full justify-between">
//         <div className="mt-16 ml-8">
//           <Image
//             src="/LO.png"
//             alt="Logo"
//             width={150}
//             height={90}
//             className="w-32 mb-4"
//             style={{ marginTop: '20px', marginBottom: '100px' }}
//           />
//           <div className="mt-5">
//             <div
//               className={`ml-8 mb-8 cursor-pointer ${
//                 activeNavItem === '/dashboard' ? 'bg-emerald-600' : 'text-white'
//               }`}
//               onClick={() => handleNavItemClick('/dashboard')}
//             >
//               <Link href="/dashboard">
//                 <div className="flex ">
//                   <FaChartPie size={40} className="-ml-12 -mt-1" />
//                   <span className="ml-3">Dashboard</span>
//                 </div>
//               </Link>
//             </div>
//             <div
//               className={`ml-8 mb-8 cursor-pointer ${
//                 activeNavItem === '/lactationist' ? 'bg-emerald-600' : 'text-white'
//               }`}
//               onClick={() => handleNavItemClick('/lactationist')}
//             >
//               <Link href="/lactationist">
//                 <div className="flex items-center">
//                   <BsFillPersonFill size={40} className="-ml-12  -mt-1" />
//                   <span className="ml-3">Lactationist</span>
//                 </div>
//               </Link>
//             </div>
//             <div
//               className={`ml-8 cursor-pointer ${
//                 activeNavItem === '/mothers' ? 'bg-emerald-600' : 'text-white'
//               }`}
//               onClick={() => handleNavItemClick('/mothers')}
//             >
//               <Link href="/mothers">
//                 <div className="flex items-center">
//                   <RiParentFill size={40} className="-ml-12 -mt-1" />
//                   <span className="ml-3">Mothers</span>
//                 </div>
//               </Link>
            
//             </div>

//             <div className="ml-8  flex items-center cursor-pointer text-white mt-8" onClick={() => setShowLogoutPopup(true)}>
//             <BiSolidLogOut size={40} className="-ml-12 "/>
//             <span className="ml-3 -mt-2">Logout</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       {showLogoutPopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-green-400 p-8 rounded-lg bg-opacity-80">
//             <h2 className="text-xl font-bold mb-4 text-center">Logout</h2>
//             <p className="mb-4">Are you sure you want to logout?</p>
//             <div className="flex justify-end">
//               <button
//                 className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg mr-2"
//                 onClick={() => setShowLogoutPopup(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="px-4 py-2 bg-red-500 text-white rounded-lg"
//                 onClick={handleLogout}
//               >
//                 Continue
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;





import Link from 'next/link';
import React, { useState } from 'react';
import { BiSolidLogOut } from 'react-icons/bi';
import { RiParentFill } from 'react-icons/ri';
import { FaChartPie } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import Image from 'next/image';

const Sidebar = () => {
  const [activeNavItem, setActiveNavItem] = useState('/dashboard');
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleNavItemClick = (item: React.SetStateAction<string>) => {
    setActiveNavItem(item);
  };

  const handleLogout = () => {
   
  };

  return (
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
                  <span className="ml-3">Dashboard</span>
                </div>
              </Link>
            </div>
            <div
              className={`ml-8 mb-8 cursor-pointer ${
                activeNavItem === '/lactationist' ? 'bg-blue-400' : 'text-white'
              }`}
              onClick={() => handleNavItemClick('/lactationist')}
            >
              <Link href="/lactationist">
                <div className="flex items-center">
                  <BsFillPersonFill size={40} className="-ml-12  -mt-1" />
                  <span className="ml-3">Lactationist</span>
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
                  <span className="ml-3">Mothers</span>
                </div>
              </Link>
            </div>

            <div className="ml-8  flex items-center cursor-pointer text-white mt-8" onClick={() => setShowLogoutPopup(true)}>
              <BiSolidLogOut size={40} className="-ml-12  mt-4" />
              <span className="ml-3 mt-4">Logout</span>
            </div>
          </div>
        </div>
      </div>
      {showLogoutPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-white p-8 rounded-lg bg-opacity-70">
            <h2 className="text-xl font-bold mb-4 text-center">Logout</h2>
            <p className="mb-4">Are you sure you want to logout?</p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg mr-16" style={{width:"90px"}}
                onClick={() => setShowLogoutPopup(false)}
              >
                Cancel
              </button>
              <Link href="/logins">
                <button className="px-4 py-2 bg-green-800  text-white rounded-lg" style={{width:"90px"}}>
                  Ok
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
