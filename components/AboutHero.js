function AboutHero() {
  try {
    return (
      <section className="py-16 bg-gradient-to-br from-[var(--secondary-color)] to-white" data-name="about-hero" data-file="components/AboutHero.js">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-dark)] mb-6">
              Nossa História
            </h1>
            <p className="text-xl md:text-2xl text-[var(--text-light)] mb-8 leading-relaxed">
              Há mais de 25 anos levando sabor e tradição para a Orla da Atalaia
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
              <div className="text-left">
                <h2 className="text-3xl font-bold text-[var(--text-dark)] mb-6">
                  Tradição Familiar
                </h2>
                <p className="text-lg text-[var(--text-light)] mb-4">
                  A Pastelaria da Orla nasceu em 1999 com o sonho de uma família apaixonada pela culinária nordestina. 
                  Localizada na Feira do Aratip, Barraca 25, na bela Orla da Atalaia em Aracaju/SE.
                </p>
                <p className="text-lg text-[var(--text-light)] mb-6">
                  Desde o início, nosso compromisso é oferecer produtos frescos, saborosos e feitos com muito carinho, 
                  mantendo viva a tradição dos sabores autênticos do Nordeste brasileiro.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="icon-heart text-2xl text-[var(--primary-color)]"></div>
                  <span className="text-lg font-semibold text-[var(--text-dark)]">
                    Feito com amor desde 1999
                  </span>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://i.postimg.cc/LhdCQGgx/Chat-GPT-Image-26-de-set-de-2025-15-38-51.png"
                  alt="Fachada da Pastelaria da Orla"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-[var(--primary-color)] text-white p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-sm">Anos de história</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('AboutHero component error:', error);
    return null;
  }
}