'use client'
import { useState } from 'react';
import { createMothers } from '../utilities/utilities';

interface MothersData {
    id: number,
    image: string,
    is_first_time_mother: boolean,
    user_mother: number,
    carts: number
}
const useCreateMothers = (motherData: MothersData) => {
  const [user, setMothers] = useState<MothersData>(motherData);
  const handleRegister = async() =>{
      const response = await createMothers(motherData)
      console.log({response});
      setMothers(response)
}
  return { handleRegister, user };
};
export default useCreateMothers;