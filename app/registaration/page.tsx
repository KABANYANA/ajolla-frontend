'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import useCreateUsers from "../hooks/useCreateUsers";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from 'next/image';

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [fullName, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const { user, handleRegister } = useCreateUsers({
    username,
    email,
    password,
    first_name: fullName,
  });

  const [formError, setFormError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleFullNameChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setFullName(value);
  };

  const handlePhoneNumberChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    if (/^(\+)?[0-9]*$/.test(value)) {
      setPhoneNumber(value);
      setPhoneNumberError("");
    } else {
      setPhoneNumberError("Phone number should contain digits only.");
    }
  };

  const handleEmailChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setEmail(value);
    if (/^\S+@\S+\.\S+$/.test(value)) {
      setEmailError("");
    } else {
      setEmailError("Invalid email format.");
    }
  };

  const handlePasswordChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length >= 6) {
      setPasswordError("");
    } else {
      setPasswordError("Password should be at least 6 characters.");
    }
  };

  const handleConfirmPasswordChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (value === password) {
      setConfirmPasswordError("");
    } else {
      setConfirmPasswordError("Passwords do not match.");
    }
  };

  const handleRegisterSuccess = () => {
    const successMessageStyle = {
    };
  
  
    toast.success(
      <div>
        <span style={successMessageStyle}>
          <i className="fas fa-check" ></i> Registration successful!
        </span> You can now sign in.
      </div>,
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  
    setTimeout(() => {
      setRegistrationSuccess(true);
    }, 3000); 
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      fullName.trim() === "" ||
      phoneNumber.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      setFormError("All fields are required.");
    } else if (
      phoneNumberError === "" &&
      emailError === "" &&
      passwordError === "" &&
      confirmPasswordError === ""
    ) {
      handleRegisterSuccess();
    } else {
      setFormError("Please input the right credentials.");
    }
  };

  useEffect(() => {
    if (registrationSuccess) {
      window.location.href = "/logins";
    }
  }, [registrationSuccess]);

  return (
    <div className="flex flex-col sm:flex-row h-screen text-xl">
      <div className="bg-custom-orange sm:w-1/3 flex justify-center items-center">
         {/* <img src="LO.png" alt="Logo" className="w-72" /> */}
         
         <Image
     src="/LO.png"
      alt="Logo"
      width={400}
      height={200}
      style={{ marginTop: '20px', marginLeft: '10px' }}
      
    /> 
      </div>
      <div className="w-full bg-white flex flex-col justify-center items-center p-6 sm:w-2/3 sm:p-12">
        <h1 className="text-3xl font-semibold w-1/ mb-8 text-4xl font-bold mb-8 mt-4 text-custom-orange">
          Create an Account
        </h1>
        {registrationSuccess ? (
          <div className="text-green-500 text-lg mb-4 w-2/3">
            Registration successful! You can now{" "}
            <Link href="/login">sign in</Link>.
          </div>
        ) : (
          <form
            className="flex flex-col items-center w-full sm:w-120"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="mb-4 sm:mb-6 w-2/3">
              <label className="text-lg  w-min " htmlFor="fullName">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter Full Name"
                className="text-lg font-thin w-full border-solid border-custom-grey bg-white/80 h-16 border rounded-2xl px-4 py-8"
                onChange={handleFullNameChange}
                value={fullName}
              />
            </div>
            <div className="mb-4 sm:mb-6 w-2/3">
              <label className="text-lg  w-min " htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="text"
                placeholder="Enter Phone Number"
                className={`text-lg font-thin w-full border-solid border-custom-brown  bg-white/80 h-16 border rounded-2xl rounded px-4 py-2 ${
                  phoneNumberError ? "border-red-500" : ""
                }`}
                onChange={handlePhoneNumberChange}
                value={phoneNumber}
              />
              {phoneNumberError && (
                <p className="text-red-500 text-sm mt-1">{phoneNumberError}</p>
              )}
            </div>
            <div className="mb-4 sm:mb-6 w-2/3">
              <label className="text-lg  w-min " htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="text"
                placeholder="Enter Email"
                className={`text-lg font-thin w-full border-solid border-custom-brown  bg-white/80 h-16 border  px-4 rounded-2xl py-2 ${
                  emailError ? "border-red-500" : ""
                }`}
                onChange={handleEmailChange}
                value={email}
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
            </div>

            <div className="relative mb-4 sm:mb-6 w-2/3">
              <label className="text-lg  w-min r" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type={passwordVisible ? "password" : "text"}
                placeholder="Enter Password"
                className={`text-lg font-thin w-full border-solid border-custom-brown bg-white/80 h-16 border rounded-2xl px-4 py-2 ${
                  passwordError ? "border-red-500" : ""
                }`}
                onChange={handlePasswordChange}
                value={password}
              />
              <button
                type="button"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 "
                onClick={togglePasswordVisibility}
                style={{ marginTop: "10px" }}
              >
                {passwordVisible ? (
                  <FaEyeSlash
                    className="h-6 w-6 mt-6 text-gray-400 hover:text-gray-600 cursor-pointer"
                  />
                ) : (
                  <FaEye
                    className={`h-6 w-6 mt-6 text-gray-400 hover:text-gray-600 cursor-pointer ${
                      passwordVisible ? "hidden" : ""
                    }`}
                  />
                )}
              </button>
              {passwordError && (
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}
            </div>
            <div className="relative mb-4 sm:mb-6 w-2/3">
              <label className="text-lg  w-min " htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type={confirmPasswordVisible ? "password" : "text"}
                placeholder="Enter Password "
                className={`text-lg font-thin w-full border-solid border-custom-brown bg-white/80 h-16 border rounded-2xl px-4 py-2 ${
                  confirmPasswordError ? "border-red-500" : ""
                }`}
                onChange={handleConfirmPasswordChange}
                value={confirmPassword}
              />
              <button
                type="button"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none"
                onClick={toggleConfirmPasswordVisibility}
                style={{ marginTop: "10px" }}
              >
                {confirmPasswordVisible ? (
                  <FaEyeSlash
                    className="h-6 w-6 mt-6 text-gray-400 hover:text-gray-600 cursor-pointer"
                  />
                ) : (
                  <FaEye
                    className={`h-6 w-6 mt-6 text-gray-400 hover:text-gray-600 cursor-pointer ${
                      confirmPasswordVisible ? "hidden" : ""
                    }`}
                  />
                )}
              </button>
              {confirmPasswordError && (
                <p className="text-red-500 text-sm mt-1">
                  {confirmPasswordError}
                </p>
              )}
            </div>
            {formError && (
              <p className="text-red-500 text-sm mb-4 w-2/3">{formError}</p>
            )}
            {registrationSuccess || (
              <div className="mb-4 w-full flex justify-center">
                <button
                  type="submit"
                  className="bg-[#07A685] text-white w-40 h-16 rounded-[50px] font-bold"
                >
                  Sign Up
                </button>
              </div>
            )}
          </form>
        )}
        <p className="text-center text-lg font-light w-full ">
          Already have an account?{" "}
          <Link href="/logins">
            <span className="font-bold">Sign in</span>
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
