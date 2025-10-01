'use client'
import { Cards } from "../card/Card";

export default function Projetos() {
    return (
        <section className="flex flex-col justify-center items-center min-h-screen">
            <div className="flex flex-col text-white p-4 gap-4 md:p-8 md:gap-8 xl:gap-12">
                <h2 className="uppercase font-black text-center text-3xl md:text-start md:text-5xl xl:text-6xl">Meus Projetos</h2>
                <Cards/>
            </div>
        </section>
    )
}