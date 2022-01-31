import React, { useState, useEffect } from 'react';

import api from '../services/api';

import loading from '../assets/loader-waiting.gif';

export default function Detail_poke(props) {

  let [logo, setLogo] = useState(loading)
  let [nome, setNome] = useState('carregando')
  let link = props.poke.replace('https://pokeapi.co/api/v2/', '')

  // props.poke.replace('https://pokeapi.co/api/v2/', '');
  
  useEffect(() => {
    if (link) {   
      api.get(link)
          .then(result => {
            setLogo(result.data.sprites.front_default);
            setNome(result.data.name);
            console.log(result);
          })
    }
  });

  return (
    <div id="detail">
      <div id="background-detail" style={{ background: `linear-gradient(${props.color} 50%, #fff0)` }} >
        <div className="img-poke">
          <img src={logo} alt="" />
        </div>
      </div>
      <div id="poke-stats">
        <p>{ nome }</p>
      </div>
    </div>
  );
}
