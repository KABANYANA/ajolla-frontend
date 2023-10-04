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
   

    <Layout>
  <div className="grid grid-cols-1 sm:grid-cols-2">
    <h1 className=" text-4xl mt-16 font-bold mb-16 ml-80 text-center sm:text-left">
      Mothers
    </h1>
    <div className="logo flex justify-center sm:justify-end">
      <Image
        src="/LO.png"
        alt="Logo"
        width={120}
        height={80}
        className="mt-10 mr-32"
      />
    </div>
  </div>
  <div className=" mothers mt-10 mx-auto ">
    <table className="table-auto w-9/12 sm:w-9/12   overflow-x-auto ml-8 sm:ml-8">
      <thead>
        <tr>
          <th className="px-2 py-2">ID</th>
          <th className="px-16 sm:px-10 py-2">Name</th>
          <th className="px-16 sm:px-10 py-2">Email</th>
          <th className="px-16 sm:px-10 py-2">Phone</th>
        </tr>
      </thead>
      <tbody>
        {mothers.map((mother) => (
          <tr key={mother.id}>
            <td className="border px-16 py-2 sm:px-10 sm:py-4">{mother.id}</td>
            <td className="border px-16 py-2 sm:px-10 sm:py-4">{mother.first_name}</td>
            <td className="border px-16 py-2 sm:px-10 sm:py-4">{mother.email}</td>
            <td className="border px-16 py-2 sm:px-10 sm:py-4">{mother.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</Layout>

  );
};
export default MotherList;

