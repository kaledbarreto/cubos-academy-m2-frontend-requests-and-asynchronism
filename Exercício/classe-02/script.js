const criptInput = document.querySelector('#cript');
const resInput = document.querySelector('.valor');
const qtdInput = document.querySelector('.qtd');
const ofertaInput = document.querySelector('.oferta');

criptInput.addEventListener('change', function () {
  if (criptInput.value === '') {
    console.log('ERRO');
    return;
  }

  const promessaRes = fetch('https://www.mercadobitcoin.net/api/' + criptInput.value + '/ticker/');

  promessaRes.then(function (resposta) {
    const promessaBody = resposta.json();

    promessaBody.then(function (body) {
      resInput.textContent = Number(body.ticker.high).toFixed(2);
      qtdInput.textContent = body.ticker.vol;
      ofertaInput.textContent = Number(body.ticker.buy).toFixed(2);
    });
  });
});