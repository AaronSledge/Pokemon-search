async function getData() {
    try {

        const pokemonName = document.getElementById("pokemon-name");
        const pokemonId = document.getElementById("pokemon-id");
        const pokemonHeight = document.getElementById("height");
        const pokemonWeight = document.getElementById("weight");
        const pokemonHp = document.getElementById("hp");
        const pokemonTypes = document.getElementById("types");
        const pokemonAttack = document.getElementById("attack");
        const pokemonDefense = document.getElementById("defense");
        const pokemonSpecialAttack = document.getElementById("special-attack");
        const pokemonSpecialDefense = document.getElementById("special-defense");
        const pokemonSpeed = document.getElementById("speed");
        const image = document.getElementById("sprite");
        const searchInput = document.getElementById("search-input").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}/`);
        if (!response.ok) {
            throw new error("Could not fetch data");
        }
        const data = await response.json();
        image.src=data.sprites.front_default;
        pokemonName.textContent = data.name;
        console.log(data);
    }
    catch(error) {
        console.error(error);
        alert("pokemon not found, check spelling");
    }

}