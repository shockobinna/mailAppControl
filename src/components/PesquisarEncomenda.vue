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
      <h1><i class="fa fa-cart-plus" aria-hidden="true"></i></h1>

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
                />
                <label for="recipient-name" class="col-form-label"
                  >Quantidade de Encomenda</label
                >
              </div>
              <div class="form-group">
                <i class="fa fa-gift" aria-hidden="true"></i>
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
                <i class="fa fa-gift" aria-hidden="true"></i>
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
                <i class="fa fa-gift" aria-hidden="true"></i>
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
              @click.prevent="update()"
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
import axios from "axios";
// const baseAURL = "http://localhost:3000/blocoA";
// const baseBURL = "http://localhost:3000/blocoB";
// const baseCURL = "http://localhost:3000/blocoC";

export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      apartamen: "",
      bloco: "",
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
  created() {
    this.apartamen = this.$route.query.apartamento;
    this.bloco = this.$route.query.bloco;
    console.log(this.$route.query.apartamento);
    //  console.log(this.ncomenda)

    try {
      if (this.apartamen != "" && this.bloco == "Bloco A") {
        axios
          .get(
            `http://localhost:3000/blocoA?apartamento=${this.apartamen}&&bloco=${this.bloco}`
          )
          .then((response) => {
            //console.log(response.data);
            this.EncomendaMorador = response.data;
          });
      } else if (this.apartamen != "" && this.bloco == "Bloco B") {
        axios
          .get(
            `http://localhost:3000/blocoB?apartamento=${this.apartamen}&&bloco=${this.bloco}`
          )
          .then((response) => {
            //console.log(response.data);
            this.EncomendaMorador = response.data;
          });
      } else {
        axios
          .get(
            `http://localhost:3000/blocoC?apartamento=${this.apartamen}&&bloco=${this.bloco}`
          )
          .then((response) => {
            //console.log(response.data);
            this.EncomendaMorador = response.data;
          });
      }
    } catch (e) {
      console.error(e);
    }

    (this.apartamen = ""), (this.bloco = "");
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
          axios.delete(`http://localhost:3000/blocoA/${this.id}`);
          this.$router.go();
        } else if (this.id != "" && this.bloco == "Bloco B") {
          axios.delete(`http://localhost:3000/blocoB/${this.id}`);
          this.$router.go();
        } else {
          axios.delete(`http://localhost:3000/blocoC/${this.id}`);
          this.$router.go();
        }
      } catch (e) {
        console.error(e);
      }
    },
    update() {
      console.log(this.id);
      try {
        if (this.bloco == "Bloco A") {
          axios.put(`http://localhost:3000/blocoA/${this.id}`, {
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
          });
          axios
            .get(
              `http://localhost:3000/blocoA?apartamento=${this.apartamento}&&bloco=${this.bloco}`
            )
            .then((response) => {
              console.log(response.data);
              this.EncomendaMorador = response.data;
            });
        } else if (this.bloco == "Bloco B") {
          axios.put(`http://localhost:3000/blocoB/${this.id}`, {
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
          });
          axios
            .get(
              `http://localhost:3000/blocoB?apartamento=${this.apartamento}&&bloco=${this.bloco}`
            )
            .then((response) => {
              console.log(response.data);
              this.EncomendaMorador = response.data;
            });
        } else {
          axios.put(`http://localhost:3000/blocoC/${this.id}`, {
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
          });
          axios
            .get(
              `http://localhost:3000/blocoC?apartamento=${this.apartamento}&&bloco=${this.bloco}`
            )
            .then((response) => {
              console.log(response.data);
              this.EncomendaMorador = response.data;
            });
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style></style>
