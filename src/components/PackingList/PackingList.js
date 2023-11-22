import { useState } from "react";
import Item from "../Item/Item";

        export default function PackingList({ items, onDeleteItem, onPackItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") {
    sortedItems = items;
  } else if (sortBy === "name") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onPackItem={onPackItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Oldest first first</option>
          <option value="name">Item name A-Z</option>
          <option value="packed">Unpacked items first</option>
        </select>
        <button onClick={onClearList}>Clear Items</button>
      </div>
    </div>
  );
}
