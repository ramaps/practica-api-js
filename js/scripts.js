/*
Práctica 1: (No es obligatoria) consumir una API pública y agregarle estilo para que 
tengamos como resultado una página función, se puede agregar botón, eventos, etc.
Se puede utilizar como base lo visto en clase.


Práctica 2: hay que copiar el login a continuación y se puede utilizar como adelanto 
para el trabajo práctico de JS que se habilitará a partir del 20-5.
*/

    async function getPokemonDatos() {
        var randomNumber = Math.random() * 1302;
        var roundedNumber = Math.floor(randomNumber);
      try {
        var respueta = await fetch(`https://pokeapi.co/api/v2/pokemon/${roundedNumber}`);
        var pokemonDatos = await respueta.json();
        console.log(pokemonDatos);

    // con esto tenemos la imagen del pokemon
    const imagenUrl = pokemonDatos.sprites.front_default;
    console.log(imagenUrl);

    // asi mostramos la imagen y los datos
    document.getElementById('imagen').innerHTML = `<div class="card"> <img  src="${imagenUrl}" alt="${pokemonDatos.name.toUpperCase()}"><p>${pokemonDatos.name.toUpperCase()}</p> </div>`;

      } catch (error) {
        console.error(error);
      }
    }
