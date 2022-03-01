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
          <li class="nav-item active">
            <a class="nav-link"
              ><router-link to="/dashboard">Dashboard</router-link></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
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
          <div class="userInfo mr-3 text-white">usuername</div>
          <div class="signIn">
            <router-link to="/login">Sign out</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.routerLink {
  text-decoration: none;
}
</style>
>
