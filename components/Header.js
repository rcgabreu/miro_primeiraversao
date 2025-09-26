function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    // Pega a última parte do caminho da URL (ex: "cardapio.html")
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    const navigateToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = `index.html#${sectionId}`;
      }
      setIsMenuOpen(false);
    };

    const navigateToPage = (page) => {
      window.location.href = page;
      setIsMenuOpen(false);
    };

    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="https://i.postimg.cc/yJ04r65c/Chat-GPT-Image-20-de-set-de-2025-14-52-52.png"
                alt="Logo Pastel do Miro"
                className="h-12 w-auto rounded-lg shadow-sm"
              />
              <div>
                <h1 className="text-xl font-bold text-red-600">Pastel do Miro</h1>
                <p className="text-sm text-[var(--text-light)]">Desde 1999</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => navigateToSection("inicio")}
                className={
                  currentPage === "index.html"
                    ? "btn-primary"
                    : "text-[var(--text-dark)] hover:text-[var(--primary-color)] font-medium transition-colors"
                }
              >
                Início
              </button>

              <button
                onClick={() => navigateToPage("quem-somos.html")}
                className={
                  currentPage === "quem-somos.html"
                    ? "btn-primary"
                    : "text-[var(--text-dark)] hover:text-[var(--primary-color)] font-medium transition-colors"
                }
              >
                Quem Somos
              </button>

              <button
                onClick={() => navigateToPage("cardapio.html")}
                className={
                  currentPage === "cardapio.html"
                    ? "btn-primary"
                    : "text-[var(--text-dark)] hover:text-[var(--primary-color)] font-medium transition-colors"
                }
              >
                Cardápio
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-[var(--text-dark)]"
            >
              <div className="icon-menu text-2xl"></div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2 pt-4">
                <button
                  onClick={() => navigateToSection("inicio")}
                  className={
                    currentPage === "index.html"
                      ? "text-left py-2 btn-primary"
                      : "text-left py-2 text-[var(--text-dark)] hover:text-[var(--primary-color)] font-medium"
                  }
                >
                  Início
                </button>

                <button
                  onClick={() => navigateToPage("quem-somos.html")}
                  className={
                    currentPage === "quem-somos.html"
                      ? "text-left py-2 btn-primary"
                      : "text-left py-2 text-[var(--text-dark)] hover:text-[var(--primary-color)] font-medium"
                  }
                >
                  Quem Somos
                </button>

                <button
                  onClick={() => navigateToPage("cardapio.html")}
                  className={
                    currentPage === "cardapio.html"
                      ? "text-left py-2 btn-primary"
                      : "text-left py-2 text-[var(--text-dark)] hover:text-[var(--primary-color)] font-medium"
                  }
                >
                  Cardápio
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    );
  } catch (error) {
    console.error("Header component error:", error);
    return null;
  }
}
