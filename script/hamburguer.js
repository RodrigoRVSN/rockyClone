const btnHamburguer = document.getElementById('btn-hamburguer');
const item = document.getElementById('menu');

function menuHamburguer(event) {
    if (event.type === 'touchStart') event.preventDefault();
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
    const active = navbar.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir menu');
    }
}

function fecharAposClique(){
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

btnHamburguer.addEventListener('click', menuHamburguer);
btnHamburguer.addEventListener('touchStart', menuHamburguer);
item.addEventListener('click', fecharAposClique);

