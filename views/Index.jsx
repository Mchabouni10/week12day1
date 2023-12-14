import React from 'react';

function CapitalFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Index(props) {
  return (
    <html>
      <head>
        <title>See All The Pokemon!</title>
      </head>
      <body>
        <h1 style={{ textAlign: 'center', color: '#ffffff', background : 'black' }}>See All The Pokemon!</h1>

        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {props.pokemon.map((poke, index) => (
            <li key={index} style={{ margin: '10px', textAlign: 'center' }}>
              <a href={`/pokemon/${index}`}>
                <img src={poke.img} alt={poke.name} style={{ maxWidth: '100px', maxHeight: '100px' }} />
                <h3 style={{ color: 'blue' }}>{CapitalFirstLetter(poke.name)}</h3>
              </a>
            </li>
          ))}
        </ul>
      </body>
    </html>
  );
}

export default Index;