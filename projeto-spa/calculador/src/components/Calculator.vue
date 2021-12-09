<template>
  <div class="page">
    <ul>
      <li v-for="produto in produtos" :key="produto.id">
        <button class="menos" @click="produto.valor -= 10">-</button>
        <button class="mais" @click="produto.valor += 10">+</button>
        <h4><b>{{produto.nome}}</b></h4>
        <hr>
          Valor: R$ {{produto.valor}},00 
          <span v-if="produto.valor === 100"><b> - PROMOÇÃO </b></span>
        </li>
    </ul>
  </div>
</template>

<script>

export default {
    data(){
        return{
            produtos: [
              {
                id: 1,
                nome: "Ração",
                valor: 5,
              },
              {
                id: 2,
                nome: "Veterinário",
                valor: 200
              },
              {
                id: 3,
                nome: "Medicamentos",
                valor: 50
              },
              {
                id: 4,
                nome: "Banho e tosa",
                valor: 80
              },
              {
                id: 5,
                nome: "Controle de pulgas",
                valor: 75
              },
              {
                id: 6,
                nome: "Vacina",
                valor: 150,
              },
              {
                id: 7,
                nome: "Acessórios",
                valor: 400
              },
              {
                id: 8,
                nome: "Outros",
                valor: 90
              }
            ] 
        }
    },
    computed: {
      valorTotal () {
        return this.produtos.reduce((sum, produto) => {
          return sum + produto.valor
        }, 0)
      }
    }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    font-family: helvetica;
  }
  li {
    border-style: solid;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3);
    width: 20%;
    text-align: center;
    float: left;
    margin-right: 10px;
  }
  .mais, .menos{
    cursor: pointer;
    font-weight: bold;
    width: 30px;
    height: 25px;
    font-size: 15px;
    font-family: fantasy;
  }
  
</style>
