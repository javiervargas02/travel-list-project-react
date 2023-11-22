export default function Stats({ total, packed }) {
  return (
    <footer className="stats">
      <em>🧳 You have {total} items on your list, and you already packed {packed} ({Math.round((packed/total) * 100)}%)</em>
    </footer>
  );
}
