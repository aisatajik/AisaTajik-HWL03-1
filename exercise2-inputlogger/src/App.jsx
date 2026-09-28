import React, { useState } from "react";

// -----------------------------
// Exercise 2: A button that logs the input value to the console
// -----------------------------

function App() {
  const [value, setValue] = useState("");

  const handleClick = () => {
    console.log(value);
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "24px" }}>
      <h1>Exercise 2 — Log input value to the console</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your text"
        style={{
          padding: "8px 12px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          marginInlineEnd: "8px",
        }}
      />
      <button
        onClick={handleClick}
        style={{
          padding: "8px 16px",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#2563eb",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Log to console
      </button>
      <p style={{ color: "#888", fontSize: "13px" }}>
        (Open the browser console with F12 or Cmd+Option+I)
      </p>
    </div>
  );
}

export default App;
