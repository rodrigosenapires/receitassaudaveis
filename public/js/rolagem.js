function scrollToTop() {
  document.body.scrollIntoView({ behavior: 'smooth' });
}

const botaoTopoWrapper = document.querySelector("#botaoTopoWrapper");
botaoTopoWrapper.addEventListener("click", scrollToTop);
botaoTopoWrapper.addEventListener("touchstart", scrollToTop);

const categoriasBotaoTopo = document.querySelector(".categoriasBotaoTopo");
categoriasBotaoTopo.addEventListener("click", scrollToTop);
categoriasBotaoTopo.addEventListener("touchstart", scrollToTop);
