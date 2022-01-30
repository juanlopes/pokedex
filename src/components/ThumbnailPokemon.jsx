import React, { useEffect, useState } from 'react';
import '../styles/thumbnailPokemon.scss';

import api from '../services/api';

import loading from '../assets/loader-waiting.gif';

function ThumbnailPokemon(props) {
    let [logo, setLogo] = useState(loading)

    useEffect(() => {
        console.log('Thumbnail:' + props.urlPokemon)
        api .get(props.urlPokemon)
            .then(result => {
                logo = setLogo(result.data.sprites.front_default);
            })
    }, []);

    function log() {
        props.funcaoAtivar(props.urlPokemon);
    }
    
    return (
        <div className="thumbnail">
            <div className="thumb-border" style={{ backgroundColor: 'white'}} onMouseDown={log}>
                <div className="thumb-image">
                    <img src={logo} alt="" />
                </div>
                <p className="label-pokemon">{ props.namePokemon }</p>
            </div>
        </div>
    );
}

export default ThumbnailPokemon;
