import { masks } from './modules/mask.js';
import { valids } from './modules/valid.js';

//Nome
document.querySelectorAll('input.mask').forEach($input => {
    const field = $input.dataset.js
    $input.addEventListener(
        'input',
        e => {
            if (field != 'nome')
        e.target.value = masks[field](e.target.value)
        }, 
    false
    )
})
// ######### Validação nome ##########
// Busca o campo nome e escuta o evento de entrada de texto
document.querySelector('#nome').addEventListener('input', e => {
    // Atribui(Guarda) a true ou false dependendo se o nome é válido
    let is_valid = valids.nome(e.target.value)
  
    //Adiciona a classe que deixa a borada vermelha, indicando que o nome é inválido
    if (!is_valid) e.target.classList.add('errorInput')
    //REtira a classe que deixa a borada vermelha, indicando que o nome é válido
    else e.target.classList.remove('errorInput')
  })
  
//cpf
document.querySelectorAll('input.mask').forEach($input => {
    const field = $input.dataset.js
    //console.log(field) 
    $input.addEventListener(
        'input',
        e => {
            if (field != 'cpf')
        e.target.value = masks[field](e.target.value)
       // e.target.value = masks.cpf(e.target.value)
    }, 
    false
    )
})  
//Validação CPF
document.querySelector('#cpf').addEventListener('input', e => {
    let is_valid = valids.cpf(e.target.value)
    if (!is_valid) e.target.classList.add('errorInput')
    else e.target.classList.remove('errorInput')
  })

//data de nascimento
document.querySelectorAll('input.mask').forEach($input => {
    const field = $input.dataset.js
    $input.addEventListener(
        'input',
        e => {
            if (field != 'dt_nasc')
        e.target.value = masks[field](e.target.value)
        }, 
    false
    )
})
document.querySelector('#dt_nasc').addEventListener('input', e => {
    let is_valid = valids.dt_nasc(e.target.value)
    if (!is_valid) e.target.classList.add('errorInput')
    else e.target.classList.remove('errorInput')
})    
        
//email
document.querySelectorAll('input.mask').forEach($input => {
    const field = $input.dataset.js
    $input.addEventListener(
        'input',
        e => {
            if (field != 'email')
        e.target.value = masks[field](e.target.value)
        }, 
    false
    )
})
document.querySelector('#email').addEventListener('input', e => {
    let is_valid = valids.email(e.target.value)
    if (!is_valid) e.target.classList.add('errorInput')
    else e.target.classList.remove('errorInput')
})            
       
//telefone
document.querySelectorAll('input.mask').forEach($input => {
    const field = $input.dataset.js
    $input.addEventListener(
        'input',
        e => {
            if (field != 'fone')
        e.target.value = masks[field](e.target.value)
        }, 
    false
    )
})
document.querySelector('#fone').addEventListener('input', e => {
    let is_valid = valids.fone(e.target.value)
    if (!is_valid) e.target.classList.add('errorInput')
    else e.target.classList.remove('errorInput')
})              

//cep
document.querySelectorAll('input.mask').forEach($input => {
    const field = $input.dataset.js
    $input.addEventListener(
        'input',
        e => {
            if (field != 'cep')
        e.target.value = masks[field](e.target.value)
        }, 
    false
    )
})
document.querySelector('#cep').addEventListener('input', e => {
    let is_valid = valids.cep(e.target.value)
    if (!is_valid) e.target.classList.add('errorInput')
    else e.target.classList.remove('errorInput')
})        