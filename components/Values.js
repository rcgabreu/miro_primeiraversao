function Values() {
  try {
    const values = [
      {
        icon: 'star',
        title: 'Qualidade',
        description: 'Ingredientes frescos e selecionados para garantir o melhor sabor em cada produto.'
      },
      {
        icon: 'users',
        title: 'Tradição Familiar',
        description: 'Receitas passadas de geração em geração, mantendo o sabor autêntico nordestino.'
      },
      {
        icon: 'heart',
        title: 'Atendimento Caloroso',
        description: 'Cada cliente é recebido como parte da nossa família, com carinho e atenção especial.'
      },
      {
        icon: 'clock',
        title: 'Pontualidade',
        description: 'Respeitamos o tempo dos nossos clientes, sempre prontos para servir com agilidade.'
      }
    ];

    return (
      <section className="py-16 bg-[var(--secondary-color)]" data-name="values" data-file="components/Values.js">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mb-4">
                Nossos Valores
              </h2>
              <p className="text-lg text-[var(--text-light)] max-w-2xl mx-auto">
                Os princípios que guiam nosso trabalho há mais de 25 anos
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className={`icon-${value.icon} text-2xl text-[var(--primary-color)]`}></div>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-dark)] mb-3">{value.title}</h3>
                  <p className="text-[var(--text-light)] leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-4">
                Nossa Missão
              </h3>
              <p className="text-lg text-[var(--text-light)] leading-relaxed mb-6">
                Preservar e compartilhar os sabores autênticos da culinária nordestina, oferecendo produtos 
                de qualidade superior com o carinho e a tradição que nos caracterizam há mais de duas décadas. 
                Queremos ser o ponto de encontro onde famílias e amigos criam memórias especiais degustando 
                o melhor da nossa terra.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.location.href = 'cardapio.html'}
                  className="btn-primary"
                >
                  <div className="icon-utensils text-lg mr-2 inline-block"></div>
                  Conheça Nosso Cardápio
                </button>
                <a 
                  href="https://wa.me/5579999999999?text=Olá! Gostaria de fazer um pedido." 
                  target="_blank"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  <div className="icon-message-circle text-lg mr-2"></div>
                  Faça Seu Pedido
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Values component error:', error);
    return null;
  }
}