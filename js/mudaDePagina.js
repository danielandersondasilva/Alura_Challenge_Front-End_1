const comunidade = document.querySelector('.menu_nav img:last-child');
const menuEsquerdo = document.querySelector('.menu_esquerdo');

function vaiPraComunidade() {
    if (comunidade.getAttribute('src') == '/img/Vector.svg') {
        comunidade.setAttribute('src', '/img/fechar.svg');
        menuEsquerdo.classList.add('ativado');


    } else {
        comunidade.setAttribute('src', '/img/Vector.svg')
        menuEsquerdo.classList.remove('ativado');

    }
}

comunidade.addEventListener('click', vaiPraComunidade)