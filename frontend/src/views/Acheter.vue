<template>
  <div class="about">
    <!--  <div>
        <FormSearch/>
      </div>  !-->
      <div>
        <ul v-if="goods && goods.length" class="ul-goods">
          <li v-for="good of goods" v-bind:key="good.id" class="li-goods">
            <router-link :to="{name: 'Good', params:good, id:good.id}">
              <h3 class="p-title">{{good.style}} {{good.squarreMeters}} m²</h3>
              <p class="text-center"> {{ good.city }} </p>
                <div v-if="good.pic1" class="d-flex justify-content-center">
                  <img :src="`/images/${good.pic1}`" :alt="good.pic1" >
                </div>
                <div>
                  <p class="text-center"> {{good.price}} € </p>
                </div>
            </router-link>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import http from '../../http';
//import FormSearch from '@/components/Form-Search.vue';
//import VueAxios from 'vue-axios';

export default {
  components: {
      //  FormSearch,
    },
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
    text-align: center;
  }
</style>