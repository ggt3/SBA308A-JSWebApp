const image = document.getElementById("pokemonRand");

const infoDump = document.getElementById("infoDump");

export default async function displayPokemon(id) {
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