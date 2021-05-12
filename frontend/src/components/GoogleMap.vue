<template>
  <div>
    <br>
    <GmapMap
      :center='center'
      :zoom='15'
      style='width:100%;  height: 400px;'
    >
    <GmapCircle
          :center="center"
          :radius="350"
          :visible="true"
           :options="{fillColor:'blue',fillOpacity:0.2, strokeOpacity: 0}">
        </GmapCircle>
    </GmapMap>
  </div>
</template>

<script>
//import Geocoder from "@pderas/vue2-geocoder";
import axios from "axios";
//import { db } from "../main.js";
import http from '../../http';

require('dotenv').config();

export default {
  name: 'GoogleMap',
  data() {
    return {
      center: { lat: 0, lng: 0 },
      good: {},
      markers: 
        { position: { lat: 1, lng: 1 } },
      
    }
  },
  
  created() {
    
      const id = this.$route.params.id; 
            console.log(this.$route.params.id);
            http.get(`/goods/${id}`)
            .then(response => {
                console.log("data2",response.data);
                this.good = response.data[0];
                console.log("data3",response.data);
                this.geolocate();
            });
  },
  mounted() {
    //this.geolocate();
    
  },
  methods: {
    geolocate: function() {
      console.log("data0 : ",this.good);             
       console.log("address1 : ",this.good.address);
       let address = `${this.good.address}, ${this.good.city}, ${this.good.postalCode}`;
       console.log("address : ", address);
      axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address},
        +Mountain+View,+CA&key=${process.env.VUE_APP_MAP_APIKEY}`,
        
      )
      .then(response => {
                console.log("datapost",response.data.results);
                this.data = response.data.results[0];
                console.log("data : ", this.data.geometry)
          this.markers.position.lat = this.data.geometry.location.lat;   
          this.center = {
            lat: this.data.geometry.location.lat,
            lng: this.data.geometry.location.lng,
          };
          
             
        
      })
    }
  }
}
</script>

