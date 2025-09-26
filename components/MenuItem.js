function MenuItem({ item, onAddToCart }) {
  try {
    const [quantity, setQuantity] = React.useState(1);
    const [size, setSize] = React.useState(null); // só usado se for objeto de preços

    const handleAddToCart = () => {
      if (typeof item.price === "object" && !size) {
        alert("Selecione um tamanho!");
        return;
      }

      const finalItem = {
        ...item,
        price: typeof item.price === "object" ? item.price[size] : item.price,
        size: size || null,
      };

      for (let i = 0; i < quantity; i++) {
        onAddToCart(finalItem);
      }
      setQuantity(1);
    };

    return (
      <div
        className="menu-card"
        data-name="menu-item"
        data-file="components/MenuItem.js"
      >
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-semibold text-[var(--text-dark)] flex-1">
            {item.name}
          </h3>

          {typeof item.price === "number" ? (
            <span className="text-lg font-bold text-[var(--primary-color)] ml-2">
              R$ {item.price.toFixed(2)}
            </span>
          ) : (
            <div className="ml-2">
              <select
                value={size || ""}
                onChange={(e) => setSize(e.target.value)}
                className="border rounded px-2 py-1 text-sm"
              >
                <option value="">Selecione</option>
                {Object.entries(item.price).map(([key, value]) => (
                  <option key={key} value={key}>
                    {key} - R$ {value.toFixed(2)}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-[var(--text-light)]">Qtd:</span>
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="quantity-btn"
            >
              <div className="icon-minus text-sm"></div>
            </button>
            <span className="w-8 text-center font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="quantity-btn"
            >
              <div className="icon-plus text-sm"></div>
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="btn-primary text-sm px-4 py-2"
          >
            <div className="icon-shopping-cart text-sm mr-1 inline-block"></div>
            Adicionar
          </button>
        </div>
      </div>
    );
  } catch (error) {
    console.error("MenuItem component error:", error);
    return null;
  }
}
