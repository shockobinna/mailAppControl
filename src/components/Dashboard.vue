<template>
  <div>
    <div>
    <app-header />
    <div class="dashdisplay">
      <div class=" container dashheadline mr-5">
        <h1 class="h1">Dashboard Geral</h1>
      </div>

      <div class="container">
        
        <div class="row">
          
          <div class="col-3">
            <div class="card-header bg-warning text-center">Bloco A</div>
            <div class="card">
              <img class="card-img-top" src="holder.js/100x180/" alt="" />
              <div class="card-body">
                <h4 class="card-title">Qtd:{{quantA}}</h4>
                <p class="card-text">Text</p>
              </div>
              <button type="button" class="btn btn-primary" @click.prevent="verBlocoA()">
               <i class="fa fa-list" aria-hidden="true"></i> Ver Encomendas 
                </button>
            </div>
          </div>
          <div class="col-3">
            <div class="card-header bg-danger text-center">Bloco B</div>
            <div class="card">
              <img class="card-img-top" src="holder.js/100x180/" alt="" />
              <div class="card-body">
                <h4 class="card-title">Qtd:{{quantB}}</h4>
                <p class="card-text">Text</p>
              </div>
              <button type="button" class="btn btn-primary" @click.prevent="verBlocoB()"><i class="fa fa-list" aria-hidden="true"></i>
                Ver Encomendas</button>
            </div>
          </div>
          <div class="col-3">
            <div class="card-header bg-success text-center">Bloco C</div>
            <div class="card">
              <img class="card-img-top" src="holder.js/100x180/" alt="" />
              <div class="card-body">
                <h4 class="card-title">Qtd:{{quantC}}</h4>
                <p class="card-text">Text</p>
              </div>
              
              
              <button type="button" class="btn btn-primary" @click.prevent="verBlocoC()">
                <i class="fa fa-list" aria-hidden="true"></i> Ver Encomendas
                </button>
                
            </div>
          </div>
        
        </div>
          
          <span class="text-secondary"> Lengenda: </span>

          <i class="fa fa-list text-secondary" aria-hidden="true" style="font-size: 1.0em"></i>  Ver toda encomenda de cada bloco
          
      </div>
      
    </div>
  </div>

  
<div class="container mt-3 ">
    
    <div class="bloco"> 
      <h1>Bloco </h1>
    </div>
  
  </div>
  
  <div class="result mt-3">
  <div class="container">
    <div class="row">
      <table class="table">
    <thead>
      <tr>
        <th>Apt</th>
        <th>Morador</th>
        <th>Quantidade</th>
        <th>Data Recebida</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="bloco in blocos" :key="bloco.id">
        <td scope="row">{{bloco.apartamento}}</td>
        <td>{{bloco.nome}}</td>
        <td>{{bloco.quantidade}}</td>
        <td v-for="(value, key) in bloco.encomenda" :key="key">{{value.data_recebida}}</td>
      </tr>
      
    </tbody>
  </table>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import axios from "axios";
const baseAURL = "http://localhost:3000/blocoA";
const baseBURL = "http://localhost:3000/blocoB";
const baseCURL = "http://localhost:3000/blocoC";
export default {
  components: {
    AppHeader,
  },
  data(){
    return{

      blocos:[],
      quantA:0,
      quantB:0,
      quantC:0,

    }
  },
  mounted() {
    
      try {
      axios.get(baseAURL).then((response) => {
         this.quantA = response.data.length
        
      });
      axios.get(baseBURL).then((response) => {
         this.quantB = response.data.length
        
      });
      axios.get(baseCURL).then((response) => {
         this.quantC = response.data.length
        
      });

    } catch (e) {
      console.error(e);
    }
   
  },
  methods: {
    verBlocoA(){
      try {
      axios.get(baseAURL).then((response) => {
        console.log(response.data);
        this.blocos = response.data;
        // for (let i =0; i<= response.data.length;i++){
        //     this.quantA = response.data.quantidade++
        // }
        // console.log(this.quantA)
      });
    } catch (e) {
      console.error(e);
    }

    },
    verBlocoB(){
      try {
      axios.get(baseBURL).then((response) => {
        console.log(response.data);
        this.blocos = response.data;
      });
    } catch (e) {
      console.error(e);
    }

    },
    verBlocoC(){
      try {
      axios.get(baseCURL).then((response) => {
        console.log(response.data);
        this.blocos = response.data;
        
      });
    } catch (e) {
      console.error(e);
    }

    }
    
  },
};
</script>

<style scoped>
.table{
  max-width: 75%;
}
</style>
