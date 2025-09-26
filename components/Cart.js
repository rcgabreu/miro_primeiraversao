function Cart({ cart, isOpen, onToggle, onRemoveItem, onUpdateQuantity }) {
  try {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const generateWhatsAppMessage = () => {
      let message = "🍴 *Pedido da Pastelaria da Orla*\n\n";
      
      cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name}\n`;
        message += `   Quantidade: ${item.quantity}\n`;
        message += `   Preço: R$ ${(item.price * item.quantity).toFixed(2)}\n\n`;
      });
      
      message += `💰 *Total: R$ ${total.toFixed(2)}*\n\n`;
      message += "📍 Para entrega na Feira do Aratip, Barraca 25";
      
      return encodeURIComponent(message);
    };

    const sendWhatsAppOrder = () => {
      if (cart.length === 0) return;
      
      const message = generateWhatsAppMessage();
      const whatsappUrl = `https://wa.me/5579999999999?text=${message}`;
      window.open(whatsappUrl, '_blank');
    };

    return (
      <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`} data-name="cart" data-file="components/Cart.js">
        <div className="absolute inset-0 bg-black/50" onClick={onToggle}></div>
        
        <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold text-[var(--text-dark)]">Seu Pedido</h2>
            <button onClick={onToggle} className="text-gray-500 hover:text-gray-700">
              <div className="icon-x text-2xl"></div>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4" style={{ height: 'calc(100vh - 160px)' }}>
            {cart.length === 0 ? (
              <div className="text-center text-gray-500 mt-8">
                <div className="icon-shopping-cart text-4xl mb-4 text-gray-300"></div>
                <p>Seu carrinho está vazio</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{item.name}</h3>
                      <p className="text-[var(--primary-color)] font-bold">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="quantity-btn"
                      >
                        <div className="icon-minus text-sm"></div>
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="quantity-btn"
                      >
                        <div className="icon-plus text-sm"></div>
                      </button>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 ml-2"
                      >
                        <div className="icon-trash-2 text-sm"></div>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold">Total:</span>
                <span className="text-2xl font-bold text-[var(--primary-color)]">
                  R$ {total.toFixed(2)}
                </span>
              </div>
              
              <button
                onClick={sendWhatsAppOrder}
                className="w-full btn-primary text-lg py-3"
              >
                <div className="icon-message-circle text-xl mr-2 inline-block"></div>
                Enviar Pedido via WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Cart component error:', error);
    return null;
  }
}