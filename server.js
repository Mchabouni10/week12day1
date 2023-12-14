// load express
const express = require('express');

// create an express app
const app = express();


// Middleware to parse incoming JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const pokemonData = require('./models/pokemon');

// get route pokemon that will display pokemon data as json if we change json to render will display with list
app.get('/pokemon', (req, res) => {
    res.render('Index', { pokemon: pokemonData });
  });





  // Route to render the New form
app.get('/pokemon/new', (req, res) => {
    res.render('New'); 
  });


  // Route to handle the creation of a new Pokémon
app.post('/pokemon', (req, res) => {
    const newPokemon = {
      name: req.body.name,
      img: `https://img.pokemondb.net/artwork/${req.body.name.toLowerCase()}`,
      // Add more fields as needed
    };
  
    // Save the new Pokémon to the data array
    pokemonData.push(newPokemon);
  
    // Redirect to a page 
    res.redirect('/pokemon');
  });





// show by index 
app.route('/pokemon/:id')
  .get((req, res) => {
    const pokemonId = req.params.id;
    const selectedPokemon = pokemonData[pokemonId];
  
    if (selectedPokemon) {
      res.render('Show', { pokemon: selectedPokemon });
    } else {
      res.status(404).send('Pokemon not found');
    }
  })
  .post((req, res) => {
    const pokemonId = req.params.id;

    // Check if the pokemonId is a valid index
    if (pokemonId >= 0 && pokemonId < pokemonData.length) {
      pokemonData.splice(pokemonId, 1);
      res.redirect('/pokemon');
    } else {
      res.status(404).send('Pokemon not found');
    }
  });





// ==================== require statement
app.set('view engine', 'jsx'); 




//======== view Template (React components)
app.engine('jsx', require('express-react-views').createEngine());



// ==================== (routes) using crud and rest
app.get('/', (req, res) => {
    res.send('<h1>Hello to pokemon app</h1>');
});




// install the server
// 3. create server
app.listen(3000, () => {
    console.log("the server is running on port 3000");
});