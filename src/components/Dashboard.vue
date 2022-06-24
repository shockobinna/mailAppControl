<template>
  <div>
    <div>
    <app-header />
    <div class="dashdisplay">
      <div class=" container dashheadline mr-5">
        <h1 class="h1">Dashboard Geral</h1>
      </div>

      <div class="container-fluid">
        
        <div class="row">
          
          <div class="col-3">
            <div class="card-header bg-warning text-center">Bloco A</div>
            <div class="card">
              <img class="card-img-top" src="holder.js/100x180/" alt="" />
              <div class="card-body">
                <h4 class="card-title">Qtd:{{getTotalA}}</h4>
                <p class="card-text">Text</p>
                <div>
                  <bloco-graph v-if="getTotalA" :getTotal= this.getTotalA />
                </div>
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
                <h4 class="card-title">Qtd:{{getTotalB}}</h4>
                <p class="card-text">Text</p>
                <div>
                  <bloco-graph v-if="getTotalB" :getTotal= this.getTotalB />
                </div>
              </div>
              <button type="button" class="btn btn-primary" @click.prevent="verBlocoB()"><i class="fa fa-list" aria-hidden="true"></i>
                Ver Encomendas</button>
            </div>
          </div>
          <div class="col-3" >
            <div class="card-header bg-success text-center">Bloco C</div>
            <div class="card">
              <img class="card-img-top" src="holder.js/100x180/" alt="" />
              <div class="card-body">
                <h4 class="card-title">Qtd:{{getTotalC}}</h4>
                <p class="card-text">Text</p>
                <div>
                  <bloco-graph v-if="getTotalC" :getTotal= this.getTotalC />
                </div>
              </div>
              
              
              <button type="button" class="btn btn-primary" @click.prevent="verBlocoC()">
                <i class="fa fa-list" aria-hidden="true"></i> Ver Encomendas
                </button>
                
            </div>
          </div>
          <div class="col-3">
            <radial-graph v-if="getTotalA && getTotalB && getTotalC" :getA="this.getTotalA" :getB="this.getTotalB" :getC="this.getTotalC" />
          </div>
        
        </div>
          
          <span class="text-secondary"> Lengenda: </span>

          <i class="fa fa-list text-secondary" aria-hidden="true" style="font-size: 1.0em"></i>  Ver toda encomenda de cada bloco
          
      </div>
      
    </div>
  </div>

  <div class="container-fluid mt-3">
        <div class="searchbox">
            <div class="input-group">
                <input class="form-control py-2 border-right-0 border" type="search" placeholder="Pesquisar encomenda pelo número do apartamento" value="search" id="example-search-input" v-model="search">
                <span class="input-group-append">
                    <div class="input-group-text bg-transparent"><i class="fa fa-search"></i></div>
                </span>
            </div>
        </div>
    </div>
<div class="container-fluid mt-3 ">
    
    <div class="bloco" > 
      <h1>Bloco </h1>
    </div>
  
  </div>
  
  <div class="result mt-3">
  <div class="container-fluid">
    <div class="row">
      <table class="table">
    <thead>
      <tr>
        <th>Apt</th>
        <th>Morador</th>
        <th>Quantidade</th>
        <th>Data Recebida</th>
        <th>Entregar</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="bloco in filterEncomenda" :key="bloco.id">
        <td scope="row">{{bloco.apartamento}}</td>
        <td>{{bloco.nome}}</td>
        <td>{{bloco.quantidade}}</td>
        <td v-for="(value, key) in bloco.encomenda" :key="key">{{value.data_recebida}}</td>
        <td>
          <button type="button" class="btn btn-secondary" @click.prevent="entregarEncomenda(bloco)">
           <i class="fas fa-clipboard-check"></i>
          </button>
        </td>
      </tr>
     
    </tbody>
  </table>
     <div class="container">
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li @click="getPreviousPage()" class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li v-for="(pagina, index) in totalPaginas()" :key="index" v-bind:class="isActive(pagina)" @click="getDataPagina(pagina)" class="page-item"><a class="page-link" href="#">{{pagina}}</a></li>
            <li @click="getNextPage()" class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>
    </div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import AppHeader from "./AppHeader.vue";
import axios from "axios";
import BlocoGraph from "./BlocoGraph.vue"
import RadialGraph from "./RadialGraph.vue"

 const baseEntregaA = "http://localhost:3000/encomendaEntregadaBlocoA"
 const baseEntregaB = "http://localhost:3000/encomendaEntregadaBlocoB"
 const baseEntregaC = "http://localhost:3000/encomendaEntregadaBlocoC"
