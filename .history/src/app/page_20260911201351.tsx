import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EasyMed Perícias | Suporte especializado para perícias",
  description:
    "A EasyMed Perícias oferece suporte técnico, serviços especializados, materiais e tecnologia para profissionais que atuam com perícias.",
  alternates: {
    canonical: "/",
  },
};

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Software from "@/components/Software";

export default function Home() {
  return (
    <>

      <main>
        <Hero />
        <Services />
        <Software />
      </main>
    </>
  );
}