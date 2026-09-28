import React from "react";

// -----------------------------
// Exercise 1: Simple product list with props
// -----------------------------

// Child component: only uses props, has no state of its own
function ProductCard({ name, price, description }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "16px",
        margin: "10px",
        width: "220px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
      }}
    >
      <h3 style={{ margin: "0 0 8px 0" }}>{name}</h3>
      <p style={{ margin: "0 0 8px 0", color: "#666" }}>{description}</p>
      <strong style={{ color: "#2563eb" }}>${price.toLocaleString()}</strong>
    </div>
  );
}

// Parent component: holds the products array
// and passes each one down via props to ProductCard
function App() {
  const products = [
    {
      id: 1,
      name: "Running Shoes",
      price: 120,
      description: "Comfortable shoes for daily running and walking",
    },
    {
      id: 2,
      name: "Sports Pants",
      price: 85,
      description: "Cotton fabric, great for the gym and lounging",
    },
    {
      id: 3,
      name: "Short-Sleeve T-Shirt",
      price: 45,
      description: "Simple design, made of cotton",
    },
  ];

  return (
    <div style={{ fontFamily: "sans-serif", padding: "24px" }}>
      <h1>Exercise 1 — Product List with props</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
