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
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}`);
        if (!response.ok) {
            throw new error("Could not fetch data");
        }
        const data = await response.json();
        image.src=data.sprites.front_default;
        pokemonName.textContent = "Name: " + data.name;
        pokemonId.textContent = "ID: " + data.id;
        pokemonHeight.textContent = "Height: " + data.height;
        pokemonWeight.textContent = "Weight: " + data.weight;
        pokemonHp.textContent = "Hp: " + data.stats[0].base_stat;
        pokemonTypes.textContent = "Types: ";
        data.types.forEach(element => {
            pokemonTypes.textContent += element.type.name + " ";
        });
        pokemonAttack.textContent = "Attack: " + data.stats[1].base_stat;
        pokemonDefense.textContent = "Defense: " + data.stats[2].base_stat;
        pokemonSpecialAttack.textContent = "Special Attack: " + data.stats[3].base_stat;
        pokemonSpecialDefense.textContent = "Special Defense: " + data.stats[4].base_stat;
        pokemonSpeed.textContent = "Speed: " + data.stats[5].base_stat;
        
        const border = document.getElementById("image");
        const line = document.getElementsByClassName("lines");

        border.style.visibility = "visible";
        for(let i = 0; i < line.length; ++i) {
            line[i].style.visibility = "visible";
        }
        console.log(data);
        
    }
    catch(error) {
        console.error(error);
        alert("pokemon not found, check spelling");
    }
}


