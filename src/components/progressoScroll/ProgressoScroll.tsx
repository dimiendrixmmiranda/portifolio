'use client'
import { useEffect, useState } from "react";

export default function ProgressoScroll() {
    const [sections, setSections] = useState<number[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const elements = document.querySelectorAll("section")
        const offsets = Array.from(elements).map((el) => (el as HTMLElement).offsetTop)
        setSections(offsets)

        const handleScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight / 2
            let index = 0

            for (let i = 0; i < offsets.length; i++) {
                if (scrollPos >= offsets[i]) {
                    index = i
                }
            }
            setActiveIndex(index)
        };

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="fixed top-1/2 left-6 -translate-y-1/2 flex flex-col gap-4 z-30">
            {sections.map((_, i) => (
                <div
                    key={i}
                    className={`w-4 h-4 rounded-full border-2 transition-all ${activeIndex === i ? "bg-white border-white" : "border-gray-500"
                        }`}
                />
            ))}
        </div>
    );
}