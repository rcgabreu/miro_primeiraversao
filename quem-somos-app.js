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

function QuemSomosApp() {
  try {
    return (
      <div className="min-h-screen bg-white" data-name="quem-somos-app" data-file="quem-somos-app.js">
        <Header />
        <AboutHero />
        <Timeline />
        <Values />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('QuemSomosApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <QuemSomosApp />
  </ErrorBoundary>
);