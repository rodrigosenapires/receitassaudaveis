// Botão E-mail
var enviarEmail = document.getElementById('enviarEmail');
enviarEmail.addEventListener('click', function() {
  window.location.href = 'mailto:contato@receitassaudaveis.site';
});

// Formulários de calculadoras descerem junto com a barra de rolagem do site

// Seleciona o elemento que deve ser fixo
var elementoFixo = document.querySelector('.elemento-fixo');

// Define a posição inicial do elemento
elementoFixo.style.top = '0';

// Detecta quando o usuário rola a página
window.addEventListener('scroll', function() {
  // Calcula a posição atual do elemento
  var posicaoAtual = window.scrollY + 'px';
  // Define a posição do elemento para a posição atual
  elementoFixo.style.top = posicaoAtual;
});






