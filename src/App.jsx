import "./App.css";
import { useCart } from "./hooks/useCart.js";

import { products } from "./data/product.js";
import ProductCard from "./components/ProductCard.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  const { cart, addToCart, removeFromCart, updateQuantity, total } = useCart();

  return (
    <>
      <div className="app">
        <header>Shopping cart</header>
      </div>
      <main className="products">
        <section>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </section>
        <Cart
          cart={cart}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
          total={total}
        />
      </main>
    </>
  );
}

export default App;
