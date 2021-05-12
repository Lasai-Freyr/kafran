<template>
    <div class="Good col-12 my-4">
        <div >     
            <div v-show="modd" class="col-10 mx-auto">
                <Modd/>
            </div>    
            <div class="post-box">
                <button class="btn-add" v-on:click="add = false , modd = true" v-if="isLoggedIn"> Modifier un bien </button>
                <h3> {{good.style}} {{good.squarreMeters}} m² ( {{good.city}} ) </h3>
                <p> {{good.price}} € </p>
                <img :src="`/images/${good.pic1}`" :alt="good.pic1"> 
                <img :src="`/images/${good.pic2}`" :alt="good.pic2">                
                <p> {{ good.description}} </p>
                <div id="map">
                    <GoogleMap />                    
                </div>
                <p v-if="isLoggedIn"> Publié le {{ good.dateAjout}}  </p>
            </div>                       
        </div >
    </div>
</template>

<style>
    .post-box {
        border: solid black 1px;
        width: 80%;
        margin: auto;
        border-radius: 20px;
        box-shadow: gray 4px 4px;
    }
    img {
        max-width: 90%;
    }

    #map {
            height: 400px;
            width: 700px;
            margin: 50px auto;
        }
    
</style>


<script>
import http from '../../http';
import Modd from '@/components/Form-Modify.vue';
import GoogleMap from '@/components/GoogleMap.vue';

    export default {
        name:"Good",
        components: {
        Modd,
        GoogleMap
        
    },
        data() {
            return {           
                good: {},
                modd: false,                
                error: null,
                user: null,
                savedLocations: [],
                formData: {
                    street: '',
                    city: '',
                    state: '',
                    zip: ''
                } 
                //userId: localStorage.getItem('user'),
            } 
        },
        beforeCreate() {
        //    const userId = localStorage.getItem('user');    
        //    console.log("userid post",userId);
        //    http.get(`/auth/${userId}`)
        //        .then(response => {
        //        this.user = response.data[0];
        //        console.log("user", this.user);
        //    });
    
        },
        
        created() {       
            const id = this.$route.params.id; 
            
            http.get(`/goods/${id}`)
            .then(response => {
                console.log("datapost",response.data);
                this.good = response.data[0];
            });        
            
        },    
        beforeMounted() {
            this.$router.go();
        },
        computed : {
            isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
        },
    }
    
</script>
