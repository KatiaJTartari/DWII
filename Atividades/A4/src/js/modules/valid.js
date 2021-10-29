//valid.js

export const valids = {

      /*nome (value) {
            
        return value
            if (nome (!contains(" ")))
                  return true
            else 
                  alert('Insira pelo menos um sobrenome');
            //return button = onClick=".errorInput"();
      }, */

      cpf (value) {
            var CPF = value; // Recebe o valor digitado no campo
            
            // Verifica se o campo é nulo
            if (CPF == "") {
              alert('Este campo é de preenchimento obrigatório!');
              return false;
              }
            
            // Aqui começa a checagem do CPF
            var POSICAO, I, SOMA, DV, DV_INFORMADO;
            var DIGITO = new Array(10);
            DV_INFORMADO = CPF.substr(9, 2); // Retira os dois últimos dígitos do número informado
            
            // Desemembra o número do CPF na array DIGITO
            for (I=0; I<=8; I++) {
              DIGITO[I] = CPF.substr( I, 1);
            }
            
            // Calcula o valor do 10º dígito da verificação
            POSICAO = 10;
            SOMA = 0;
               for (I=0; I<=8; I++) {
                  SOMA = SOMA + DIGITO[I] * POSICAO;
                  POSICAO = POSICAO - 1;
               }
            DIGITO[9] = SOMA % 11;
               if (DIGITO[9] < 2) {
                    DIGITO[9] = 0;
            }
               else{
                   DIGITO[9] = 11 - DIGITO[9];
            }
            
            // Calcula o valor do 11º dígito da verificação
            POSICAO = 11;
            SOMA = 0;
               for (I=0; I<=9; I++) {
                  SOMA = SOMA + DIGITO[I] * POSICAO;
                  POSICAO = POSICAO - 1;
               }
            DIGITO[10] = SOMA % 11;
               if (DIGITO[10] < 2) {
                    DIGITO[10] = 0;
               }
               else {
                    DIGITO[10] = 11 - DIGITO[10];
               }
            
            // Verifica se os valores dos dígitos verificadores conferem
            DV = DIGITO[9] * 10 + DIGITO[10];
               if (DV != DV_INFORMADO) {
                  alert('CPF inválido');
                  value = "";
                  value.focus();
                  return false;
               }
      }
  
}