const cepInput = document.querySelector('#cep');
const ufInput = document.querySelector('#uf');
const cidadeInput = document.querySelector('#cidade');
const ruaInput = document.querySelector('#rua');

cepInput.addEventListener('change', function () {
  if (cepInput.value.length !== 8) {
    console.log('ERRO');
    return;
  }

  const promiseResposta = fetch('https://viacep.com.br/ws/' + cepInput.value + '/json/'); //É uma requisição, que espera um tempo e retorna uma promessa, ou seja vai retornar algo, so tem que esperar algum tempo.

  promiseResposta.then(function (resposta) { //Quando essa promessa trouxer uma resposta, eu quero fazer algum acoisa.
    const promiseBody = resposta.json(); //Como isso gera uma promessa, eu preciso esperar essa promessa.

    promiseBody.then(function (body) {
      if (body.erro) {
        console.log('ERRO');
        return;
      }

      ufInput.value = body.uf;
      cidadeInput.value = body.localidade;
      ruaInput.value = body.logradouro;
    });
  });
});