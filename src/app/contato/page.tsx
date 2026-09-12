import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | EasyMed Perícias",
  description:
    "Entre em contato com a EasyMed Perícias para conhecer nossas soluções, serviços, materiais e tecnologia para profissionais que atuam com perícias.",
  alternates: {
    canonical: "/contato",
  },
};


import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContatoPage() {
  return (
    <>
      <main className="contact-page">
        <section className="contact-hero">
          <div>
            <span className="eyebrow">FALE COM A EASYMED</span>

            <h1>
              Vamos entender
              <em> o seu caso.</em>
            </h1>

            <p>
              Conte brevemente o que você precisa. A partir dessas informações,
              conseguimos direcionar você para a solução mais adequada.
            </p>
          </div>
        </section>

        <section className="contact-content">

          <div className="contact-intro">
            <span className="section-number">01</span>

            <h2>
              O primeiro passo é simples.
            </h2>

            <p>
              Seja para uma perícia, análise de processo, suporte técnico,
              materiais ou software, queremos entender o contexto antes de
              indicar o caminho.
            </p>

            <p>
              Preencha os dados abaixo e descreva brevemente sua necessidade.
            </p>
          </div>

          <form className="contact-form">

            <div className="form-field">
              <label htmlFor="name">Nome</label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Seu nome"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">E-mail</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
              />
            </div>

            <div className="form-field">
              <label htmlFor="profile">Você é</label>

              <select
                id="profile"
                name="profile"
                defaultValue=""
              >
                <option value="" disabled>
                  Selecione uma opção
                </option>

                <option value="perito">
                  Perito
                </option>

                <option value="advogado-autor">
                  Advogado do reclamante
                </option>

                <option value="advogado-defesa">
                  Advogado da defesa
                </option>

                <option value="empresa">
                  Empresa
                </option>

                <option value="outro">
                  Outro
                </option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="message">
                Como podemos ajudar?
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Conte brevemente sobre sua necessidade..."
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
            >
              Enviar mensagem
            </button>

          </form>

        </section>

        <section className="contact-back">
          <Link href="/" className="btn-text">
            ← Voltar para o início
          </Link>
        </section>
      </main>
    </>
  );
}