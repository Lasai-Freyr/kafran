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
           
                <SilentBox/>

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

    .row > .column {
  padding: 0 8px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Create four equal columns that floats next to eachother */
.column {
  float: left;
  width: 25%;
}

/* The Modal (background) */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: black;
}

/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  width: 90%;
  max-width: 1200px;
}

/* The Close Button */
.close {
  color: white;
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #999;
  text-decoration: none;
  cursor: pointer;
}

/* Hide the slides by default */
.mySlides {
  display: none;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* Caption text */
.caption-container {
  text-align: center;
  background-color: black;
  padding: 2px 16px;
  color: white;
}

img.demo {
  opacity: 0.6;
}

.active,
.demo:hover {
  opacity: 1;
}

img.hover-shadow {
  transition: 0.3s;
}

.hover-shadow:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
    
</style>


<script>

//import LightBox from '@/components/LightBoxPerso.vue'
import SilentBox from '@/components/Silentbox.vue'

import http from '../../http';
import Modd from '@/components/Form-Modify.vue';
import GoogleMap from '@/components/GoogleMap.vue';


    export default {
       
        name:"Good",
        components: {
        Modd,
        GoogleMap,
        SilentBox
        
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
                    zip: '',
                },
                items: [
                    {
                        title: '',
                        description: '',
                        src: '',
                    },
                    {
                        title: '',
                        description: '',
                        src: '',
                    },
                    {
                        title: '',
                        description: '',
                        src: '',
                    },
                    {
                        title: '',
                        description: '',
                        src: '',
                    },
                    {
                        title: '',
                        description: '',
                        src: '',
                    },
                    {
                        title: '',
                        description: '',
                        src: '',
                    },
                    {
                        title: '',
                        description: '',
                        src: '',
                    },
                    {
                        title: '',
                        description: '',
                        src: '',
                    },
                    {
                        title: '',
                        description: '',
                        src: '',
                    },
                    {
                        title: '',
                        description: '',
                        src: '',
                    }
                ],
                index: null,
                description: "",
                define:"",
                   
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
            //    let images = [ this.good.pic1 , this.good.pic2, this.good.pic3,
            //     this.good.pic4, this.good.pic5, this.good.pic6, this.good.pic7,
            //      this.good.pic8, this.good.pic8, this.good.pic9, this.good.pic10]
            //
            //    for (let i = 0 ; i < 9 ; i++) {
            //        if ( images[i] != undefined ) {
            //            
            //            this.items[i].src =  "/images/" + images[i];
            //            console.log("items", this.items);
            //        }
            //    }
                console.log("description", this.good.description);
                console.log("description", JSON.stringify(this.good.description) );
                //this.description = JSON.stringify(this.good.description)
                console.log("description 2", this.description);
                this.description = JSON.stringify(this.good.description) ;
                this.good.description =  this.good.description.split("\n").join(  ` <br> ` );                       
                console.log("description 32", this.good.description);
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
            },
       
        }
    }
    
</script>
