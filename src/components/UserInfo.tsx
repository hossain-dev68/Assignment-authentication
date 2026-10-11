"use client"

import { authClient } from "@/lib/auth-client";

const UserInfo = () => {
    const {data: session} = authClient.useSession() 
    const user =
    return (
        <div>
             <div className='flex gap-2'>
      <button className='btn rounded-xl'>সাইন ইন</button>
      <button className='btn bg-green-700 text-white rounded-xl'>সাইন আপ</button>
    </div>
        </div>
    );
};

export default UserInfo;