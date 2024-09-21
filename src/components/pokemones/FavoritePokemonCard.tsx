import type { FavoritePokemon } from "@interfaces/favorite-pokemons";
import { createSignal, type Component } from "solid-js";

interface Props {
  pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {
  const [visible, isVisible] = createSignal(true);
  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  return (
    <>
      <div class="flex flex-col justify-center items-center">
        <a href={`/pokemon/${pokemon.name}`}>
          #{pokemon.id} {pokemon.name}
          <img src={imageSrc} alt="" />
        </a>
      </div>
    </>
  );
};
