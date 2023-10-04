<template>
  


<div class="search-box">
  <input class="search-txt" type="text" placeholder="ex: 100A" v-model="aparta"/>
  <router-link
              class="search-btn"
              :to="{ name: 'Encomenda', query: { apartamento: this.getApa, bloco :`bloco${this.getBlock}` } }"
              >
              <i class="fa fa-search"></i> 
  </router-link>
  
  </div>

  

</template>

<script>
export default {
  data() {
    return {
      aparta:""
    }
  },
  computed:{
    getApa(){
      return this.aparta.slice(0,-1)
    },
    getBlock(){
      return this.aparta.slice(-1).toUpperCase()
    }
  }
  

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