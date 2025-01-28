import Header from "./Header.jsx";
import Main from "./Main.jsx";
import PokemonProvider from "./PokemonProvider.jsx";

function App() {
  return (
    <PokemonProvider>
      <Header />
      <Main />
    </PokemonProvider>
  );
}

export default App;
