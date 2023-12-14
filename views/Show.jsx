import React from 'react';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Show(props) {

  const imageUrl = `${props.pokemon.img}.jpg`;

  return (
    <html>
      <head>
        <title>Gotta Catch 'Em All</title>
      </head>
      <body>
        <h1 style={{ textAlign: 'center', color: '#ffffff', background: 'black' }}>Gotta Catch 'Em All</h1>

        <div style={{ textAlign: 'center', margin: '20px' }}>
          <h2>{capitalizeFirstLetter(props.pokemon.name)}</h2>
          <img src={imageUrl} alt={props.pokemon.name} style={{ maxWidth: '300px', maxHeight: '300px' }} />
          <br />
          <a href="/pokemon" style={{ color: 'blue' }}>Back</a>
        </div>
      </body>
    </html>
  );
}

export default Show;