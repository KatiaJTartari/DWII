export const valids = {

   nome (value) {
      //variável que guarda o tamanho do texto digitado em no campo nome 
      let tamanho = value.length
      
      //retorna falso se: o nome tiver menos que 5 caracteres,
      //estiver vazio ou não tiver sobrenome (espaço entre nomes)
      if (value.length < 5 || value == '' || !value.trim().includes(' '))
         return false

      // retorna verdadeiro pois passou das validações
      return true
   },       

   //Corrigir a validação do CPF
   cpf (value) {
    function isCPF(cpf = 0) {	
         value = cpf.replace(/\.|-/g,"");	

         let soma = 0;
         soma += cpf[0] * 10;
         soma += cpf[1] * 9;
         soma += cpf[2] * 8;
         soma += cpf[3] * 7;
         soma += cpf[4] * 6;
         soma += cpf[5] * 5;
         soma += cpf[6] * 4;
         soma += cpf[7] * 3;
         soma += cpf[8] * 2;
         soma = (soma * 10) % 11;
         if (soma == 10 || soma == 11) 
         soma = 0;
         if (soma != cpf[9]) 
         return false;

         soma = 0;
         soma += cpf[0] * 11;
         soma += cpf[1] * 10;
         soma += cpf[2] * 9;
         soma += cpf[3] * 8;
         soma += cpf[4] * 7;
         soma += cpf[5] * 6;
         soma += cpf[6] * 5;
         soma += cpf[7] * 4;
         soma += cpf[8] * 3;
         soma += cpf[9] * 2;
         soma = (soma * 10) % 11;
         if (soma == 10 || soma == 11) 
            soma = 0;
         if (soma != cpf[10]) 
            return false;
         //
         return true;
         isCPF(cpf);
   }
   },

   dt_nasc (value) {
      let tamanho = value.length
      
      if (value.length < 10)
         return false

      return true
   },       

   email (value) {
      let tamanho = value.length
      
      if (value == '')
         return false

      return true
   },   

   fone (value) {
      let tamanho = value.length
      
      if (value.length < 13)
      
         return false

      return true
   },   

   cep (value) {
      let tamanho = value.length
      
      if (value.length < 9)
         return false

      return true
   },  
}