let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let senha = document.querySelector('#password')
let senha2 = document.querySelector('#check-password')

let areaNome = document.querySelector('#area-nome')
let areaEmail = document.querySelector('#area-email')
let areaSenha = document.querySelector('#area-senha')
let areaSenha2 = document.querySelector('#area-senha2')

let mensagemErroNome = document.createElement('p')
let mensagemErroEmail = document.createElement('p')
let mensagemErroSenha1 = document.createElement('p')
let mensagemErroSenha2 = document.createElement('p')

mensagemErroNome.classList.add('erro')
mensagemErroEmail.classList.add('erro')
mensagemErroSenha1.classList.add('erro')
mensagemErroSenha2.classList.add('erro')

function validaForm() {
    if (nome.value == '') {
        mensagemErroNome.textContent = 'O nome tem que ser preenchido' 
        areaNome.appendChild(mensagemErroNome)
        nome.classList.add('input-erro')
        nome.classList.remove('input-valido')
    }else {
        mensagemErroNome.remove()
        nome.classList.remove('input-erro')
        nome.classList.add('input-valido')
    }

    if (email.value == '') {
        mensagemErroEmail.textContent = 'O email tem que ser preenchido' 
        areaEmail.appendChild(mensagemErroEmail)
        email.classList.add('input-erro')
        email.classList.remove('input-valido')
    }else {
        mensagemErroEmail.remove()
        email.classList.remove('input-erro')
        email.classList.add('input-valido')
    }

    if (senha.value == '') {
        mensagemErroSenha1.textContent = 'A senha tem que ser preenchido' 
        areaSenha.appendChild(mensagemErroSenha1)
        senha.classList.add('input-erro')
        senha.classList.remove('input-valido')
    }else {
        mensagemErroSenha1.remove()
        senha.classList.remove('input-erro')
        senha.classList.add('input-valido')
    }

    if (senha2.value == '') {
        mensagemErroSenha2.textContent = 'A senha tem que ser preenchido' 
        areaSenha2.appendChild(mensagemErroSenha2)
        senha2.classList.add('input-erro')
        senha2.classList.remove('input-valido')
    }else {
        mensagemErroSenha2.remove()
        senha2.classList.remove('input-erro')
        senha2.classList.add('input-valido')
    }

    if (senha.value != senha2.value) {
        mensagemErroSenha2.textContent = 'As senhas tem que ser iguais' 
        areaSenha2.appendChild(mensagemErroSenha2)
        senha2.classList.add('input-erro')
        senha2.classList.remove('input-valido')
    }
}

