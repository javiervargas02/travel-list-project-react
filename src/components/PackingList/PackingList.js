import Item from "../Item/Item";

export default function PackingList({ items, onDeleteItem, onPackItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onPackItem={onPackItem}
          />
        ))}
      </ul>
    </div>
  );
}
