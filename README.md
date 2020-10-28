<h1 align="Left">Simple Pokedex</h1>

## Installation 

```shell
 npm i simple-dex 
```
## Usage

### Get the data of the given pokemon

```javascript

const dex = require("simple-dex")

const data = await dex.pokeFetch('bulbasaur')
console.log(data)

```
#### Expected output

```shell
{
  abilities: [
    { ability: [Object], is_hidden: false, slot: 1 },
    { ability: [Object], is_hidden: true, slot: 3 }
  ],
  base_experience: 64,
  forms: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon-form/1/'
    }
  ],
  game_indices: [],
  height: 7,
  held_items: [],
  id: 1,
  is_default: true,
  location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/1/encounters',
  moves: [],
  name: 'bulbasaur',
  order: 1,
  species: {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon-species/1/'
  },
  sprites: {
    back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
    back_female: null,
    back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
    back_shiny_female: null,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    front_female: null,
    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
    front_shiny_female: null,
    other: { dream_world: [Object], 'official-artwork': [Object] },
    versions: {
      'generation-i': [Object],
      'generation-ii': [Object],
      'generation-iii': [Object],
      'generation-iv': [Object],
      'generation-v': [Object],
      'generation-vi': [Object],
      'generation-vii': [Object],
      'generation-viii': [Object]
    }
  },
  stats: [
    { base_stat: 45, effort: 0, stat: [Object] },
    { base_stat: 49, effort: 0, stat: [Object] },
    { base_stat: 49, effort: 0, stat: [Object] },
    { base_stat: 65, effort: 1, stat: [Object] },
    { base_stat: 65, effort: 0, stat: [Object] },
    { base_stat: 45, effort: 0, stat: [Object] }
  ],
  types: [ { slot: 1, type: [Object] }, { slot: 2, type: [Object] } ],
  weight: 69
}

```





