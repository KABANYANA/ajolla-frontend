'use client'
import { useState } from 'react';
import { createAppointment } from '../utilities/utilities';

interface AppointmentsData {
  id: number;
    lactationist: string;
    available_slots: string;
    is_available: boolean;
    first_name:string;
    second_name:string;
    mother:string
}
const useCreateAppointments = (appointmentData: AppointmentsData) => {
  const [user, setUser] = useState<AppointmentsData>(appointmentData);
  const handleRegister = async() =>{
      const response = await createAppointment(appointmentData)
      console.log({response});
      setUser(response)
}
  return { handleRegister, user };
};
export default useCreateAppointments;