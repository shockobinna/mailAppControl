<template>
  <div>
    <app-header />

    <div class="content">
      <div
        v-if="EncomendaMorador.length <= 0"
        class="alert alert-warning"
        role="alert"
      >
        <strong
          >Encomenda não encontrada para apartamento {{ apartamen }}</strong
        >
      </div>
      <div class="d-flex justify-content-between">
        <h1><i class="fa fa-cart-plus" aria-hidden="true"></i></h1>
        <button class="btn btn-primary ml-2 mt-3" @click="$router.go(-1)">
        <i class="fa fa-reply " aria-hidden="true"></i>
        Retornar
      </button>
      
      </div>

      <div class="tablelist mt-3">
        <table class="table table-hover table-sm">
          <thead>
            <tr>
              <th scope="col">Apt.</th>
              <th scope="col">Morador</th>
              <th scope="col">Encomenda(s)</th>
              <th scope="col">Data Recebida</th>
              <th scope="col">Acões</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="encomenda in EncomendaMorador" :key="encomenda.id">
              <th scope="row">{{ encomenda.apartamento }}</th>
              <td>{{ encomenda.nome }}</td>
              <td>{{ encomenda.quantidade }}</td>
              <td v-for="(value, key) in encomenda.encomenda" :key="key">
                {{ value.data_recebida }}
              </td>
              <td>
                <button
                  type="button"
                  class="outline btn btn-primary"
                  data-toggle="modal"
                  data-target="#edit"
                  @click="editarEncomenda(encomenda)"
                >
                  <i class="fas fa-edit"></i>
                </button>

                <button
                  type="button"
                  class="outline btn btn-danger"
                  @click="deleteEncomenda(encomenda)"
                >
                  <i class="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div
      class="modal fade"
      id="edit"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Editar Encomenda</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body mx-3">
            <form>
              <div class="form-group">
                <i class="fa fa-building" aria-hidden="true"></i>
                <input
                  type="number"
                  class="form-control"
                  id="recipient-name"
                  v-model="apartamento"
                />
                <label for="recipient-name" class="col-form-label"
                  >Apartamento</label
                >
              </div>
              <div class="form-group">
                <i class="fa fa-user" aria-hidden="true"></i>
                <input
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  v-model="morador"
                />
                <label for="recipient-name" class="col-form-label"
                  >Morador</label
                >
              </div>
              <div class="form-group">
                <i class="fa fa-gift" aria-hidden="true"></i>
                
                <input
                  type="number"
                  class="form-control"
                  id="recipient-name"
                  v-model="quantidade"
                  readonly
                />
                <label for="recipient-name" class="col-form-label"
                  >Quantidade de Encomenda</label
                >
              </div>
              <div class="form-group">
                <i class="fa fa-calendar" aria-hidden="true"></i>
                <input
                  type="date"
                  class="form-control"
                  id="recipient-name"
                  v-model="data_recebida"
                />
                <label for="recipient-name" class="col-form-label"
                  >Data Recebida</label
                >
              </div>
              <div class="form-group">
                <i class="fa fa-barcode" aria-hidden="true"></i>
                <input
                  type="number"
                  class="form-control"
                  id="recipient-name"
                  v-model.number="codigo"
                />
                <label for="recipient-name" class="col-form-label"
                  >Codigo</label
                >
              </div>
              <div class="form-group">
                <i class="fa fa-male" aria-hidden="true"></i>
                <input
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  v-model="receptor"
                />
                <label for="recipient-name" class="col-form-label"
                  >Receptor</label
                >
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              Fechar
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              @click.prevent="change()"
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
// import axios from "axios";
// const baseAURL = "http://localhost:3000/blocoA";
// const baseBURL = "http://localhost:3000/blocoB";
// const baseCURL = "http://localhost:3000/blocoC";

