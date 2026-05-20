import { useState } from "react";

const CartWidget = () => {
  const [count] = useState(0);

  return (
    <div className="cart-widget">
      <span className="cart-icon">🛒</span>
      {count > 0 && <span className="cart-badge">{count}</span>}
    </div>
  );
};

export default CartWidget;
