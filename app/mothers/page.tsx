'use client'
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

interface MotherData {
  id: number;
  email:string;
  first_name: string;
  phone: boolean;
}
const MotherList: React.FC = () => {
  const [mothers, setMothers] = useState<MotherData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
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
        console.error('Error fetching mothers:', error);
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
  return (
    // <Layout>
    //      <div className="grid grid-cols-2">
    //     <h1 className="text-4xl mt-16 font-bold mb-16" style={{marginLeft:"37%"}} >Mothers</h1>
    //     {/* <Image src="logoA.png" alt="Logo" className="h-32  " style={{marginLeft:"73%"}} />
    //      */}
    //         <Image
    //  src="/LO.png"
    //   alt="Logo"
    //   width={120}
    //   height={80}
    //   style={{ marginTop: '10px', marginLeft: '500px' }}
      
    // /> 

    //     </div>
    // <div className='mt-10 ml-96 absolute top-40 left-0'>
    //   <table className="table-auto w-full">
    //     <thead>
    //       <tr>
    //         <th className="px-4 py-2">ID</th>
    //         <th className="px-4 py-2">Name</th>
    //         <th className="px-4 py-2">Email</th>
    //         <th className="px-4 py-2">Phone</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {mothers.map((mother) => (
    //         <tr key={mother.id}>
    //           <td className="border px-32 py-8">{mother.id}</td>
    //           <td className="border px-32 py-8">{mother.first_name}</td>
    //           <td className="border px-32 py-8">{mother.email}</td>
    //           <td className="border px-32 py-8">
    //            {mother.phone}
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    // </Layout>

    <Layout>
  <div className="grid grid-cols-1 sm:grid-cols-2">
    <h1 className="text-4xl mt-16 font-bold mb-16 ml-56 text-center sm:text-left">
      Mothers
    </h1>
    <div className="flex justify-center sm:justify-end">
      <Image
        src="/LO.png"
        alt="Logo"
        width={120}
        height={80}
        className="mt-10"
      />
    </div>
  </div>
  <div className="mt-10 mx-auto ml-60">
    <table className="table-auto w-2/3 ">
      <thead>
        <tr>
          <th className="px-2 py-2">ID</th>
          <th className="px-2 py-2">Name</th>
          <th className="px-2 py-2">Email</th>
          <th className="px-2 py-2">Phone</th>
        </tr>
      </thead>
      <tbody>
        {mothers.map((mother) => (
          <tr key={mother.id}>
            <td className="border px-2 sm:px-8 py-2 sm:py-4">{mother.id}</td>
            <td className="border px-2 sm:px-8 py-2 sm:py-4">{mother.first_name}</td>
            <td className="border px-2 sm:px-8 py-2 sm:py-4">{mother.email}</td>
            <td className="border px-2 sm:px-8 py-2 sm:py-4">{mother.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</Layout>

  );
};
export default MotherList;

