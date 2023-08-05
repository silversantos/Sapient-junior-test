// jQuery
// $(document).ready(function() {
// code
// });

// Vanilla JS

// window.onload = function() {
// code
// };

//alternar a classe -overlay para fazer o menu aparecer
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const menu = document.getElementById("menu");

  menuButton.addEventListener("click", function () {
    menu.classList.toggle("-active");
  });
});

//adicionar a classe "-inactive" quando a img for clicada
document.addEventListener("DOMContentLoaded", function () {
  const videoCover = document.getElementById("video-cover");
  const videoPlayer = document.getElementById("video-player");

  videoCover.addEventListener("click", function () {
    console.log("Clique na imagem de capa");
    videoCover.classList.add("-inactive");
    videoPlayer.play();
  });
});

//manipular a classe "-active" para expandir o conteúdo
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    const title = item.querySelector(".title");

    title.addEventListener("click", function () {
      item.classList.toggle("-active");
    });
  });
});

//solicitação ajax para a api da wikipedia
//exibir o conteúdo na div wiki
document.addEventListener("DOMContentLoaded", function () {
  const wikiExtract = document.querySelector(".extract");

  fetch(
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Alber%20Einstein"
  )
    .then((response) => response.json())
    .then((data) => {
      const extract = data.query.pages[736].extract;
      wikiExtract.innerHTML = extract;
    })
    .catch((error) => {
      console.error("Error fetching Wikipedia data:", error);
    });
});

//abrir o modal com a foto

//PARA A EFETIVIDADE DA FUNÇÃO ABAIXO, PRECISEI FAZER UMA MÍNIMA
//ALTERAÇÃO NO CSS, NA LINHA 233, ESTAVA FALTANDO UM . NO NOME 
//DA CLASSE. ALTEREI DE ".modal-wiki-active" PARA ".modal-wiki.-active"
document.addEventListener("DOMContentLoaded", function () {
  const buttonModal = document.querySelector(".button-modal");
  const modalWiki = document.querySelector(".modal-wiki");
  const closeModal = document.getElementById("close-modal");

  buttonModal.addEventListener("click", function () {
    modalWiki.classList.add("-active");
  });

  closeModal.addEventListener("click", function () {
    modalWiki.classList.remove("-active");
  });
});
