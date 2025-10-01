import { FocusCardsPersonalizado } from "../ui/focus-cards-personalizado";

export function Cards() {
    const cards = [
        {
            titulo: "Estuda +",
            imagem: "/projetos/logo-estuda-+.png",
            cor: "bg-zinc-700",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            previaDoSite: "https://plataforma-estudos-chi.vercel.app/"
        },
        {
            titulo: "Fanáticos",
            imagem: "/projetos/logo-fanaticos.png",
            cor: "bg-azul-escuro",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            previaDoSite: "https://fanaticos-liard.vercel.app/"
        },
        {
            titulo: "Gamerzone",
            imagem: "/projetos/logo-gamer-zone.png",
            cor: "bg-laranja",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            previaDoSite: "https://gamerzone-ten.vercel.app/"
        },
        {
            titulo: "La Vida",
            imagem: "/projetos/logo-la-vida.png",
            cor: "bg-azul-medio",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            previaDoSite: "https://la-vida.vercel.app/"
        },
        {
            titulo: "Prefeitura Municipal",
            imagem: "/projetos/logo-prefeitura.png",
            cor: "bg-green-700",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            previaDoSite: "https://prefeitura-municipal-de-joaquim-tavora-pr.vercel.app/"
        },
        {
            titulo: "Rota Perfeita",
            imagem: "/projetos/logo-rota-perfeita.png",
            cor: "bg-azul-claro",
            descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            previaDoSite: "https://rota-perfeita-phi.vercel.app/"
        },
    ]
    return <FocusCardsPersonalizado cards={cards} />;
}
