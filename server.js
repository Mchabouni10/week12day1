// load express
const express = require('express');

// create an express app
const app = express();


const pokemonData = require('./models/pokemon');

// get route pokemon that will display pokemon data as json
app.get('/pokemon', (req, res) => {
    res.render('Index', { pokemon: pokemonData });
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