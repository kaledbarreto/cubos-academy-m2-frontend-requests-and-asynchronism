const criptomoedaInput = document.querySelector('#criptomoeda');
const resInput = document.querySelector('.valor');

criptomoedaInput.addEventListener('change', function () {
  if (criptomoedaInput.value === '') {
    console.log('ERRO');
    return;
  }

  const promiseResposta = fetch('https://www.mercadobitcoin.net/api/' + criptomoedaInput.value + '/ticker/');

  promiseResposta.then(function (resposta) {
    const promiseBody = resposta.json();

    promiseBody.then(function (body) {
      resInput.textContent = Number(body.ticker.high).toFixed(2);
    });
  });
});