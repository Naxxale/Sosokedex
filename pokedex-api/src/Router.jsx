
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarPerso from "./components/navbar/navbar";
import PokemonList from './views/pokemonList';
import PokemonDetail from './views/pokemonDetails';
import PokemonAffinity from './views/pokemonAffinity';
import HomePage from './views/homePage';

function AppRouter() {
  return (
    <Router>
    <NavbarPerso/>
      <Routes>
      <Route path="/homepage" element={<HomePage />} />
        <Route path="/" element={<PokemonList />} />
        <Route path="/details" element={<PokemonDetail />} />
        <Route path="/affinity" element={<PokemonAffinity />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;