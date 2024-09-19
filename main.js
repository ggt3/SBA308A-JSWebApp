import "./style.css";

const image = document.getElementById("pokemonRand");
const submitBtn = document.getElementById("searchSubmit");
const infoDump = document.getElementById("infoDump");
// console.log(image)
document.addEventListener("DOMContentLoaded", initialLoad);
const baseURL = "https://pokeapi.co/api/v2/";

async function initialLoad() {
  //load a random pokemon img - query rand num between 1 and 1025
  const rndInt = Math.floor(Math.random() * (1025 + 1));

  console.log(rndInt);
  try {
    displayPokemon(rndInt);
  } catch (error) {
    console.error(error);
  }
}

//after search, show name,type, img (sprites.front_default)
submitBtn.addEventListener("click", () => {
  const input = document.getElementById("inputName");
  displayPokemon(input.value);
});

async function displayPokemon(id) {
  try{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const poke = await response.json();


  //display searched pokemon

  image.src = poke.sprites.front_default;
  image.alt = poke.species.name;
  infoDump.innerHTML = `<h3>This is <i>${poke.name}</i>. <br> It has the type(s):`;
  const types = poke.types; //an array or objs
  types.forEach((entry) => {
    console.log(entry.type.name);
    var text = document.createElement("li");
    text.innerHTML = `${entry.type.name} `;
    infoDump.appendChild(text);
  });
} catch {
  console.error("There is no pokemon with that ID or name");
}

}
