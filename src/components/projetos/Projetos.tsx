'use client'
import Card3d from "../3dCard/Card3d";

export default function Projetos() {
    return (
        <section className="flex flex-col justify-center items-center min-h-screen">
            <div className="flex flex-col text-white p-4 gap-4 md:p-8 md:gap-8 xl:gap-12">
                <h2 className="uppercase font-black text-center text-3xl md:text-start md:text-5xl xl:text-6xl">Meus Projetos</h2>
                <ul className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:gap-8 3xl:grid-cols-4">
                    <li className="flex justify-center cursor-pointer">
                        <Card3d
                            imagem="/projetos/logo-fanaticos.png"
                            cor="bg-azul-escuro"
                            titulo="Fanáticos"
                            descricao="A Fanáticos é a loja perfeita para quem vive o esporte de corpo e alma. Especializada em artigos esportivos, oferecemos uma ampla variedade de produtos que vão desde camisas oficiais dos principais times até acessórios e equipamentos para diversas modalidades. Nossa missão é proporcionar aos torcedores e atletas uma experiência completa, unindo qualidade, autenticidade e paixão pelo esporte em cada detalhe. Na Fanáticos, cada item é pensado para você sentir a energia do jogo, seja em campo, na torcida ou no dia a dia."
                        />
                    </li>
                    <li className="flex justify-center cursor-pointer">
                        <Card3d
                            imagem="/projetos/logo-gamer-zone.png"
                            cor="bg-laranja"
                            titulo="Gamerzone"
                            descricao="Gamerzone é o destino definitivo para fãs de esports e gaming. Nosso site reúne notícias, análises, resultados e rankings das principais competições de jogos eletrônicos, mantendo você sempre atualizado com o que acontece no mundo dos games. Com uma cobertura completa e conteúdo de qualidade, o Gamerzone conecta jogadores, torcedores e entusiastas, trazendo emoção, estratégia e tudo que envolve o universo competitivo dos esports em um só lugar."
                        />
                    </li>
                    <li className="flex justify-center cursor-pointer">
                        <Card3d
                            imagem="/projetos/logo-estuda-+.png"
                            cor="bg-zinc-700"
                            titulo="Estuda+"
                            descricao="Estuda+ é a plataforma ideal para quem busca eficiência e organização nos estudos para concursos. Com conteúdos atualizados, materiais de qualidade e ferramentas que facilitam o aprendizado, ajudamos você a se preparar de forma estratégica, acompanhando seu progresso e reforçando os pontos mais importantes. No Estuda+, estudar se torna mais produtivo, focado e acessível, transformando seu esforço em resultados concretos rumo à aprovação."
                        />
                    </li>
                    <li className="flex justify-center cursor-pointer">
                        <Card3d
                            imagem="/projetos/logo-rota-perfeita.png"
                            cor="bg-azul-claro"
                            titulo="Rota Perfeita"
                            descricao="Rota Perfeita é o guia definitivo para quem deseja explorar destinos incríveis e descobrir pontos turísticos fascinantes. Nosso site oferece informações detalhadas, dicas exclusivas e curiosidades sobre cada lugar, ajudando viajantes a planejar experiências inesquecíveis. Com o Rota Perfeita, cada viagem se torna mais fácil, divertida e cheia de descobertas, conectando você aos melhores roteiros e atrações de forma prática e inspiradora."
                        />
                    </li>
                    <li className="flex justify-center cursor-pointer">
                        <Card3d
                            imagem="/projetos/logo-prefeitura.png"
                            cor="bg-green-700"
                            titulo="Prefeitura Municipal de Joaquim Távora - PR"
                            descricao="O site oficial da Prefeitura foi desenvolvido para ser uma ferramenta completa de comunicação entre o governo municipal e a população. Com interface moderna, intuitiva e responsiva, o site oferece acesso rápido a informações sobre serviços públicos, notícias, obras, eventos e iniciativas da administração."
                        />
                    </li>
                    <li className="flex justify-center cursor-pointer">
                        <Card3d
                            imagem="/projetos/logo-la-vida.png"
                            cor="bg-azul-medio"
                            titulo="La Vida"
                            descricao="A La Vida é uma lavanderia que une praticidade, qualidade e cuidado especial com suas roupas. Oferecemos serviços de lavagem, secagem e passadoria com atenção aos detalhes, sempre prezando pela higiene, frescor e conservação das peças. Nosso objetivo é facilitar o seu dia a dia, entregando roupas impecáveis e prontas para o uso."
                        />
                    </li>
                </ul>
            </div>
        </section>
    )
}