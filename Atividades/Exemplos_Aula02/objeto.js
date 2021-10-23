console.log('Olá Mundo')

var pessoa = {
    nome: {primeiro: 'Katia', ultimo: 'Tartari'},
    idade: 28,
    sexo: 'Feminino',
    altura: 1.63,
    interesses: ['música', 'programação'],

    imprimir: function (){
        console.log(
            `Meu nome é ${this.nome.primeiro}, tenho ${pessoa.idade} e ${pessoa.altura} de altura.`
            //Pode usar o this ou pessoa
        )
    } 
}

//pessoa.imprimir()

//desestruturação de objeto
const {nome, idade, sexo, ...outrasProp } = pessoa
console.log(nome)
console.log(idade)
console.log(sexo)
console.log(outrasProp)