const cepInput = document.querySelector('#cep');
const cidadeInput = document.querySelector('#cidade');
const ruaInput = document.querySelector('#rua');

cepInput.addEventListener('change', function () {
  if (cepInput.value.length !== 8) {
    cepInput.classList.add('red');
    console.log('Erro');
    return;
  }

  const promessaRes = fetch('https://viacep.com.br/ws/' + cepInput.value + '/json/');

  promessaRes.then(function (res) {
    const promessaBody = res.json();

    promessaBody.then(function (body) {
      if (body.erro) {
        cepInput.classList.add('red');
        console.log('Erro');
        return;
      }

      cidadeInput.value = body.localidade;
      ruaInput.value = body.logradouro;
    });
  });
});