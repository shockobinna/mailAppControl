<template>
  


<div class="search-box">
  <input class="search-txt" type="text" placeholder="Número do apartamento" v-model="aparta"/>
  <router-link
              class="search-btn"
              :to="{ name: 'Encomenda', query: { apartamento: this.aparta, bloco : this.bloco } }"
              >
              <i class="fa fa-search"></i> 
  </router-link>
  <!-- <a class="search-btn" href="#">
    <i class="fa fa-search"></i>
  </a> -->
  </div>

  

</template>

<script>
export default {
  props:["bloco"],
  data() {
    return {
      aparta:""
    }
  },
  // methods: {
  //   pesquise(){
  //     this.$emit("pesquise",this.aparta)
  //   }
  // },

}
</script>

<style scoped>

.search-box{
    position: absolute;
    top: 15%;
    left: 40%;
    transform: translate(-50%,-50%);
    background: #e67e22;
    height: 40px;
    border-radius: 40px;
    /* padding: 3px; */

}
.search-box:hover >.search-txt{
    width: 240px;
    padding: 0 6px;
    top: 50px;
    flex-grow: 1
}
.search-box:hover > .search-btn{
   background: white;
     }
/* @media (max-width:480px) {
  .search-box:hover >.search-txt {
    width: 60%;
    margin-left:auto;
    margin-right:auto;
  }
} */
.search-btn{
    color: #e84118;
    float: right;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #2f3640;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
    text-decoration: none;
}
.search-txt{
 border: none;
 background: none;
 outline: none;
 float: left;
 padding: 0;
 color: white;
 font-size: 16px;
 transition: 0.4s;   
 line-height: 40px;
 width: 0px;
}
input[type=text] :focus{
  width: 60%;
}


</style>