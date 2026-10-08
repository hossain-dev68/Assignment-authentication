
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

type Product = {
    id: number;
    category: string;
    categoryIcon: string;
    categoryNameBn: string;
    nameBn: string;
    today: number;
};

const Marquee = async () => {
    const res = await fetch(
        "https://api.abcz.workers.dev/api/bazardor/products"
    );

    const data: Product[] = await res.json();

    const categories = [
        "chal",
        "dal",
        "tel",
        "sobji",
        "mach",
        "mangsho",
        "dim-dui",
        "mosla",
    ];

    const headLines = categories.flatMap((category) =>
        data
            .filter((product) => product.category === category)
            .slice(0, 3)
    );

    return (
        <div className="bg-gray-300">
            <div className="flex container max-w-7xl mx-auto">
                <MarqueeText
                    className="py-1"
                    direction="right"
                    duration={10}
                >
                    {headLines.map((h) => (
                        <span key={h.id}>
                            <span>
                                {h.categoryIcon} {h.categoryNameBn} -{" "}
                                {h.nameBn} : {h.today} টাকা/{h.unit}
                            </span>

                            <span className="mx-5">•</span>
                        </span>
                    ))}
                </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;