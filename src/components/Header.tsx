"use client"
import Image from "next/image";
import Navbar from "./Navbar";

const Header =  () => {
//   const date = new Date().toLocaleDateString("bn-BD", {
//     dateStyle: "full",
//   });
    return (
       <header>
  <div className='container max-w-6xl mx-auto relative flex items-center justify-between py-4'>
    

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
        {/* <p>{date}</p> */}
      </div>
    </div>

    
    <div className='flex gap-2'>
      <button className='btn rounded-1xl'>সাইন ইন</button>
      <button className='btn bg-green-700 text-white rounded-1xl'>সাইন আপ</button>
    </div>
</div>
        <Navbar/>
</header>
    );
};

export default Header;