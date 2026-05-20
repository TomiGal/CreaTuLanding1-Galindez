import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <ItemListContainer greeting="¡Bienvenido/a a MiTienda! 👋" />
      </main>
    </div>
  );
}

export default App;
