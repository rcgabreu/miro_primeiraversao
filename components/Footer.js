function Footer() {
  try {
    return (
      <footer className="bg-red-600 text-white py-12" data-name="footer" data-file="components/Footer.js">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-3 gap-8">
            {/* Logo e Descrição */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              </div>
              <p className="text-gray-300 max-w-xs mx-auto md:mx-0">
                Tradição e sabor na Orla da Atalaia há mais de 25 anos.
              </p>
            </div>

            

            {/* Informações de Contato */}
<div className="text-center">
<h4 className="text-lg font-semibold mb-4 text-white">Localização</h4>
  <div className="space-y-2 text-red-300">
    <p className="flex items-center justify-center">
      <div className="icon-map-pin text-white mr-2 text-lg"></div>
      Orla da Atalaia - Aracaju/SE
    </p>
    <p>Feira do Aratip, Barraca 25</p>
        <p className="flex items-center justify-center mt-4">
      <div className="icon-clock text-white mr-2 text-lg"></div>
      Todos os dias: 17h às 23h
    </p>
  </div>
</div>

            {/* Redes Sociais */}
            <div className="text-center">
              <div className="flex justify-center space-x-6 mb-6">
<a
  href="https://wa.me/5579998702117"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-green-600  w-12 h-12 flex items-center justify-center  rounded-full hover:bg-green-600 hover:text-white transition-colors"
>
  <div className="icon-message-circle text-xl"></div>
</a>
 <a
      href="https://www.instagram.com/pastel_do_miro/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white text-red-600  w-12 h-12 flex items-center justify-center  rounded-full hover:bg-pink-600 hover:text-white transition-colors"
    >
      <i className="icon-instagram text-xl"></i>
    </a>

                <a 
                  href="https://www.facebook.com/al9870" 
                  target="_blank"
                  className="bg-white text-blue-600 w-12 h-12 flex items-center justify-center rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <div className="icon-facebook text-xl text-blue"></div>
                </a>
              </div>
              
              <div className="mt-6">
                <a
          href="https://wa.me/5579998702117?text=Olá! Gostaria de fazer um pedido."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-red-600 px-5 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
        >
        </a>
              </div>
            </div>
          
          </div>

          <div className="border-t border-red-700 mt-8 pt-6 text-sm text-red-200 text-center">
            <p>&copy; 2025 Pastel e Caldo de Cana do Miro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}