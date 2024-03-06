//DESARROLLA AQUI TUS SOLUCIONES

/* Ejercicio 2.- Declara una funcion getImageAndName que retorne el nombre y la 
URL de la imagen de un pokemon => (return {img, name})
 */
async function getImageAndName(pokemon) {

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return { name, img }

}
//getImageAndName(15).then((data) => console.log(data));

//Ejercicio 1.- Declara una función getRandomPokemon que retorne un pokemon aleatorio.
async function getRandomPokemon() {
    try {
        //let suerte = Math.floor((Math.random() * (data.results.length - 0 + 1)) + 0);
        let suerte = Math.floor(Math.random() * 20);
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/` + suerte)
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}
//getRandomPokemon().then((data) => console.log(data));

/* Ejercicio 3.- Declara una funcion printImageAndName que retorne el string necesario
 para pintar la imagen y el nombre del pokemon en el DOM de la siguiente forma:
<section>
    <img src="url de imagen" alt="nombre del pokemon">
    <h1>Nombre del pokemon</h1>
</section> */

async function printImageAndName() {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/charmander`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return `<section>
                <img src="${img}" alt="${name}">
                <h1>${name}</h1>
            </section>`

}
//printImageAndName().then((data) => console.log(data));

/* Ejercicios Batalla entre Pokemon y perritos
Ejercicio 4.- Declara una función getRandomDogImage que retorne la url de la imagen
de un perro aleatorio */

function getRandomDogImage() {
    return fetch('https://dog.ceo/api/breeds/image/random')
        .then(promesa => promesa.json())
        .then(image => image.message)
}
//getRandomDogImage().then((data) => console.log(data));

/* Ejercicio 5.- Declara una función getRandomPokemonImage que retorne la url de la imagen
 de un pokemon aleatorio. */

async function getRandomPokemonImage() {
    let suerte = Math.floor(Math.random() * 20);
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${suerte}`)
    let data = await response.json();
    let img = data.sprites.front_default;
    return img;
}
//getRandomPokemonImage().then((data) => console.log(data));

/* Ejercicio 6.- Declara una función printPugVsPikachu que pinte la batalla entre "Pug" y 
"Pikachu" (no se testea) */

async function printPugVsPikachu() {
    let Pikachu = await fetch(`https://pokeapi.co/api/v2/pokemon-form/25/`)
    let dataPikachu = await Pikachu.json();
    let imgPikachu = dataPikachu.sprites.front_default;

    let Pug = await fetch(`https://dog.ceo/api/breed/pug/images`)
    let dataPug = await Pug.json();
    let imgPug = dataPug.message;
    let lucha = `<section>
                    <img src="${imgPikachu}">
                    <h1> VS </h1>
                    <img src="${imgPug}">
                </section>`
    return lucha;
}
//document.querySelector("body").innerHTML = lucha;

/*  Ejercicios con Rick and Morty

 Ejercicio 7.- Declara una función getRandomCharacter que retorne un personaje aleatorio. */

async function getRandomCharacter() {
    let suerte = Math.floor(Math.random() * 86);
    let response = await fetch(`https://rickandmortyapi.com/api/character/${suerte}`)
    let data = await response.json();
    return data;
}
//getRandomCharacter().then((data) => console.log(data));

/* Ejercicio 8.- Declara una función getRandomCharacterInfo que retorne de un personaje 
su imagen, nombre, episodios en los que aparece y el nombre del primer episodio en el que
aparece + fecha de estreno, tendrás que hacer otro fetch para llegar a los ultimos datos.
Formato de retorno => (return {img, name, episodes, firstEpisode, dateEpisode}) */

async function getRandomCharacterInfo() {
    let suerte = Math.floor(Math.random() * 86);
    let response = await fetch(`https://rickandmortyapi.com/api/character/${suerte}`)
    let data = await response.json();

    let img = data.image;
    let name = data.name;
    let episodes = data.episode;
    let result = await fetch(episodes[0]);
    let datosEpisodio = await result.json();
    let firstEpisode = datosEpisodio.name;
    let dateEpisode = datosEpisodio.air_date;

    console.log(img);
    console.log(name);
    console.log(episodes);
    console.log(datosEpisodio);
    console.log(firstEpisode);
    console.log(dateEpisode);

    return {img, name, episodes, firstEpisode, dateEpisode};
}
getRandomCharacterInfo(); 

//Ejercicio 9.- Pinta los anteriores datos en el DOM (no se testea)