

'use client'
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useCreateUser from '../hooks/useCreateUser';
const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { user, handleSignUp } = useCreateUser({
    username,
    email,
    password,
    first_name: firstName,
    last_name: lastName,
    phone_number:phoneNumber,
   
  });
  const router = useRouter();
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleCreateUser = async (e:any) => {
    e.preventDefault();
    if (username && email && password && firstName && lastName) {
      await handleSignUp();
      router.push('/dashboard');
    } else {
      alert('Please fill all required fields.');
    }
  };
  const isSignUpComplete = user !== null;
  toast.success(
    'You have successfully registered! Please log in.',
    {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 5000,
      hideProgressBar: true,
      className: 'bg-green-500 text-white p-4 rounded z-10', 
    }
  );
  return (
    <div className="flex flex-col sm:flex-row h-screen text-xl">
      <div className="bg-custom-orange sm:w-full flex justify-center items-center">
        <div className="flex items-center 2 ml-4">
        <Image
          src="/login.png"
          alt="Logo"
          width={600}
          height={400}
          style={{ marginTop: '20px', marginRight: '16px' }}
        />
          
        </div>
       
        <div className="mt-">
         
        </div>
      
      </div>
      <div className="w-full bg-white bg-opacity-40 border border-white rounded-2xl flex flex-col absolute justify-center  mt-8 items-center p-6 sm:w-8/12 sm:p-12" style={{marginLeft:"20%" }}>
      <h1 className="text-3xl font-bold mb-1 mt-4 text-black">
        Create an Account
       </h1>
       <form className="mb-4 sm:mb-6 w-2/3" onSubmit={handleCreateUser}>
          <div className="mb-2">
          <label className="text-lg  w-min r" htmlFor="First Name">
                Full Name
              </label>
            <input
              type="text"
              id="firstName"
              className="text-lg font-thin w-full border-solid bg-white/80 h-10 border rounded-2xl px-4 py-6"
              placeholder="Enter Full Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
          <label className="text-lg  w-min r" htmlFor=" Middle Name">
                Middle Name
              </label>
            <input
              type="text"
              id="lastName"
              className="text-lg font-thin w-full border-solid  bg-white/80 h-10 border rounded-2xl px-4 py-6"    
              placeholder="Enter  Middle Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <label className="text-lg  w-min r" htmlFor="User Name">
                User Name
              </label>
          <div className="mb-2">
            
            <input
              type="text"
              id="username"
              className="text-lg font-thin w-full border-solid  bg-white/80 h-10 border rounded-2xl px-4 py-6"              
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
          <label className="text-lg  w-min r" htmlFor="Phone Number">
               Phone Number
              </label>
            
            <input
              type="text"
              id="Phone Number"
              className="text-lg font-thin w-full border-solid  bg-white/80 h-10 border rounded-2xl px-4 py-6"              
              placeholder="Enter Phone NUmber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div className="mb-2">
          <label className="text-lg  w-min r" htmlFor="Email">
               Email
              </label>
            <input
              type="email"
              id="email"
              className="text-lg font-thin w-full border-solid bg-white/80 h-10 border rounded-2xl px-4 py-6"              
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-2 relative">
          <label className="text-lg  w-min r" htmlFor="Password">
                Password
              </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="text-lg font-thin w-full border-solid  bg-white/80 h-10 border rounded-2xl px-4 py-6"             
               placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="absolute top-[44px] right-4 cursor-pointer "
              onClick={handleTogglePassword}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="mb-2 w-full flex justify-center">

            
    
<button
  type="submit"
  className={`bg-[#07A685] text-white w-56 h-10 rounded-[50px] font-bold ${
    isSignUpComplete ? '' : 'pointer-events-none opacity-50'
  }`}
>
  
    Sign up
 
</button>

  
</div>
<p className="text-center text-lg font-light -mt-2 w-full ">
              Already have an account?{" "}
         <Link href="/logins">
             <span className="font-bold">Sign in</span>
          </Link>
      </p>

        </form>
        {isSignUpComplete && (
          <p className="md:text-xl text-base text-customPurple mt-4">
           {' '}
          </p>
        )}
      </div>
    </div>
  );
};
export default SignUpPage;