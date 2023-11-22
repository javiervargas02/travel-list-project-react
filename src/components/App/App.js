import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import PackingList from "../PackingList/PackingList";
import Stats from "../Stats/Stats";

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
