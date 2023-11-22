export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list 🧳</em>
      </p>
    );

  const total = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percentage = Math.round((packed / total) * 100);
  return (
    <footer className="stats">
      <em>
        🧳 You have {total} items on your list, and you already packed {packed}{" "}
        ({percentage}%)
      </em>
    </footer>
  );
}
