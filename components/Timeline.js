function Timeline() {
  try {
    const timelineEvents = [
      {
        year: "1999",
        title: "O Início",
        description: "Fundação da Pastelaria da Orla na Feira do Aratip, Barraca 25, com o sonho de levar sabores únicos para a Orla da Atalaia."
      },
      {
        year: "2005",
        title: "Expansão do Cardápio",
        description: "Ampliamos nosso menu incluindo tapiocas, cuscuz recheado e outras delícias regionais, sempre mantendo a qualidade."
      },
      {
        year: "2010",
        title: "Reconhecimento",
        description: "Nos tornamos uma referência na Orla da Atalaia, conquistando clientes fiéis e turistas de todo o Brasil."
      },
      {
        year: "2015",
        title: "Tradição Consolidada",
        description: "Após 16 anos, consolidamos nossa posição como uma das pastelarias mais queridas de Aracaju."
      },
      {
        year: "2020",
        title: "Adaptação e Inovação",
        description: "Adaptamos nossos serviços para delivery e pedidos por WhatsApp, mantendo o atendimento próximo aos clientes."
      },
      {
        year: "2025",
        title: "Presente Digital",
        description: "Lançamos nosso site oficial para facilitar os pedidos e compartilhar nossa história com ainda mais pessoas."
      }
    ];

    return (
      <section className="py-16 bg-white" data-name="timeline" data-file="components/Timeline.js">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--text-dark)] mb-12">
              Nossa Jornada
            </h2>
            
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="bg-[var(--secondary-color)] rounded-xl p-6 ml-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-[var(--text-dark)]">{event.title}</h3>
                      <span className="text-2xl font-bold text-[var(--primary-color)]">{event.year}</span>
                    </div>
                    <p className="text-[var(--text-light)] leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Timeline component error:', error);
    return null;
  }
}