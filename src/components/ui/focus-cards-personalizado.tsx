"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { FaArrowLeft, FaArrowRight, FaGithub, FaMousePointer } from "react-icons/fa";
import { Dialog } from "primereact/dialog";
import Image from "next/image";
import Link from "next/link";

type CardType = { titulo: string, descricao: string, cor: string, imagem: string, previaDoSite: string };

const Card = React.memo(
    ({
        card,
        index,
        hovered,
        setHovered,
        onClick,
    }: {
        card: CardType;
        index: number;
        hovered: number | null;
        setHovered: React.Dispatch<React.SetStateAction<number | null>>;
        onClick: () => void;
    }) => (
        <div
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onClick={onClick}
            className={cn(
                "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden w-full",
                "transition-all duration-500 ease-out cursor-pointer",
                hovered !== null && hovered !== index && "blur-sm scale-[0.97]"
            )}
        >
            <div className={`w-full h-full p-4 flex flex-col gap-2 ${card.cor} max-w-[400px] mx-auto`}>
                <h2 className="font-bold text-2xl">{card.titulo}</h2>
                <p className="line-clamp-3">{card.descricao}</p>
                <div className="w-[200px] h-[200px] mx-auto">
                    <img src={card.imagem} alt={card.titulo} className="object-contain w-full h-full" />
                </div>
            </div>
            <div
                className={cn(
                    "absolute inset-0 bg-black/40 flex items-end py-3 px-4 transition-opacity duration-200",
                    hovered === index ? "opacity-100" : "opacity-0"
                )}
            >
                <div className="text-sm sm:text-lg font-bold text-white">{card.titulo}</div>
            </div>
        </div>
    )
);

Card.displayName = "Card";

