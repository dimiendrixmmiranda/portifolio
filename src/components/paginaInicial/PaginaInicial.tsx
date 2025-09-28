"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import Image from "next/image";

export function PaginaInicial() {
    return (
        <section className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="fixed top-0 left-0 w-full z-10 text-white p-4 flex justify-between lg:px-10 lg:py-6">
                <div className="flex items-center gap-2">
                    <h1>Dimi Endrix</h1>
                    <div className="relative w-8 h-8">
                        <Image alt="logo dimi endrix" src={'/logo-dimi.png'} fill className="object-contain" />
                    </div>
                </div>
                <div className="uppercase flex flex-col justify-end">
                    <p className="text-xs font-medium text-end">Disponível para</p>
                    <span className="font-black text-sm">novos Projetos</span>
                </div>
            </div>
            <div className="max-w-2xl mx-auto p-4 flex flex-col gap-2">
                <h1 className="relative text-center z-10 text-4xl md:text-7xl bg-clip-text text-zinc-300 font-sans font-bold 2xl:text-[7em]">
                    Dimi Endrix
                </h1>
                <span className="z-20 flex justify-center text-zinc-300 text-center leading-[22px] 2xl:text-xl">Engenheiro da Computação e Desenvolvedor FullStack</span>
                <p className="text-neutral-400 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Welcome to MailJet, the best transactional email service on the web.
                    We provide reliable, scalable, and customizable email solutions for
                    your business. Whether you&apos;re sending order confirmations,
                    password reset emails, or promotional campaigns, MailJet has got you
                    covered.
                </p>
            </div>
            <div className="flex flex-col justify-center items-center z-20 text-white absolute bottom-8">
                <p>Live in</p>
                <span className="font-black">Brazil</span>
            </div>
            <BackgroundBeams />
        </section>
    );
}
