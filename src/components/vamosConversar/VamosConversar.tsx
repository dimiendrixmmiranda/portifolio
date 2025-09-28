import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { BackgroudGrid } from "../backgroundGrid/BackgroundGrid";

export default function VamosConversar() {

    return (
        <section>
            <BackgroudGrid>
                <div className="text-white p-4 flex justify-center items-center z-20">
                    <div className="flex flex-col gap-4 sm:gap-8">
                        <div className="flex flex-col justify-center items-center font-primaria">
                            <h2 className="text-4xl uppercase font-black sm:text-6xl lg:text-[7em]">Vamos</h2>
                            <h3 className="text-4xl uppercase font-black text-transparent sm:text-6xl lg:text-[7em]" style={{ WebkitTextStroke: '2px white' }}>Conversar?</h3>
                        </div>
                        <span className="text-zinc-300 text-center flex justify-center items-center leading-5 font-bold lg:text-xl">Está pronto para transformar criatividade em tecnologia?</span>
                        <div className="flex flex-col justify-center items-center text-center lg:text-lg">
                            <span>Dimi Endrix Martins Miranda</span>
                            <span>Engenheiro da Computação e Desenvolvedor FullStack</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 max-w-[550px] w-full mx-auto sm:gap-4">
                            <div className='flex items-center justify-center gap-2 bg-zinc-200 rounded-lg p-2 text-preto'>
                                <MdEmail className='text-3xl sm:text-4xl' />
                                <p className='text-lg font-black sm:text-xl'>Email</p>
                            </div>
                            <div className='flex items-center justify-center gap-2 bg-zinc-200 rounded-lg p-2 text-preto'>
                                <IoLogoWhatsapp className='text-3xl sm:text-4xl' />
                                <p className='text-lg font-black sm:text-xl'>WhatsApp</p>
                            </div>
                        </div>
                    </div>
                </div>
            </BackgroudGrid>
        </section>
    )
}