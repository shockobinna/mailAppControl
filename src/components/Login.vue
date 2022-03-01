<template>
  <div class="login">
    <app-header />
    <div class="card mt-5 bg-dark">
      <div class="card-body">
        <h4 class="card-title text-center text-primary">
          Condominio Eiras Garcias
        </h4>
        <hr />
        <div class="form-group text-primary">
          <label for="nome">Nome</label>
          <input
            type="text"
            class="form-control"
            name=""
            id=""
            aria-describedby="helpId"
            placeholder=""
          />
        </div>
        <div class="form-group text-primary">
          <label for="nome">Senha</label>
          <input
            type="password"
            class="form-control"
            name=""
            id=""
            aria-describedby="helpId"
            placeholder=""
          />
        </div>

        <button type="button" class="btn btn-outline-primary">Login</button>
      </div>
      <div class="notMember text-center">
        <a href="registrar.html"
          >Não tem cadastro ainda? Clique para cadastrar</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
};
</script>

<style scoped>
.card {
  max-width: 40%;
  margin: auto;
}
</style>
