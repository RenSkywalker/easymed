export default function Doctor() {
  return (
    <section className="doctor-section">
      <div className="doctor-inner">
        <div className="doctor-image-wrap">
          <img
            src="/images/dr-gustavo-faidiga.jpeg"
            alt="Dr. Gustavo Faidiga"
            className="doctor-image"
          />
        </div>

        <div className="doctor-content">
          <span className="section-eyebrow">
            RESPONSÁVEL MÉDICO
          </span>

          <h2>
            Conhecimento médico aplicado
            <em> à realidade das perícias.</em>
          </h2>

          <div className="doctor-name">
            <strong>Dr. Gustavo Faidiga</strong>
            <span>Médico Ortopedista - Medicina Esportiva e Prevenção</span>
          </div>

          <p>
            Médico Ortopedista com subespecialização em Cirurgia do Joelho e
            Pós-graduação em Medicina Esportiva e Prevenção. Um profissional
            que alia o conhecimento clínico e cirúrgico à visão de longo
            prazo da saúde musculoesquelética.
          </p>

          <p>
            Formado em Medicina pela USP e com especialização em Ortopedia e
            Traumatologia pelo HC - FMRP (USP), Dr. Gustavo é Membro da
            Sociedade Brasileira de Ortopedia e Traumatologia (SBOT) e da
            AAOS - American Academy of Orthopaedic Surgeons, atuando com foco
            em promover a saúde e a qualidade de vida.
          </p>

          <p>
            Com uma abordagem que valoriza a prevenção e a manutenção do
            movimento, Dr. Gustavo explora como a Medicina Esportiva vai além
            do atleta de alto rendimento, sendo crucial para quem busca
            performance no dia a dia, vida ativa e, principalmente, longevidade
            com qualidade.
          </p>

          <div className="doctor-crm">
            CRM/SP 112622
          </div>
        </div>
      </div>
    </section>
  );
}