export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      apartamen: this.$route.query.apartamento,
      bloco: this.$route.query.bloco,
      EncomendaMorador: [],
      id: 0,
      apartamento: "",
      morador: "",
      quantidade: 0,
      data_recebida: "",
      codigo: 0,
      receptor: "",
      nencome: {},
    };
  },
  mounted() {
    
      if (this.apartamen != "" && this.bloco == "Bloco A") {
        let payload ={x:this.apartamen,y:this.bloco}
        this.$store.dispatch("getEncomendaA", payload)
        
        this.EncomendaMorador = this.getEncomendaMoradorA
        

       console.log(this.EncomendaMorador);
       
       
       
        
      } else if (this.apartamen != "" && this.bloco == "Bloco B") {
         let payload ={x:this.apartamen,y:this.bloco}
        this.$store.dispatch("getEncomendaB", payload)
        

        this.EncomendaMorador = this.getEncomendaMoradorB
        
      } else {
        let payload ={x:this.apartamen,y:this.bloco}
        this.$store.dispatch("getEncomendaC", payload)
        

        this.EncomendaMorador = this.getEncomendaMoradorC
      }
    

      this.apartamen = "", 
      this.bloco = ""
      this.EncomendaMorador =""
      
      
  },
  computed: {
    getEncomendaMoradorA(){
    return this.$store.state.encomendaA
    },
    getEncomendaMoradorB(){
      return this.$store.state.encomendaB
    },
    getEncomendaMoradorC(){
      return this.$store.state.encomendaC
    }

  },

  watch: {
      getEncomendaMoradorA(){
        this.EncomendaMorador = this.getEncomendaMoradorA
      },
      getEncomendaMoradorB(){
        this.EncomendaMorador = this.getEncomendaMoradorB
      },
      getEncomendaMoradorC(){
        this.EncomendaMorador = this.getEncomendaMoradorC
      }
      
      },
      
      
    
  methods: {
    editarEncomenda(encomenda) {
      this.nencome = encomenda;
      console.log(this.nencome);
      (this.id = encomenda.id),
        (this.apartamento = encomenda.apartamento),
        (this.morador = encomenda.nome),
        (this.bloco = encomenda.bloco),
        (this.quantidade = encomenda.quantidade),
        (this.codigo = encomenda.encomenda[0].codigo),
        (this.data_recebida = encomenda.encomenda[0].data_recebida);
      this.receptor = encomenda.encomenda[0].receptor;
    },
  
    async deleteEncomenda(encomenda) {
      this.bloco = "";
      this.id = encomenda.id;
      console.log(this.id);
      this.bloco = encomenda.bloco;
      try {
        if (this.id != "" && this.bloco == "Bloco A") {
          this.$store.dispatch("deleteA",this.id)
          this.$router.go();

        } else if (this.id != "" && this.bloco == "Bloco B") {
          this.$store.dispatch("deleteB",this.id)
          this.$router.go();

        } else {
          this.$store.dispatch("deleteC",this.id)
          this.$router.go();
        }
      } catch (e) {
        console.error(e);
      }
    },
    change() {
      console.log(this.id);
      try {
        if (this.bloco == "Bloco A") {
         let payload ={
            nome: this.morador,
            apartamento: this.apartamento,
            quantidade: this.quantidade,
            bloco: this.bloco,
            encomenda: [
              {
                data_recebida: this.data_recebida,
                codigo: this.codigo,
                receptor: this.receptor,
              },
            ],
            id: this.id
          }
          
          this.$store.dispatch("updateA",payload)
          this.$router.go()
    }else if (this.bloco == "Bloco B") {
         let payload ={
            nome: this.morador,
            apartamento: this.apartamento,
            quantidade: this.quantidade,
            bloco: this.bloco,
            encomenda: [
              {
                data_recebida: this.data_recebida,
                codigo: this.codigo,
                receptor: this.receptor,
              },
            ],
            id: this.id
          }
          
          this.$store.dispatch("updateB",payload)
          this.$router.go()
    } else{
      let payload ={
            nome: this.morador,
            apartamento: this.apartamento,
            quantidade: this.quantidade,
            bloco: this.bloco,
            encomenda: [
              {
                data_recebida: this.data_recebida,
                codigo: this.codigo,
                receptor: this.receptor,
              },
            ],
            id: this.id
          }
          
          this.$store.dispatch("updateC",payload)
          this.$router.go()
    
    }
      
    }catch (e) {
        console.error(e);
      }
  }
}
}

</script>

<style></style>
