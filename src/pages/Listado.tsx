import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Figure, ListGroup } from "react-bootstrap";
import { getPokemon } from "../service/getPokemon";
import { Pokemon } from "../models/pokemonModel";

const Listado = () => {
  const [pokemons, setPokemons] = react.useState<Pokemon[]>([]);
  const [searchPokemon, setSearchPokemon] = react.useState<string>("");

  react.useEffect(() => {
    getPokemon().then((data) => setPokemons(data));
  }, []);

  const filteredPokemons = pokemons?.slice(0, 151).filter((pokemon) => {
    return pokemon.name.toLowerCase().match(searchPokemon.toLowerCase());
  });

  return (
    <div>
      <h1
        className="bg-black
      text-white text-center"
      >
        Pokédex{" "}
        <Figure.Image
          width={50}
          height={50}
          alt="heart"
          src="https://cdn-icons-png.flaticon.com/128/743/743977.png"
        />
      </h1>

      <header className="d-flex justify-content-end">
        <input
          className="form-control mx-4"
          type="text"
          value={searchPokemon}
          onChange={(e) => setSearchPokemon(e.target.value)}
          placeholder="Buscar Pokémon"
        />
      </header>
      <div className="content-wrapper">
        <div className="content">
          <div className="row gap-3 m-4 justify-content-center">
            {filteredPokemons?.slice(0, 151).map((pokemon) => (
              <Card key={pokemon.id} style={{ width: "18rem" }}>
                <Card.Header className="text-center">
                  <b>Tipo: {pokemon.type}</b>
                </Card.Header>
                <Card.Img
                  className="d-block mx-auto w-75 h-75"
                  variant="top"
                  src={pokemon.imggif}
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    {pokemon.id} - {pokemon.name}
                  </Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Figure.Image
                        width={16}
                        height={16}
                        alt="heart"
                        src="https://cdn-icons-png.flaticon.com/128/833/833472.png"
                      />{" "}
                      <b>HP:</b> {pokemon.hp}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image
                        width={16}
                        height={16}
                        alt="hit"
                        src="https://cdn-icons-png.flaticon.com/128/13378/13378691.png"
                      />{" "}
                      <b>Ataque:</b> {pokemon.attack}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image
                        width={16}
                        height={16}
                        alt="armor"
                        src="https://cdn-icons-png.flaticon.com/128/15548/15548420.png"
                      />{" "}
                      <b>Defensa:</b> {pokemon.defense}
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Listado;
