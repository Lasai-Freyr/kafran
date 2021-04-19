<template>
    <div>
        <div class="row col-10 mx-auto my-3 d-flex justify-content-center">
            <button class="btn-add" v-on:click="add = true , modd = false"> Ajouter un bien </button>
            <button class="btn-add" v-on:click="add = false , modd = true"> Modifier ou supprimer un bien </button>
        </div>
        <div v-show="add" class="col-10 mx-auto ">
            <Add/>
        </div>
        <div v-show="modd" class="col-10 mx-auto">
            <Modd/>
        </div>
    </div>  

</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue.js"></script>

<script>
import Add from '@/components/Form-Add.vue'
import Modd from '@/components/Form-Modify.vue'

export default {
        components: {
        Add,
        Modd
    },
    data() {
        return {
           
            add: false,
            modd: false,
            error: null
        
        } 
    },
     computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    }
}
</script>

<style>
    .btn-add{
        margin: 15px;
    }
</style>