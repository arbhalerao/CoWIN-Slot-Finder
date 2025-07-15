import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PincodeSearch() {
  const [pin, setPin] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (pin.trim()) {
      navigate(`/pincode?pin=${pin.trim()}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="pincode-form">
      <input
        type="search"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        placeholder="Search by PINCODE"
      />
      <button type="submit">Search</button>
    </form>
  );
}
