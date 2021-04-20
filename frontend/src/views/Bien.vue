<template>
    <div class="Good col-12 my-4">
        <div >
            <h1> ché pas </h1>           
            <div class="post-box">
                 <div class="box-button">
                    <button  class="button-red" @click="DeleteGood(good.id)" title="supprimer le bien">X</button>
                </div>
                <h3> {{good.style}} {{good.squarreMeters}} m² </h3>
                <p> {{good.city}} </p>
                <img :src="`/images/${good.pic1}`" :alt="good.pic1"> 
                <p> {{good.price}} € </p>
                <p> {{ good.description}} </p>
                <p> Publié le {{ good.dateAjout}}  </p>
            </div>                       
        </div >
    </div>
</template>

<script>
import http from '../../http';

    export default {
        name:"Good",

    data() {
        return {           
            good: {},
                
            error: null,
            user: null,
            //userId: localStorage.getItem('user'),
        } 
    },
    //beforeCreate() {
    //    const userId = localStorage.getItem('user');    
    //    console.log("userid post",userId);
    //    http.get(`/auth/${userId}`)
    //        .then(response => {
    //        this.user = response.data[0];
    //        console.log("user", this.user);
    //    });
    //},
    created() {       
        const id = this.$route.params.id; 
           
        http.get(`/goods/${id}`)
        .then(response => {
            console.log("datapost",response.data);
            this.good = response.data[0];       
        })
    },    
    beforeMounted() {
        this.$router.go();
    },

    methods: {
        DeleteGood(id) {
            http.delete(`/goods/${id}`)
            .then(() => {
                this.$router.push( {name:"Liste"});
            })
        } 
    }    
}
</script>

<style>
    .post-box {
        border: solid black 1px;
        width: 80%;
        margin: auto;
        border-radius: 20px;
        box-shadow: gray 4px 4px;
    }
    .button-red {
        background-color: #ff0000;
        align-self: flex-end;
    }
    .box-button {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    img {
        max-width: 90%;
    }
    
</style>