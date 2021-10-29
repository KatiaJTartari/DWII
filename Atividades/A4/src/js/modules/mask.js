export const masks = {

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
    }
    
} 

