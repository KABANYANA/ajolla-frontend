

'use client'

import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

interface LactationistData {
  id: number;
  first_name: string;
  second_name: string;
  email: string;
  bio: boolean;
}

const LactationistList: React.FC = () => {
  const [lactationists, setLactationists] = useState<LactationistData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchLactationists = async () => {
      try {
        const response = await fetch('https://ajolla-backend-45e8c30af30d.herokuapp.com/api/lactationists/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setLactationists(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Lactationists:', error);
        setError('Error fetching lactationists. Please try again later.');
        setLoading(false);
      }
    };

    fetchLactationists();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const totalPages = Math.ceil(lactationists.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const currentLactationists = lactationists.slice(startIndex, endIndex);

  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <h1 className="titlelac text-3xl mt-16 font-bold mb-16 text-center font-['Poppins'] sm:text-left ">
          Lactationist
        </h1>
        <div className="flex justify-center mr-32 sm:justify-end">
          <Image src="/LO.png" alt="Logo" width={100} height={80} style={{ marginTop: '20px', marginRight: '70px' }} />
        </div>
      </div>

      <div className="lactationist mt-10 font-['Poppins']">
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
            {currentLactationists.map((lactationist) => (
              <tr key={lactationist.id}>
                <td className="border px-4 py-4">{lactationist.first_name}</td>
                <td className="border px-4 py-4">{lactationist.second_name}</td>
                <td className="border px-4 py-4">{lactationist.email}</td>
                <td className="border px-2 py-4">{lactationist.bio}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <p className="absolute mr-[50em] mt-5 ml-20">Page {currentPage} of {totalPages}</p>
          <button
            onClick={() => setCurrentPage((prev) => prev > 1 ? prev - 1 : prev)}
            disabled={currentPage === 1}
            className="text-md px-10 py-2 bg-gray-300 text-green-700 rounded-xl -ml-44 mt-3 transition-all duration-300 hover:bg-green-600 hover:text-white"> Previous</button>
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage >= totalPages}
            className="text-md px-10 py-2 bg-gray-300 text-green-700 rounded-xl ml-4 mt-3 transition-all duration-300 hover:bg-green-600 hover:text-white"> Next</button>
        </div>
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

export default LactationistList;
