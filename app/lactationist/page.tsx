

'use client'
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

interface MotherData {
  first_name: number;
  second_name: string;
  email: string;
  bio: boolean;
}

const MotherList: React.FC = () => {
  const [mothers, setMothers] = useState<MotherData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMothers = async () => {
      try {
        const response = await fetch('https://ajolla-backend-45e8c30af30d.herokuapp.com/api/lactationists/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMothers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Lactationists:', error);
        setError('Error fetching lactationists. Please try again later.');
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
        <h1 className="titlelac text-3xl mt-16 font-bold mb-16 text-center font-['Poppins']  sm:text-left ">
          Lactationist
        </h1>
        <div className="flex justify-center mr-32 sm:justify-end">
          <Image src="/LO.png" alt="Logo" width={100} height={80} style={{ marginTop: '20px',marginRight:'70px' }} />
        </div>
      </div>

      <div className="lactationist mt-10 font-['Poppins'] ">
        <table className="table table-auto w-4/12 overflow-x-auto">
          <thead>
            <tr className="bg-red-100">
              <th className="px-4 py-4">First Name</th>
              <th className="px-4 py-4">Second Name</th>
              <th className="px-4 py-4">Email</th>
              <th className="px-4 py-4">Biography</th> 
            </tr>
          </thead>
          <tbody>
            {mothers.map((mother) => (
              <tr key={mother.first_name}>
                <td className="border px-4 py-4">{mother.first_name}</td>
                <td className="border px-4 py-4">{mother.second_name}</td>
                <td className="border px-4 py-4">{mother.email}</td>
                <td className="border px-2 py-4">{mother.bio}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .table {
          border-collapse: collapse;
          width: 70%;
        }

        .table th,
        .table td {
          padding: 30px;
       
          text-align: left;
          border-bottom: 3px solid #ddd;
        }

        .table th {
          background-color: #B5E1C4;
          font-weight: bold;
        }

        .table tr:hover {
          background-color: #C7ECD4;
        }
      `}</style>
    </Layout>
  );
};

export default MotherList;
