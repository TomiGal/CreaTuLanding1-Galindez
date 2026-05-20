const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2 className="greeting-message">{greeting}</h2>
      <p className="greeting-sub">
        Explorá nuestra colección de productos y encontrá lo que estás buscando.
      </p>
      <div className="products-placeholder">
        <div className="placeholder-card">📦 Productos próximamente...</div>
        <div className="placeholder-card">📦 Productos próximamente...</div>
        <div className="placeholder-card">📦 Productos próximamente...</div>
      </div>
    </div>
  );
};

export default ItemListContainer;
