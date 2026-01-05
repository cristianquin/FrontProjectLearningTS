import { Pokemon } from "../models/pokemonModel";

export async function getPokemon(): Promise<Pokemon[]> {
  const response = await fetch(
    "https://unpkg.com/pokemons@1.1.0/pokemons.json"
  );
  const data = await response.json();
  const pokemons = data?.results?.map((pokeData: any) => ({
    id: pokeData.national_number,
    name: pokeData.name,
    imggif: FixNames(pokeData.sprites.animated),
    type: pokeData.type[0],
    hp: pokeData.hp,
    attack: pokeData.attack,
    defense: pokeData.defense,
  }));

  const uniquePokemons = pokemons.filter(
    (pokemon: Pokemon, index: number) =>
      pokemons.findIndex((p: Pokemon) => p.id === pokemon.id) === index
  );

  return uniquePokemons;
}

export function FixNames(name: string): string {
  if (name.includes("farfetch'd")) {
    return name.replace("farfetch'd", "farfetchd");
  } else if (name.includes("mr.-mime")) {
    return name.replace("mr.-mime", "mr-mime");
  } else if (name.includes("nidoran♀")) {
    return name.replace("nidoran♀", "nidoran-f");
  } else if (name.includes("nidoran♂")) {
    return name.replace("nidoran♂", "nidoran-m");
  }
  return name;
}
