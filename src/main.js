import pokemons from './data.js';


// mostra nome do pokemon na posição zero do array  
//  for (let pokemon of pokemons ){
//    console.log(pokemon.pokemons.length) 
// }

// mostra os 251 itens do array 
// for (let pokemon of pokemons ){
//    console.log(pokemon.pokemon)
//  }
 

// for (let pokemon of pokemons ){
//     console.log(pokemon.pokemon[0].about) 
//  }

//  let array = pokemons;
//  console.log(array)
const bntSearch = document.getElementById("search-button")
const finder =document.getElementById("searchInput")

function dataList (){
    const list = document.getElementById("pokemons")
    for (let i =0 ; i < pokemons.length; i++ ){
    let option = document.createElement('option');
    option.value = pokemons[i].name;
    list.appendChild(option);
    }
}
dataList()

function getDetails(pokemonName){
    const pokemonDetails = pokemons.find(({name})=> name == pokemonName)
    console.log(pokemonDetails)
    printDetails(pokemonDetails)
}

bntSearch.addEventListener('click',function(){
  getDetails(finder.value)
})

function printDetails(pokemonDetails){

console.log(pokemonDetails["num"])
    // Object.keys(pokemonDetails).forEach(key => {
    //     console.log(pokemonDetails[key])
    // });
    // document.getElementById('cardPrincipal').innerHTML = `
    // <p>Sua mensagem é : ${solution}</p>`
}