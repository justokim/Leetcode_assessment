import React, { useState } from "react";
import "./App.css";
export default function App() {
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e);

    let newPhone;

    const input = e.target.value.replace(/\D/g, "").substring(0, 10);

    const areaCode = input.substring(0, 3);
    const middle = input.substring(3, 6);
    const last = input.substring(6, 10);

    if (input.length > 6) {
      newPhone = `(${areaCode}) ${middle}-${last}`;
    } else if (input.length > 3) {
      newPhone = `(${areaCode}) ${middle}`;
    } else if (input.length > 0) {
      newPhone = `${areaCode}`;
    }

    setNumber(newPhone);
  };

  return (
    <main className="main">
      <div className="">
        <input
          type="tel"
          data-testid="phone-input"
          id="phone"
          maxLength="16"
          placeholder="mobile number"
          autoComplete="off"
          value={number}
          onChange={handleChange}
        />
      </div>
    </main>
  );
}
