import { useState } from "react";

import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import PackingList from "../PackingList/PackingList";
import Stats from "../Stats/Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handlePackItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onPackItem={handlePackItem}
      />
      <Stats
        total={items.length /* total items in the list */} 
        packed={items.filter((item) => item.packed).length  /* filter out the elements that are unpacked and return the number of elements that are packed */}
      />
    </div>
  );
}
