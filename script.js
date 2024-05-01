//Creo mis constantes para guardar las URL de donde voy a traer datos
const URL_ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";
const URL_POKEMON = URL_ENDPOINT + "?limit=100&offset=0";

//Pruebo que ande
console.log(URL_POKEMON);


//Creo el fetch y testeo que ande
fetch(URL_POKEMON)
.then(data => data.json())
.then (result => {
    const results = result.results;
    console.log(results);
});
