import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { IoIosInformationCircle } from "react-icons/io";
import { Dialog } from 'primereact/dialog';
import React, { useState } from "react";
import Image from "next/image";
import { FaGithub, FaMousePointer } from "react-icons/fa";

interface Card3dProps {
    titulo: string
    descricao: string
    imagem: string
    cor: string
}
export default function Card3d({ titulo, descricao, imagem, cor }: Card3dProps) {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <CardContainer className="w-full max-w-96">
                <CardBody className={`p-8 rounded-xl shadow-lg ${cor} relative`}>
                    <CardItem translateZ={50} className="text-3xl font-bold line-clamp-1">{titulo}</CardItem>
                    <CardItem translateZ={30} className="text-sm mt-2 line-clamp-4">{descricao}</CardItem>
                    <CardItem translateZ={100} className="mt-4">
                        <img
                            src={`${imagem}`}
                            className="w-full h-[190px] object-contain rounded-xl"
                            alt="thumbnail"
                        />
                    </CardItem>

                    <div className="w-full grid grid-cols-2 justify-center items-center mt-6 gap-2">
                        <div className="flex justify-center items-center">
                            <Link href={'/'} className="uppercase font-bold bg-zinc-800 w-full h-full text-center p-2 flex items-center justify-center gap-2"><FaMousePointer />Acessar</Link>
                        </div>
                        <div className="flex justify-center items-center">
                            <Link href={'/'} className="uppercase font-bold bg-zinc-800 w-full h-full text-center p-2 flex items-center justify-center gap-2"><FaGithub />GitHub</Link>
                        </div>
                    </div>
                    <button className="absolute top-3 right-3 text-2xl" onClick={() => setVisible(true)}>
                        <IoIosInformationCircle />
                    </button>
                </CardBody>
            </CardContainer>
            <Dialog header={titulo} visible={visible} onHide={() => { if (!visible) return; setVisible(false); }} className="w-[95%] max-w-[1440px]">
                <div className="flex flex-col gap-4">
                    <p>{descricao}</p>
                    <div className="my-2 flex flex-col gap-2">
                        <h2 className="uppercase text-sm font-bold">Tecnologias Utilizadas:</h2>
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
                        <div className="flex flex-col gap-4">
                            <h4 className="uppercase font-black text-2xl">Prévia do Site:</h4>
                            <div className="overflow-hidden" style={{ borderRadius: "1em" }}>
                                <iframe src="http://fanaticos-liard.vercel.app/" width="100%" height="500px"></iframe>
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-2 justify-center items-center mt-6 gap-2">
                            <div className="flex justify-center items-center">
                                <Link href={'/'} className="uppercase font-bold bg-zinc-800 w-full h-full text-center p-2 flex items-center justify-center gap-2"><FaMousePointer />Acessar</Link>
                            </div>
                            <div className="flex justify-center items-center">
                                <Link href={'/'} className="uppercase font-bold bg-zinc-800 w-full h-full text-center p-2 flex items-center justify-center gap-2"><FaGithub />GitHub</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
}