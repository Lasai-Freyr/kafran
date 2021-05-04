<template>
    <div class="Good col-12 my-4">
        <div >     
            <div v-show="modd" class="col-10 mx-auto">
                <Modd/>
            </div>    
            <div class="post-box">
                <button class="btn-add" v-on:click="add = false , modd = true"> Modifier un bien </button>
                <h3> {{good.style}} {{good.squarreMeters}} m² </h3>
                <p> {{good.city}} </p>
                <img :src="`/images/${good.pic1}`" :alt="good.pic1"> 
                <img :src="`/images/${good.pic2}`" :alt="good.pic2"> 
                <p> {{good.price}} € </p>
                <p> {{ good.description}} </p>
                <div id="map"></div>
                <p> Publié le {{ good.dateAjout}}  </p>
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

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBPM7TVzYeHJhddOHmQa_0wiCf7BDxqdVI&callback=initMap&libraries=&v=weekly"></script>
<script>
import http from '../../http';
import Modd from '@/components/Form-Modify.vue';

    export default {
        name:"Good",
        components: {
        Modd
    },

    data() {
        return {           
            good: {},
             modd: false,                
            error: null,
            user: null,
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
    computed: {
        initMap : function() {
            console.log("test");
            const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 8,
            center: { lat: 40.731, lng: -73.997 },
            });
            const geocoder = new google.maps.Geocoder();
            const infowindow = new google.maps.InfoWindow();
            document.getElementById("submit").addEventListener("click", () => {
                geocodeLatLng(geocoder, map, infowindow);
            });
        },

        geocodeLatLng : function(geocoder, map, infowindow) {
            const input = document.getElementById("latlng").value;
            const latlngStr = input.split(",", 2);
            const latlng = {
                lat: parseFloat(latlngStr[0]),
                lng: parseFloat(latlngStr[1]),
            };
            geocoder.geocode({ location: latlng }, (results, status) => {
            if (status === "OK") {
            if (results[0]) {
                map.setZoom(11);
                const marker = new google.maps.Marker({
                position: latlng,
                map: map,
                });
                infowindow.setContent(results[0].formatted_address);
                infowindow.open(map, marker);
            } else {
                window.alert("No results found");
            }
            } else {
            window.alert("Geocoder failed due to: " + status);
            }
            });
        }
    }
    }
</script>