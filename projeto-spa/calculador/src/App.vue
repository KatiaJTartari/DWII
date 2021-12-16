<template>
  <div id="app">
  <ul>
    <img src="./assets/icone.png" id="icone">
    <img src="./assets/titulo.png" id="titulo">
    <BarraMenu></BarraMenu>   
    <h2>CALCULE O GASTO MENSAL COM SEU PET</h2>  
    <img src="./assets/prato_racao.png" id="prato_racao">
    <img src="./assets/veterinario.png" id="veterinario">
    <img src="./assets/medicamentos.PNG"  id = "medicamentos">
    <img src="./assets/lavagem_cachorro.jpg" id="lavagem_cachorro">
    <Calculator></Calculator>
    <Total></Total>
    <img src="./assets/kit_control.png" id="kit_control">
    <img src="./assets/vacina.png" id="vacina">
    <img src="./assets/animal_acessorios.png" id="animal_acessorios">
    <img src="./assets/outros.png" id="outros">
  </ul>
    
  <footer>
    <br><br>
    <p>Todos os direitos reservados. Projeto Pet Calculador Katia Jaqueline Tartari 2021.</p>
  </footer>
        
  </div>
</template>

<script>

import BarraMenu from './components/BarraMenu'
import Calculator from './components/Calculator'
import Total from './components/Total'

export default {
    components:{
    BarraMenu,
    Calculator,
    Total
  }
}

</script>

<style scoped>
img {
  order: <integer>;
}

#icone {
  width: 250px;
  margin-left: 20px;
}
#titulo {
  
}

h2 {
  margin-left: 40px;
  margin-top: 20px;
  color: SeaGreen;
  font-family: helvetica;
}

ul, footer {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: 1px solid #e7e7e7;
  background-color: #e7e7e7;
}

#prato_racao{
  width: 150px;
  margin-left: 90px;
}
#veterinario{
  width: 160px;
  margin-left: 120px;
}
#medicamentos{
  width: 210px;
  margin-left: 85px;
}
#lavagem_cachorro{
  width: 145px;
  margin-left: 85px;
  position: static;
}
#kit_control{
  width: 149px;
  margin-left: 85px;
}
#vacina{
  width: 137px;
  margin-left: 130px;
}
#animal_acessorios{
  width: 160px;
  margin-left: 115px;
  margin-top: 3px;
}
#outros
{
  width: 202px;
  margin-left: 90px;
}

footer {
  text-align: center;
  color: DimGray;
  font-family: helvetica;
}

</style>
