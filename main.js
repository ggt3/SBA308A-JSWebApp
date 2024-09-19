import "./style.css";
import displayPokemon from "./displayPokemon.js";


const submitBtn = document.getElementById("searchSubmit");

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