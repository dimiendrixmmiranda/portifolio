import Image from "next/image";

export default function Conhecimento() {
    return (
        <section className="flex flex-col justify-center items-center min-h-screen text-white gap-4 p-4 md:p-8 md:gap-8 lg:gap-12">
            <h2 className="uppercase font-black text-center text-3xl md:text-5xl xl:text-6xl">Meus Conhecimentos</h2>
            <div className="flex flex-wrap justify-center gap-8 w-full max-w-[800px] md:grid md:grid-cols-3">
                <div className="flex flex-col gap-4 justify-center items-center">
                    <h2 className="uppercase font-black text-lg">FrontEnd</h2>
                    <ul className="flex flex-col gap-4">
                        <li className="flex flex-col justify-center items-center">
                            <div className="relative w-8 h-8">
                                <Image alt="imagem" src={'/conhecimentos/logo-html.png'} fill className="object-contain" />
                            </div>
                            <h3 className="uppercase font-black text-sm">HTML5</h3>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <div className="relative w-8 h-8">
                                <Image alt="imagem" src={'/conhecimentos/logo-css.png'} fill className="object-contain" />
                            </div>
                            <h3 className="uppercase font-black text-sm">CSS3</h3>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <div className="relative w-8 h-8">
                                <Image alt="imagem" src={'/conhecimentos/logo-javascript.png'} fill className="object-contain" />
                            </div>
                            <h3 className="uppercase font-black text-sm">JavaScript</h3>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <div className="relative w-8 h-8">
                                <Image alt="imagem" src={'/conhecimentos/logo-typescript.png'} fill className="object-contain" />
                            </div>
                            <h3 className="uppercase font-black text-sm">TypeScript</h3>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <div className="relative w-8 h-8">
                                <Image alt="imagem" src={'/conhecimentos/logo-react.png'} fill className="object-contain" />
                            </div>
                            <h3 className="uppercase font-black text-sm">react</h3>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <div className="relative w-8 h-8">
                                <Image alt="imagem" src={'/conhecimentos/logo-nextjs.png'} fill className="object-contain" />
                            </div>
                            <h3 className="uppercase font-black text-sm">nextjs</h3>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <div className="relative w-8 h-8">
                                <Image alt="imagem" src={'/conhecimentos/logo-tailwind.png'} fill className="object-contain" />
                            </div>
                            <h3 className="uppercase font-black text-sm">tailwind</h3>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center">
                    <h2 className="uppercase font-black text-lg">BackEnd</h2>
                    <ul className="flex flex-col gap-4">
                        <li className="flex flex-col justify-center items-center">
                            <div className="relative w-8 h-8">
                                <Image alt="imagem" src={'/conhecimentos/logo-html.png'} fill className="object-contain" />
                            </div>
                            <h3 className="uppercase font-black text-sm">HTML5</h3>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <div className="relative w-8 h-8">
                                <Image alt="imagem" src={'/conhecimentos/logo-css.png'} fill className="object-contain" />
                            </div>
                            <h3 className="uppercase font-black text-sm">CSS3</h3>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <div className="relative w-8 h-8">
                                <Image alt="imagem" src={'/conhecimentos/logo-javascript.png'} fill className="object-contain" />
                            </div>
                            <h3 className="uppercase font-black text-sm">JavaScript</h3>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <div className="relative w-8 h-8">
                                <Image alt="imagem" src={'/conhecimentos/logo-typescript.png'} fill className="object-contain" />
                            </div>
                            <h3 className="uppercase font-black text-sm">TypeScript</h3>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <div className="relative w-8 h-8">
                                <Image alt="imagem" src={'/conhecimentos/logo-react.png'} fill className="object-contain" />
                            </div>
                            <h3 className="uppercase font-black text-sm">react</h3>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <div className="relative w-8 h-8">
                                <Image alt="imagem" src={'/conhecimentos/logo-nextjs.png'} fill className="object-contain" />
                            </div>
                            <h3 className="uppercase font-black text-sm">nextjs</h3>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <div className="relative w-8 h-8">
                                <Image alt="imagem" src={'/conhecimentos/logo-tailwind.png'} fill className="object-contain" />
                            </div>
                            <h3 className="uppercase font-black text-sm">tailwind</h3>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center">
                    <h2 className="uppercase font-black text-lg">CLOUD/DEVOPS</h2>
                    <ul className="flex flex-col gap-4">
                        <li className="flex flex-col justify-center items-center">
                            <div className="relative w-8 h-8">
                                <Image alt="imagem" src={'/conhecimentos/logo-html.png'} fill className="object-contain" />
                            </div>
                            <h3 className="uppercase font-black text-sm">HTML5</h3>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <div className="relative w-8 h-8">
                                <Image alt="imagem" src={'/conhecimentos/logo-css.png'} fill className="object-contain" />
                            </div>
                            <h3 className="uppercase font-black text-sm">CSS3</h3>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <div className="relative w-8 h-8">
                                <Image alt="imagem" src={'/conhecimentos/logo-javascript.png'} fill className="object-contain" />
                            </div>
                            <h3 className="uppercase font-black text-sm">JavaScript</h3>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <div className="relative w-8 h-8">
                                <Image alt="imagem" src={'/conhecimentos/logo-typescript.png'} fill className="object-contain" />
                            </div>
                            <h3 className="uppercase font-black text-sm">TypeScript</h3>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <div className="relative w-8 h-8">
                                <Image alt="imagem" src={'/conhecimentos/logo-react.png'} fill className="object-contain" />
                            </div>
                            <h3 className="uppercase font-black text-sm">react</h3>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <div className="relative w-8 h-8">
                                <Image alt="imagem" src={'/conhecimentos/logo-nextjs.png'} fill className="object-contain" />
                            </div>
                            <h3 className="uppercase font-black text-sm">nextjs</h3>
                        </li>
                        <li className="flex flex-col justify-center items-center">
                            <div className="relative w-8 h-8">
                                <Image alt="imagem" src={'/conhecimentos/logo-tailwind.png'} fill className="object-contain" />
                            </div>
                            <h3 className="uppercase font-black text-sm">tailwind</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}