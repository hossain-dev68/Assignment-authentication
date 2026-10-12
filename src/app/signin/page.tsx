"use client"

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
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

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log(data);
    }

    const handleGithubSignIn = async() => {
        const data = await authClient.signIn.social({
        provider: "github"
    });
    console.log(data);
    }

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
            <div className="mt-6">
  <div className="flex items-center gap-3 mb-5">
    <div className="flex-1 h-px bg-gray-300"></div>
    <h3 className="text-sm font-medium text-gray-500">অথবা</h3>
    <div className="flex-1 h-px bg-gray-300"></div>
  </div>

  <div className="flex flex-col sm:flex-row gap-3">
    <button
      onClick={handleGoogleSignIn}
      className="btn flex-1 bg-white text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100"
    >
      Sign In With Google
    </button>

    <button
      onClick={handleGithubSignIn}
      className="btn flex-1 bg-gray-900 text-white border border-gray-900 rounded-lg hover:bg-gray-800"
    >
      Sign In With GitHub
    </button>
  </div>

  <p className="text-center text-sm text-gray-500 mt-6">
    অ্যাকাউন্ট আছে?{" "}
    <Link
      href="/signin"
      className="text-green-700 font-semibold hover:underline"
    >
      সাইন ইন করুন
    </Link>
  </p>
</div>
        </div>
    );
};

export default SignInPage;