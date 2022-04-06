const linguagem = document.querySelector('.linguagem')
const areaDoCodigo = document.querySelector('.codigo-wrapper')
const botao = document.querySelector('.botao')

function aplicaHighlight() {
    const codigo = areaDoCodigo.innerText
    areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código"></code>`
    areaDoCodigo.querySelector('code').textContent = codigo
    hljs.highlightElement(areaDoCodigo.querySelector('code'))
}

botao.addEventListener('click', () => {
    aplicaHighlight()
})






const comunidade = document.querySelector('.menu_nav img:last-child');
const menuEsquerdo = document.querySelector('.menu_esquerdo');

function vaiPraComunidade() {
    if (comunidade.getAttribute('src') == '/img/Vector.svg') {
        comunidade.setAttribute('src','/img/fechar.svg');
        menuEsquerdo.classList.add('ativado');
        
        
    }else{
        comunidade.setAttribute('src','/img/Vector.svg')
        menuEsquerdo.classList.remove('ativado');
        
    }
}

comunidade.addEventListener('click', vaiPraComunidade)