'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Splash = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showSlide, setShowSlide] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      setShowSlide(true);
      router.push("/logins");
    }, 1500);
  
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className={`min-h-screen -ml-10 flex items-center justify-center bg-[#07A685] ${showSplash ? "" : "hidden"}`} style={{ overflow: "hidden" }}>
      <div className={`bg-custom-orange sm:w-full flex justify-center items-center ${showSlide ? "animate-slide-in" : ""}`}>
        <Image
          src="/nye.png"
          width={600}
          height={500}
          objectFit="cover"
          priority={true}
          alt="Hero Section Background Image"
          style={{ imageRendering: "pixelated" }}
        />
        <div>
          <h1 className={`text-4xl font-semibold text-white font-['Nunito'] text-center mt-4 ${showSlide ? "animate-slide-in" : ""}`}>
            Welcome to
          </h1>
          <h1 className={`text-6xl font-semibold font-['Poppins'] text-white text-left mt-4 ${showSlide ? "animate-slide-in" : ""}`}>
            LactoMama
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Splash;
