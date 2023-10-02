'use client'
import { useState } from 'react';
import {  createLactationists } from '../utilities/utilities';

interface LactationistData {
    id: number,
    first_name: string,
    second_name: string,
    email: string,
    bio: string,
    image: string
}
const useCreateLactationists = (lactationistData: LactationistData) => {
  const [user, setUser] = useState<LactationistData>(lactationistData);
  const handleRegister = async() =>{
      const response = await createLactationists(lactationistData)
      console.log({response});
      setUser(response)
}
  return { handleRegister, user };
};
export default useCreateLactationists;