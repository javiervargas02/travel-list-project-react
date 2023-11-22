import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [invalidItem, setInvalidItem] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) {
      setInvalidItem(true);
      return;
    }
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
    setInvalidItem(false);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 🧾</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {[...Array(20).keys()].map((element) => (
          <option value={element + 1} key={element + 1}>
            {element + 1}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={({ target: { value } }) => setDescription(value)}
        style={invalidItem ? { border: "5px solid red" } : {}}
      />

      <button>Add</button>
    </form>
  );
}
