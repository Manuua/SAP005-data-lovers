import pokemons from "./data.js";

// selecting elements
const btnSearch = document.getElementById("search-button");
const finder = document.getElementById("searchInput");

window.onload = () => {
    dataList();
    show(pokemons);
    getDetails()
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
  const showName = printDetails(pokemonDetails);
  answer(showName);
}

function printDetails(pokemonDetails) {
  let details = "<ul>";
  Object.keys(pokemonDetails).forEach((keyDetail) => {
    if (typeof pokemonDetails[keyDetail] !== "object") {
    //   details += `<li style={text-align:center} > ${keyDetail} - ${pokemonDetails[keyDetail]}
      ` <div class="cardList">
              <img src="${pokemons.img}"/>
              <h4> ${pokemons.name}</h4>
              <p>resistant:<br>  ${pokemons.resistant}</p>
              <p>weaknesses: <br>${pokemons.weaknesses}</p>
          </div>`;
        //   ;</li>`;
    }
  });
  details += "</ul>";

  return details;
  // const showName = ` <p>  o nome do pokemon é : ${(pokemonDetails["about"])} </p> `;
  // return showName
}


function answer(showName) {
  document.getElementById("cardPrincipal").innerHTML = `${showName}`;
}

btnSearch.addEventListener("click", function () {
  getDetails(finder.value);
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
