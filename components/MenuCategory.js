function MenuCategory({ category, onAddToCart }) {
  try {
    return (
      <div className="mb-12" data-name="menu-category" data-file="components/MenuCategory.js">
        <div className="flex items-center mb-6">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-[var(--secondary-color)] mr-4`}>
            <div className={`icon-${category.icon} text-xl text-[var(--primary-color)]`}></div>
          </div>
          <h2 className="text-3xl font-bold text-[var(--text-dark)]">{category.name}</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.items.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('MenuCategory component error:', error);
    return null;
  }
}