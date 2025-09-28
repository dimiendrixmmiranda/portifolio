import Image from "next/image";
import Onda from "../onda/Onda";
import RedesSociais from "../redesSociais/RedesSociais";

export default function SobreMim() {
    return (
        <div>
            <Onda invertido={false} />
            <section className="min-h-screen p-4 text-white flex justify-center items-center md:p-8 lg:p-10 2xl:p-16">
                <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-8">
                    <h2 className="uppercase font-black text-4xl h-fit lg:col-start-1 lg:col-end-3">Sobre mim</h2>
                    <div className="flex flex-col gap-4">
                        <p>Cras at orci vel quam egestas hendrerit. Fusce ultrices ante eget leo gravida, ac convallis lacus molestie. In aliquet luctus augue ac vehicula. Duis ipsum tortor, mollis eu interdum quis, aliquet vel ipsum. Aenean vitae aliquam dolor, sed luctus quam. Maecenas tristique libero eu rutrum pulvinar. Nulla quis tortor sit amet est sollicitudin sodales in a tellus.</p>
                        <p>Cras at orci vel quam egestas hendrerit. Fusce ultrices ante eget leo gravida, ac convallis lacus molestie. In aliquet luctus augue ac vehicula. Duis ipsum tortor, mollis eu interdum quis, aliquet vel ipsum. Aenean vitae aliquam dolor, sed luctus quam. Maecenas tristique libero eu rutrum pulvinar. Nulla quis tortor sit amet est sollicitudin sodales in a tellus.</p>
                        <p>Cras at orci vel quam egestas hendrerit. Fusce ultrices ante eget leo gravida, ac convallis lacus molestie. In aliquet luctus augue ac vehicula. Duis ipsum tortor, mollis eu interdum quis, aliquet vel ipsum. Aenean vitae aliquam dolor, sed luctus quam. Maecenas tristique libero eu rutrum pulvinar. Nulla quis tortor sit amet est sollicitudin sodales in a tellus.</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="relative w-[180px] h-[180px] rounded-full mx-auto overflow-hidden bg-red-50 md:w-[220px] md:h-[220px]" style={{boxShadow: '0 0 3px 2px black'}}>
                            <Image alt="dimi endrix martins miranda" src={'/dimi.jpg'} fill className="object-cover"/>
                        </div>
                        <div className="grid grid-cols-2 gap-4 max-w-[400px] w-full mx-auto">
                            <div className="flex flex-col justify-center items-center">
                                <p className="uppercase font-black text-2xl leading-6 2xl:text-3xl">5+ anos</p>
                                <span className="text-xs uppercase text-zinc-300">De Estudo</span>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <p className="uppercase font-black text-2xl leading-6 2xl:text-3xl">10+</p>
                                <span className="text-xs uppercase text-zinc-300">Projetos</span>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <p className="uppercase font-black text-2xl leading-6 2xl:text-3xl">8+</p>
                                <span className="text-xs uppercase text-zinc-300">Tecnologias</span>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <p className="uppercase font-black text-2xl leading-6 2xl:text-3xl">Jr+</p>
                                <span className="text-xs uppercase text-zinc-300">Nível</span>
                            </div>
                        </div>
                        <RedesSociais />
                    </div>
                </div>
            </section>
        </div>
    )
}