export function FocusCardsPersonalizado({ cards }: { cards: CardType[] }) {
    const [hovered, setHovered] = useState<number | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState<number>(2);
    const [visible, setVisible] = useState(false);
    const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
    const itemsPerPageRef = useRef(itemsPerPage);
    itemsPerPageRef.current = itemsPerPage;

    const calcItemsPerPage = (w: number) => {
        if (w <= 767) return 2;
        if (w <= 1023) return 4;
        if (w <= 1439) return 4;
        return 12;
    };

    useEffect(() => {
        const apply = () => {
            const w = window.innerWidth;
            const newItems = calcItemsPerPage(w);
            const oldItems = itemsPerPageRef.current;

            if (newItems === oldItems) {
                setItemsPerPage(newItems);
                return;
            }

            const globalStart = currentIndex * oldItems;
            const newPage = Math.floor(globalStart / newItems);
            const maxPage = Math.max(0, Math.ceil(cards.length / newItems) - 1);

            setItemsPerPage(newItems);
            itemsPerPageRef.current = newItems;
            setCurrentIndex(Math.min(newPage, maxPage));
        };

        apply();
        window.addEventListener("resize", apply);
        return () => window.removeEventListener("resize", apply);
    }, [cards.length, currentIndex]);

    const totalPages = Math.max(1, Math.ceil(cards.length / itemsPerPage));
    const start = currentIndex * itemsPerPage;
    const currentCards = cards.slice(start, start + itemsPerPage);

    const nextPage = () => setCurrentIndex((p) => Math.min(p + 1, totalPages - 1));
    const prevPage = () => setCurrentIndex((p) => Math.max(p - 1, 0));

    const openDialog = (card: CardType) => {
        setSelectedCard(card);
        setVisible(true);
    };

    return (
        <div className="relative max-w-5xl 2xl:max-w-[1440px]">
            <div
                className={cn(
                    "overflow-hidden w-full grid gap-4 mx-auto text-white px-4 py-6",
                    {
                        "grid-rows-2": itemsPerPage === 2,
                        "grid-cols-2": itemsPerPage === 4,
                        "grid-cols-3": itemsPerPage === 6,
                        "grid-cols-4": itemsPerPage === 12,
                    }
                )}
            >
                {currentCards.map((card, i) => (
                    <Card
                        key={`${card.titulo}-${start + i}`}
                        card={card}
                        index={start + i}
                        hovered={hovered}
                        setHovered={setHovered}
                        onClick={() => openDialog(card)}
                    />
                ))}
            </div>

            <button
                onClick={prevPage}
                disabled={currentIndex === 0}
                className="absolute top-1/2 left-3 bg-black text-white p-2 rounded-full disabled:opacity-40 z-30 transform -translate-y-1/2"
                aria-label="Anterior"
            >
                <FaArrowLeft />
            </button>

            <button
                onClick={nextPage}
                disabled={currentIndex === totalPages - 1}
                className="absolute top-1/2 right-3 bg-black text-white p-2 rounded-full disabled:opacity-40 z-30 transform -translate-y-1/2"
                aria-label="Próximo"
            >
                <FaArrowRight />
            </button>

            {/* Dialog do PrimeReact */}
            <Dialog
                header={selectedCard?.titulo || ""}
                visible={visible}
                onHide={() => setVisible(false)}
                className="w-[95%] max-w-[800px]"
            >
                {selectedCard && (
                    <div className="flex flex-col gap-4">
                        <h2 className="font-bold text-2xl">{selectedCard.titulo}</h2>
                        <p>{selectedCard.descricao}</p>
                        <div className="w-[200px] h-[200px] mx-auto md:w-[400px] md:h-[400px]">
                            <img src={selectedCard.imagem} alt={selectedCard.titulo} className="object-contain w-full h-full" />
                        </div>
                        <div>
                            <h3>Tecnologias utilizadas:</h3>
                            <ul className="grid grid-cols-4 gap-2 mx-auto w-full lg:grid-cols-7">
                                <li className="flex text-white flex-col justify-center items-center bg-transparent relative overflow-hidden w-fit px-2 py-3 font-bold uppercase text-lg  shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-[140px] mx-auto">
                                    <div className="relative w-[40px] h-[40px]">
                                        <Image alt="Logo do HTML" src={'/conhecimentos/logo-html.png'} fill className="object-contain" />
                                    </div>
                                    <h2 className="uppercase font-semibold text-xs">HTML5</h2>
                                    <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-l from-transparent to-orange-500 animate-[animateTop_2s_linear_infinite]"></span>
                                    <span className="absolute top-0 right-0 w-[3px] h-full bg-gradient-to-t from-transparent to-orange-500 animate-[animateRight_2s_linear_infinite_-1s]"></span>
                                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent to-orange-500 animate-[animateBottom_2s_linear_infinite]"></span>
                                    <span className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-transparent to-orange-500 animate-[animateLeft_2s_linear_infinite_-1s]"></span>
                                </li>
                                <li className="flex text-white flex-col justify-center items-center bg-transparent relative overflow-hidden w-fit px-2 py-3 font-bold uppercase text-lg  shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-[140px] mx-auto">
                                    <div className="relative w-[40px] h-[40px]">
                                        <Image alt="Logo do css" src={'/conhecimentos/logo-css.png'} fill className="object-contain" />
                                    </div>
                                    <h2 className="uppercase font-semibold text-xs">CSS3</h2>
                                    <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-l from-transparent to-blue-500 animate-[animateTop_2s_linear_infinite]"></span>
                                    <span className="absolute top-0 right-0 w-[3px] h-full bg-gradient-to-t from-transparent to-blue-500 animate-[animateRight_2s_linear_infinite_-1s]"></span>
                                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent to-blue-500 animate-[animateBottom_2s_linear_infinite]"></span>
                                    <span className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-transparent to-blue-500 animate-[animateLeft_2s_linear_infinite_-1s]"></span>
                                </li>
                                <li className="flex text-white flex-col justify-center items-center bg-transparent relative overflow-hidden w-fit px-2 py-3 font-bold uppercase text-lg  shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-[140px] mx-auto">
                                    <div className="relative w-[40px] h-[40px]">
                                        <Image alt="Logo do JavaScript" src={'/conhecimentos/logo-javascript.png'} fill className="object-contain" />
                                    </div>
                                    <h2 className="uppercase font-semibold text-xs truncate max-w-[6ch]">JavaScript</h2>
                                    <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-l from-transparent to-yellow-500 animate-[animateTop_2s_linear_infinite]"></span>
                                    <span className="absolute top-0 right-0 w-[3px] h-full bg-gradient-to-t from-transparent to-yellow-500 animate-[animateRight_2s_linear_infinite_-1s]"></span>
                                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent to-yellow-500 animate-[animateBottom_2s_linear_infinite]"></span>
                                    <span className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-transparent to-yellow-500 animate-[animateLeft_2s_linear_infinite_-1s]"></span>
                                </li>
                                <li className="flex text-white flex-col justify-center items-center bg-transparent relative overflow-hidden w-fit px-2 py-3 font-bold uppercase text-lg  shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-[140px] mx-auto">
                                    <div className="relative w-[40px] h-[40px]">
                                        <Image alt="Logo do react" src={'/conhecimentos/logo-react.png'} fill className="object-contain" />
                                    </div>
                                    <h2 className="uppercase font-semibold text-xs truncate max-w-[6ch]">react</h2>
                                    <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-l from-transparent to-cyan-500 animate-[animateTop_2s_linear_infinite]"></span>
                                    <span className="absolute top-0 right-0 w-[3px] h-full bg-gradient-to-t from-transparent to-cyan-500 animate-[animateRight_2s_linear_infinite_-1s]"></span>
                                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent to-cyan-500 animate-[animateBottom_2s_linear_infinite]"></span>
                                    <span className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-transparent to-cyan-500 animate-[animateLeft_2s_linear_infinite_-1s]"></span>
                                </li>
                                <li className="flex text-white flex-col justify-center items-center bg-transparent relative overflow-hidden w-fit px-2 py-3 font-bold uppercase text-lg  shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-[140px] mx-auto">
                                    <div className="relative w-[40px] h-[40px]">
                                        <Image alt="Logo do nextjs" src={'/conhecimentos/logo-nextjs.png'} fill className="object-contain" />
                                    </div>
                                    <h2 className="uppercase font-semibold text-xs truncate max-w-[6ch]">nextjs</h2>
                                    <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-l from-transparent to-black animate-[animateTop_2s_linear_infinite]"></span>
                                    <span className="absolute top-0 right-0 w-[3px] h-full bg-gradient-to-t from-transparent to-black animate-[animateRight_2s_linear_infinite_-1s]"></span>
                                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent to-black animate-[animateBottom_2s_linear_infinite]"></span>
                                    <span className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-transparent to-black animate-[animateLeft_2s_linear_infinite_-1s]"></span>
                                </li>
                                <li className="flex text-white flex-col justify-center items-center bg-transparent relative overflow-hidden w-fit px-2 py-3 font-bold uppercase text-lg  shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-[140px] mx-auto">
                                    <div className="relative w-[40px] h-[40px]">
                                        <Image alt="Logo do firebase" src={'/conhecimentos/logo-firebase.png'} fill className="object-contain" />
                                    </div>
                                    <h2 className="uppercase font-semibold text-xs truncate max-w-[6ch]">firebase</h2>
                                    <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-l from-transparent to-orange-500 animate-[animateTop_2s_linear_infinite]"></span>
                                    <span className="absolute top-0 right-0 w-[3px] h-full bg-gradient-to-t from-transparent to-orange-500 animate-[animateRight_2s_linear_infinite_-1s]"></span>
                                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent to-orange-500 animate-[animateBottom_2s_linear_infinite]"></span>
                                    <span className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-transparent to-orange-500 animate-[animateLeft_2s_linear_infinite_-1s]"></span>
                                </li>
                                <li className="flex text-white flex-col justify-center items-center bg-transparent relative overflow-hidden w-fit px-2 py-3 font-bold uppercase text-lg  shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-[140px] mx-auto">
                                    <div className="relative w-[40px] h-[40px]">
                                        <Image alt="Logo do typescript" src={'/conhecimentos/logo-typescript.png'} fill className="object-contain" />
                                    </div>
                                    <h2 className="uppercase font-semibold text-xs truncate max-w-[6ch]">typescript</h2>
                                    <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-l from-transparent to-orange-500 animate-[animateTop_2s_linear_infinite]"></span>
                                    <span className="absolute top-0 right-0 w-[3px] h-full bg-gradient-to-t from-transparent to-orange-500 animate-[animateRight_2s_linear_infinite_-1s]"></span>
                                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent to-orange-500 animate-[animateBottom_2s_linear_infinite]"></span>
                                    <span className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-transparent to-orange-500 animate-[animateLeft_2s_linear_infinite_-1s]"></span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="uppercase font-black text-2xl">Prévia do Site:</h4>
                            <div className="overflow-hidden" style={{ borderRadius: "1em" }}>
                                <iframe src={selectedCard.previaDoSite} width="100%" height="500px"></iframe>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="flex justify-center items-center">
                                <Link href={selectedCard.previaDoSite} className="uppercase font-bold bg-zinc-800 w-full h-full text-center p-2 flex items-center justify-center gap-2" target="_blank" rel="noopener noreferrer" ><FaMousePointer />Acessar</Link>
                            </div>
                            <div className="flex justify-center items-center">
                                <Link href={'/'} className="uppercase font-bold bg-zinc-800 w-full h-full text-center p-2 flex items-center justify-center gap-2"><FaGithub />GitHub</Link>
                            </div>
                        </div>
                    </div>
                )}
            </Dialog>
        </div>
    );
}
