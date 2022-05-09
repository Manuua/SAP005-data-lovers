import pokemons from "./data.js";

// selecting elements
const btnSearch = document.getElementById("search-button");
const finder = document.getElementById("searchInput");

window.onload = () => {
    dataList();
    show(pokemons);
  }

function dataList() {
  const list = document.getElementById("pokemons");
  for (let i = 0; i < pokemons.length; i++) {
    let option = document.createElement("option");
    option.value = pokemons[i].name;
    list.appendChild(option);
  }
}

function getDetails(pokemonName) {
    const pokemonDetails = pokemons.find(
    (pokemon) => pokemon.name == pokemonName);
    const showName = (pokemonDetails.name);
    answer(showName);
}

function answer(showName) {
  document.getElementById("cardPrincipal").innerHTML = `${showName}`;
}

btnSearch.addEventListener("click", function () {
  getDetails(finder.value);
  let chooseName = getDetails(finder.value)
  oneResult(chooseName)
});

function show (array) {
    const result = document.getElementById("allCards");
    result.innerHTML = "";
    result.innerHTML += `${array.map(pokemons => {
    return ` <div class="cardList">
              <img src="${pokemons.img}"/>
              <h4> ${pokemons.name}</h4>
              <p>resistant:<br>  ${pokemons.resistant}</p>
              <p>weaknesses: <br>${pokemons.weaknesses}</p>
          </div>
          `;
    }).join("")}`;
}

function oneResult(chooseName){
    let CARD_WITH_FIRST_SELECT = document.getElementById("cardPrincipal");
    CARD_WITH_FIRST_SELECT.innerHTML = "";
    CARD_WITH_FIRST_SELECT.innerHTML= `${chooseName.map(pokemons => {
        return ` <div class="cardList">
                    <img src="${pokemons.img}"/>
                    <h4> ${pokemons.name}</h4>
                    <p>resistant:<br>  ${pokemons.resistant}</p>
                    <p>weaknesses: <br>${pokemons.weaknesses}</p>
                </div>
                `;
          }).join("")}`;
      }

// function printDetails(selectName) {
//     const filtro = document.getElementById("principalCard");
//     filtro.innerHTML = "";
//     filtro.innerHTML += `${selectName.map(pokemons => {
//   return ` <div class="select">
//               <img src="${pokemons.img}"/>
//               <h4> ${pokemons.name}</h4>
//               <p>resistant:<br>  ${pokemons.resistant}</p>
//               <p>weaknesses: <br>${pokemons.weaknesses}</p>
//           </div>
//           `;
//     }).join("")}`;
// }z