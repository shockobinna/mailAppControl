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
            placeholder="Nome"
            v-model="nome"
          />
        </div>
        <div class="form-group text-primary">
          <label for="senha">Senha</label>
          <input
            type="password"
            class="form-control"
            name=""
            id=""
            aria-describedby="helpId"
            placeholder="Senha"
            v-model="senha"
          />
        </div>
        <div class="form-group text-primary">
          <label for="email">Email</label>
          <input type="email" 
          class="form-control" 
          name="" 
          id="" 
          aria-describedby="emailHelpId"
          placeholder="Email"
          v-model="email"
          />
          
        </div>

        <button type="button" class="btn btn-outline-primary" @click="signUp()">Criar</button>
      </div>
      <div class="aMember text-center">
          <router-link to="/login">Já tem cadastro? Clique aqui para fazer seu login</router-link>
        
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import axios from 'axios'
export default {
  components: {
    AppHeader,
  },
  data() {
      return {
          nome:"",
          senha:"",
          email:""
      }
  },
  methods: {
      async signUp(){
          let res = await axios.post(" http://localhost:3001/users",{
              nome:this.nome,
              senha:this.senha,
              email:this.email

          });
          console.warn(res);
          if(res.status == 201){
              localStorage.setItem("user-info", JSON.stringify(res.data))
              this.$router.push({name:'Dashboard'})
          }
      }
  },
  mounted() {
      let user = localStorage.getItem("user-info")
      if(user){
          this.$router.push({name:'Dashboard'})
      }
  },

  
};
</script>

<style scoped>
.card {
  max-width: 40%;
  margin: auto;
}
</style>
