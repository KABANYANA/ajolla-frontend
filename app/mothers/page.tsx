

// 'use client'
// import React, { useEffect, useState } from 'react';
// import Layout from '../components/Layout';
// import Image from 'next/image';

// interface MotherData {
//   id: number;
//   email: string;
//   first_name: string;
//   phone: boolean;
// }

// const MotherList: React.FC = () => {
//   const [mothers, setMothers] = useState<MotherData[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemPage = 6;

//   useEffect(() => {
//     const fetchMothers = async () => {
//       try {
//         const response = await fetch('https://ajolla-backend-45e8c30af30d.herokuapp.com/api/users/');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setMothers(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching Lactationists:', error);
//         setError('Error fetching lactationists. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchMothers();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   const totalPages = Math.ceil((mothers?.length || 0) / itemPage);

//   return (
//     <Layout>
//       <div className="grid grid-cols-1 sm:grid-cols-2">
//         <h1 className="titlem text-4xl font-['Poppins']  mt-16 font-bold mb-16 text-center sm:text-left">
//           Mothers
//         </h1>
//         <div className="logo flex justify-center sm:justify-end">
//           <Image src="/LO.png" alt="Logo" width={120} height={80} className="mt-10 mr-32" />
//         </div>
//       </div>

//       <div className="mothers mt-10">
//         <table className="table1 table-auto w-1/3 overflow-x-auto">
//           <thead>
//             <tr className="bg-red-100 font-['Poppins'] ">
//               <th className="px-4 py-4">ID</th>
//               <th className="px-4 py-4">First Name</th>
//               <th className="px-4 py-4">Email</th>
//               <th className="px-4 py-4">Phone</th>
//             </tr>
//           </thead>
//           <tbody>
//             {mothers.map((mother) => (
//               <tr key={mother.id}>
//                 <td className="border px-4 py-2">{mother.id}</td>
//                 <td className="border px-4 py-2">{mother.first_name}</td>
//                 <td className="border px-4 py-2">{mother.email}</td>
//                 <td className="border px-4 py-2">{mother.phone}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
        
//         <div className="flex justify-center mt-4">
//             <p className="absolute mr-[83em] mt-5 ml-20">Page {currentPage} of {totalPages}</p>
//             <button
//               onClick={() => setCurrentPage((prev) => prev > 1 ? prev - 1 : prev)} disabled={currentPage === 1}
//               className="text-gray text-md px-10 py-2  bg-gray-300 rounded-xl -ml-44 mt-3"> Previous</button>
//             <button
//               onClick={() => setCurrentPage((prev) => prev + 1)} disabled={currentPage * itemPage >= (mothers?.length || 0)}
//               className="text-white text-md px-10 py-2  bg-green-600 rounded-xl ml-14 mt-3"> Next</button>
//           </div>
//       </div>

//       <style jsx>{`
//         .table1 {
//           border-collapse: collapse;
//           width: 80%;
//         }

//         .table1 th,
//         .table1 td {
         
//           text-align: left;
//           padding-right:30px;
//           padding-top:50px;

//           padding-bottom:50px;
//           border-bottom: 2px solid #ddd;
//         }

//         .table1 th {
//           background-color: #B5E1C4;
//           font-weight: bold;
//         }

//         .table1 tr:hover {
//           background-color: #C7ECD4;
//         }
//       `}</style>
//     </Layout>
//   );
// };

// export default MotherList;

'use client'

import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

interface MotherData {
  id: number;
  email: string;
  first_name: string;
  phone: boolean;
}

const MotherList: React.FC = () => {
  const [mothers, setMothers] = useState<MotherData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPage = 4; // Display 8 data entries per page

  useEffect(() => {
    const fetchMothers = async () => {
      try {
        const response = await fetch('https://ajolla-backend-45e8c30af30d.herokuapp.com/api/users/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMothers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Mothers:', error);
        setError('Error fetching mothers. Please try again later.');
        setLoading(false);
      }
    };

    fetchMothers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const startIndex = (currentPage - 1) * itemPage;
  const endIndex = currentPage * itemPage;
  const totalPages = Math.ceil(mothers.length / itemPage);
  const currentMothers = mothers.slice(startIndex, endIndex);

  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <h1 className="titlem text-4xl font-['Poppins']  mt-16 font-bold mb-16 text-center sm:text-left">
          Mothers
        </h1>
        <div className="logo flex justify-center sm:justify-end">
          <Image src="/LO.png" alt="Logo" width={120} height={80} className="mt-10 mr-32" />
        </div>
      </div>

      <div className="mothers mt-10">
        <table className="table1 table-auto w-1/3 overflow-x-auto">
          <thead>
            <tr className="bg-red-100 font-['Poppins'] ">
              <th className="px-4 py-4">ID</th>
              <th className="px-4 py-4">First Name</th>
              <th className="px-4 py-4">Email</th>
              <th className="px-4 py-4">Phone</th>
            </tr>
          </thead>
          <tbody>
            {currentMothers.map((mother) => (
              <tr key={mother.id}>
                <td className="border px-4 py-2">{mother.id}</td>
                <td className="border px-4 py-2">{mother.first_name}</td>
                <td className="border px-4 py-2">{mother.email}</td>
                <td className="border px-4 py-2">{mother.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="flex justify-center mt-4">
            <p className="absolute mr-[50em] mt-5 ml-20">Page {currentPage} of {totalPages}</p>
            <button
              onClick={() => setCurrentPage((prev) => prev > 1 ? prev - 1 : prev)} disabled={currentPage === 1}
              className="text-md px-10 py-2 bg-gray-300 text-green-700 rounded-xl ml-4 mt-3 transition-all duration-300 hover:bg-green-600 hover:text-white"> Previous</button>
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)} disabled={currentPage >= totalPages}
              className="text-md px-10 py-2 bg-gray-300 text-green-700 rounded-xl ml-4 mt-3 transition-all duration-300 hover:bg-green-600 hover:text-white"> Next</button>
          </div>
      </div>

      <style jsx>{`
        .table1 {
          border-collapse: collapse;
          width: 80%;
        }

        .table1 th,
        .table1 td {
          text-align: left;
          padding-right: 30px;
          padding-top: 50px;
          padding-bottom: 50px;
          border-bottom: 2px solid #ddd;
        }

        .table1 th {
          background-color: #B5E1C4;
          font-weight: bold;
        }

        .table1 tr:hover {
          background-color: #C7ECD4;
        }
      `}</style>
    </Layout>
  );
};

export default MotherList;
