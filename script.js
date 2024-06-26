//Creo mis constantes para guardar las URL de donde voy a traer datos
const URL_ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";
const URL_POKEMON = URL_ENDPOINT + "?limit=100&offset=0";

//Pruebo que ande
console.log(URL_POKEMON);

//Creo funcion para mostrar tarjeta
const mostrarTarjeta = (pokemon) => {

    const contenedor = document.getElementById("contenedor"); // Me traigo el contenedor del HTML
    const li = document.createElement('li'); // Creo el li
    li.addEventListener('click', () => {
        mostrarDetalle(pokemon.id);
    })

    const titulo = document.createElement('h2'); // Creo el h2
    titulo.innerText = pokemon.name; // Pido el nombre del pokemon desde la api

    li.appendChild(titulo); // Apendeo mi titulo h2  adentro del li
    contenedor.appendChild(li); // Apendeo el li adentro de mi contenedor
};

//Creo función que me redireccione a la página de detalles.html
const mostrarDetalle = (id) => {
    window.location.href = "http://127.0.0.1:5500/detalles.html?id="; + id;
};



//Creo el fetch y testeo que ande
fetch(URL_POKEMON)
.then(data => data.json())
.then (result => {
    const results = result.results;
        results.forEach(element => {
            mostrarTarjeta(element);
        });

})



