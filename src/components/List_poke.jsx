import React, { useState, useEffect } from 'react';

import logo from '../assets/pokemon_logo.png';
import ThumbnailPokemon from './ThumbnailPokemon';

import api from '../services/api';

export default function List_poke(props) {
  
  let [listaPokemons, setListaPokemons] = useState([]);

  useEffect(() => {
    api.get('pokemon?limit=200')
      .then(response => {
        var pokes = response.data.results;
        setListaPokemons(pokes);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <div className="navbar bg-dark">
        <div className="brand">
          <img src={logo} alt="" />
        </div>
      </div>
      <div id="catalogue">
        <div className="book-page">
          <div className="book-overflow">
            <div className="book-content">
              {listaPokemons.map(item => (
                <ThumbnailPokemon namePokemon={item.name} urlPokemon={item.url} funcaoAtivar={props.setPoke} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
