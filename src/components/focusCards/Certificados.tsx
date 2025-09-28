import { FocusCards } from "@/components/ui/focus-cards";

// Proximo passo é implementar os dialogs para cada card
export function Certificados() {
    const cards = [
        {
            title: "HTML e CSS 1",
            src: "/certificados/1.jpg",
        },
        {
            title: "HTML e CSS 2",
            src: "/certificados/2.jpg",
        },
        {
            title: "HTML e CSS 3",
            src: "/certificados/3.jpg",
        },
        {
            title: "HTML e CSS 4",
            src: "/certificados/4.jpg",
        },
        {
            title: "HTML e CSS 5",
            src: "/certificados/5.jpg",
        },
        {
            title: "HTML e CSS 6",
            src: "/certificados/24.png",
        },
        {
            title: "JavaScript 1",
            src: "/certificados/6.jpg",
        },
        {
            title: "JavaScript 2",
            src: "/certificados/7.jpg",
        },
        {
            title: "JavaScript 3",
            src: "/certificados/8.jpg",
        },
        {
            title: "JavaScript 4",
            src: "/certificados/9.jpg",
        },
        {
            title: "JavaScript 5",
            src: "/certificados/10.jpg",
        },
        {
            title: "Lógica de Programação 1",
            src: "/certificados/11.jpg",
        },
        {
            title: "Lógica de Programação 2",
            src: "/certificados/12.jpg",
        },
        {
            title: "CSS 1",
            src: "/certificados/13.jpg",
        },
        {
            title: "CSS 2",
            src: "/certificados/20.png",
        },
        {
            title: "CSS 3",
            src: "/certificados/21.png",
        },
        {
            title: "CSS 4",
            src: "/certificados/22.png",
        },
        {
            title: "Sass e CSS 1",
            src: "/certificados/14.jpg",
        },
        {
            title: "Sass e CSS 2",
            src: "/certificados/15.jpg",
        },
        {
            title: "Tailwind 1",
            src: "/certificados/16.jpg",
        },
        {
            title: "TypeScript 1",
            src: "/certificados/17.jpg",
        },
        {
            title: "TypeScript 2",
            src: "/certificados/18.jpg",
        },
        {
            title: "Bootstrap 1",
            src: "/certificados/19.png",
        },
        {
            title: "Git e Github",
            src: "/certificados/23.png",
        },
        {
            title: "Regex",
            src: "/certificados/25.jpg",
        },
    ];

    return (
        <section className="flex flex-col justify-center items-center min-h-screen text-white gap-4 p-4 md:p-8 md:gap-8 lg:gap-12">
            <h2 className="uppercase font-black text-center text-3xl text-white md:text-5xl xl:text-6xl">Meus Certificados</h2>
            <FocusCards cards={cards} />
        </section>
    )
}