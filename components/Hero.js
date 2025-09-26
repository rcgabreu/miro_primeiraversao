function Hero() {
  try {
    React.useEffect(() => {
      const handleHashNavigation = () => {
        const hash = window.location.hash;
        if (hash) {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }
      };

      handleHashNavigation();
      window.addEventListener('hashchange', handleHashNavigation);
      
      return () => {
        window.removeEventListener('hashchange', handleHashNavigation);
      };
    }, []);

    return (
      <section 
        id="inicio" 
        className="hero-banner min-h-screen flex items-center justify-center text-center" 
        data-name="hero" 
        data-file="components/Hero.js"
      >
        <div className="container mx-auto px-4">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow">
              Pastel e Caldo de Cana do Miro
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 text-shadow">
              Sabores autênticos desde 1999
            </p>
            <p className="text-lg text-white/80 mb-8 text-shadow">
              Feira do Aratip, Barraca 25 - Orla da Atalaia, Aracaju/SE
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = 'cardapio.html'}
                className="btn-primary text-lg px-8 py-4"
              >
                <div className="icon-utensils text-xl mr-2 inline-block"></div>
                Ver Cardápio
              </button>
              <a 
                href="https://wa.me/5579998702117?text=Olá! Gostaria de fazer um pedido." 
                target="_blank"
                className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center"
              >
                <div className="icon-message-circle text-xl mr-2"></div>
                Fazer Pedido
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}