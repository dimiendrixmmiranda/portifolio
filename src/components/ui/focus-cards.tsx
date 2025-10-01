"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { FaArrowLeft, FaArrowRight} from "react-icons/fa";
import { Dialog } from "primereact/dialog";

type CardType = { titulo: string, imagem: string, };

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
        "rounded-lg relative bg-white dark:bg-neutral-900 overflow-hidden w-full",
        "transition-all duration-500 ease-out cursor-pointer",
        hovered !== null && hovered !== index && "blur-sm scale-[0.97]"
      )}
    >
      <div className={`w-full h-full p-4 flex flex-col gap-2 max-w-[400px] mx-auto`}>
        <img src={card.imagem} alt={card.titulo} className="object-contain w-full h-full" />
      </div>
      <div
        className={cn(
          "absolute inset-0 bg-black/40 flex items-end py-3 px-4 transition-opacity duration-200",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-sm sm:text-lg font-bold text-white" style={{textShadow: '1px 1px 2px black'}}>{card.titulo}</div>
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
            <div className="w-[200px] h-[200px] mx-auto md:w-[400px] md:h-[400px]">
              <img src={selectedCard.imagem} alt={selectedCard.titulo} className="object-contain w-full h-full" />
            </div>
          </div>
        )}
      </Dialog>
    </div>
  );
}
