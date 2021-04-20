<template>
  <div class="about">
      <ul v-if="goods && goods.length" class="ul-goods">
        <li v-for="good of goods" v-bind:key="good.id" class="li-goods">
          <router-link :to="{name: 'Good', params:good, id:good.id}">
            <h3 class="p-title">{{good.style}} {{good.squarreMeters}} m²</h3>
            <p> 
              {{ good.city }} </p>
              <div v-if="good.pic1">
                <img :src="`/images/${good.pic1}`" :alt="good.pic1">
              </div>
              <div>
                <p> {{good.price}} € </p>
              </div>
            <p> publié le {{ good.dateAjout}}  </p>
          </router-link>
        </li>
      </ul>
  </div>
</template>

<script>
import http from '../../http';
//import VueAxios from 'vue-axios';

export default {
  data() {
    return {
      goods: [],
      errors: []
    } 
  },  
  mounted(){   
    http.get(`/goods`)
    .then(response => {
        this.goods = response.data;
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
   
</script>

<style lang="scss">
  .likes {
    color: green;
    margin-right: 5px;
   }
   .dislikes {
     color:  #ce0000;
     margin-left: 15px;
     margin-right: 5px;
   }
  .ul-goods {
    width: 60%;
    display: flex;
    align-items: center;
    flex-direction: column;
    list-style: none;
    margin: auto;

    .li-goods {
      border: solid black 1px;
      width: 100%;
      margin: 10px;
      border-radius: 20px;
      box-shadow: gray 4px 4px;
      a {
        text-decoration: none;
        color: black;
      }
    }
  }
  img {
    width: 400px;
  }
  
  .p-title {
    font-weight: bold;
    font-size: 20px;
  }
</style>