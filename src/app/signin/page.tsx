"use client"

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SignInPage = () => {
    const router = useRouter();

    const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries()) as { email: string; password: string };

        const { data, error } = await authClient.signIn.email({
            ...user,
        });

        if (data) {
            toast.success("Sign In successfull!")
            console.log(data);
            router.push("/");
        }

        if (error) {
            toast.error("Invalid email or password")
            console.log(error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center m-5">
            <h2 className="font-bold text-2xl text-center">
                সাইন ইন
            </h2>

            <p className="text-gray-600 text-center mt-2">
                বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
            </p>

            <form onSubmit={onSubmit} className="w-full flex justify-center">
                <fieldset className="fieldset rounded-box w-xs max-w-full">
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

                    <button type="submit" className="btn bg-green-700 text-white mt-4">সাইন ইন করুন</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignInPage;