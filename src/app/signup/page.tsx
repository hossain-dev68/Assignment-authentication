"use client"

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
    const router = useRouter();
    const onSubmit = async(e:React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const user = Object.fromEntries(formData.entries()) as {name:string, email:string,password:string};
    console.log(user)

    const { data, error } = await authClient.signUp.email({
        ...user,
         callbackURL: "/"
    });

    if (data) {
        console.log(data);
        router.push("/");
    }

    if (error) {
        console.log(error);
    }
};
    return (

        <div className="flex flex-col items-center justify-center m-5">
            <h2 className="font-bold text-2xl text-center">
                অ্যাকাউন্ট তৈরি করুন
            </h2>

            <p className="text-gray-600 text-center mt-2">
                বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
            </p>

            <form onSubmit={onSubmit} className="w-full flex justify-center">
                <fieldset className="fieldset rounded-box w-xs max-w-full">

                    <label className="label">নাম</label>
                    <input
                        type="text"
                        name="name"
                        className="input w-full"
                        placeholder="যেমন: রহিম উদ্দিন"
                        required
                    />


                    <label className="label">ইমেইল</label>
                    <input
                        type="email"
                        name="email"
                        className="input w-full"
                        placeholder="you@example.com"
                        required
                    />

                    <label className="label">পাসওয়ার্ড</label>
                    <input
                        type="password"
                        name="password"
                        className="input w-full"
                        placeholder="কমপক্ষে ৮ অক্ষর"
                        required
                    />

                    <button type="submit" className="btn bg-green-700 text-white mt-4">অ্যাকাউন্ট তৈরি করুন</button>
                </fieldset>
            </form>
        </div>

    );
};

export default SignUpPage;