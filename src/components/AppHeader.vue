<template>

  <div class="body">
    
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Condominio Eiras Garcia</a>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item" :class="{active: $route.name==='Dashboard'}">
            <a class="nav-link" :href="$router.resolve({name:'Dashboard'}).href" 
              >Dashboard</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown" :class="{active: $route.name==='blocoA'}">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >Blocos</a
            >
            <div class="dropdown-menu" aria-labelledby="dropdownId">
              <a class="dropdown-item" 
                ><router-link class="routerLink" to="/blocoA" 
                  >Bloco A</router-link
                ></a
              >
              <a class="dropdown-item"
                ><router-link class="routerLink" to="/blocoB"
                  >Bloco B</router-link
                ></a
              >
              <a class="dropdown-item"
                ><router-link class="routerLink" to="/blocoC"
                  >Bloco C</router-link
                ></a
              >
            </div>
          </li>
        </ul>
        <div class="d-flex justify-content-between">
          <div v-if="usuario" class="userInfo mr-3 text-info">Hello {{this.usuario}}</div>
          <div class="signIn">
            <a @click="signOut()" href="#">Sign out</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
  
</template>

<script>
export default {
  
  data() {
    return {
      usuario:""
    }
  },
  mounted() {
    try {
      
    
    let user = localStorage.getItem("user-info");
    let username = JSON.parse(user)
    this.usuario = username.nome
    }
    catch (error) {
      console.log(error)
    }
  },
  methods: {
    signOut(){
      localStorage.clear()
      this.$router.push({name:"Login"})
    }
  },
};
</script>

<style scoped>
.routerLink {
  text-decoration: none;
}

/* .nav-item.active {
  background-color: red;
  color: white;
} */
</style>
>
<router-link to="/dashboard">Dashboard</router-link>