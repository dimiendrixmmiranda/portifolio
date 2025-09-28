"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Dialog } from "primereact/dialog";

type CardType = { title: string; src: string };

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
      <div className="w-full h-[180px] sm:h-[240px] md:h-[220px] lg:h-[280px] 2xl:h-[230px]">
        <img src={card.src} alt={card.title} className="object-cover w-full h-full" />
      </div>

      <div
        className={cn(
          "absolute inset-0 bg-black/40 flex items-end py-3 px-4 transition-opacity duration-200",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-sm sm:text-lg font-bold text-white">{card.title}</div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: CardType[] }) {
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
            key={`${card.title}-${start + i}`}
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
        header={selectedCard?.title || ""}
        visible={visible}
        onHide={() => setVisible(false)}
        className="w-[95%] max-w-[1000px]"
      >
        {selectedCard && (
          <img src={selectedCard.src} alt={selectedCard.title} className="w-full h-auto rounded" />
        )}
      </Dialog>
    </div>
  );
}
