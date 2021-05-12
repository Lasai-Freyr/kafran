<template>
    <div>
        <div class="row col-10 mx-auto my-3 d-flex justify-content-center">
            <button class="btn-add" v-on:click="add = true , modd = false"> Ajouter un bien </button>
            
        </div>
        <div v-show="add" class="col-10 mx-auto ">
            <Add/>
        </div>
        
        <div>
           <ul v-if="goods && goods.length" class="ul-goods">
                <li v-for="good of goods" v-bind:key="good.id" class="li-goods">
                    <router-link :to="{name: 'Good', params:good, id:good.id}">
                        <div class="box-button">
                         <button  class="button-red" @click="DeleteGood(good.id)" title="supprimer le post">Supprimer</button>
                        </div>
                        <h3 class="p-title">{{good.style}} {{good.squarreMeters}} m²</h3>
                        <p class="text-center"> {{ good.city }} </p>
                        <div v-if="good.pic1" class="d-flex justify-content-center">
                            <img :src="`/images/${good.pic1}`" :alt="good.pic1" >
                        </div>
                        <div>
                            <p class="text-center"> {{good.price}} € </p>
                        </div>
                        <p> publié le {{ good.dateAjout}}  </p>
                    </router-link>
                </li>
      </ul>
        </div>
    </div>  

</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue.js"></script>

<script>
import Add from '@/components/Form-Add.vue'
import Modd from '@/components/Form-Modify.vue'
import http from '../../http';

export default {
        components: {
        Add
    },
    data() {
        return {
           goods: [],
            errors: [],
            add: false,
            error: null
        
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
  },
     computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
        DeleteGood(id) {
            http.delete(`/goods/${id}`)
            this.$router.go();
        } 
    }
}
</script>

<style>
    .btn-add{
        margin: 15px;
    }

    .box-button {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    .button-red {
        background-color: #ff0000;
        align-self: flex-end;
        border-radius: 10px;
        margin-right: 5px;
        margin-top: 5px;
    }
</style>