export default {
  components: {
    AppHeader,
    BlocoGraph,
    RadialGraph
  },
  data(){
    return{

      blocos:[],
      quantA:0,
      quantB:0,
      quantC:0,
      search:"",
      nome:"",
      codigo:"",
      date_delivered:"",
      bloco:"",
      timestamp: new Date().toISOString().slice(0,10),
      id:0,
      elementoPorPagina:5,
      datosPaginados:[],
      paginaActual:1,
      

    }
  },
  
   mounted() {
    let user = localStorage.getItem("user-info")
    if(!user){
      this.$router.push({name:'Login'})
    }
    

    this.$store.dispatch("getBlocoA"),
    this.$store.dispatch("getBlocoB"),
    this.$store.dispatch("getBlocoC")

    this.$nextTick(() => {
        window.dispatchEvent(new Event('resize'));
    });
    
    
  },
  computed: {
    

    ...mapGetters(["getTotalA","getTotalB","getTotalC"]),
    
    
    getBlockA(){
      return this.$store.state.blocoA;
    
    },
    getBlockB(){
      return this.$store.state.blocoB;
    
    },
    getBlockC(){
      return this.$store.state.blocoC;
    
    },

    filterEncomenda(){
      return this.datosPaginados.filter((bloco) =>{
        return bloco.apartamento.match(this.search)

      })
    },
    
    
    
    
  },
  methods: {

    
    verBlocoA(){
      this.search =""
      this.blocos = this.getBlockA
      console.log(this.blocos)
      this.getDataPagina(1)
      
     
    },
    verBlocoB(){
      this.search =""
      this.blocos = this.getBlockB
      console.log(this.blocos)
      this.getDataPagina(1)
      
    },
    verBlocoC(){
      this.search =""
      this.blocos = this.getBlockC
      console.log(this.blocos)
      this.getDataPagina(1)
    
    },
    entregarEncomenda(bloco){
      this.nome = bloco.nome,
      this.codigo = bloco.encomenda[0].codigo,
      this.bloco = bloco.bloco
      this.id = bloco.id

      console.log(this.date_delivered)
      if(this.bloco == "Bloco A"){
        axios.post( baseEntregaA,{
          nome: this.nome,
          codigo:this.codigo,
          data_entregada: this.timestamp
        })
        .then( response =>{
        if(response.data.success) 
        console.log(response.data)
     })
     this.$store.dispatch("deleteA",this.id)
         this.$router.go();
      }
      else if(this.bloco == "Bloco B"){
        axios.post( baseEntregaB,{
          nome: this.nome,
          codigo:this.codigo,
          data_entregada: this.timestamp
        })
        .then( response =>{
        if(response.data.success) 
        console.log(response.data)
     })
     this.$store.dispatch("deleteB",this.id)
     this.$router.go();
      }
      else{
        axios.post( baseEntregaC,{
          nome: this.nome,
          codigo:this.codigo,
          data_entregada: this.timestamp
        })
        .then( response =>{
        if(response.data.success) 
        console.log(response.data)
       })
       this.$store.dispatch("deleteC",this.id)
       this.$router.go();
      }
      
      
        
    },
    totalPaginas(){
      return Math.ceil(this.blocos.length / this.elementoPorPagina)
    },
    getDataPagina(noPagina){
      this.paginaActual = noPagina
      this.datosPaginados = ""
      const ini = (noPagina * this.elementoPorPagina) - this.elementoPorPagina;
      const fin = (noPagina * this.elementoPorPagina)
      this.datosPaginados = this.blocos.slice(ini,fin) 
      console.log(this.datosPaginados)
      

    },
    getPreviousPage(){
      if(this.paginaActual > 1){
        this.paginaActual--
      }
      this.getDataPagina(this.paginaActual)
    },
    getNextPage(){
      if(this.paginaActual < this.totalPaginas()){
        this.paginaActual++
      }
      this.getDataPagina(this.paginaActual)
    },
    isActive(noPagina){

        return noPagina == this.paginaActual ? 'active': ''
      
    },
    
     
  },
  
  
};
</script>

<style scoped>
.searchbox{
  max-width: 75%;
}
.form-control:focus {
    outline: 0 !important;
    border-color: initial;
    box-shadow: none;
    
}

</style>
