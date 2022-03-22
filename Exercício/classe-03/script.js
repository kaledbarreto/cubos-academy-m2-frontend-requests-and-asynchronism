const pokemon = document.querySelector('#pokemon');
const nome = document.querySelector('.nome');
const img = document.querySelector('.img');
const hab = document.querySelector('.habilidades');

pokemon.addEventListener('change', function () {
  const promessaRes = fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon.value.toLowerCase());

  promessaRes.then(function (resposta) {
    if (!resposta.ok) {
      console.log('ERRO');
      return;
    }

    const promessaBody = resposta.json();

    promessaBody.then(function (body) {
      nome.textContent = body.name;
      img.src = body.sprites.front_default;
      const arrP = [];
      for (let i = 0; i < body.abilities.length; i++) {
        arrP.push(body.abilities[i].ability.name);
      }
      hab.textContent = arrP;
    });
  });
});