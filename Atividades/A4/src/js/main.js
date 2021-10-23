/*
import {
    valida_nome, 
    valida, 
    valida_cpf
} from "./src/js/modules/mask.js";

import {
    masks, 
    field
} from "./src/js/modules/valid.js";
*/

const masks = {

    cpf (value) {
        return value
        .replace(/\D/g, '') //Remove qualquer coisa que não seja número.
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
    },

    date (value) {
        return value
        .replace(/\D/g, '') 
        /* Pode fazer (\d\d) em vez de (\d{2}) ficando assim:
        .replace(/(\d\d)(\d)/, '$1/$2') */
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\/\d{4})\d+?$/, '$1')
    },

    fone (value) {
        return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
        .replace(/(-\d{4})\d+?$/, '$1')
   },

    cep (value) {
        return value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1')
    },
    
} ;

document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)
        }, false)
})


