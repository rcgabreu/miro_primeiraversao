function ProductCarousel() {
  try {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    
    const products = [
      {
        name: "Pastéis Salgados",
        image: "https://images.unsplash.com/photo-1551218370-29b1b4b3b9a7?w=400&h=300&fit=crop",
        description: "Diversos sabores deliciosos"
      },
      {
        name: "Tapiocas",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
        description: "Fresquinhas e saborosas"
      },
      {
        name: "Cuscuz Recheado",
        image: "https://images.unsplash.com/photo-1574653065583-3dd4262e9b6e?w=400&h=300&fit=crop",
        description: "Tradicional nordestino"
      },
      {
        name: "Macaxeira",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop",
        description: "Cozida no ponto certo"
      },
      {
        name: "Bebidas Geladas",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
        description: "Para refrescar o seu dia"
      }
    ];

    React.useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === products.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);

      return () => clearInterval(interval);
    }, [products.length]);

    const goToSlide = (index) => {
      setCurrentIndex(index);
    };

    return (
      <section className="py-16 bg-[var(--secondary-color)]" data-name="carousel" data-file="components/ProductCarousel.js">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mb-4">
              Nossos Produtos
            </h2>
            <p className="text-lg text-[var(--text-light)] max-w-2xl mx-auto">
              Descubra os sabores únicos que fazem da nossa pastelaria um lugar especial há mais de 25 anos
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {products.map((product, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative h-64 md:h-96">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-shadow">
                          {product.name}
                        </h3>
                        <p className="text-lg md:text-xl text-white/90 text-shadow">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[var(--primary-color)] w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-8">
              <button 
                onClick={() => window.location.href = 'cardapio.html'}
                className="btn-primary text-lg px-8 py-4"
              >
                <div className="icon-arrow-right text-xl mr-2 inline-block"></div>
                Ver Todos os Sabores
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ProductCarousel component error:', error);
    return null;
  }
}