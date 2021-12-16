export const valid = {
   inputData (value) {
      if (value.length < 3 || value === '')
         return alert("Insira até tês caracteres e não pode ser vazio!")
  
        return true
     },   
}
