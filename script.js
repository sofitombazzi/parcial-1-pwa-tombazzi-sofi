//Creo mis constantes para guardar las URL de donde voy a traer datos
const URL_ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";
const URL_POKEMON = URL_ENDPOINT + "?limit=100&offset=0";

//Pruebo que ande
console.log(URL_POKEMON);

//Creo funcion para mostrar tarjeta
const mostrarTarjeta = (pokemon) => {
    console.log(pokemon);
    
    const contenedor = document.getElementById("contenedor"); // Me traigo el contenedor del HTML
    const li = document.createElement('li'); // Creo el li

    const titulo = document.createElement('h2'); // Creo el h2
    titulo.innerText = pokemon.name; // Pido el nombre del pokemon desde la api

    li.appendChild(titulo); // Apendeo mi titulo h2  adentro del li
    contenedor.appendChild(li); // Apendeo el li adentro de mi contenedor
};


//Creo el fetch y testeo que ande
fetch(URL_POKEMON)
.then(data => data.json())
.then (result => {
    const results = result.results;
    const primerResultado = results[0];
    const segundoResultado = results[1];
    mostrarTarjeta(primerResultado);
    mostrarTarjeta(segundoResultado); //Llamo a mi función
})



