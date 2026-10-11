"use client"

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const UserInfo = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user
    console.log(user);
    
    const handleSignOut = async() => {
        await authClient.signOut();
    }
    return (
        <div>

            {
                user ? <div>
                    <div className="avatar gap-3">
                        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                            <img alt=""
                                src={user?.image as string} />
                            
                        </div>
                        <h2>{user?.name}</h2>
                        <button onClick={handleSignOut} className="btn bg-green-700 text-white">SignOut</button>
                    </div>
                </div> : <div className='flex gap-2'>
                    <Link href={'/signin'}><button className='btn rounded-xl'>সাইন ইন</button></Link>
                    <Link href={'/signup'}><button className='btn bg-green-700 text-white rounded-xl'>সাইন আপ</button></Link>
                </div>
            }

        </div>
    );
};

export default UserInfo;