class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Algo deu errado</h1>
            <p className="text-gray-600 mb-4">Pedimos desculpas, mas algo inesperado aconteceu.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function CardapioApp() {
  try {
    const [cart, setCart] = React.useState([]);
    const [isCartOpen, setIsCartOpen] = React.useState(false);

    const addToCart = (item) => {
      setCart(prevCart => {
        const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
          return prevCart.map(cartItem =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          );
        }
        return [...prevCart, { ...item, quantity: 1 }];
      });
    };

    const removeFromCart = (itemId) => {
      setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    };

    const updateQuantity = (itemId, newQuantity) => {
      if (newQuantity === 0) {
        removeFromCart(itemId);
        return;
      }
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    };

    return (
      <div className="min-h-screen bg-gray-50" data-name="cardapio-app" data-file="cardapio-app.js">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[var(--text-dark)] mb-4">Nosso Cardápio</h1>
            <p className="text-lg text-[var(--text-light)] max-w-2xl mx-auto">
              Escolha seus sabores favoritos e faça seu pedido diretamente pelo WhatsApp
            </p>
          </div>

          {menuCategories.map((category) => (
            <MenuCategory
              key={category.id}
              category={category}
              onAddToCart={addToCart}
            />
          ))}
        </main>

        <Cart
          cart={cart}
          isOpen={isCartOpen}
          onToggle={() => setIsCartOpen(!isCartOpen)}
          onRemoveItem={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />

        {/* Floating Cart Button */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 right-6 bg-[var(--primary-color)] text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-colors z-40"
        >
          <div className="icon-shopping-cart text-2xl"></div>
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-[var(--accent-color)] text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </button>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('CardapioApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <CardapioApp />
  </ErrorBoundary>
);