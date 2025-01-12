import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});

const allPokemon = [
  { name: "Pikachu", colour: "yellow" },
  { name: "Charmander", colour: "orange" },
  { name: "Squirtle", colour: "blue" },
];

// app.get("/api/pokemon", function (req, res) {
//   res.json(allPokemon);
// });

//Reading query strings in our GET routes

// app.get("/api/pokemon", function (req, res) {
//   console.log("Query string: ", req.query);

//   res.json(allPokemon);
// });

app.get("/api/pokemon", function (req, res) {
  const queryStringColour = req.query.colour;
  let filteredPokemon = allPokemon;

  // If a colour is provided in the query string, filter the pokemon list
  if (queryStringColour) {
    filteredPokemon = allPokemon.filter(function (pokemon) {
      return pokemon.colour === queryStringColour;
    });
  }

  res.json(filteredPokemon);
});
// above if i add the query string api/pokemon?colour=yellow, it will only return the yellow Pokémon
