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
                <div class="row tight-width-whitespace portfolio-row">
                    <article v-if="good.pic1" class="col-sm-6">
                       
                    </article>
                </div>
            <silent-box ref="silentbox" :gallery="images">
                <p class="tw-font-light tw-mb-3">
                    Items could be merged into groups that make galleries.
                </p>
                <template v-slot:silentbox-item="{ silentboxItem }">
                    <p>{{ silentboxItem  }}</p>
                    <img :src="`/images/${good.pic1}`" :alt="good.pic2">  
                </template>
            </silent-box>
                <img :src="`/images/${good.pic2}`" :alt="good.pic2">                
                <p> {{ description}}  description</p>
                <p> {{ good.description}} good.description</p>
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
        GoogleMap,
        
        
    },
        data() {
            return {           
                good: {},
               images: [
                    {
                        src: "",
                        srcSet: '',
                        description: '',
                    },
                   
                ],
                modd: false,                
                error: null,
                user: null,
                savedLocations: [],
                formData: {
                    street: '',
                    city: '',
                    state: '',
                    zip: '',
                },
                description: "",
                define:""
                   
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
                for (let i = 0 ; i < 9 ; i++) {
                    //if ( this.good.pic[i+1]) {
                        let name = "this.good.pic" + i;
                        console.log("name", name);
                        console.log("image", this.images);
                        this.images[i].src =  "/images/" + name  ;
                        //this.images[i].srcSet =  "/images/" + name + "640w" ;
                        this.item = this.images;
                        console.log("image", this.images);
                        console.log("items", this.item);
                        console.log("description", this.good.description);
                        console.log("description", JSON.stringify(this.good.description) );
                        //this.description = JSON.stringify(this.good.description)
                         console.log("description 2", this.description);
                         this.description = JSON.stringify(this.good.description) ;
                        this.good.description =  this.good.description.split("\n").join(  ` <br> ` );                       
                        console.log("description 32", this.good.description);
                       
                    //}
                }
            });        
            
        },    
        beforeMounted() {
            this.$router.go();
        },
        computed : {
            isLoggedIn : function(){ 
                return this.$store.getters.isLoggedIn
            }
        },

        methods: {
          
             // the index parameter is optional, however it should be set if you're opening
            // the overlay on different position than the beginning of the gallery
            openOverlayProgramaticallyWithoutContext (item) {
            this.$silentbox.open(item)
            }
           
        }
    }
    
</script>
