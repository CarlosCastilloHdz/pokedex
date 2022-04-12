const pokeName = document.querySelector('[data-poke-name]');
const pokeImg = document.getElementById("pokeimg");
const elementos = document.getElementById("elementos");
const estadisticas = document.getElementById("estadisticas");

const fetchepokemon = () => {
    const pokename = document.getElementById("pokename"); 
    let prueba = pokename.value.toLowerCase();
    const url=`https://pokeapi.co/api/v2/pokemon/${prueba}`;
    fetch(url).then(data => data.json())
    .then(response => renderpokemon(response))
}
const renderpokemon = data =>{
    const sprite = data.sprites.front_default;
    const { stats, types } = data;    
    pokeImg.src = sprite;
    pokeName.textContent = data.name;
    const pokeid  = document.querySelector('[data-poke-id]');
    pokeid.textContent = `N° ${data.id}`;
    setcardcolor(types);
    renderPokemontipos(types);
    datospokemon(stats);
}
const setcardcolor = types =>{
    const colorOne = typeColors[types[0].type.name];
    const colorTwo = types[1] ? typeColors[types[1].type.name]: typeColors.default;
    pokeImg.style.background = `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
    pokeImg.style.backgroundSize = '4px 4px';
}
const renderPokemontipos = types =>{
    elementos.innerHTML = '';
    types.forEach(type =>{
        const creacion = document.createElement("div");
        creacion.style.color =typeColors[type.type.name];
        creacion.textContent = type.type.name;
        elementos.appendChild(creacion);
    });
}
const datospokemon = stats => {
    estadisticas.innerHTML= '';
    stats.forEach( stat => {
        const elemento_estatica = document.createElement("div");
        const elementonombre_estatica = document.createElement("div");
        const elementosobre_estatica = document.createElement("div");
        elementonombre_estatica.textContent = stat.stat.name;
        elementosobre_estatica.textContent = stat.base_stat;
        elemento_estatica.appendChild(elementonombre_estatica);
        elemento_estatica.appendChild(elementosobre_estatica);
        estadisticas.appendChild(elemento_estatica);
    });
}
const typeColors = {
    electric: '#ffea70',
    normal: '#b09398',
    fire: '#ff675c',
    water: '#0596c7',
    ice: 'afeafd',
    rock:'#999799',
    flying: '#7ae7c7',
    grass: '#4a9681',
    psychic: '#ffc6d9',
    ghost: '#561d25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#d2b074',
    dragon: '#da627d',
    steel: '#1d8a99',
    fighting: '#2f2f2f',
    default: '#2a1a1f',
}


