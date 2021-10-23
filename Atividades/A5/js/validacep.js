const masks = {

    cep (value) {
        return value
        .replace(/\D/g, '') //Remove qualquer coisa que não seja número.
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1')
    },
    
} ;

document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        //e.target.value = masks[field](e.target.value)
        e.target.value = masks.cep(e.target.value)
    }, false)
})