<template>
  <div class="blocoA">
    <app-header />
    <div class="container-fluid">
    <div class="alert alert-success text-center" v-if="isSuccess">
      <strong>Encomenda Cadastrado</strong>
    </div>
    <div>
      <button class="btn btn-primary ml-2 mt-3" @click="$router.go(-1)">
        <i class="fa fa-reply " aria-hidden="true"></i>
        Retornar
      </button>
    </div>
    
      <div class="row">
        <div class="col-8">
          <form >
            <div class="card mt-5 mb-5 bg-dark">
              <div class="card-body">
                <h4 class="card-title text-center text-primary">
                  CADASTRAR ENCOMENDA
                </h4>
                <hr />
                <div class="form-group text-primary">
                  <label for="nome">Morador</label>
                  <input
                    type="text"
                    class="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="nome"
                    v-model="morador"
                  />
                </div>
                <div class="form-group text-primary">
                  <label for="apart">Apartamento</label>
                  <input
                    type="text"
                    class="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="100"
                    v-model="aparta"
                    
                  />
                </div>
                <div class="form-group text-primary">
                  <label class="pr-1" for="apart">Bloco</label>
                  <select class="form-select w-100"  v-model="bloco">
                  <option value="blocoA">Bloco A</option>
                  <option value="blocoB">Bloco B</option>
                  <option value="blocoC">Bloco B</option>
                </select>
                </div>
                <div class="form-group text-primary">
                  <label for="date">Data da Entrega</label>
                  <input
                    type="date"
                    class="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                    v-model="encomenda.data_recebida"
                  />
                </div>
                <div class="form-group text-primary">
                  <label for="codigo">Codigo da Encomenda</label>
                  <input
                    type="number"
                    class="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                    v-model.number="encomenda.codigo"
                  />
                </div>
                <div class="form-group text-primary">
                  <label for="receptor">Receptor</label>
                  <input
                    type="text"
                    class="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                    v-model="encomenda.receptor"
                  />
                </div>
                <div class="form-group text-primary">
                  <label for="quantity"></label>
                  <input
                    type="number"
                    class="form-control"
                    hidden
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="1"
                    v-model.number="quant"
                  />
                </div>
                <div class="form-group text-primary">
                  <label for="bloco"></label>
                  <input
                    type="text"
                    hidden
                    class="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                    v-model="bloco"
                  />

                </div>
                <div class="d-flex justify-content-between">
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="addEncomenda()"
                  >
                    Cadastrar
                  </button>
                </div>
              </div>
              
            </div>
            
          </form>
        </div>
        <div class="col-4">
          <div class="row">
            <h5>Pesquise a encomenda para editar ou deletar</h5>
            <animated-search-bar/>
          </div>
            
            
        </div>
    </div>
  </div>
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AnimatedSearchBar from "./AnimatedSearchBar.vue"
export default {
  components: {
    AppHeader,
    AnimatedSearchBar
  },
  data() {
    return {
      morador: "",
      aparta: "",
      quant: 1,
      bloco:"",
      encomenda: [{
        data_recebida:"",
        codigo:"",
        receptor:""
      }], 
      isSuccess: false,
      blocoA: [],
    };
    
  },
  mounted() {
    let user = localStorage.getItem("user-info")
    if(!user){
      this.$router.push({name:'Login'})
    }
  },
  methods: {
    
    addEncomenda(){
      let payload ={
        nome: this.morador,
        apartamento: this.aparta,
        quantidade: this.quant,
        bloco:this.bloco,
        encomenda: [
          {
            data_recebida:this.encomenda.data_recebida,
            codigo:this.encomenda.codigo,
            receptor:this.encomenda.receptor
          },
        ],
      }
      this.$store.dispatch("postEncomenda", payload)

      this.morador="",
      this.aparta="",
      this.bloco="",
      this.encomenda.data_recebida="",
      this.encomenda.codigo="",
      this.encomenda.receptor=""
      
    },
    
    
    },
    
};
</script>

<style scoped>
.card {
  max-width: 60%;
  margin: auto;
}
.routerLink {
  text-decoration: none;
}
</style>
