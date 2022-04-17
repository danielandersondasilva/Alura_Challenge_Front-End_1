//console.log(lista);
const form = document.querySelector('#novoItem');
const itens = JSON.parse(localStorage.getItem("itens")) || []
//itens.forEach(element => {
//console.log(element.nome, element.descricao, element.linguagemProjeto, element.cor);

//});

form.addEventListener('submit', (evento) => {
    evento.preventDefault()


    const novoCodigo = document.querySelector('code').textContent;
    const nome = evento.target.elements['nomeProjeto'].value
    const descricao = evento.target.elements['descricaoProjeto'].value
    const linguagemProjeto = evento.target.elements['linguagemProjeto'].value
    const cor = evento.target.elements['corProjeto'].value

    const itemAtual = {
        "novoCodigo": novoCodigo,
        "nome": nome,
        "descricao": descricao,
        "linguagemProjeto": linguagemProjeto,
        "cor": cor
    }


    itens.push(itemAtual)

    localStorage.setItem("itens", JSON.stringify(itens))
})