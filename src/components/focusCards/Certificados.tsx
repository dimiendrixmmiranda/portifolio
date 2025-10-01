import { FocusCards } from "../ui/focus-cards";

// Proximo passo é implementar os dialogs para cada card
export function Certificados() {
    const cards = [
        {
            titulo: "HTML e CSS 1",
            imagem: "/certificados/1.jpg",
        },
        {
            titulo: "HTML e CSS 2",
            imagem: "/certificados/2.jpg",
        },
        {
            titulo: "HTML e CSS 3",
            imagem: "/certificados/3.jpg",
        },
        {
            titulo: "HTML e CSS 4",
            imagem: "/certificados/4.jpg",
        },
        {
            titulo: "HTML e CSS 5",
            imagem: "/certificados/5.jpg",
        },
        {
            titulo: "HTML e CSS 6",
            imagem: "/certificados/24.png",
        },
        {
            titulo: "JavaScript 1",
            imagem: "/certificados/6.jpg",
        },
        {
            titulo: "JavaScript 2",
            imagem: "/certificados/7.jpg",
        },
        {
            titulo: "JavaScript 3",
            imagem: "/certificados/8.jpg",
        },
        {
            titulo: "JavaScript 4",
            imagem: "/certificados/9.jpg",
        },
        {
            titulo: "JavaScript 5",
            imagem: "/certificados/10.jpg",
        },
        {
            titulo: "Lógica de Programação 1",
            imagem: "/certificados/11.jpg",
        },
        {
            titulo: "Lógica de Programação 2",
            imagem: "/certificados/12.jpg",
        },
        {
            titulo: "CSS 1",
            imagem: "/certificados/13.jpg",
        },
        {
            titulo: "CSS 2",
            imagem: "/certificados/20.png",
        },
        {
            titulo: "CSS 3",
            imagem: "/certificados/21.png",
        },
        {
            titulo: "CSS 4",
            imagem: "/certificados/22.png",
        },
        {
            titulo: "Sass e CSS 1",
            imagem: "/certificados/14.jpg",
        },
        {
            titulo: "Sass e CSS 2",
            imagem: "/certificados/15.jpg",
        },
        {
            titulo: "Tailwind 1",
            imagem: "/certificados/16.jpg",
        },
        {
            titulo: "TypeScript 1",
            imagem: "/certificados/17.jpg",
        },
        {
            titulo: "TypeScript 2",
            imagem: "/certificados/18.jpg",
        },
        {
            titulo: "Bootstrap 1",
            imagem: "/certificados/19.png",
        },
        {
            titulo: "Git e Github",
            imagem: "/certificados/23.png",
        },
        {
            titulo: "Regex",
            imagem: "/certificados/25.jpg",
        },
    ];

    return (
        <section className="flex flex-col justify-center items-center min-h-screen text-white gap-4 p-4 md:p-8 md:gap-8 lg:gap-12">
            <h2 className="uppercase font-black text-center text-3xl text-white md:text-5xl xl:text-6xl">Meus Certificados</h2>
            <FocusCards cards={cards} />
        </section>
    )
}