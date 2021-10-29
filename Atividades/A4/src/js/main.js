//main.js

import { masks } from './modules/mask.js';
import { valids } from './modules/valid.js';

document.querySelectorAll('input.mask').forEach($input => {
    const field = $input.dataset.js
    //console.log(field) 
    $input.addEventListener(
        'input',
        e => {
        e.target.value = masks[field](e.target.value)
       // e.target.value = masks.cpf(e.target.value)
    }, 
    false
    )
})

document.querySelectorAll('input.valid').forEach($input => {
    const field = $input.dataset.js
    $input.addEventListener(
        'input',
        e => {
        e.target.value = valids[field](e.target.value)
        //e.target.value = valids.cpf(e.target.value)
        }, 
    false
    )
})

