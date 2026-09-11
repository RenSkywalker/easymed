import type { Metadata } from "next";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Software from "@/components/Software";

export const metadata: Metadata = {
  title: "EasyMed Perícias | Suporte especializado para perícias",
  description:
    "A EasyMed Perícias oferece suporte técnico, serviços especializados, materiais e tecnologia para profissionais que atuam com perícias.",
  alternates: {
    canonical: "/",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "#webpage",
  name: "EasyMed Perícias | Suporte especializado para perícias",
  description:
    "A EasyMed Perícias oferece suporte técnico, serviços especializados, materiais e tecnologia para profissionais que atuam com perícias.",
  isPartOf: {
    "@id": "#website",
  },
  about: {
    "@id": "#organization",
  },
  inLanguage: "pt-BR",
};

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Software />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
    </>
  );
}