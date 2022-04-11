const form = document.querySelector('#novoItem');

form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    console.log(evento)


    const nome = evento.target.elements['nomeProjeto'].value
    const descricao = evento.target.elements['descricaoProjeto'].value
    const linguagemProjeto = evento.target.elements['linguagemProjeto'].value
    const cor = evento.target.elements['corProjeto'].value

    criaElemento(nome, descricao, linguagemProjeto, cor)
})

function criaElemento(nome, descricao, linguagemProjeto, cor) {
    console.log(nome);
    console.log(descricao);
    console.log(linguagemProjeto);
    console.log(cor);
}