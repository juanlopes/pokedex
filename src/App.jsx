import './styles/App.scss';

import ListPoke from './components/List_poke';
import DetailPoke from './components/Detail_poke';

import { useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState('');

  function setPokemonAtivo(url) {
    setPokemon(url);
  }

  return (
    <div id="App">
        <main id="list_pokes">
          <ListPoke setPoke={setPokemonAtivo} />
        </main>
        <aside id="detail_poke">
          <DetailPoke color="orange" poke={pokemon} />
        </aside>
    </div>
  );
}

export default App;
