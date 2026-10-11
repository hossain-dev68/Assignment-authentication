
import { getCategories } from "@/lib/bazar";
import NavLinks from "./NavLinks";

const Navbar = async () => {
    const categories = await getCategories();
    return (
        <nav className="border-t border-b border-gray-200">
            <div className="flex flex-wrap items-center justify-center gap-4 max-w-6xl mx-auto px-4 overflow-x-auto">
                <NavLinks categories={categories} />
            </div>
        </nav>
    )
};
export default Navbar;
