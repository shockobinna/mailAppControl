<template>
  <div class="blocoA">
    <app-header />
    <div class="alert alert-success text-center" v-if="isSuccess">
      <strong>Encomenda Cadastrado</strong>
    </div>
    <form >
      <div class="card mt-5 mb-5 bg-dark">
        <div class="card-body">
          <h4 class="card-title text-center text-primary">
            CADASTRAR ENCOMENDA: BLOCO C
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
            <label for="quantity">Quantidade</label>
            <input
              type="number"
              class="form-control"
              name=""
              id=""
              aria-describedby="helpId"
              placeholder="1"
              v-model.number="quant"
            />
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

            <router-link
              class="routerLink btn btn-primary"
              :to="{ name: 'Encomenda', query: { apartamento: this.aparta, bloco : this.bloco } }"
            >
              Pesquisar</router-link
            >
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import axios from "axios";
const baseURL = "http://localhost:3000/blocoC";
export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      morador: "",
      aparta: "",
      quant: 0,
      bloco:"Bloco C",
      encomenda: [{
        data_recebida:"",
        codigo:"",
        receptor:""
      }], 
      isSuccess: false,
      blocoA: [],
    };
    
  },
  methods: {
    async addEncomenda() {
      try {
        //const res =
        await axios
          .post(baseURL, {
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
          })
          .then(() => {
            this.isSuccess = true;
            setTimeout(() => {
              this.isSuccess = false;
            }, 1000);
          });

        this.morador = "";
        this.aparta = "";
        this.quant = "";
        this.encomenda.data_recebida ="";
        this.encomenda.codigo = "";
        this.encomenda.receptor ="";

      } catch (e) {
        console.error(e);
      }
    },

    methods: {
      // concatFunction() {
      //   var b = "a";
      //   this.aparta = this.aparta.concat(b);
      //   console.log(this.aparta);
      // },
    },
  },
  mounted() {
    try {
      axios.get(baseURL).then((response) => {
        console.log(response.data);
        this.blocoC = response.data;
      });
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style scoped>
.card {
  max-width: 40%;
  margin: auto;
}
.routerLink {
  text-decoration: none;
}
</style>