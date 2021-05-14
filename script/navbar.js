/* Essa função é responsável por tirar a opacidade da navbar ao solar a página, pois se não continua transparente */
(function () {
    var nav = document.getElementById('nav'); // pega o id nav lá do html
    window.addEventListener('scroll', function () { // "escuta" o scroll
        if (window.scrollY > 550) nav.classList.add('menuFixo'); // a partir de 550px adiciona classe do css (no root.css, chamada menuFixo)
        else nav.classList.remove('menuFixo'); // se estiver antes, remove a classe
    });
})();
