let lista = document.querySelector('#lista-de-tarefas')

function criaTarefa() {
    let tarefa = document.querySelector('#tarefa') // btn tarefa

    let novaTarefa = document.createElement('li') //cria o li da tarefa
    let btnFinalizado = document.createElement('span')
    let btnExcluir = document.createElement('span')
    let botoes = document.createElement('div')
    let textoMensagem = document.createElement('div')

    btnFinalizado.textContent = 'FINALIZADO'
    btnExcluir.textContent = 'DELETE'
    textoMensagem.textContent = tarefa.value // adiciona o conteudo da tarefa

    lista.appendChild(novaTarefa)
    novaTarefa.appendChild(textoMensagem)

    novaTarefa.appendChild(botoes)
    botoes.appendChild(btnFinalizado)
    botoes.appendChild(btnExcluir)

    novaTarefa.classList.add('nova-tarefa') // adiciona a classe
    btnFinalizado.classList.add('finalizado')
    btnExcluir.classList.add('excluir')


    tarefa.value = ''
    btnFinalizado.addEventListener('click', function() {
        textoMensagem.classList.add('tarefa-feita')
    })

    btnExcluir.addEventListener('click', function() {
        novaTarefa.remove()
    })
}

function removeTarefas() {
    let li = document.querySelectorAll('.nova-tarefa')
    
    for (let i = 0; i <= li.length; i++) {
        li[i].remove()
    }
}



