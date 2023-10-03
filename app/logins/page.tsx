
'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from 'next/image';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    setPasswordVisible(false);
  }, []);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleEmailChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setEmail(value);
    setFormError(""); 
    if (/^\S+@\S+\.\S+$/.test(value)) {
      setEmailError("");
    } else {
      setEmailError("Invalid email format.");
    }
  };

  const handlePasswordChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setPassword(value);
    setFormError(""); 
    if (value.length >= 6) {
      setPasswordError("");
    } else {
      setPasswordError("Password should be at least 6 characters.");
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setFormError("All fields are required.");
    } else if (emailError === "" && passwordError === "") {
      try {
        const response = await fetch("/api/login", {
          method: "POST",
          body: JSON.stringify({ email, password }),
        });
        if (response.ok) {
          window.location.href = "/dashboard";
        } else {
          setFormError("Login failed. Please try again.");
        }
      } catch (error) {
        setFormError("Network error. Please try again later.");
      }
    } else {
      setFormError("Please input the right credentials.");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen font-poppins text-xl">
      <div className="bg-custom-orange sm:w-1/3 flex justify-center items-center">
        <Image
          src="/LO.png"
          alt="Logo"
          width={400}
          height={200}
          style={{ marginTop: '20px', marginLeft: '10px' }}
        />
      </div>
      <div className="w-full bg-white flex flex-col justify-center items-center p-6 sm:w-2/3 sm:p-12">
        <p className="text-center text-4xl font-semibold text-[#07A685] w-1/ mb-8">
          Login
        </p>
        <p className="text-center text-3xl font-semibold text-[#07A685] w-1/ mb-20">
          Welcome back
        </p>
        <form className="flex flex-col items-center w-full sm:w-120" onSubmit={handleSubmit}>
          <div className="mb-4 sm:mb-6 w-2/3">
            <label className="text-lg w-min" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="text"
              placeholder="Enter Email"
              className={`text-lg font-thin w-full border-solid border-custom-brown bg-white/80 h-16 border px-4 rounded-2xl py-2 ${emailError ? "border-red-500" : ""}`}
              onChange={handleEmailChange}
              value={email}
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>
          <div className="relative mb-4 sm:mb-6 w-2/3">
            <label className="text-lg w-min" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type={passwordVisible ? "password" : "text"}
              placeholder="Enter Password"
              className={`text-lg font-thin w-full border-solid border-custom-brown bg-white/80 h-16 border rounded-2xl px-4 py-2 ${passwordError ? "border-red-500" : ""}`}
              onChange={handlePasswordChange}
              value={password}
            />
            <button
              type="button"
              className="absolute top-1/2 right-4 transform -translate-y-1/2"
              onClick={togglePasswordVisibility}
              style={{ marginTop: "10px" }}
            >
              {passwordVisible ? (
                <FaEyeSlash className="h-6 w-6 mt-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
              ) : (
                <FaEye className={`h-6 w-6 mt-6 text-gray-400 hover:text-gray-600 cursor-pointer ${passwordVisible ? "hidden" : ""}`} />
              )}
            </button>
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>
          {formError && <p className="text-red-500 text-sm mb-4 w-2/3">{formError}</p>}
          <div className="mb-4 w-full sm:w-120 flex justify-center">
            {formError ? (
              <p className="text-red-500 text-sm mb-4 w-2/3">{formError}</p>
            ) : (
              <Link href="/dashboard">
                <p className="bg-[#07A685] text-white w-40 h-16 rounded-[50px] font-bold text-lg flex justify-center items-center">
                  Sign In
                </p>
              </Link>
            )}
          </div>
          <p className="text-center text-lg font-light w-full sm:w-1/2 mx-auto sm:ml-0 lg:ml-72">
            Don't have an account?{" "}
            <Link href="/registaration">
              <span className="font-['Poppins'] font-bold">Sign up</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
