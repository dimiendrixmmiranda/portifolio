'use client'
import Conhecimento from "@/components/conhecimentos/Conhecimento";
import { Certificados } from "@/components/focusCards/Certificados";
import { PaginaInicial } from "@/components/paginaInicial/PaginaInicial";
import ProgressoScroll from "@/components/progressoScroll/ProgressoScroll";
import Projetos from "@/components/projetos/Projetos";
import SobreMim from "@/components/sobreMim/SobreMim";
import VamosConversar from "@/components/vamosConversar/VamosConversar";

export default function Home() {
	return (
		<div className="bg-preto">
			<PaginaInicial />
			<SobreMim />
			<Projetos />
			<Conhecimento />
			<ProgressoScroll />
			<Certificados />
			<VamosConversar />
		</div>
	)
}