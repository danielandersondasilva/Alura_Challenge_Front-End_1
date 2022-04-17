const lista = document.querySelector('#lista');
const nomeProjeto = document.querySelector('#nomeProjeto')
const itens = JSON.parse(localStorage.getItem("itens")) || []

var quantidadeNaLista;
if (Number(itens) === 0) {
    quantidadeNaLista = 0;
} else {
    quantidadeNaLista = JSON.parse(localStorage.itens).length;

}



function criaElemento(novoCodigo, nome, descricao, linguagemProjeto, cor) {

    const main = `<main><section class="editorCodigo">
    <div class="editor">
    <div class="balao_mac">
    <div class="botao_mac">
    <span class="balao_vermelho"></span>
    <span class="balao_amarelo"></span>
    <span class="balao_verde"></span>
    </div>
    <div class="codigo-wrapper"><code class="preview hljs ${linguagemProjeto}" contenteditable="true" aria-label="Editor de código">${novoCodigo}</code></div>
    
    </div>
    </div>
    <div class="informacoes">
    <h2 class="nomeProjeto" id="nomeProjeto">${nome}</h2>
    <p class="descricaoProjeto">${descricao}</p>
    <div class="iconesProjeto">
    
    <div class="grupo-1">
    <img src="img/comentario.svg" alt=""><span>9</span>
    <img src="img/like.svg" alt=""><span>9</span>
    </div>
    <div class="grupo-2">
    <img src="img/perfil.svg" alt="">
    <span>@Harry</span>
    </div>
    </div>
    </div>
    
    </section></main>`
    const novoItem = document.createElement("li")
    novoItem.classList.add("item")
    novoItem.innerHTML = (main)
    lista.appendChild(novoItem)

}
if (quantidadeNaLista === 0) {
    const novoItem = document.createElement("h2")
    novoItem.innerText = "Sem itens na lista"
    novoItem.classList.add("item")
    lista.appendChild(novoItem)
} else {
    onload = mostraNovos();
}


function aplicaHighlightc() {
    for (let j = 0; j < quantidadeNaLista; j++) {
        aplicaHighlightNaComunidade(j)

    }
}

function aplicaHighlightNaComunidade(j) {
    const areaDoCodigoComunidade = document.querySelectorAll('.codigo-wrapper')[j];
    const codigoComunidade = areaDoCodigoComunidade.innerText
    areaDoCodigoComunidade.innerHTML = `<code class="preview hljs ${itens[j].linguagemProjeto}" contenteditable="true" aria-label="Editor de código"></code>`
    areaDoCodigoComunidade.querySelector('code').textContent = codigoComunidade
    hljs.highlightElement(areaDoCodigoComunidade.querySelector('code'))
}


function mostraNovos() {
    for (let index = 0; index < quantidadeNaLista; index++) {
        criaElemento(itens[index].novoCodigo, itens[index].nome, itens[index].descricao, itens[index].linguagemProjeto, itens[index].cor);
        
    }
    aplicaHighlightc();
}

var conjuntoCor = document.querySelectorAll('.editor')
for (let index = 0; index < quantidadeNaLista; index++) {
    conjuntoCor[index].style.backgroundColor = `${itens[index].cor}`;

}