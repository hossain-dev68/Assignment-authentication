import Image from "next/image";

const Banner = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <div className="container max-w-6xl mx-auto card flex flex-col md:flex-row items-center justify-between rounded-3xl border border-gray-200 bg-base-100 px-5 py-6 md:px-8 lg:px-10">

  {/* Left Content */}
  <div className="w-full md:w-2/3">
    <p className="inline-block rounded-full bg-green-100 px-4 py-1 text-sm text-green-700">
      {date}
    </p>

    <h1 className="mt-3 text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl">
      আজকের বাজারের দাম এক নজরে
    </h1>

    <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
      চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত,
      গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
    </p>

    <a href="#সব-পণ্য" className="btn btn-success mt-6 px-6 text-white">
      দাম দেখুন
    </a>
  </div>

  {/* Right Image */}
  <div className="mt-6 flex w-full justify-center md:mt-0 md:w-1/3">
    <Image
      height={400}
      width={400}
      src="/bazar-hero.png"
      alt="বাজারের পণ্য"
      className="w-52 md:w-64 lg:w-72"
    />
  </div>

</div>

    );
};

export default Banner;