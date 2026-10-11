"use client"
import Image from "next/image";
// import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import UserInfo from "./UserInfo";

const Header =  () => {
  const [date, setDate] = useState("");
useEffect(() => {
    const today = new Date().toLocaleDateString("bn-BD", {
      dateStyle: "full",
    });

    setDate(today);
  }, []);

    return (
       <header>
  <div className='container max-w-6xl mx-auto px-4 relative flex flex-wrap gap-3 items-center justify-between py-4'>
    

    <div className='flex items-center justify-start gap-3'>
      <Image
        className='w-10 h-10 bg-green-700 rounded p-2'
        height={50}
        width={50}
        src={"/logo-icon.png"} 
        alt="Logo"
      />
      <div>
        <h2 className="text-2xl font-bold">বাজার দর</h2>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
    </div>

    <UserInfo/>
   
</div>
        {/* <Navbar/> */}
</header>
    );
};

export default Header;