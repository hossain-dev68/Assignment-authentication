import Link from "next/link";

const Navbar = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/categories")
    const data = await res.json()
    const filteredNav = data.filter((n) => ({
        nameBn: n.nameBn,
        icon: n.icon,
    }));

    console.log("fitter", filteredNav);
    return (
        <div className='flex gap-5 justify-center mt-4'>
            <Link href="/">হোম</Link>

            {
                filteredNav.map((n, i) => <Link
                    key={i}
                    href={`/category/${n.slug}`}
                    className="flex items-center gap-2"
                >
                    <span>{n.icon}</span>
                    <span>{n.nameBn}</span>
                </Link>)
            }
        </div>
    );
};

export default Navbar;