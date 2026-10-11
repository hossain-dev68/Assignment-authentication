

const SignInPage = () => {
    return (
        <div className="flex flex-col items-center justify-center m-5">
            <h2 className="font-bold text-2xl text-center">
                সাইন ইন
            </h2>

            <p className="text-gray-600 text-center mt-2">
                বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
            </p>

            <form action="" className="w-full flex justify-center">
                <fieldset className="fieldset rounded-box w-xs max-w-full">

                    

                    <label className="label">ইমেইল</label>
                    <input type="email" className="input w-full" placeholder="you@example.com" />

                    <label className="label">পাসওয়ার্ড</label>
                    <input type="password" className="input w-full" placeholder="কমপক্ষে ৮ অক্ষর" />

                    <button className="btn bg-green-700 text-white mt-4">অ্যাকাউন্ট তৈরি করুন</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignInPage;